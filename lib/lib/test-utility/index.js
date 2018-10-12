'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildDom = buildDom;
exports.sel = sel;
exports.noop = noop;

var _jsdom = require('jsdom');

function buildDom(domString) {
  return new _jsdom.JSDOM('<!DOCTYPE html><body>' + domString + '></body>');
}

function sel(selectorString) {
  return '[data-test-id="' + selectorString + '"]';
}

function noop() {}