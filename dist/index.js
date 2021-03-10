/*!
 * name: @jswork/node-http-schema
 * description: Http schema for nodejs.
 * homepage: https://github.com/afeiship/node-http-schema
 * version: 1.0.0
 * date: 2021-03-10T09:38:58.812Z
 * license: MIT
 */

"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _httpRestConfig=_interopRequireDefault(require("@jswork/http-rest-config")),_nodeFetch=_interopRequireDefault(require("node-fetch"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}require("@jswork/next"),require("@jswork/next-fetch");var _default=function(e){var t={},r=nx.Fetch.getInstance({fetch:_nodeFetch.default,responseType:"json"});return(0,_httpRestConfig.default)(t,r,e),t};exports.default=_default;