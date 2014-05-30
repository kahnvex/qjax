# qjax

[![Build Status](https://travis-ci.org/kahnjw/qjax.png)](https://travis-ci.org/kahnjw/qjax)

A simple Q wrapper for making ajax requests

## Usage

Use it like you would use `$.ajax`, only as a Q/A+ Promise:

```javascript
var qjax = require('qjax');
var options = {
  url: 'http://google.com',
  type: 'GET'
};
var printIt = function(data) {
  console.log(data);
};

qjax.http(options).then(printIt);
```

There is also an http method factory that can be used like this:

```javascript
var qjax = require('qjax');
var httpGet = qjax.methodFactory('GET');
var printIt = function(data) {
  console.log(data);
};

httpGet({url: 'http://google.com'}).then(printIt);
```

By default qjax uses `jQuery.ajax`, but you can configure it to use [Request](https://github.com/mikeal/request) - Simplified HTTP Client:

```javascript
var qjax = require('qjax');
var request = require('request');
var qRequest = qjax.requestAdapter(request);

qjax.setHttp(qRequest);

qjax.http(...);
```

## Development

Install it:

```
npm install qjax
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
