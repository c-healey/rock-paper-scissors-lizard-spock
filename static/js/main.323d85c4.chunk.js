(this.webpackJsonprps=this.webpackJsonprps||[]).push([[0],[,,,,,,,,,function(e,s,c){},,function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},,function(e,s,c){},function(e,s,c){"use strict";c.r(s);var t=c(1),a=c.n(t),n=c(4),r=c.n(n),i=(c(9),c(2)),o="House",l="Player",j="DRAW",u="spock",d="lizard",b="scissors",m="paper",O="rock",g={lizard:[u,m],spock:[b,O],scissors:[m,d],paper:[O,u],rock:[d,b]},h=c(0),p=[0,function(){}],x=a.a.createContext(p),f=function(e){var s=Object(t.useState)(0),c=Object(i.a)(s,2),a=c[0],n=c[1],r=Object(t.useState)(""),o=Object(i.a)(r,2),l=o[0],j=o[1],u=Object(t.useState)(""),d=Object(i.a)(u,2),b=d[0],m=d[1],O=Object(t.useState)(""),g=Object(i.a)(O,2),p=g[0],f=g[1],k=Object(t.useState)(1),v=Object(i.a)(k,2),N=v[0],C=v[1],S=Object(t.useState)(!1),w=Object(i.a)(S,2),y=w[0],P=w[1];return Object(h.jsx)(x.Provider,{value:{score:a,setScore:n,player:l,setPlayer:j,house:b,setHouse:m,winner:p,setWinner:f,gameState:N,setGameState:C,showRules:y,setShowRules:P},children:e.children})},k=(c(11),function(){var e=Object(t.useContext)(x).score;return Object(h.jsxs)("header",{className:"score-board  ",children:[Object(h.jsx)("img",{src:"./images/logo-bonus.svg",alt:"rock paper scissors logo"}),Object(h.jsxs)("div",{className:"score-card",children:[Object(h.jsx)("div",{className:"score-card-title",children:"score"}),Object(h.jsx)("div",{className:"score-card-score",children:e})]})]})}),v=(c(12),function(e){var s=e.pick,c=Object(t.useContext)(x),a=c.setPlayer,n=c.setGameState;return Object(h.jsx)("div",{"data-game-piece":s,className:"game-pick ".concat(s," ").concat(s,"-position"),onClick:function(e){return function(e){a(e.target.closest("div").dataset.gamePiece),n(2)}(e)},children:Object(h.jsx)("img",{className:" ",src:"./images/icon-".concat(s,".svg"),alt:" ".concat(s)})})}),N=function(e){var s=e.pick,c=e.addClass;return Object(h.jsx)("div",{className:"game-piece ".concat(s," ").concat(c),children:Object(h.jsx)("img",{className:" ",src:"./images/icon-".concat(s,".svg"),alt:" ".concat(s)})})},C=(c(13),function(){var e=Object(t.useContext)(x),s=e.player,c=e.house,a=e.setHouse,n=e.winner,r=e.setWinner,i=e.setPlayer,u=e.setGameState;console.log(n,s);return Object(h.jsx)("main",{className:"game-result ",children:Object(h.jsxs)("div",{className:"row justify-content-between",children:[Object(h.jsx)("div",{className:"col-sm game-result-player",children:Object(h.jsx)("div",{className:"game-result-pick game-result-you-picked",children:Object(h.jsx)("div",{className:"game-result-pick ".concat(n===l?"game-result-pick-winner":"game-result-pick-looser"),children:Object(h.jsx)(N,{pick:s,addClass:"player"})})})}),Object(h.jsx)("div",{className:"col-sm  game-result-house",children:Object(h.jsx)("div",{className:"game-result-pick game-result-house-picked",children:Object(h.jsx)("div",{className:"game-result-pick ".concat(n===o?"game-result-pick-winner":"game-result-pick-looser"),children:Object(h.jsx)(N,{pick:c,addClass:"house"})})})}),Object(h.jsxs)("div",{className:"game-result-CTA",children:[Object(h.jsx)("div",{className:"game-result-winlose",children:n===l?"You Win":n===j?"its a draw":"You Lose"}),Object(h.jsx)("div",{className:"game-result-play ",onClick:function(){return u(1),r(""),i(""),void a("")},children:"play again"})]})]})})}),S=(c(14),function(){return Object(h.jsxs)("main",{className:"game-picks",children:[Object(h.jsx)(v,{pick:"lizard"}),Object(h.jsx)(v,{pick:"rock"}),Object(h.jsx)(v,{pick:"paper"}),Object(h.jsx)(v,{pick:"scissors"}),Object(h.jsx)(v,{pick:"spock"})]})}),w=(c(15),function(){var e=Object(t.useContext)(x),s=e.showRules,c=e.setShowRules;return!1===s?null:Object(h.jsx)("div",{className:"game-rules",onClick:function(){return c(!1)},children:Object(h.jsxs)("div",{className:" game-rules-content bg-white",children:[Object(h.jsx)("header",{children:Object(h.jsx)("h2",{children:"Rules"})}),Object(h.jsx)("main",{children:Object(h.jsx)("img",{src:"./images/image-rules-bonus.svg",alt:"rock paper scissors lizard spock rules"})}),Object(h.jsx)("footer",{className:"game-rules-close",onClick:function(){return c(!1)},children:Object(h.jsx)("img",{src:"./images/icon-close.svg",alt:"rules close button"})})]})})}),y=(c(16),c(17),function(){var e=Object(t.useContext)(x),s=e.score,c=e.setScore,a=e.player,n=e.house,r=e.setHouse,i=e.winner,u=e.setWinner,d=e.gameState,b=e.setShowRules;return Object(t.useEffect)((function(){var e=g[a];i.length>0&&a!==n&&c(-1===e.indexOf(n)?s-1:s+1)}),[i]),Object(t.useEffect)((function(){a.length>0&&n.length>0&&u(a===n?j:-1===g[a].indexOf(n)?o:l)}),[n]),Object(t.useEffect)((function(){if(a.length>0){var e=Math.floor(Math.random()*(Object.keys(g).length-1));r(Object.keys(g)[e])}}),[d,a]),Object(h.jsxs)("div",{className:"App ",children:[Object(h.jsxs)("div",{className:"App-container container  ",children:[Object(h.jsx)(k,{}),1===d?Object(h.jsx)(S,{}):Object(h.jsx)(C,{}),Object(h.jsx)("footer",{className:"game-rules-btn",onClick:function(){return b(!0)},children:"Rules"})]}),Object(h.jsx)(w,{})]})}),P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(s){var c=s.getCLS,t=s.getFID,a=s.getFCP,n=s.getLCP,r=s.getTTFB;c(e),t(e),a(e),n(e),r(e)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(f,{children:Object(h.jsx)(y,{})})}),document.getElementById("root")),P()}],[[18,1,2]]]);
//# sourceMappingURL=main.323d85c4.chunk.js.map