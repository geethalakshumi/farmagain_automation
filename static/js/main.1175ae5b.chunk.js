(this.webpackJsonpautomation=this.webpackJsonpautomation||[]).push([[0],{13:function(t,e,s){},14:function(t,e,s){},15:function(t,e,s){"use strict";s.r(e);var i=s(0),a=s(1),o=s.n(a),n=s(3),c=s.n(n),l=(s(13),s(4)),r=s(5),h=s(7),u=s(6),p=(s(14),function(t){Object(h.a)(s,t);var e=Object(u.a)(s);function s(t){var i;return Object(l.a)(this,s),(i=e.call(this,t)).getstate=function(){setTimeout((function(){i.setState({isload:!0})}),2e3);var t=[],e=[],s=null;fetch("https://api.thingspeak.com/channels/1198362/fields/1.json?api_key=J982M6K8DKC1D148&results=1").then((function(t){return t.json()})).then((function(a){console.log(a),t.push(a),t.map((function(t){t.feeds.map((function(t){s=t.field1.split(""),console.log(s),s.map((function(t){e.push(parseInt(t))})),console.log(e),i.setState({initial_state:e});for(var a=0;a<e.length;a++)0==a?1==e[a]?i.setState({motor1:!0}):i.setState({motor1:!1}):1==a?1==e[a]?i.setState({motor2:!0}):i.setState({motor2:!1}):2==a?1==e[a]?i.setState({motor3:!0}):i.setState({motor3:!1}):3==a?1==e[a]?i.setState({motor4:!0}):i.setState({motor4:!1}):4==a?1==e[a]?i.setState({motor5:!0}):i.setState({motor5:!1}):5==a?1==e[a]?i.setState({motor6:!0}):i.setState({motor6:!1}):6==a?1==e[a]?i.setState({motor7:!0}):i.setState({motor7:!1}):7==a&&(1==e[a]?i.setState({motor8:!0}):i.setState({motor8:!1}))}))}))}),(function(t){i.setState({IsError:!0})})).catch((function(t){console.log(t)}))},i.componentDidMount=function(){i.handlerefresh(),i.getstate()},i.handlerefresh=function(){setInterval((function(){i.setState({isload:!1}),i.getstate()}),2e4)},i.motor1=function(t){var e=i.state.initial_state,s=[],a=t.target.id-1;if(t.target.checked){for(var o=0;o<i.state.initial_state.length;o++)o==a?0==i.state.initial_state[o]?s.push(1):s.push(0):s.push(i.state.initial_state[o]);var n=s.join("");fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1="+n).then((function(t){return t.json()})).then((function(t){console.log(t),0!==t?i.setState({motor1:!0,initial_state:s}):i.setState({motor1:!1,initial_state:e})}),(function(t){i.setState({IsError:!0})})).catch((function(t){console.log(t)})),console.log(e),console.log(s)}else{console.log("no");for(var c=0;c<i.state.initial_state.length;c++)c==a?1==i.state.initial_state[c]?s.push(0):s.push(1):s.push(i.state.initial_state[c]);var l=s.join("");console.log(l),fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1="+l).then((function(t){return t.json()})).then((function(t){console.log(t),0!==t?i.setState({motor1:!1,initial_state:s}):i.setState({motor1:!0,initial_state:e})}),(function(t){i.setState({IsError:!0})})).catch((function(t){console.log(t)})),console.log(e),console.log(s)}},i.motor2=function(t){var e=i.state.initial_state,s=[],a=t.target.id-1;if(t.target.checked){for(var o=0;o<i.state.initial_state.length;o++)o==a?0==i.state.initial_state[o]?s.push(1):s.push(0):s.push(i.state.initial_state[o]);var n=s.join("");fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1="+n).then((function(t){return t.json()})).then((function(t){console.log(t),0!==t?i.setState({motor2:!0,initial_state:s}):i.setState({motor2:!1,initial_state:e})}),(function(t){i.setState({IsError:!0})})).catch((function(t){console.log(t)}))}else{for(var c=0;c<i.state.initial_state.length;c++)c==a?1==i.state.initial_state[c]?s.push(0):s.push(1):s.push(i.state.initial_state[c]);var l=s.join("");fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1="+l).then((function(t){return t.json()})).then((function(t){console.log(t),0!==t?i.setState({motor2:!1,initial_state:s}):i.setState({motor2:!0,initial_state:e})}),(function(t){i.setState({IsError:!0})})).catch((function(t){console.log(t)}))}console.log(e),console.log(s)},i.motor3=function(t){var e=i.state.initial_state,s=[],a=t.target.id-1;if(t.target.checked){for(var o=0;o<i.state.initial_state.length;o++)o==a?0==i.state.initial_state[o]?s.push(1):s.push(0):s.push(i.state.initial_state[o]);var n=s.join("");fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1="+n).then((function(t){return t.json()})).then((function(t){console.log(t),0!==t?i.setState({motor3:!0,initial_state:s}):i.setState({motor3:!1,initial_state:e})}),(function(t){i.setState({IsError:!0})})).catch((function(t){console.log(t)}))}else{for(var c=0;c<i.state.initial_state.length;c++)c==a?1==i.state.initial_state[c]?s.push(0):s.push(1):s.push(i.state.initial_state[c]);var l=s.join("");fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1="+l).then((function(t){return t.json()})).then((function(t){console.log(t),0!==t?i.setState({motor3:!1,initial_state:s}):i.setState({motor3:!0,initial_state:e})}),(function(t){i.setState({IsError:!0})})).catch((function(t){console.log(t)}))}console.log(e),console.log(s)},i.motor4=function(t){var e=i.state.initial_state,s=[],a=t.target.id-1;if(t.target.checked){for(var o=0;o<i.state.initial_state.length;o++)o==a?0==i.state.initial_state[o]?s.push(1):s.push(0):s.push(i.state.initial_state[o]);var n=s.join("");fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1="+n).then((function(t){return t.json()})).then((function(t){console.log(t),0!==t?i.setState({motor4:!0,initial_state:s}):i.setState({motor4:!1,initial_state:e})}),(function(t){i.setState({IsError:!0})})).catch((function(t){console.log(t)}))}else{for(var c=0;c<i.state.initial_state.length;c++)c==a?1==i.state.initial_state[c]?s.push(0):s.push(1):s.push(i.state.initial_state[c]);var l=s.join("");fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1="+l).then((function(t){return t.json()})).then((function(t){console.log(t),0!==t?i.setState({motor4:!1,initial_state:s}):i.setState({motor4:!0,initial_state:e})}),(function(t){i.setState({IsError:!0})})).catch((function(t){console.log(t)}))}console.log(e),console.log(s)},i.motor5=function(t){var e=i.state.initial_state,s=[],a=t.target.id-1;if(t.target.checked){for(var o=0;o<i.state.initial_state.length;o++)o==a?0==i.state.initial_state[o]?s.push(1):s.push(0):s.push(i.state.initial_state[o]);var n=s.join("");fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1="+n).then((function(t){return t.json()})).then((function(t){console.log(t),0!==t?i.setState({motor5:!0,initial_state:s}):i.setState({motor5:!1,initial_state:e})}),(function(t){i.setState({IsError:!0})})).catch((function(t){console.log(t)}))}else{for(var c=0;c<i.state.initial_state.length;c++)c==a?1==i.state.initial_state[c]?s.push(0):s.push(1):s.push(i.state.initial_state[c]);var l=s.join("");fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1="+l).then((function(t){return t.json()})).then((function(t){console.log(t),0!==t?i.setState({motor5:!1,initial_state:s}):i.setState({motor5:!0,initial_state:e})}),(function(t){i.setState({IsError:!0})})).catch((function(t){console.log(t)}))}console.log(e),console.log(s)},i.motor6=function(t){var e=i.state.initial_state,s=[],a=t.target.id-1;if(t.target.checked){for(var o=0;o<i.state.initial_state.length;o++)o==a?0==i.state.initial_state[o]?s.push(1):s.push(0):s.push(i.state.initial_state[o]);var n=s.join("");fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1="+n).then((function(t){return t.json()})).then((function(t){console.log(t),0!==t?i.setState({motor6:!0,initial_state:s}):i.setState({motor6:!1,initial_state:e})}),(function(t){i.setState({IsError:!0})})).catch((function(t){console.log(t)}))}else{for(var c=0;c<i.state.initial_state.length;c++)c==a?1==i.state.initial_state[c]?s.push(0):s.push(1):s.push(i.state.initial_state[c]);var l=s.join("");fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1="+l).then((function(t){return t.json()})).then((function(t){console.log(t),0!==t?i.setState({motor6:!1,initial_state:s}):i.setState({motor6:!0,initial_state:e})}),(function(t){i.setState({IsError:!0})})).catch((function(t){console.log(t)}))}console.log(e),console.log(s)},i.motor7=function(t){var e=i.state.initial_state,s=[],a=t.target.id-1;if(t.target.checked){for(var o=0;o<i.state.initial_state.length;o++)o==a?0==i.state.initial_state[o]?s.push(1):s.push(0):s.push(i.state.initial_state[o]);var n=s.join("");fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1="+n).then((function(t){return t.json()})).then((function(t){console.log(t),0!==t?i.setState({motor7:!0,initial_state:s}):i.setState({motor7:!1,initial_state:e})}),(function(t){i.setState({IsError:!0})})).catch((function(t){console.log(t)}))}else{for(var c=0;c<i.state.initial_state.length;c++)c==a?1==i.state.initial_state[c]?s.push(0):s.push(1):s.push(i.state.initial_state[c]);var l=s.join("");fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1="+l).then((function(t){return t.json()})).then((function(t){console.log(t),0!==t?i.setState({motor7:!1,initial_state:s}):i.setState({motor7:!0,initial_state:e})}),(function(t){i.setState({IsError:!0})})).catch((function(t){console.log(t)}))}console.log(e),console.log(s)},i.motor8=function(t){var e=i.state.initial_state,s=[],a=t.target.id-1;if(t.target.checked){for(var o=0;o<i.state.initial_state.length;o++)o==a?0==i.state.initial_state[o]?s.push(1):s.push(0):s.push(i.state.initial_state[o]);var n=s.join("");fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1="+n).then((function(t){return t.json()})).then((function(t){console.log(t),0!==t?i.setState({motor8:!0,initial_state:s}):i.setState({motor8:!1,initial_state:e})}),(function(t){i.setState({IsError:!0})})).catch((function(t){console.log(t)}))}else{for(var c=0;c<i.state.initial_state.length;c++)c==a?1==i.state.initial_state[c]?s.push(0):s.push(1):s.push(i.state.initial_state[c]);var l=s.join("");fetch("https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1="+l).then((function(t){return t.json()})).then((function(t){console.log(t),0!==t?i.setState({motor8:!1,initial_state:s}):i.setState({motor8:!0,initial_state:e})}),(function(t){i.setState({IsError:!0})})).catch((function(t){console.log(t)}))}console.log(e),console.log(s)},i.state={initial_state:[0,0,0,0,0,0,0,0],motor1:!1,motor2:!1,motor3:!1,motor4:!1,motor5:!1,motor6:!1,motor7:!1,motor8:!1,isload:!0},i}return Object(r.a)(s,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"App mt-3",children:[Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:"img.png"})}),Object(i.jsxs)("div",{className:"mt-4",children:["FILTER MOTOR VALVE  : \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(i.jsxs)("label",{class:"switch",children:[Object(i.jsx)("input",{type:"checkbox",id:"1",checked:this.state.motor1,onChange:this.motor1}),Object(i.jsx)("span",{class:"slider round"})]})]}),Object(i.jsxs)("div",{className:"mt-3",children:["OZONE MOTOR VALVE   :\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(i.jsxs)("label",{class:"switch",children:[Object(i.jsx)("input",{type:"checkbox",id:"2",checked:this.state.motor2,onChange:this.motor2}),Object(i.jsx)("span",{class:"slider round"})]})]}),Object(i.jsxs)("div",{className:"mt-3",children:["FILTER MOTOR  :\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(i.jsxs)("label",{class:"switch",children:[Object(i.jsx)("input",{type:"checkbox",id:"3",checked:this.state.motor3,onChange:this.motor3}),Object(i.jsx)("span",{class:"slider round"})]})]}),Object(i.jsxs)("div",{className:"mt-3",children:["NOT USE  :\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(i.jsxs)("label",{class:"switch",children:[Object(i.jsx)("input",{type:"checkbox",id:"4",checked:this.state.motor4,onChange:this.motor4}),Object(i.jsx)("span",{class:"slider round"})]})]}),Object(i.jsxs)("div",{className:"mt-3",children:["NOT USE  :\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(i.jsxs)("label",{class:"switch",children:[Object(i.jsx)("input",{type:"checkbox",id:"5",checked:this.state.motor5,onChange:this.motor5}),Object(i.jsx)("span",{class:"slider round"})]})]}),Object(i.jsxs)("div",{className:"mt-3",children:["NOT USE  :\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(i.jsxs)("label",{class:"switch",children:[Object(i.jsx)("input",{type:"checkbox",id:"6",checked:this.state.motor6,onChange:this.motor6}),Object(i.jsx)("span",{class:"slider round"})]})]}),Object(i.jsxs)("div",{className:"mt-3",children:["OZONE MOTOR  :\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(i.jsxs)("label",{class:"switch",children:[Object(i.jsx)("input",{type:"checkbox",id:"7",checked:this.state.motor7,onChange:this.motor7}),Object(i.jsx)("span",{class:"slider round"})]})]}),Object(i.jsxs)("div",{className:"mt-3",children:["OZONE GENERATOR :\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(i.jsxs)("label",{class:"switch",children:[Object(i.jsx)("input",{type:"checkbox",id:"8",checked:this.state.motor8,onChange:this.motor8}),Object(i.jsx)("span",{class:"slider round"})]})]}),Object(i.jsxs)("div",{className:"mt-4",children:[Object(i.jsx)("i",{className:0==this.state.isload?"fa fa-refresh fa-3x rotate linear infinite":"fa fa-refresh fa-3x  "})," "]})]})}}]),s}(o.a.Component)),f=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,16)).then((function(e){var s=e.getCLS,i=e.getFID,a=e.getFCP,o=e.getLCP,n=e.getTTFB;s(t),i(t),a(t),o(t),n(t)}))};c.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.1175ae5b.chunk.js.map