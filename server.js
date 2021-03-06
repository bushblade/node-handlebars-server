'use strict'
const app = require('./app.js')
const greenLock = require('greenlock-express')

greenLock
  .create({
    // Let's Encrypt v2 is ACME draft 11
    version: 'draft-11',

    // Note: If at first you don't succeed, switch to staging to debug
    // https://acme-staging-v02.api.letsencrypt.org/directory
    server: 'https://acme-v02.api.letsencrypt.org/directory',

    // Where the certs will be saved, MUST have write access
    configDir: '~/.config/acme/',

    // You MUST change this to a valid email address
    email: 'bushblade@gmail.com',

    // You MUST change these to valid domains
    // NOTE: all domains will validated and listed on the certificate
    approveDomains: ['bushbladeprojects.co.uk', 'www.bushbladeprojects.co.uk'],

    // You MUST NOT build clients that accept the ToS without asking the user
    agreeTos: true,

    app: app,

    // Join the community to get notified of important updates
    communityMember: true,

    // Contribute telemetry data to the project
    telemetry: true

    // debug: true
  })
  .listen(80, 443)
