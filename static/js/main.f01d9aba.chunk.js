(this["webpackJsonptest-9"]=this["webpackJsonptest-9"]||[]).push([[0],{10:function(n,e,t){n.exports=t.p+"static/media/icon-fail.0768d87d.svg"},11:function(n,e,t){n.exports=t.p+"static/media/icon-success.1d2f229e.svg"},17:function(n,e,t){n.exports=t(25)},22:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var _=t(0),r=t.n(_),a=t(9),l=t.n(a),u=(t(22),t(1)),c=t(2),i=t(16);function o(n){return Object(i.a)(n).reverse().reduce((function(n,e,t){return n+(t+1)*e}),0)%11===0}var s=t(15),m=function(n){var e=Object(_.useState)(n),t=Object(s.a)(e,2),r=t[0],a=t[1];return{value:r,setValue:a,reset:function(){return a("")},bind:{value:r,onChange:function(n){a(n.target.value)}}}};function f(n){var e,t=n.replace(/\n/g,"");return(e=81,function(n){return n.match(new RegExp(".{1,"+e+"}","g"))})(t)}var b=function(n){return n.split("").reduce((function(n,e,t){var _=parseInt((t/3).toString())%9;return n[_]=(n[_]||"")+e,n}),[])},d=new Map;d.set(" _ | ||_|",0),d.set("     |  |",1),d.set(" _  _||_ ",2),d.set(" _  _| _|",3),d.set("   |_|  |",4),d.set(" _ |_  _|",5),d.set(" _ |_|_|",6),d.set(" _   |  |",7),d.set(" _ |_||_|",8),d.set(" _ |_| _|",9);var v,g=(v=d,function(n){var e=v.get(n);return void 0!==e?e:"?"}),p=t(10),h=t.n(p),E=t(11),x=t.n(E);function w(){var n=Object(u.a)(['\n  margin: 0 0 2rem;\n  font-size: 3rem;\n  color: var(--satin-sheen-gold);\n  font-family: "Lobster", cursive;\n  position: relative;\n\n  &:after {\n    content: "";\n    width: 100%;\n    height: 4px;\n    background-color: var(--hookers-green);\n    bottom: 0;\n    position: absolute;\n    left: 0;\n    transform: rotate(-2deg);\n  }\n']);return w=function(){return n},n}var j=c.a.h2(w());function k(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n"]);return k=function(){return n},n}var y=c.a.section(k());function O(){var n=Object(u.a)(["\n  border: 2px solid var(--hookers-green);\n  padding: 10px;\n  border-radius: 20px;\n  margin-bottom: 2rem;\n"]);return O=function(){return n},n}var I=c.a.input(O());function C(){var n=Object(u.a)(['\n  margin: 0 0 2rem;\n  font-size: 2rem;\n  font-family: "Lobster", cursive;\n']);return C=function(){return n},n}var L=c.a.h3(C());function S(){var n=Object(u.a)(["\n  width: 30px;\n  height: 30px; \n"]);return S=function(){return n},n}var A=c.a.img(S()),N=function(){var n=m("457508000"),e=n.bind,t=n.value,a=Object(_.useCallback)((function(n){return o(n.split("").map(Number))}),[]);return r.a.createElement(y,null,r.a.createElement(j,null,"CheckSum"),r.a.createElement("p",null,"I started from the easy thing (I hope I got it right).",r.a.createElement("br",null),"I created a function to calculate the checksum.",r.a.createElement("br",null),"The function accept an array of numbers and response true/false"),r.a.createElement(I,e),r.a.createElement(L,null,"Is valid:"),a(t)?r.a.createElement(A,{src:x.a}):r.a.createElement(A,{src:h.a}))};function T(){var n=Object(u.a)(["\n  border: 2px solid var(--hookers-green);\n  padding: 10px;\n  border-radius: 20px;\n  margin-bottom: 2rem;\n  width: 400px;\n"]);return T=function(){return n},n}var z=c.a.textarea(T());function R(){var n=Object(u.a)(["\n  background-color: var(--hookers-green);\n  padding: 10px;\n  color: var(--misty-moss);\n  border-radius: 20px;\n  display: ",";\n  margin: 0 0 1rem;\n  & + & {\n    margin-left: ",";\n  }\n"]);return R=function(){return n},n}var W=c.a.pre(R(),(function(n){return n.inline?"inline-flex":"flex"}),(function(n){return n.inline?"1rem":"0"})),B=function(){var n,e=m("\n    _  _     _  _  _  _  _ \n  | _| _||_||_ |_   ||_||_|\n  ||_  _|  | _||_|  ||_| _|\n\n _  _  _  _  _  _  _  _  _ \n _| _| _| _| _| _| _| _| _|\n|_ |_ |_ |_ |_ |_ |_ |_ |_ ".substring(1)),t=e.bind,a=e.value,l=Object(_.useCallback)((function(n){return f(n)}),[]);return r.a.createElement(y,null,r.a.createElement(j,null,"Account list splitter"),r.a.createElement("p",null,"I need a function to (given a list of account numbers)",r.a.createElement("br",null),"return an array of string containing the single account number.",r.a.createElement("br",null),r.a.createElement("br",null),"The function get a multiline text,",r.a.createElement("br",null),"remove the new lines",r.a.createElement("br",null),"and split the account numbers based on string length"),r.a.createElement(z,Object.assign({rows:10,style:{width:220}},t),a),r.a.createElement(L,null,"Accounts:"),null===(n=l(a))||void 0===n?void 0:n.map((function(n){return r.a.createElement(W,{key:n},n)})))},G=function(){var n=m("    _  _     _  _  _  _  _   | _| _||_||_ |_   ||_||_|  ||_  _|  | _||_|  ||_| _|"),e=n.bind,t=n.value,a=Object(_.useCallback)((function(n){return b(n)}),[]);return r.a.createElement(y,null,r.a.createElement(j,null,"Account String"),r.a.createElement("p",null,"Given a string rappresenting an account number",r.a.createElement("br",null),"We now need to extract the characters that compose each account number. The function return an array of number rappresented by strings"),r.a.createElement(I,Object.assign({},e,{style:{width:400}})),r.a.createElement(L,null,"Numbers:"),r.a.createElement("div",null,a(t).map((function(n,e){return r.a.createElement(W,{inline:!0},n)}))))};function J(){var n=Object(u.a)(["\n  line-height: 37px;\n  width: 35px;\n  height: 35px;\n  background-color: var(--vegas-gold);\n  font-size: 0.7rem;\n  color: white;\n  margin: -7px;\n  border-radius: 50%;\n  display: inline-block;\n  margin-left: 1rem;\n  font-weight: bold;\n"]);return J=function(){return n},n}var M=c.a.div(J()),F=function(){var n,e=m("\n    _  _  _  _  _  _  _  _ \n|_||_   ||_ | ||_|| || || |\n  | _|  | _||_||_||_||_||_|\n\n _  _  _  _  _  _  _  _  _ \n| || || || || || || || || |\n|_||_||_||_||_||_||_||_||_|\n\n                           \n  |  |  |  |  |  |  |  |  |\n  |  |  |  |  |  |  |  |  |\n\n _  _  _  _  _  _  _  _  _ \n _| _| _| _| _| _| _| _| _|\n|_ |_ |_ |_ |_ |_ |_ |_ |_ \n\n _  _  _  _  _  _  _  _  _ \n _| _| _| _| _| _| _| _| _|\n _| _| _| _| _| _| _| _| _|\n                        \n|_||_||_||_||_||_||_||_||_|\n  |  |  |  |  |  |  |  |  |\n\n _  _  _  _  _  _  _  _  _ \n|_ |_ |_ |_ |_ |_ |_ |_ |_ \n _| _| _| _| _| _| _| _| _|\n\n _  _  _  _  _  _  _  _  _ \n|_ |_ |_ |_ |_ |_ |_ |_ |_ \n|_||_||_||_||_||_||_||_||_|\n\n _  _  _  _  _  _  _  _  _ \n  |  |  |  |  |  |  |  |  |\n  |  |  |  |  |  |  |  |  |\n\n _  _  _  _  _  _  _  _  _ \n|_||_||_||_||_||_||_||_||_|\n|_||_||_||_||_||_||_||_||_|\n\n _  _  _  _  _  _  _  _  _ \n|_||_||_||_||_||_||_||_||_|\n _| _| _| _| _| _| _| _| _|\n\n    _  _     _  _  _  _  _ \n  | _| _||_||_ |_   ||_||_|\n  ||_  _|  | _||_|  ||_| _|\n\n _  _  _  _  _  _  _  _    \n| || || || || || || ||_   |\n|_||_||_||_||_||_||_| _|  |\n\n _  _  _  _  _  _  _  _    \n|_||_|| || ||_   |  |  | _ \n  | _||_||_||_|  |  |  | _|\n\n    _  _     _  _  _  _  _ \n  | _| _||_| _ |_   ||_||_|\n  ||_  _|  | _||_|  ||_| _ ".substring(1)),t=e.bind,a=e.value,l=Object(_.useCallback)((function(n){return f(n).map(b).map((function(n){var e=n.map(g),t=e.join("");return e.includes("?")?{number:t,status:"ILL"}:o(e)?{number:t,status:"ERR"}:{number:t}}))}),[]);return r.a.createElement(y,null,r.a.createElement(j,null,"Solution"),r.a.createElement(z,Object.assign({rows:10,style:{width:220}},t),a),r.a.createElement(L,null,"Accounts:"),r.a.createElement("div",null,null===(n=l(a))||void 0===n?void 0:n.map((function(n){var e=n.number,t=n.status;return r.a.createElement(W,{inline:!0,key:e},e,t&&r.a.createElement(M,null,t))}))))},V=function(){var n=m(" _ |_| _|"),e=n.bind,t=n.value,a=Object(_.useCallback)((function(n){return g(n)}),[]);return r.a.createElement(y,null,r.a.createElement(j,null,"Number Traslator"),r.a.createElement("p",null,"Given a number rappresented by a string,",r.a.createElement("br",null),"I now trasnform it in a proper number using a map."),r.a.createElement(I,Object.assign({},e,{maxLength:9,minLength:9})),r.a.createElement(L,null,"Number:"),r.a.createElement(W,null,a(t)))};var $=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement(B,null),r.a.createElement(G,null),r.a.createElement(V,null),r.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.f01d9aba.chunk.js.map