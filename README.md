## My server written with handlebars

To run the server node needs permission to run on port 80. Do not run as root instead use:-

```
sudo setcap cap_net_bind_service=+ep /bin/node
```

The app is running with [pm2](http://pm2.keymetrics.io/)

HTTPS is provided through using [greenlock-express](https://www.npmjs.com/package/greenlock-express)

Start the server

```
pm2 start server.js
```

Set pm2 to restart the app after a reboot

```
pm2 startup
```
