/*! For license information please see ovenplayer.provider.Html5-0.9.5971.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{72:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=function(e){return e&&e.__esModule?e:{default:e}}(r(314)),l=(r(304),r(1));n.default=function(e,n,r){var t={name:l.PROVIDER_HTML5,element:e,mse:null,listener:null,canSeek:!1,isLive:!1,seeking:!1,state:l.STATE_IDLE,buffer:0,framerate:0,currentQuality:-1,currentSource:-1,qualityLevels:[],sources:[],adTagUrl:r},o=(0,u.default)(t,n,null),s=o.super("destroy");return OvenPlayerConsole.log("HTML5 PROVIDER LOADED."),o.destroy=function(){OvenPlayerConsole.log("HTML5 : PROVIDER DESTROYED."),s()},o}}}]);