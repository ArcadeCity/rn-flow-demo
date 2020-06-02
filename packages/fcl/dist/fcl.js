var e,t=(e=require("queue-microtask"))&&"object"==typeof e&&"default"in e?e.default:e,n=require("@onflow/sdk"),r=require("@onflow/types");const o=function(){function e(){}return e.prototype.then=function(t,n){const r=new e,o=this.s;if(o){const e=1&o?t:n;if(e){try{i(r,1,e(this.v))}catch(e){i(r,2,e)}return r}return this}return this.o=function(e){try{const o=e.v;1&e.s?i(r,1,t?t(o):o):n?i(r,1,n(o)):i(r,2,o)}catch(e){i(r,2,e)}},r},e}();function i(e,t,n){if(!e.s){if(n instanceof o){if(!n.s)return void(n.o=i.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(i.bind(null,e,t),i.bind(null,e,2));e.s=t,e.v=n;const r=e.o;r&&r(e)}}function u(e){return e instanceof o&&1&e.s}function c(e,t,n){for(var r;;){var c=e();if(u(c)&&(c=c.v),!c)return s;if(c.then){r=0;break}var s=n();if(s&&s.then){if(!u(s)){r=1;break}s=s.s}if(t){var a=t();if(a&&a.then&&!u(a)){r=2;break}}}var l=new o,f=i.bind(null,l,2);return(0===r?c.then(m):1===r?s.then(d):a.then(h)).then(void 0,f),l;function d(r){s=r;do{if(t&&(a=t())&&a.then&&!u(a))return void a.then(h).then(void 0,f);if(!(c=e())||u(c)&&!c.v)return void i(l,1,s);if(c.then)return void c.then(m).then(void 0,f);u(s=n())&&(s=s.v)}while(!s||!s.then);s.then(d).then(void 0,f)}function m(e){e?(s=n())&&s.then?s.then(d).then(void 0,f):d(s):i(l,1,s)}function h(){(c=e())?c.then?c.then(m).then(void 0,f):m(c):i(l,1,s)}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var l="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||"object"==typeof window&&window.window===window&&window;l.FCL_REGISTRY=null==l.FCL_REGISTRY?{}:l.FCL_REGISTRY;var f,d=0,m=function(e,t,n,r){return void 0===r&&(r={}),new Promise(function(o,i){var u=r.expectReply||!1,c=null!=r.timeout?r.timeout:5e3;u&&c&&setTimeout(function(){return i(new Error("Timeout: "+c+"ms passed without a response."))},c);var s={to:e,from:r.from,tag:t,data:n,timeout:c,reply:o,reject:i};try{l.FCL_REGISTRY[e].mailbox.deliver(s),u||o(!0)}catch(e){console.error("FCL.Actor -- Could Not Deliver Message",s,e)}})},h=function(e,n){if(void 0===n&&(n=null),null==n&&(n=++d),null!=l.FCL_REGISTRY[n])return n;var r,o;l.FCL_REGISTRY[n]={addr:n,mailbox:(o=[],{deliver:function(e){try{return o.push(e),r&&(r(o.shift()),r=void 0),Promise.resolve()}catch(e){return Promise.reject(e)}},receive:function(){return new Promise(function(e){var t=o.shift();if(t)return e(t);r=e})}}),subs:new Set,kvs:{}};var i,u={self:function(){return n},receive:function(){return l.FCL_REGISTRY[n].mailbox.receive()},send:function(e,t,r,o){return void 0===o&&(o={}),o.from=n,m(e,t,r,o)},broadcast:function(e,t,r){void 0===r&&(r={}),r.from=n;for(var o,i=function(e){var t=0;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(e){if("string"==typeof e)return a(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,void 0):void 0}}(e)))return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}(l.FCL_REGISTRY[n].subs);!(o=i()).done;)m(o.value,e,t,r)},subscribe:function(e){return null!=e&&l.FCL_REGISTRY[n].subs.add(e)},unsubscribe:function(e){return null!=e&&l.FCL_REGISTRY[n].subs.delete(e)},put:function(e,t){null!=e&&(l.FCL_REGISTRY[n].kvs[e]=t)},get:function(e,t){var r=l.FCL_REGISTRY[n].kvs[e];return null==r?t:r},delete:function(e){delete l.FCL_REGISTRY[n].kvs[e]},update:function(e,t){null!=e&&(l.FCL_REGISTRY[n].kvs[e]=t(l.FCL_REGISTRY[n].kvs[e]))},keys:function(){return Object.keys(l.FCL_REGISTRY[n].kvs)},all:function(){return l.FCL_REGISTRY[n].kvs},where:function(e){return Object.keys(l.FCL_REGISTRY[n].kvs).reduce(function(t,r){var o;return e.test(r)?s({},t,((o={})[r]=l.FCL_REGISTRY[n].kvs[r],o)):t},{})},merge:function(e){void 0===e&&(e={}),Object.keys(e).forEach(function(t){return l.FCL_REGISTRY[n].kvs[t]=e[t]})}};return"object"==typeof e&&(void 0===(i=e)&&(i={}),e=function(e){try{var t=function(){var t=c(function(){return 1},void 0,function(){return Promise.resolve(e.receive()).then(function(t){var n=function(n,r){try{var o=function(n,r){try{var o=function(){function n(){return Promise.resolve(i[t.tag](e,t,t.data||{})).then(function(){})}var r=function(){if("EXIT"===t.tag){var n=function(){if("function"==typeof i.TERMINATE)return Promise.resolve(i.TERMINATE(e,t,t.data||{})).then(function(){})}();if(n&&n.then)return n.then(function(){})}}();return r&&r.then?r.then(n):n()}()}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(n){console.error(e.self()+" Error",t,n)})}catch(e){return}return o&&o.then?o.then(r.bind(null,!1),r.bind(null,!0)):void 0}(0,function(e,t){});if(n&&n.then)return n.then(function(){})})});return t&&t.then?t.then(function(){}):void 0},n=function(){if("function"==typeof i.INIT)return Promise.resolve(i.INIT(e)).then(function(){})}();return Promise.resolve(n&&n.then?n.then(t):t())}catch(e){return Promise.reject(e)}}),t(function(){try{return Promise.resolve(e(u)).then(function(){!function(e){delete l.FCL_REGISTRY[e]}(n)})}catch(e){return Promise.reject(e)}}),n},v="config",p="PUT_CONFIG",y="GET_CONFIG",b="CONFIG/UPDATED",P=function(e){return e},g=((f={})[p]=function(e,t,n){var r=n.key,o=n.value;if(null==r)throw new Error("Missing 'key' for config/put.");e.put(r,o),e.broadcast(b,e.all())},f[y]=function(e,t,n){var r=n.key,o=n.fallback;if(null==r)throw new Error("Missing 'key' for config/get");t.reply(e.get(r,o))},f.UPDATE_CONFIG=function(e,t,n){var r=n.key,o=n.fn;if(null==r)throw new Error("Missing 'key' for config/update");e.update(r,o||P),e.broadcast(b,e.all())},f.DELETE_CONFIG=function(e,t,n){var r=n.key;if(null==r)throw new Error("Missing 'key' for config/delete");e.delete(r),e.broadcast(b,e.all())},f.WHERE_CONFIG=function(e,t,n){var r=n.pattern;if(null==r)throw new Error("Missing 'pattern' for config/where");t.reply(e.where(r))},f.SUBSCRIBE=function(e,t){e.subscribe(t.from),e.send(t.from,b,e.all())},f.UNSUBSCRIBE=function(e,t){e.unsubscribe(t.from)},f);function E(e,t){return m(v,p,{key:e,value:t}),w()}function S(e,t){return m(v,y,{key:e,fallback:t},{expectReply:!0,timeout:10})}function R(e,t){return void 0===t&&(t=P),m(v,"UPDATE_CONFIG",{key:e,fn:t}),w()}function I(e){return m(v,"DELETE_CONFIG",{key:e}),w()}function T(e){return m(v,"WHERE_CONFIG",{pattern:e},{expectReply:!0,timeout:10})}function j(e){var t=h(function(t){try{var n=!1;return t.send(v,"SUBSCRIBE"),Promise.resolve(c(function(){return!n&&1},void 0,function(){return Promise.resolve(t.receive()).then(function(r){if("@EXIT"===r.tag)return t.send(v,"UNSUBSCRIBE"),void(n=!0);e(r.data)})}))}catch(e){return Promise.reject(e)}});return function(){return m(t,"@EXIT")}}function w(){return{put:E,get:S,update:R,delete:I,where:T,subscribe:j}}h(g,v),w().put("accessNode.api","http://localhost:8080").put("challenge.handshake","http://localhost:8700/authenticate");var C,O=function(e,t){void 0===e&&(e=[]),void 0===t&&(t={});try{var r=function(r){return t.node=r,Array.isArray(e)&&(e=n.build(e)),Promise.resolve(n.resolve(e,[n.resolveParams,n.resolveAccounts,n.resolveSignatures])).then(function(e){return n.send(e,t)})},o=t.node;return Promise.resolve(o?r(o):Promise.resolve(w().get("accessNode.api")).then(r))}catch(e){return Promise.reject(e)}},x=function(e){try{return Promise.resolve(w().where(/^decoder\./)).then(function(t){var r=Object.fromEntries(Object.entries(t).map(function(e){var t=e[0],n=e[1];return[t="/"+t.replace(/^decoder\./,"")+"$/",n]}));return n.decodeResponse(e,r)})}catch(e){return Promise.reject(e)}},k=function(e){try{return Promise.resolve(O([n.getTransactionStatus(e)])).then(x)}catch(e){return Promise.reject(e)}},L=function(e){return 4===e.status},N=((C={}).INIT=function(e){try{return Promise.resolve(k(e.self())).then(function(t){L(t)||setTimeout(function(){return m(e.self(),"POLL")},1e3),e.merge(t)})}catch(e){return Promise.reject(e)}},C.SUBSCRIBE=function(e,t){e.subscribe(t.from),e.send(t.from,"TRANSACTION/UPDATED",e.all())},C.UNSUBSCRIBE=function(e,t){e.unsubscribe(t.from)},C.SNAPSHOT=function(e,t){try{return t.replay(e.all()),Promise.resolve()}catch(e){return Promise.reject(e)}},C.POLL=function(e){try{return Promise.resolve(k(e.self())).then(function(t){L(t)||setTimeout(function(){return m(e.self(),"POLL")},1e3),e.merge(t),e.broadcast("TRANSACTION/UPDATED",e.all())})}catch(e){return Promise.reject(e)}},C),U=function(e){if("object"==typeof e&&(e=e.transactionId),null==e)throw new Error("transactionId required");return h(N,e)};function _(e){function t(t){var n=U(e),r=h(function(e){try{var r=!1;return e.send(n,"SUBSCRIBE"),Promise.resolve(c(function(){return!r&&1},void 0,function(){return Promise.resolve(e.receive()).then(function(o){if("@EXIT"===o.tag)return e.send(n,"UNSUBSCRIBE"),void(r=!0);t(o.data)})}))}catch(e){return Promise.reject(e)}});return function(){return m(r,"@EXIT")}}return{snapshot:function(){var t=U(e);return m(t,"SNAPSHOT",null,{expectReply:!0,timeout:10})},subscribe:t,onceSealed:function(){return new Promise(function(e){var n=t(function(t){L(t)&&(e(t),n())})})}}}_.isSealed=L;var A,F="FCL_IFRAME_CHALLENGE",G="FCL_IFRAME_AUTHZ",B=function(e){void 0===e&&(e={});var t=e.addr,n=e.pid;return null==t||null==n?null:t+"/"+n},Y={"HTTP/POST":"POST","HTTP/GET":"GET"},D=function(e,t){try{for(var n=new URL(e.endpoint),r=0,o=Object.entries(e.params||{});r<o.length;r++){var i=o[r];n.searchParams.append(i[0],i[1])}return t=t?JSON.stringify(t):void 0,Promise.resolve(fetch(n,{method:Y[e.method],headers:{"Content-Type":"application/json"},body:t}).then(function(e){return e.json()}))}catch(e){return Promise.reject(e)}},H=function(){try{return Z(),Promise.resolve(te()).then(function(e){var t=e.addr;if(null==t)throw new Error("No Flow Address for Current User");return Promise.resolve(O([n.getAccount(t)])).then(function(e){return e.account})})}catch(e){return Promise.reject(e)}},M=function(e){try{return Z(),Promise.resolve(z()).then(function(){return Promise.resolve(te()).then(function(t){function n(){return s({},e,{addr:t.addr,keyId:t.keyId,sequenceNum:r,signature:e.signature||null,signingFunction:function(e){try{return Promise.resolve(te()).then(function(t){return Promise.resolve(H()).then(function(n){return Promise.resolve(D(t.authorizations[0],e)).then(function(e){var t=function(){};return e.local&&e.local.length>0&&(console.log("RENDER LOCAL"),t=function(e){if(!document.getElementById(G)){for(var t=new URL(e.endpoint),n=0,r=Object.entries(e.params||{});n<r.length;n++){var o=r[n];t.searchParams.append(o[0],o[1])}var i=document.createElement("iframe");return i.src=t.href,i.id=G,i.style.height=e.height||"500px",i.style.maxHeight="90vh",i.style.width=e.width||"400px",i.style.maxWidth="90vw",i.style.display="block",i.style.background=e.background||"#fff",i.style.position="fixed",i.style.top="5vh",i.style.right="calc(50vw)",i.style.transform="translateX(50%)",i.style.boxShadow="0 4px 8px -4px black",i.frameBorder="0",document.body.append(i),function(){document.getElementById(G)&&document.getElementById(G).remove()}}}(e.local[0])),Promise.resolve(function e(t){return new Promise(function(n,r){try{return Promise.resolve(D(t)).then(function(t){"APPROVED"===t.status?n(t.compositeSignature):"DECLINED"===t.status?r({status:t.status,reason:t.reason}):setTimeout(function(){n(e(t.authorizationUpdates))},500)})}catch(e){return Promise.reject(e)}})}(e.authorizationUpdates)).then(function(e){return t(),e})})})})}catch(e){return Promise.reject(e)}},resolve:null,roles:e.roles})}var r,o=function(){if(e.role.proposer)return Promise.resolve(H()).then(function(e){var n=e.keys.find(function(e){return e.index===t.keyId});r=n.sequenceNumber})}();return o&&o.then?o.then(n):n()})})}catch(e){return Promise.reject(e)}},z=function(){try{return console.log("Test"),Promise.resolve(new Promise(function(e){try{return Z(),Promise.resolve(te()).then(function(t){return t.loggedIn?e(t):Promise.resolve(w().get("challenge.handshake")).then(function(t){return Promise.resolve(w().get("challenge.scope")).then(function(n){var r=function(e){var t=e.handshake,n=e.scope,r=e.nonce,o=e.l6n;if(!document.getElementById(F)){var i=new URL(t);i.searchParams.append("l6n",o),i.searchParams.append("nonce",r),n&&i.searchParams.append("scope",n.split(" ").join("+"));var u=document.createElement("iframe");return u.src=i.href,u.id=F,u.style.height="500px",u.style.maxHeight="90vh",u.style.width="400px",u.style.maxWidth="90vw",u.style.display="block",u.style.background="#fff",u.style.position="fixed",u.style.top="5vh",u.style.right="calc(50vw)",u.style.transform="translateX(50%)",u.style.boxShadow="0 4px 8px -4px black",u.frameBorder="0",document.body.append(u),function(){document.getElementById(F)&&document.getElementById(F).remove()}}}({handshake:t,scope:n,nonce:"asdf",l6n:window.location.origin});window.addEventListener("message",function(t){var n=t.data;try{if(n.type!==J)return Promise.resolve();r();var o=new URL(n.hks);return o.searchParams.append("code",n.code),Promise.resolve(fetch(o,{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()})).then(function(t){return m(X,W,s({},t,{cid:B(t.provider),loggedIn:!0,verified:!0})),Promise.resolve(te()).then(function(t){e(t)})})}catch(e){return Promise.reject(e)}})})})})}catch(e){return Promise.reject(e)}}))}catch(e){return Promise.reject(e)}},X="CURRENT_USER",q="CURRENT_USER/UPDATED",W="SET_CURRENT_USER",J="FCL::CHALLENGE::RESPONSE",$='{\n  "cid":null,\n  "loggedIn":null,\n  "verified":null,\n  "identity":{\n    "name":null,\n    "addr":null,\n    "avatar":null,\n    "cover":null,\n    "color":null,\n    "bio":null\n  },\n  "scoped":{},\n  "provider":{\n    "addr":null,\n    "pid":null,\n    "name":null,\n    "icon":null\n  },\n  "authorizations":[]\n}',V=((A={}).INIT=function(e){e.merge(JSON.parse($))},A.SUBSCRIBE=function(e,t){e.subscribe(t.from),e.send(t.from,q,e.all())},A.UNSUBSCRIBE=function(e,t){e.unsubscribe(t.from)},A.SNAPSHOT=function(e,t){try{return t.reply(e.all()),Promise.resolve()}catch(e){return Promise.reject(e)}},A[W]=function(e,t,n){try{return e.merge(n),e.broadcast(q,e.all()),Promise.resolve()}catch(e){return Promise.reject(e)}},A.DEL_CURRENT_USER=function(e,t){try{return e.merge(JSON.parse($)),e.broadcast(q,e.all()),Promise.resolve()}catch(e){return Promise.reject(e)}},A.GET_AS_PARAM=function(e,t,n){var o=n.key;try{return t.reply({key:o,value:e.get("addr",null),xform:r.Identity}),Promise.resolve()}catch(e){return Promise.reject(e)}},A),Z=function(){return h(V,X)};function K(){Z(),m(X,"DEL_CURRENT_USER")}function Q(e){return function(){try{return Z(),Promise.resolve(z()).then(function(){return m(X,"GET_AS_PARAM",{key:e},{expectReply:!0,timeout:10})})}catch(e){return Promise.reject(e)}}}function ee(e){Z();var t=h(function(t){try{var n=!1;return t.send(X,"SUBSCRIBE"),Promise.resolve(c(function(){return!n&&1},void 0,function(){return Promise.resolve(t.receive()).then(function(r){if("@EXIT"===r.tag)return t.send(X,"UNSUBSCRIBE"),void(n=!0);e(r.data)})}))}catch(e){return Promise.reject(e)}});return function(){return m(t,"@EXIT")}}function te(){return Z(),m(X,"SNAPSHOT",null,{expectReply:!0,timeout:0})}var ne=function(){return{authenticate:z,unauthenticate:K,authorization:M,param:Q,subscribe:ee,snapshot:te}};Object.defineProperty(exports,"authorization",{enumerable:!0,get:function(){return n.authorization}}),Object.defineProperty(exports,"authorizations",{enumerable:!0,get:function(){return n.authorizations}}),Object.defineProperty(exports,"cadence",{enumerable:!0,get:function(){return n.cadence}}),Object.defineProperty(exports,"cdc",{enumerable:!0,get:function(){return n.cdc}}),Object.defineProperty(exports,"getAccount",{enumerable:!0,get:function(){return n.getAccount}}),Object.defineProperty(exports,"getEvents",{enumerable:!0,get:function(){return n.getEvents}}),Object.defineProperty(exports,"getLatestBlock",{enumerable:!0,get:function(){return n.getLatestBlock}}),Object.defineProperty(exports,"getTransactionStatus",{enumerable:!0,get:function(){return n.getTransactionStatus}}),Object.defineProperty(exports,"isBad",{enumerable:!0,get:function(){return n.isBad}}),Object.defineProperty(exports,"isOk",{enumerable:!0,get:function(){return n.isOk}}),Object.defineProperty(exports,"limit",{enumerable:!0,get:function(){return n.limit}}),Object.defineProperty(exports,"param",{enumerable:!0,get:function(){return n.param}}),Object.defineProperty(exports,"params",{enumerable:!0,get:function(){return n.params}}),Object.defineProperty(exports,"payer",{enumerable:!0,get:function(){return n.payer}}),Object.defineProperty(exports,"ping",{enumerable:!0,get:function(){return n.ping}}),Object.defineProperty(exports,"proposer",{enumerable:!0,get:function(){return n.proposer}}),Object.defineProperty(exports,"ref",{enumerable:!0,get:function(){return n.ref}}),Object.defineProperty(exports,"script",{enumerable:!0,get:function(){return n.script}}),Object.defineProperty(exports,"transaction",{enumerable:!0,get:function(){return n.transaction}}),Object.defineProperty(exports,"why",{enumerable:!0,get:function(){return n.why}}),exports.authenticate=function(){return ne().authenticate()},exports.config=w,exports.currentUser=ne,exports.decode=x,exports.send=O,exports.tx=_,exports.unauthenticate=function(){return ne().unauthenticate()};
//# sourceMappingURL=fcl.js.map
