## My server written with handlebars

I'm trying to work out the pros and cons of template languages versus native es6 template literals. 

This repo is a copy of [my first node server](https://github.com/bushblade/Simple-vanilla-JS-Node-server)

This server is so far a static replacement for my apache server, to run it node needs permission to run on port 80. Do not run as root instead use:-
```
sudo setcap cap_net_bind_service=+ep /bin/node
```

The app is running with [pm2](http://pm2.keymetrics.io/)

Start the server
```
pm2 start app.js
```
Set pm2 to restart the app after a reboot
```
pm2 startup
```
