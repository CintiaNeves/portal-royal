(function(t){function e(e){for(var a,s,i=e[0],u=e[1],c=e[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,i=1;i<r.length;i++){var u=r[i];0!==o[u]&&(a=!1)}a&&(n.splice(e--,1),t=s(s.s=r[0]))}return t}var a={},o={app:0},n=[];function s(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=a,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(r,a,function(e){return t[e]}.bind(null,a));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("85ec"),o=r.n(a);o.a},1:function(t,e){},"15f8":function(t,e,r){},"199c":function(t,e){},"23be":function(t,e,r){"use strict";var a=r("199c"),o=r.n(a);e["default"]=o.a},"2b05":function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return o}));var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},o=[]},"2cfd":function(t,e,r){},3227:function(t,e,r){"use strict";var a=r("15f8"),o=r.n(a);o.a},"3dfd":function(t,e,r){"use strict";var a=r("2b05"),o=r("23be"),n=(r("034f"),r("2877")),s=Object(n["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports},4936:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e623"),r("e379"),r("5dc8"),r("37e1"),r("becf"),r("cabf"),r("3c76");var a=r("2b0e"),o=r("3dfd"),n=r("28dd"),s=r("f309");a["a"].use(s["a"]);var i=new s["a"]({}),u=r("8c4f"),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{on:{submit:function(e){return e.preventDefault(),t.authenticar()}}},[r("div",{staticClass:"container"},[r("div",{staticClass:"box"},[t.retorno.erro?r("v-alert",{attrs:{dense:"",outlined:"",type:"error",color:"red"}},[r("span",[t._v(t._s(t.retorno.msg))])]):t._e(),r("p",{staticClass:"h4 text-center mb-3"},[t._v("Login")]),r("label",{staticClass:"grey-text",attrs:{for:"email"}},[t._v("Email")]),r("input",{staticClass:"form-control",attrs:{type:"email",id:"email"},domProps:{value:t.usuario.email},on:{input:function(e){t.usuario.email=e.target.value}}}),r("label",{staticClass:"grey-text",attrs:{for:"senha"}},[t._v("Senha")]),r("input",{staticClass:"form-control",attrs:{type:"password",id:"senha"},domProps:{value:t.usuario.senha},on:{input:function(e){t.usuario.senha=e.target.value}}}),r("router-link",{attrs:{to:"forgot"}},[r("span",[t._v("Esqueceu a senha?")])]),r("div",{staticClass:"text-center mt-4"},[r("button",{staticClass:"btn btn-unique",attrs:{type:"button"},on:{click:function(e){return t.authenticar()}}},[t._v("Entrar")])]),r("router-link",{attrs:{to:"register"}},[r("span",[t._v("Criar conta")])])],1)])])},l=[],d=r("d4ec"),p=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";Object(d["a"])(this,t),this.cpf=e,this.email=r,this.senha=a,this.confSenha=o},f={data:function(){return{usuario:new p,retorno:{erro:!1,msg:""}}},methods:{authenticar:function(){var t=this;return""===this.usuario.email&&""===this.usuario.senha?(this.retorno.erro=!0,void(this.retorno.msg="credentials is empty")):""===this.usuario.email?(this.retorno.erro=!0,void(this.retorno.msg="email is empty")):""===this.usuario.senha?(this.retorno.erro=!0,void(this.retorno.msg="senha is empty")):void this.$http.post("auth/authenticate/",this.usuario).then((function(e){var r="Bearer ".concat(e.body.token);localStorage.setItem("token",r),t.$router.push({name:"comissao"})})).catch((function(e){t.retorno.erro=!0,t.retorno.msg=e.body.error,t.usuario.senha=""}))}}},m=f,h=(r("a51d"),r("2877")),v=r("6544"),g=r.n(v),b=r("0798"),y=Object(h["a"])(m,c,l,!1,null,"1354d067",null),_=y.exports;g()(y,{VAlert:b["a"]});var C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{attrs:{color:"grey lighten-4",flat:"",tile:""}},[r("v-toolbar",{attrs:{dense:""}},[r("v-app-bar-nav-icon"),r("v-toolbar-title",{attrs:{id:"ola"}},[t._v("Olá, "),r("span",{staticClass:"name"},[t._v(t._s(t.usuario.nome)+" ")])]),r("v-spacer"),r("v-btn",{attrs:{icon:""},on:{click:function(e){return t.logout()}}},[r("v-icon",[t._v("mdi-logout-variant")]),r("label",[t._v("Sair")])],1)],1)],1),r("div",{staticClass:"container"},[r("div",{attrs:{id:"alert"}},[t.retorno.erro?r("v-alert",{attrs:{dense:"",outlined:"",type:"error",color:"red"}},[r("span",[t._v(t._s(t.retorno.msg))])]):t._e()],1),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.desserts,"items-per-page":10}})],1)],1)},x=[],w=(r("96cf"),r("1da1")),S={data:function(){return{headers:[{text:"Data da Venda",align:"start",sortable:!1,value:"data"},{text:"Número da Nota",value:"nota"},{text:"Tipo da comissão",value:"tipo"},{text:"Porcentagem",value:"porcentagem"},{text:"Valor",value:"valor"},{text:"Status",value:"status"}],desserts:[],usuario:{},retorno:{erro:!0,msg:""}}},methods:{logout:function(){localStorage.removeItem("token"),this.$router.push({name:"login"})}},created:function(){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$http.get("commission",{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){for(var r=e.body,a=0;a<r.length;a++)t.desserts.push({data:r[a].DATA,nota:r[a].NUNOTA,tipo:r[a].TIPO,porcentagem:r[a].PERCCOM,valor:r[a].VALOR,status:r[a].STATUS});t.retorno.erro=!1,t.usuario.nome=r[0].NOME})).catch((function(e){document.getElementById("ola").style.display="none",t.retorno.erro=!0,t.retorno.msg=e.body.error}));case 1:case"end":return e.stop()}}),e)})))()}},k=S,O=(r("3227"),r("5bc1")),P=r("8336"),E=r("b0af"),T=r("8fea"),j=r("132d"),$=r("2fa4"),V=r("71d9"),I=r("2a7f"),A=Object(h["a"])(k,C,x,!1,null,"476c2a27",null),B=A.exports;g()(A,{VAlert:b["a"],VAppBarNavIcon:O["a"],VBtn:P["a"],VCard:E["a"],VDataTable:T["a"],VIcon:j["a"],VSpacer:$["a"],VToolbar:V["a"],VToolbarTitle:I["a"]});var N=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{on:{submit:function(e){return e.preventDefault(),t.cadastrar()}}},[r("div",{staticClass:"container"},[r("div",{staticClass:"box"},[t.retorno.erro?r("v-alert",{attrs:{dense:"",outlined:"",type:"error",color:"red"}},[r("span",[t._v(t._s(t.retorno.msg))])]):t._e(),r("p",{staticClass:"h4 text-center mb-3"},[t._v("Cadastre-se")]),r("label",{staticClass:"grey-text",attrs:{for:"cpf"}},[t._v("CPF")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.usuario.cpf,expression:"usuario.cpf"}],staticClass:"form-control",attrs:{type:"text",id:"cpf"},domProps:{value:t.usuario.cpf},on:{input:function(e){e.target.composing||t.$set(t.usuario,"cpf",e.target.value)}}}),r("label",{staticClass:"grey-text",attrs:{for:"email"}},[t._v("Email")]),r("input",{staticClass:"form-control",attrs:{type:"email",id:"email"},domProps:{value:t.usuario.email},on:{input:function(e){t.usuario.email=e.target.value}}}),r("label",{staticClass:"grey-text",attrs:{for:"senha"}},[t._v("Senha")]),r("input",{staticClass:"form-control",attrs:{type:"password",id:"senha"},domProps:{value:t.usuario.senha},on:{input:function(e){t.usuario.senha=e.target.value}}}),r("label",{staticClass:"grey-text",attrs:{for:"confSenha"}},[t._v("Confirmação de senha")]),r("input",{staticClass:"form-control",attrs:{type:"password",id:"confSenha"},domProps:{value:t.usuario.confSenha},on:{input:function(e){t.usuario.confSenha=e.target.value}}}),t._m(0),r("router-link",{attrs:{to:"/"}},[r("span",[t._v("Login")])])],1)])])},D=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center mt-4"},[r("button",{staticClass:"btn btn-unique",attrs:{type:"submit"}},[t._v("Cadastrar")])])}],M={data:function(){return{usuario:new p,retorno:{erro:!1,msg:""}}},methods:{cadastrar:function(){var t=this;return""===this.usuario.cpf?(this.retorno.erro=!0,void(this.retorno.msg="cpf is empty")):""===this.usuario.email?(this.retorno.erro=!0,void(this.retorno.msg="email is empty")):""===this.usuario.senha?(this.retorno.erro=!0,void(this.retorno.msg="senha is empty")):""===this.usuario.confSenha?(this.retorno.erro=!0,void(this.retorno.msg="conf senha is empty")):void this.$http.post("auth/register/",this.usuario).then((function(e){var r="Bearer ".concat(e.body.token);localStorage.setItem("token",r),t.$router.push({name:"comissao"})})).catch((function(e){t.retorno.erro=!0,t.retorno.msg=e.body.error}))}}},R=M,q=(r("a05a"),Object(h["a"])(R,N,D,!1,null,"42b28e36",null)),L=q.exports;g()(q,{VAlert:b["a"]});var F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{on:{submit:function(e){return e.preventDefault(),t.getToken()}}},[r("div",{staticClass:"container"},[r("div",{staticClass:"box"},[t.retorno.erro?r("v-alert",{attrs:{dense:"",outlined:"",type:"error",color:"red"}},[r("span",[t._v(t._s(t.retorno.msg))])]):t._e(),r("p",{staticClass:"h4 text-center mb-3"},[t._v("Recuperação de senha")]),r("p",{staticClass:"h6 text-center mb-3"},[t._v("Digite o endereço cadastrado e enviaremos um token para validação.")]),r("label",{staticClass:"grey-text",attrs:{for:"email"}},[t._v("Email")]),r("input",{staticClass:"form-control",attrs:{type:"email",id:"email"},domProps:{value:t.usuario.email},on:{input:function(e){t.usuario.email=e.target.value}}}),r("div",{staticClass:"text-center mt-4",attrs:{id:"btn-token"}},[r("button",{staticClass:"btn btn-unique",attrs:{type:"button"},on:{click:function(e){return t.getToken()}}},[t._v("Receber token")])]),r("div",{staticStyle:{display:"none"},attrs:{id:"reset"}},[r("label",{staticClass:"grey-text",attrs:{for:"senha"}},[t._v("Token")]),r("input",{staticClass:"form-control",attrs:{type:"password",id:"senha"},domProps:{value:t.usuario.token},on:{input:function(e){t.usuario.token=e.target.value}}}),r("label",{staticClass:"grey-text",attrs:{for:"senha"}},[t._v("Nova Senha")]),r("input",{staticClass:"form-control",attrs:{type:"password",id:"senha"},domProps:{value:t.usuario.senha},on:{input:function(e){t.usuario.senha=e.target.value}}}),r("label",{staticClass:"grey-text",attrs:{for:"confSenha"}},[t._v("Confirmação de senha")]),r("input",{staticClass:"form-control",attrs:{type:"password",id:"confSenha"},domProps:{value:t.usuario.confSenha},on:{input:function(e){t.usuario.confSenha=e.target.value}}}),r("button",{staticClass:"btn btn-unique",attrs:{type:"button",id:"btn-reset"},on:{click:function(e){return t.resetPassword()}}},[t._v("Alterar Senha")])]),r("router-link",{attrs:{to:"/"}},[r("v-alert",{staticStyle:{display:"none"},attrs:{id:"success",dense:"",text:"",type:"success"}},[t._v(" Senha alterada com sucesso. Faça login novamente. ")])],1)],1)])])},J=[],U={data:function(){return{usuario:new p,retorno:{erro:!1,msg:""}}},methods:{getToken:function(){var t=this;if(""===this.usuario.email)return this.retorno.erro=!0,void(this.retorno.msg="Email is empty");this.$http.post("auth/forgot_password",this.usuario).then((function(t){console.log(t),document.getElementById("btn-token").style.display="none",document.getElementById("reset").style.display="",document.getElementById("email").readOnly=!0})).catch((function(e){t.retorno.erro=!0,t.retorno.msg=e.body.error}))},resetPassword:function(){var t=this;this.$http.post("auth/reset_password",this.usuario).then((function(t){console.log(t),document.getElementById("reset").style.display="none",document.getElementById("success").style.display="",document.getElementById("btn-reset").style.display="none"})).catch((function(e){t.retorno.erro=!0,t.retorno.msg=e.body.error}))}}},z=U,G=(r("5c2a"),Object(h["a"])(z,F,J,!1,null,"3bed1304",null)),H=G.exports;g()(G,{VAlert:b["a"]});var K=[{path:"/",name:"login",component:_},{path:"/comissao",name:"comissao",component:B},{path:"/register",name:"register",component:L},{path:"/forgot",name:"forgot",component:H}];a["a"].use(i),a["a"].use(n["a"]),a["a"].http.options.root="https://portal-royal-api.herokuapp.com/",a["a"].use(u["a"]);var Q=new u["a"]({routes:K,mode:"history"});a["a"].config.productionTip=!1,new a["a"]({vuetify:i,router:Q,render:function(t){return t(o["default"])}}).$mount("#app")},"5c2a":function(t,e,r){"use strict";var a=r("2cfd"),o=r.n(a);o.a},"85ec":function(t,e,r){},a05a:function(t,e,r){"use strict";var a=r("a90e"),o=r.n(a);o.a},a51d:function(t,e,r){"use strict";var a=r("4936"),o=r.n(a);o.a},a90e:function(t,e,r){}});
//# sourceMappingURL=app.c877a498.js.map