(this.webpackJsonpstaircalculator=this.webpackJsonpstaircalculator||[]).push([[0],{17:function(e,t,a){},34:function(e,t,a){e.exports=a(88)},38:function(e,t,a){},40:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(28),l=a.n(i),o=(a(38),a(17),a(29)),s=a(30),c=a(32),d=a(31),u=a(33),f=(a(39),a(40),function(e){var t=Array.from({length:15},(function(e,t){return t+1}));return r.a.createElement("div",null,r.a.createElement("label",{className:"subtitle d-flex"},"Total run"),r.a.createElement("div",{className:"d-flex justify-content-start"},r.a.createElement("select",{id:"totalRunFeet",defaultValue:e.totalRunft,onChange:e.changetotalRunft,className:"dropdown dropdown__feet"},Array.from(t,(function(e){return r.a.createElement("option",{value:12*e,key:12*e},e+"'")}))),r.a.createElement("select",{id:"totalRunInches",defaultValue:e.totalRunin,onChange:e.changetotalRunin,className:"dropdown dropdown__inch"},Array.from(Array(12),(function(e,t){return r.a.createElement("option",{value:t,key:t},t+'"')}))),r.a.createElement("select",{id:"totalRunFraction",defaultValue:e.totalRunfr,onChange:e.changetotalRunfr,className:"dropdown dropdown__fraction"},Array.from(Array(16),(function(e,t){return r.a.createElement("option",{value:.0625*t,key:.0625*t},t+"/16")})))))}),g=function(e){var t=Array.from({length:11},(function(e,t){return t}));return r.a.createElement("div",null,r.a.createElement("label",{className:"subtitle d-flex"},"Total rise"),r.a.createElement("div",{className:"d-flex justify-content-start"},r.a.createElement("select",{id:"totalRiseft",defaultValue:e.totalRiseft,onChange:e.changetotalRiseft,className:"dropdown dropdown__feet"},Array.from(t,(function(e){return r.a.createElement("option",{value:12*e,key:12*e},e+"'")}))),r.a.createElement("select",{id:"totalRisein",defaultValue:e.totalRisein,onChange:e.changetotalRisein,className:"dropdown dropdown__inch"},Array.from(Array(12),(function(e,t){return r.a.createElement("option",{key:t},t+'"')}))),r.a.createElement("select",{id:"totalRiseft",defaultValue:e.totalRisefr,onChange:e.changetotalRisefr,className:"dropdown dropdown__fraction"},Array.from(Array(16),(function(e,t){return r.a.createElement("option",{key:.0625*t},t+"/16")})))))},h=function(e){var t=Array.from({length:27},(function(e,t){return t+10}));return r.a.createElement("div",null,r.a.createElement("label",{className:"subtitle d-flex"},"Ideal run"),r.a.createElement("div",{className:"d-flex justify-content-start"},r.a.createElement("select",{defaultValue:e.idealRunin,onChange:e.changeidealRunin,className:"dropdown dropdown__inch"},Array.from(t,(function(e){return r.a.createElement("option",{value:e,key:e},e+'"')}))),r.a.createElement("select",{defaultValue:e.idealRunfr,onChange:e.changeidealRunfr,className:"dropdown dropdown__fraction"},Array.from(Array(16),(function(e,t){return r.a.createElement("option",{value:.0625*t,key:.0625*t},t+"/16")})))))},m=function(e){var t=Array.from({length:4},(function(e,t){return t+4}));return r.a.createElement("div",{className:"select-wrapper"},r.a.createElement("label",{className:"subtitle d-flex"},"Ideal rise"),r.a.createElement("div",{className:"dropdown__parent d-flex justify-content-start"},r.a.createElement("select",{defaultValue:e.idealRisein,onChange:e.changeidealRisein,className:"dropdown dropdown__inch"},Array.from(t,(function(e){return r.a.createElement("option",{value:e,key:e},e+'"')}))),r.a.createElement("select",{defaultValue:e.idealRisefr,onChange:e.changeidealRisefr,className:"dropdown dropdown__fraction"},Array.from(Array(13),(function(e,t){return r.a.createElement("option",{value:.0625*t,key:.0625*t},t+"/16")})))))},E=function(e){var t=Array.from({length:7},(function(e,t){return t+5})),a=e.details;e.nosing;return r.a.createElement("div",{className:"sidebar__section"},r.a.createElement("div",{className:"title"},"Details"),a?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("label",{className:"subtitle d-flex"},"Tread thickness"),r.a.createElement("div",{className:"d-flex justify-content-start"},r.a.createElement("select",{defaultValue:e.treadin,onChange:e.changetreadin,className:"dropdown dropdown__inch"},Array.from(Array(2),(function(e,t){return r.a.createElement("option",{value:t,key:t},t+'"')}))),r.a.createElement("select",{defaultValue:"0",onChange:e.changetreadfr,className:"dropdown dropdown__fraction"},Array.from(Array(16),(function(e,t){return r.a.createElement("option",{value:.0625*t,key:.0625*t},t+"/16")}))))),r.a.createElement("div",null,r.a.createElement("label",{className:"subtitle d-flex"},"Riser thickness"),r.a.createElement("select",{defaultValue:e.riserin,onChange:e.changeriserin,className:"dropdown dropdown__inch"},Array.from(Array(2),(function(e,t){return r.a.createElement("option",{value:t,key:t},t+'"')}))),r.a.createElement("select",{defaultValue:"0",onChange:e.changeriserfr,className:"dropdown dropdown__fraction"},Array.from(Array(16),(function(e,t){return r.a.createElement("option",{value:.0625*t,key:.0625*t},t+"/16")})))),"nosing ? (",r.a.createElement("div",null,r.a.createElement("label",{className:"subtitle d-flex"},"Nosing"),r.a.createElement("select",{defaultValue:"0",onChange:e.changenosingin,className:"dropdown dropdown__inch"},Array.from(Array(2),(function(e,t){return r.a.createElement("option",{value:t,key:t},t+'"')}))),r.a.createElement("select",{defaultValue:"0",onChange:e.changenosingfr,className:"dropdown dropdown__fraction"},Array.from(Array(16),(function(e,t){return r.a.createElement("option",{value:.0625*t,key:.0625*t},t+"/16")})))),") : (",r.a.createElement("div",null,r.a.createElement("label",{className:"subtitle d-flex"},"Nosing"),r.a.createElement("select",{defaultValue:"0",onChange:e.changenosingin,className:"dropdown dropdown__inch"},Array.from(Array(2),(function(e,t){return r.a.createElement("option",{value:t,key:t},t+'"')}))),r.a.createElement("select",{defaultValue:"0",onChange:e.changenosingfr,className:"dropdown dropdown__fraction"},Array.from(Array(8),(function(e,t){return r.a.createElement("option",{value:.0625*t,key:.0625*t},t+"/16")})))),")",r.a.createElement("div",null,r.a.createElement("label",{className:"subtitle d-flex"},"Stringer Width"),r.a.createElement("select",{defaultValue:e.stringerin,onChange:e.changestringerin,className:"dropdown dropdown__inch"},Array.from(t,(function(e){return r.a.createElement("option",{value:e,key:e},e+'"')}))),r.a.createElement("select",{defaultValue:e.stringerfr,onChange:e.changestringerfr,className:"dropdown dropdown__fraction"},Array.from(Array(16),(function(e,t){return r.a.createElement("option",{value:.0625*t,key:.0625*t},t+"/16")}))))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("label",{className:"subtitle d-flex"},"Tread thickness"),r.a.createElement("div",{className:"d-flex justify-content-start"},r.a.createElement("select",{defaultValue:e.treadin,onChange:e.changetreadin,className:"dropdown dropdown__inch disabled"},Array.from(Array(2),(function(e,t){return r.a.createElement("option",{value:t,key:t},t+'"')}))),r.a.createElement("select",{defaultValue:"0",onChange:e.changetreadfr,className:"dropdown dropdown__fraction disabled"},Array.from(Array(16),(function(e,t){return r.a.createElement("option",{value:.0625*t,key:.0625*t},t+"/16")}))))),r.a.createElement("div",null,r.a.createElement("label",{className:"subtitle d-flex"},"Riser thickness"),r.a.createElement("select",{defaultValue:e.riserin,onChange:e.changeriserin,className:"dropdown dropdown__inch disabled"},Array.from(Array(2),(function(e,t){return r.a.createElement("option",{value:t,key:t},t+'"')}))),r.a.createElement("select",{defaultValue:"0",onChange:e.changeriserfr,className:"dropdown dropdown__fraction disabled"},Array.from(Array(16),(function(e,t){return r.a.createElement("option",{value:.0625*t,key:.0625*t},t+"/16")})))),r.a.createElement("div",null,r.a.createElement("label",{className:"subtitle d-flex"},"Nosing"),r.a.createElement("select",{defaultValue:"0",onChange:e.changenosingin,className:"dropdown dropdown__inch disabled"},Array.from(Array(2),(function(e,t){return r.a.createElement("option",{value:t,key:t},t+'"')}))),r.a.createElement("select",{defaultValue:"0",onChange:e.changenosingfr,className:"dropdown dropdown__fraction disabled"},Array.from(Array(16),(function(e,t){return r.a.createElement("option",{value:.0625*t,key:.0625*t},t+"/16")})))),r.a.createElement("div",null,r.a.createElement("label",{className:"subtitle d-flex"},"Stringer Width"),r.a.createElement("select",{defaultValue:e.stringerin,onChange:e.changestringerin,className:"dropdown dropdown__inch disabled"},Array.from(t,(function(e){return r.a.createElement("option",{value:e,key:e},e+'"')}))),r.a.createElement("select",{defaultValue:e.stringerfr,onChange:e.changestringerfr,className:"dropdown dropdown__fraction disabled"},Array.from(Array(16),(function(e,t){return r.a.createElement("option",{value:.0625*t,key:.0625*t},t+"/16")}))))))},p=function(e){parseFloat(e.idealRunin),parseFloat(e.idealRunfr),parseFloat(e.idealRisein),parseFloat(e.idealRisefr);return r.a.createElement("div",{className:"sidebar__section--last sidebar__section"},r.a.createElement("label",{className:"title d-flex"},"Stair Angle"),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("span",{className:"stairangle__number dropdown"},e.stairAngle+"\xb0"),r.a.createElement("input",{type:"range",defaultValue:e.stairAngle,min:"30",max:"45",step:"0.1",onChange:e.changeStairAngle,className:"slider slider__angle"})))},R=function(e){var t=parseInt(e.totalRunft)+parseInt(e.totalRunin)+parseFloat(e.totalRunfr),a=parseFloat(t/3);return r.a.createElement("div",null,r.a.createElement("label",{className:"subtitle d-flex"},"Height"),r.a.createElement("input",{type:"range",defaultValue:"0",min:"0",max:a,onChange:e.changeheadroomlength,className:"slider slider__height"}))},y=function(e){return r.a.createElement("div",null,r.a.createElement("label",{className:"subtitle d-flex"},"Floor Thickness"),r.a.createElement("div",{className:"d-flex justify-content-start"},r.a.createElement("select",{defaultValue:e.floorft,onChange:e.changefloorft,className:"dropdown dropdown__feet"},Array.from(Array(2),(function(e,t){return r.a.createElement("option",{value:12*t,key:12*t},t+"'")}))),r.a.createElement("select",{defaultValue:e.floorin,onChange:e.changefloorin,className:"dropdown dropdown__inch"},Array.from(Array(12),(function(e,t){return r.a.createElement("option",{value:t,key:t},t+'"')}))),r.a.createElement("select",{defaultValue:e.floorfr,onChange:e.changefloorfr,className:"dropdown dropdown__fraction"},Array.from(Array(16),(function(e,t){return r.a.createElement("option",{value:.0625*t,key:.0625*t},t+"/16")})))))},v=a(16),k=a(4),_=function(e){var t=parseInt(e.totalRunft)+parseInt(e.totalRunin)+parseFloat(e.totalRunfr),a=parseInt(e.totalRiseft)+parseInt(e.totalRisein)+parseFloat(e.totalRisefr),n=parseFloat(e.idealRunin)+parseFloat(e.idealRunfr),i=parseFloat(e.idealRisein)+parseFloat(e.idealRisefr),l=0;!0===e.boolean?l=parseInt(t/n):!1===e.boolean&&(l=parseInt(a/i));var o=parseFloat(e.headroomLength),s=.82*window.innerWidth-15,c=(parseFloat(e.stringerin)+parseFloat(e.stringerfr))/Math.sin(Math.atan(n/i)),d=(parseFloat(e.stringerin)+parseFloat(e.stringerfr))/Math.sin(Math.atan(i/n)),u=[],f=parseFloat(e.floorft)+parseFloat(e.floorin)+parseFloat(e.floorfr);if(!0===e.stairToggle&&(n=parseFloat(i/Math.tan(e.stairAngle*(Math.PI/180)))),console.log(e.stairToggle),!0===e.boolean){for(var g=0;g<l;g++)u.push(t-n*g,i*g,t-n*(g+1),i*g,t-n*(g+1),i*(g+1));u.push(u[u.length-2]+d,u[u.length-1],u[0],c,u[0],f,u[0]+36,f,u[0]+36,0)}else if(!1===e.boolean){for(var h=0;h<l;h++)u.push(a-n*h,i*h,a-n*(h+1),i*h,a-n*(h+1),i*(h+1));u.push(u[u.length-2]+d,u[u.length-1],u[0],c,u[0],f,u[0]+36,f,u[0]+36,0)}for(var m=[u[u.length-12]-3*n,f,u[u.length-12]-3*n,0,u[u.length-12]-n+o,0,u[u.length-12]-n+o,f],E=a>90||i*l>90,p=m[0]+36+u[0],R=.75*(s/(Math.abs(m[0])+36+u[0])),y=0;y<u.length;y++)u[y]=u[y]*R;for(var _=0;_<m.length;_++)m[_]=m[_]*R;for(var b=[s/2-p*R/2,150],N=R*(parseFloat(e.treadin)+parseFloat(e.treadfr)),w=R*(parseFloat(e.riserin)+parseFloat(e.riserfr)),A=R*(parseFloat(e.nosingin)+parseFloat(e.nosingfr)),x=n*R+A+w,C=i*R-N,S=[],F=2;F<u.length;F+=6)S.push(b[0]+u[F]-A);for(var O=[],M=[],V=3;V<u.length;V+=6)O.push(b[1]+u[V]),M.push(b[1]+u[V]+N);for(var T=[],L=0;L<S.length;L++)T.push(S[L]+A);for(var W=[],D=1;D<S.length;D++)W.push(S[D]);for(var J=[],j=1;j<O.length;j++)J.push(O[j]);for(var I=[S[0],O[0]],q=[u[u.length-2]+40,0,u[u.length-2]+40,u[u.length-9]],B=[q[0]-5,q[1]+5,q[0],q[1],q[0]+5,q[1]+5],U=[q[2]-5,q[3]-5,q[2],q[3],q[2]+5,q[3]-5],z=[q[0],(q[1]+q[3])/2],H=[u[u.length-2],q[1],q[0],q[1]],P=[u[u.length-10],q[3],q[0],q[3]],K=[u[u.length-12],u[u.length-11]+40,u[0],u[u.length-11]+40],$=[K[0]+5,K[1]-5,K[0],K[1],K[0]+5,K[1]+5],G=[K[2]-5,K[3]-5,K[2],K[3],K[2]-5,K[3]+5],Q=[(K[0]+K[2])/2,K[1]],X=[K[0],K[1],K[0],K[1]-40],Y=[K[2],K[3],K[2],u[1]],Z=(u[Math.round(u.length/2)],u[Math.round(u.length/2)+1],[u[2],0,u[2]-A,0]),ee=[Z[0],Z[1],Z[0],Z[1]-40],te=[Z[2],Z[1],Z[2],Z[1]-40],ae=[(Z[0]+Z[2])/2,Z[1]-28],ne=m[6],re=u[u.length-9],ie=0;ie<u.length;ie++)ne===u[ie]&&(re=u[ie+1]);m[7];var le=[m[6],m[7],m[4],m[5]],oe=[le[2]-5,le[3]+5,le[2],le[3],le[2]+5,le[3]+5],se=[le[0]-5,le[1]-5,le[0],le[1],le[0]+5,le[1]-5],ce=[le[0],(le[1]+le[3])/2],de=[le[2],le[3],le[2]+40,le[3]],ue=[le[0],le[1],le[0]+40,le[1]],fe=[u[u.length-12],u[u.length-11]],ge=[fe[0],fe[1],fe[0]-36,fe[1],fe[0],fe[1]-36*Math.tan(Math.atan(i/n))],he=[ge[2],ge[3]],me=(Math.atan(i/n)*(180/Math.PI)).toFixed(1);return r.a.createElement(k.Stage,{width:s,height:window.innerHeight},r.a.createElement(k.Layer,null,r.a.createElement(k.Line,{x:b[0],y:b[1],points:u,stroke:"black",strokeWidth:1.5,lineCap:"sqare",lineJoin:"sqare",closed:"true"}),E&&r.a.createElement(k.Line,{x:b[0],y:b[1],points:m,stroke:"black",strokeWidth:1.5,lineCap:"sqare",lineJoin:"sqare",closed:"true"}),e.details&&r.a.createElement(k.Rect,{x:I[0],y:I[1],width:x+36*R-w,height:N,fill:"white",stroke:"black",strokeWidth:1.5}),e.details&&Object(v.a)(Array(l-1)).map((function(e,t){return r.a.createElement(k.Rect,{key:t,x:W[t],y:J[t],width:x,height:N,fill:"white",stroke:"black",strokeWidth:1.5})})),e.details&&Object(v.a)(Array(l)).map((function(e,t){return r.a.createElement(k.Rect,{key:t,x:T[t],y:M[t],width:w,height:C,fill:"white",stroke:"black",strokeWidth:1.5})}))),r.a.createElement(k.Layer,null,e.dimensions&&r.a.createElement(r.a.Fragment,null,r.a.createElement(k.Line,{x:b[0],y:b[1],points:q,stroke:"#5541EA",strokeWidth:.75,lineCap:"round",lineJoin:"round"}),r.a.createElement(k.Line,{x:b[0],y:b[1],points:B,stroke:"#5541EA",strokeWidth:.75,lineCap:"round",lineJoin:"round"}),r.a.createElement(k.Line,{x:b[0],y:b[1],points:U,stroke:"#5541EA",strokeWidth:.75,lineCap:"round",lineJoin:"round"}),r.a.createElement(k.Line,{x:b[0],y:b[1],points:H,stroke:"black",strokeWidth:.75,lineCap:"sqare",lineJoin:"sqare",dash:[3,4]}),r.a.createElement(k.Line,{x:b[0],y:b[1],points:P,stroke:"black",strokeWidth:.75,lineCap:"sqare",lineJoin:"sqare",dash:[3,4]}),r.a.createElement(k.Text,{width:150,x:b[0]+z[0]+40,y:b[1]+z[1]-75,fontFamily:"S\xf6hne Mono Buch",fontSize:12,fill:"#5541EA",text:"Total Rise",rotation:90,align:"center"}),r.a.createElement(k.Text,{width:150,x:b[0]+z[0]+20,y:b[1]+z[1]-75,fontFamily:"S\xf6hne Mono Buch",fontSize:12,fill:"#5541EA",text:e.totalRiseft/12+"' "+e.totalRisein+'" '+e.totalRisefr,rotation:90,align:"center"})),e.dimensions&&r.a.createElement(r.a.Fragment,null,r.a.createElement(k.Line,{x:b[0],y:b[1],points:K,stroke:"#5541EA",strokeWidth:.75,lineCap:"round",lineJoin:"round"}),r.a.createElement(k.Line,{x:b[0],y:b[1],points:$,stroke:"#5541EA",strokeWidth:.75,lineCap:"round",lineJoin:"round"}),r.a.createElement(k.Line,{x:b[0],y:b[1],points:G,stroke:"#5541EA",strokeWidth:.75,lineCap:"round",lineJoin:"round"}),r.a.createElement(k.Line,{x:b[0],y:b[1],points:X,stroke:"black",strokeWidth:.75,lineCap:"sqare",lineJoin:"sqare",dash:[3,4]}),r.a.createElement(k.Line,{x:b[0],y:b[1],points:Y,stroke:"black",strokeWidth:.75,lineCap:"sqare",lineJoin:"sqare",dash:[3,4]}),r.a.createElement(k.Text,{width:150,x:b[0]+Q[0]-75,y:b[1]+Q[1]+40,fontFamily:"S\xf6hne Mono Buch",fontSize:12,fill:"#5541EA",text:"Total Run",align:"center"}),r.a.createElement(k.Text,{width:150,x:b[0]+Q[0]-75,y:b[1]+Q[1]+20,fontFamily:"S\xf6hne Mono Buch",fontSize:12,fill:"#5541EA",text:e.totalRunft/12+"' "+e.totalRunin+'" '+16*e.totalRunfr+"/16",align:"center"})),e.dimensions&&e.details&&r.a.createElement(r.a.Fragment,null,r.a.createElement(k.Line,{x:b[0],y:b[1],points:ee,stroke:"black",strokeWidth:.75,lineCap:"sqare",lineJoin:"sqare",dash:[3,4]}),r.a.createElement(k.Line,{x:b[0],y:b[1],points:te,stroke:"black",strokeWidth:.75,lineCap:"sqare",lineJoin:"sqare",dash:[3,4]}),r.a.createElement(k.Text,{width:150,x:b[0]+ae[0]-75,y:b[1]+ae[1]-12-40,fontFamily:"S\xf6hne Mono Buch",fontSize:12,fill:"#5541EA",text:"Nosing",align:"center"}),r.a.createElement(k.Text,{width:150,x:b[0]+ae[0]-75,y:b[1]+ae[1]-12-20,fontFamily:"S\xf6hne Mono Buch",fontSize:12,fill:"#5541EA",text:e.nosingin+'" '+16*e.nosingfr+"/16",align:"center"})),e.dimensions&&E&&r.a.createElement(r.a.Fragment,null,r.a.createElement(k.Line,{x:b[0],y:b[1],points:de,stroke:"black",strokeWidth:.75,lineCap:"sqare",lineJoin:"sqare",dash:[3,4]}),r.a.createElement(k.Line,{x:b[0],y:b[1],points:ue,stroke:"black",strokeWidth:.75,lineCap:"sqare",lineJoin:"sqare",dash:[3,4]}),r.a.createElement(k.Line,{x:b[0]+40,y:b[1],points:oe,stroke:"#5541EA",strokeWidth:.75,lineCap:"round",lineJoin:"round"}),r.a.createElement(k.Line,{x:b[0]+40,y:b[1],points:se,stroke:"#5541EA",strokeWidth:.75,lineCap:"round",lineJoin:"round"}),r.a.createElement(k.Line,{x:b[0]+40,y:b[1],points:le,stroke:"#5541EA",strokeWidth:.75,lineCap:"round",lineJoin:"round"}),r.a.createElement(k.Text,{width:150,x:b[0]+ce[0]+25,y:b[1]+ce[1]-12,fontFamily:"S\xf6hne Mono Buch",fontSize:12,fill:"#5541EA",text:"Floor thickness",align:"center"}),r.a.createElement(k.Text,{width:150,x:b[0]+ce[0]+25,y:b[1]+ce[1]-12+20,fontFamily:"S\xf6hne Mono Buch",fontSize:12,fill:"#5541EA",text:e.floorft/12+"' "+e.floorin+'" '+16*e.floorfr+"/16",align:"center"})),e.dimensions&&r.a.createElement(r.a.Fragment,null,r.a.createElement(k.Line,{x:b[0]-20,y:b[1],points:ge,stroke:"#5541EA",strokeWidth:.75,lineCap:"round",lineJoin:"round"}),r.a.createElement(k.Text,{width:40,x:b[0]+he[0]-30-40,y:b[1]+he[1]-12,fontFamily:"S\xf6hne Mono Buch",fontSize:12,fill:"#5541EA",text:me+"\xb0",align:"right"}))))},b=function(e){var t=e.units;return r.a.createElement("div",null,r.a.createElement("div",{className:"subtitle"},"Units"),t?r.a.createElement("div",{className:"toggle-group d-flex justify-content-between"},r.a.createElement("button",{className:"toggle toggle__left toggle--active",onClick:e.changeUnitsIn},"IN"),r.a.createElement("button",{className:"toggle toggle__right toggle--inactive",onClick:e.changeUnitsMM},"MM")):r.a.createElement("div",{className:"toggle-group d-flex justify-content-between"},r.a.createElement("button",{className:"toggle toggle__left toggle--inactive",onClick:e.changeUnitsIn},"IN"),r.a.createElement("button",{className:"toggle toggle__right toggle--active",onClick:e.changeUnitsMM},"MM")))},N=function(e){var t=e.dimensions;return r.a.createElement("div",null,r.a.createElement("div",{className:"subtitle"},"Dimensions"),t?r.a.createElement("div",{className:"toggle-group d-flex justify-content-between"},r.a.createElement("button",{className:"toggle toggle__left toggle--active",onClick:e.changeDimensionsOn},"ON"),r.a.createElement("button",{className:"toggle toggle__right toggle--inactive",onClick:e.changeDimensionsOff},"OFF")):r.a.createElement("div",{className:"toggle-group d-flex justify-content-between"},r.a.createElement("button",{className:"toggle toggle__left toggle--inactive",onClick:e.changeDimensionsOn},"ON"),r.a.createElement("button",{className:"toggle toggle__right toggle--active",onClick:e.changeDimensionsOff},"OFF")))},w=function(e){var t=e.details;return r.a.createElement("div",null,r.a.createElement("div",{className:"subtitle"},"Details"),t?r.a.createElement("div",{className:"toggle-group d-flex justify-content-between"},r.a.createElement("button",{className:"toggle toggle__left toggle--active",onClick:e.changeDetailsOn},"ON"),r.a.createElement("button",{className:"toggle toggle__right toggle--inactive",onClick:e.changeDetailsOff},"OFF")):r.a.createElement("div",{className:"toggle-group d-flex justify-content-between"},r.a.createElement("button",{className:"toggle toggle__left toggle--inactive",onClick:e.changeDetailsOn},"ON"),r.a.createElement("button",{className:"toggle toggle__right toggle--active",onClick:e.changeDetailsOff},"OFF")))},A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={totalRunft:144,totalRunin:0,totalRunfr:0,totalRiseft:108,totalRisein:0,totalRisefr:0,idealRisein:7,idealRisefr:0,idealRunin:11,idealRunfr:0,stringerin:5,stringerfr:.9375,floorft:0,floorin:7,floorfr:0,headroomMax:0,headroomLength:0,treadin:1,treadfr:0,riserin:1,riserfr:0,nosingin:0,nosingfr:0,stairAngle:32.5,stairToggle:!1,runOn:!0,dimensions:!0,units:!0,details:!0},a.changetotalRunft=function(e){a.setState({totalRunft:e.target.value,runOn:!0,stairToggle:!1})},a.changetotalRunin=function(e){a.setState({totalRunin:e.target.value,runOn:!0,stairToggle:!1})},a.changetotalRunfr=function(e){a.setState({totalRunfr:e.target.value,runOn:!0,stairToggle:!1})},a.changetotalRiseft=function(e){a.setState({totalRiseft:e.target.value,runOn:!1,stairToggle:!1})},a.changetotalRisein=function(e){a.setState({totalRisein:e.target.value,runOn:!1,stairToggle:!1})},a.changetotalRisefr=function(e){a.setState({totalRisefr:e.target.value,runOn:!1,stairToggle:!1})},a.changeidealRunin=function(e){a.setState({idealRunin:e.target.value,stairToggle:!1})},a.changeidealRunfr=function(e){a.setState({idealRunfr:e.target.value,stairToggle:!1})},a.changeidealRisein=function(e){a.setState({idealRisein:e.target.value,stairToggle:!1})},a.changeidealRisefr=function(e){a.setState({idealRisefr:e.target.value,stairToggle:!1})},a.changestringerin=function(e){a.setState({stringerin:e.target.value})},a.changestringerfr=function(e){a.setState({stringerfr:e.target.value})},a.changefloorft=function(e){a.setState({floorft:e.target.value})},a.changefloorin=function(e){a.setState({floorin:e.target.value})},a.changefloorfr=function(e){a.setState({floorfr:e.target.value})},a.changeheadroomlength=function(e){a.setState({headroomLength:e.target.value})},a.changetreadin=function(e){a.setState({treadin:e.target.value})},a.changetreadfr=function(e){a.setState({treadfr:e.target.value})},a.changeriserin=function(e){a.setState({riserin:e.target.value})},a.changeriserfr=function(e){a.setState({riserfr:e.target.value})},a.changenosingin=function(e){a.setState({nosingin:e.target.value})},a.changenosingfr=function(e){a.setState({nosingfr:e.target.value})},a.changeUnitsIn=function(){a.setState({units:!0})},a.changeUnitsMM=function(){a.setState({units:!1})},a.changeDimensionsOn=function(){a.setState({dimensions:!0})},a.changeDimensionsOff=function(){a.setState({dimensions:!1})},a.changeDetailsOn=function(){a.setState({details:!0})},a.changeDetailsOff=function(){a.setState({details:!1})},a.changeStairAngle=function(e){a.setState({stairToggle:!0,stairAngle:e.target.value})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:"sidebar",className:"col-2 "},r.a.createElement("div",{className:"sidebar__section"},r.a.createElement(b,{units:this.state.units,changeUnitsIn:this.changeUnitsIn,changeUnitsMM:this.changeUnitsMM}),r.a.createElement(N,{dimensions:this.state.dimensions,changeDimensionsOn:this.changeDimensionsOn,changeDimensionsOff:this.changeDimensionsOff}),r.a.createElement(w,{details:this.state.details,changeDetailsOn:this.changeDetailsOn,changeDetailsOff:this.changeDetailsOff})),r.a.createElement("div",{className:"sidebar__section--border"}),r.a.createElement("div",{className:"sidebar__section"},r.a.createElement("div",{className:"title"},"Rise-run"),r.a.createElement(f,{totalRunft:this.state.totalRunft,totalRunin:this.state.totalRunin,totalRunfr:this.state.totalRunfr,changetotalRunft:this.changetotalRunft,changetotalRunin:this.changetotalRunin,changetotalRunfr:this.changetotalRunfr}),r.a.createElement(g,{totalRiseft:this.state.totalRiseft,totalRisein:this.state.totalRisein,totalRisefr:this.state.totalRisefr,changetotalRiseft:this.changetotalRiseft,changetotalRisein:this.changetotalRisein,changetotalRisefr:this.changetotalRisefr}),r.a.createElement(h,{idealRunin:this.state.idealRunin,idealRunfr:this.state.idealRunfr,changeidealRunin:this.changeidealRunin,changeidealRunfr:this.changeidealRunfr}),r.a.createElement(m,{idealRisein:this.state.idealRisein,idealRisefr:this.state.idealRisefr,changeidealRisein:this.changeidealRisein,changeidealRisefr:this.changeidealRisefr})),r.a.createElement("div",{className:"sidebar__section--border"}),r.a.createElement(E,{stringerin:this.state.stringerin,stringerfr:this.state.stringerfr,treadin:this.state.treadin,treadfr:this.state.treadfr,riserin:this.state.riserin,riserfr:this.state.riserfr,nosingin:this.state.nosingin,nosingfr:this.state.nosingfr,changestringerin:this.changestringerin,changestringerfr:this.changestringerfr,changetreadin:this.changetreadin,changetreadfr:this.changetreadfr,changeriserin:this.changeriserin,changeriserfr:this.changeriserfr,changenosingin:this.changenosingin,changenosingfr:this.changenosingfr,details:this.state.details}),r.a.createElement("div",{className:"sidebar__section--border"}),r.a.createElement("div",{className:"sidebar__section"},r.a.createElement("div",{className:"title"},"Headroom"),r.a.createElement(R,{totalRunft:this.state.totalRunft,totalRunin:this.state.totalRunin,totalRunfr:this.state.totalRunfr,headroomLength:this.state.headroomLength,changeheadroomlength:this.changeheadroomlength}),r.a.createElement(y,{floorft:this.state.floorft,floorin:this.state.floorin,floorfr:this.state.floorfr,changefloorft:this.changefloorft,changefloorin:this.changefloorin,changefloorfr:this.changefloorfr})),r.a.createElement("div",{className:"sidebar__section--border"}),r.a.createElement(p,{idealRunin:this.state.idealRunin,idealRunfr:this.state.idealRunfr,idealRisein:this.state.idealRisein,idealRisefr:this.state.idealRisefr,changeStairAngle:this.changeStairAngle,stairAngle:this.state.stairAngle})),r.a.createElement("div",{id:"container",className:"col-10"},r.a.createElement(_,{totalRunft:this.state.totalRunft,totalRunin:this.state.totalRunin,totalRunfr:this.state.totalRunfr,totalRiseft:this.state.totalRiseft,totalRisein:this.state.totalRisein,totalRisefr:this.state.totalRisefr,idealRunin:this.state.idealRunin,idealRunfr:this.state.idealRunfr,idealRisein:this.state.idealRisein,idealRisefr:this.state.idealRisefr,boolean:this.state.runOn,runCount:this.state.runCount,riseCount:this.state.riseCount,stringerin:this.state.stringerin,stringerfr:this.state.stringerfr,floorft:this.state.floorft,floorin:this.state.floorin,floorfr:this.state.floorfr,headroomLength:this.state.headroomLength,headroomDelta:this.state.headroomDelta,treadin:this.state.treadin,treadfr:this.state.treadfr,riserin:this.state.riserin,riserfr:this.state.riserfr,nosingin:this.state.nosingin,nosingfr:this.state.nosingfr,details:this.state.details,dimensions:this.state.dimensions,stairAngle:this.state.stairAngle,stairToggle:this.state.stairToggle}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(87).load({custom:{families:["S\xf6hne Mono Buch","S\xf6hne Mono Halbfett","S\xf6hne Buch","S\xf6hne Buch Kursiv","S\xf6hne Halbfett","Pilat","Pilat Compressed"]}}),l.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.834c069c.chunk.js.map