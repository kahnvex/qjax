var jsdom = require('jsdom');

GLOBAL.window = jsdom.jsdom().createWindow();
GLOBAL.document = window.document;
