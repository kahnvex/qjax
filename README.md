# qjax

[![Build Status](https://travis-ci.org/kahnjw/qjax.png)](https://travis-ci.org/kahnjw/qjax)

A simple Q wrapper for making ajax requests

## Usage

Use it like you would use `$.ajax`, only as a Q/A+ Promise:

```javascript
var printIt = function(data) {
  console.log(data);
};
var qjax = require('qjax');
var options = {
  url: 'http://google.com',
  type: 'GET'
};

qjax(options).then(printIt);
```
## Development

Install it:

```
npm install
```

Test it:

```
mocha
```

Lint it:
```
jshint index.js
jshint test/*
```
