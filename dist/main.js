#!/usr/bin/env node
(()=>{"use strict";var r={504:(r,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Command=void 0,e.Command=class{argv;constructor(r){this.argv=r}async run(){console.log("this is the future home of oidc-to CLI")}}},758:(r,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorWithReturnCode=e.RETURN_CODE_NOT_LOGGED_IN=void 0,e.RETURN_CODE_NOT_LOGGED_IN=10;class o extends Error{returnCode;constructor(r,e){super(e),this.returnCode=r}}e.ErrorWithReturnCode=o}},e={};function o(t){var s=e[t];if(void 0!==s)return s.exports;var n=e[t]={exports:{}};return r[t](n,n.exports,o),n.exports}(()=>{const r=o(758),e=o(504);(async()=>{const o=new e.Command(process.argv);try{await o.run(),process.exit(0)}catch(e){e instanceof r.ErrorWithReturnCode&&process.exit(e.returnCode),process.exit(-1)}})()})()})();
//# sourceMappingURL=main.js.map