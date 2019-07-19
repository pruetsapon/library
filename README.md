# Library
Library is a example DMZ and API. Use to create / read / update / delete their api.

### Prerequisites
- node js

### Installation
-

### Deploy
-

### Dump && Restore
Dump data
```bash
$ mongodump -db databasename
```
or
```bash
$ mongodump --collection myCollection --db test
```

Restore data
```bash
$ mongorestore --verbose \path\dump
```
or
```bash
$ mongorestore --db databasename --verbose \path\dump\<dumpfolder>
```

### Setup Auto Startup
```bash
$ npm install pm2 -g
$ npm install pm2-windows-startup -g
$ pm2-startup install
$ pm2 start ecosystem.config.js
$ pm2 save
```

### Testing & Test Coverage
```bash
$ npm test
```