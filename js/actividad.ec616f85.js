(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["actividad"],{"055a":function(e,t,a){e.exports=a.p+"img/2.d7118f20.png"},"159b":function(e,t,a){var r=a("da84"),s=a("fdbc"),o=a("17c2"),n=a("9112");for(var i in s){var c=r[i],d=c&&c.prototype;if(d&&d.forEach!==o)try{n(d,"forEach",o)}catch(u){d.forEach=o}}},"17c2":function(e,t,a){"use strict";var r=a("b727").forEach,s=a("a640"),o=s("forEach");e.exports=o?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"25c1":function(e,t,a){e.exports=a.p+"img/4.a11358bd.png"},"2cc0":function(e,t,a){},"32bd":function(e,t,a){"use strict";a("4afc")},4298:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"curso-main-container pb-3"},[a("BannerInterno",{attrs:{icono:"far fa-question-circle",titulo:"Actividad didáctica"}}),a("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[a("div",{attrs:{id:"Actividad"}},[a("Actividad",{attrs:{cuestionario:e.cuestionario}})],1)])],1)},s=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tarjeta--blanca"},[a("div",{staticClass:"row align-items-center mb-4"},[e._m(0),a("div",{staticClass:"col "},[a("h2",{staticClass:"titulo-tercero mb-0"},[e._v(" "+e._s(e.cuestionario.titulo)+" ")]),a("p",{staticClass:"mb-0",domProps:{innerHTML:e._s(e.cuestionario.introduccion)}})])]),a("div",{staticClass:"tarjeta tarjeta--lightest-gray p-4 p-md-5"},[e.respuestas.length===e.preguntas.length?a("ActividadResultados",{attrs:{respuestas:e.respuestas}}):a("ActividadPregunta",{attrs:{pregunta:e.preguntaSelected},on:{respuestaSelected:e.onRrespuestaSelected}})],1),a("ActividadBarraAvance",{staticClass:"mx-4 mx-md-5",attrs:{"pregunta-index":e.preguntaSelectedIdx,"preguntas-count":e.preguntas.length,"respuestas-length":e.respuestas.length,"continuar-disabled":e.continuarDisabled},on:{continuar:e.onContinuar,reiniciar:e.onReiniciar}})],1)},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-auto"},[r("img",{attrs:{src:a("8da0"),alt:""}})])}],i=a("5530"),c=(a("d81d"),a("c740"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",{staticClass:"mb-4 pb-4",domProps:{innerHTML:e._s(e.pregunta.texto)}}),a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"d-none d-md-block col-5"},[a("img",{attrs:{src:e.pregunta.imagen,alt:""}})]),a("div",{staticClass:"col"},e._l(e.opcionesComputed,(function(t,r){return a("div",{key:t.id,staticClass:"tarjeta tarjeta--azul tarjeta-respuesta p-4",class:{"mb-3":r!==e.opcionesComputed.length-1,"tarjeta-respuesta--correcta":t.correcta,"tarjeta-respuesta--incorrecta":t.incorrecta,"tarjeta-respuesta--disabled":t.disabled},on:{click:function(a){return e.onRespuestaSelected(t)}}},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-auto"},[a("div",{staticClass:"tarjeta-respuesta__icon",class:[e.respuestaSelected.id===t.id?t.esCorrecta?"tarjeta-respuesta__icon--correcto":"tarjeta-respuesta__icon--incorrecto":""]})]),a("div",{staticClass:"col",domProps:{innerHTML:e._s(t.texto)}})])])})),0)]),e.respuestaSelected.id?[a("hr"),e.respuestaSelected.esCorrecta?a("div",{staticClass:"pt-2"},[a("span",{staticClass:"text-success h3 ma-0"},[e._v("¡Correcto!")]),e._v(" "+e._s(e.pregunta.mensaje_correcto)+" ")]):a("div",{staticClass:"pt-2"},[a("span",{staticClass:"text-danger h3 ma-0"},[e._v("¡Incorrecto!")]),e._v(" "+e._s(e.pregunta.mensaje_incorrecto)+" ")])]:e._e()],2)}),d=[],u={name:"ActividadPregunta",props:{pregunta:{type:Object,required:!0}},data:function(){return{respuestaSelected:{}}},computed:{opcionesComputed:function(){if(!this.pregunta.opciones.length)return[];var e=this.respuestaSelected.id;return this.pregunta.opciones.map((function(t){return Object(i["a"])(Object(i["a"])({},t),{},{correcta:e===t.id&&t.esCorrecta,incorrecta:e===t.id&&!t.esCorrecta,disabled:!!e})}))}},watch:{pregunta:function(){this.respuestaSelected={}}},methods:{onRespuestaSelected:function(e){this.respuestaSelected=e,this.$emit("respuestaSelected",e.esCorrecta)}}},l=u,p=(a("32bd"),a("2877")),m=Object(p["a"])(l,c,d,!1,null,"0d0c9f9a",null),f=m.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tarjeta-avance"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"d-none d-md-block col"},[a("div",{staticClass:"tarjeta-avance__barra-container ms-4"},[a("div",{staticClass:"tarjeta-avance__barra",style:{width:e.avanceWidth}})])]),a("div",{staticClass:"col col-md-auto text-center"},[e._v(" Pregunta "+e._s(e.preguntaIndex+1)+" de "+e._s(e.preguntasCount)+" ")]),a("div",{staticClass:"col-auto"},[e.respuestasLength===e.preguntasCount?a("button",{staticClass:"boton btn-lg boton--b py-3 px-5",on:{click:function(t){return e.$emit("reiniciar")}}},[a("span",[e._v("Reiniciar")])]):a("button",{staticClass:"boton btn-lg boton--b py-3 px-4",class:{"boton--disabled":e.continuarDisabled},on:{click:function(t){return e.$emit("continuar")}}},[a("span",[e._v("Continuar")]),a("i",{staticClass:"fas fa-arrow-right"})])])])])},b=[],g=(a("a9e3"),{name:"ActividadBarraAvance",props:{preguntaIndex:{type:Number,required:!0},preguntasCount:{type:Number,required:!0},continuarDisabled:{type:Boolean,default:!1},respuestasLength:{type:Number,default:0}},computed:{avanceWidth:function(){return"".concat((this.preguntaIndex+1)/this.preguntasCount*100,"%")}}}),h=g,j=(a("a631"),Object(p["a"])(h,v,b,!1,null,"7a0121ad",null)),x=j.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row align-items-center justify-content-around"},[r("div",{staticClass:"col-5"},[(e.aprobado,r("img",{attrs:{src:a("a46c"),alt:""}}))]),r("div",{staticClass:"col-4"},[r("div",{staticClass:"d-flex align-items-center flex-column"},[r("div",{staticClass:"resultados__icono mb-4",class:["resultados__icono--"+(e.aprobado?"correcto":"incorrecto")]}),e.aprobado?[r("h3",[e._v("¡BUEN TRABAJO!")]),r("p",{staticClass:"mb-0 text-center"},[e._v(" Se evidencia un buen manejo de los conceptos estudiados en esta unidad. ")])]:[r("h3",[e._v("VUELVE A INTENTARLO")]),r("p",{staticClass:"mb-0 text-center"},[e._v(" Se recomienda revisar el contenido de la unidad para clarificar conceptos. ")])],r("hr",{staticClass:"w-100"}),r("p",{staticClass:"mb-0"},[e._v("Aciertos: "+e._s(e.rtas.correctas)+" / "+e._s(e.rtas.total))])],2)])])},C=[],y=(a("159b"),{name:"ActividadResultados",props:{respuestas:{type:Array,required:!0}},computed:{rtas:function(){var e={correctas:0,incorrectas:0,total:this.respuestas.length,porcentaje:0};return this.respuestas.forEach((function(t){t.esCorrecta?e.correctas++:e.incorrectas++})),e.porcentaje=e.correctas/e.total*100,e},aprobado:function(){return this.rtas.porcentaje>=70}}}),E=y,A=(a("aeef"),Object(p["a"])(E,_,C,!1,null,"360ec089",null)),O=A.exports,R={name:"Actividad",components:{ActividadPregunta:f,ActividadBarraAvance:x,ActividadResultados:O},props:{cuestionario:{type:Object,required:!0},mezclarRespuestas:{type:Boolean,default:!1}},data:function(){return{intentos:0,preguntaSelectedIdx:0,respuestaActual:{},respuestas:[],continuarDisabled:!0}},computed:{preguntas:function(){var e=this,t=this.cuestionario,a=t.preguntas,r=t.barajarPreguntas;if(!a)return[];var s=r?this.shuffle(a):a;return s.map((function(t){return Object(i["a"])(Object(i["a"])({},t),{},{opciones:t.barajarRespuestas?e.shuffle(t.opciones):t.opciones,intentos:e.intentos})}))},preguntaSelected:function(){return this.preguntas[this.preguntaSelectedIdx]}},methods:{shuffle:function(e){var t,a=e.length;while(a>0){t=Math.floor(Math.random()*a),a--;var r=[e[t],e[a]];e[a]=r[0],e[t]=r[1]}return e},onRrespuestaSelected:function(e){this.continuarDisabled=!1,this.respuestaActual={id:this.preguntaSelected.id,esCorrecta:e}},onContinuar:function(){var e=this;if(this.continuarDisabled=!0,this.respuestaActual.id){var t=this.respuestas.findIndex((function(t){return t.id===e.preguntaSelected.id}));-1===t?this.respuestas.push(this.respuestaActual):this.respuestas[t]=this.respuestaActual}this.preguntaSelectedIdx<this.preguntas.length-1&&(this.preguntaSelectedIdx+=1)},onReiniciar:function(){this.preguntaSelectedIdx=0,this.respuestas=[],this.respuestaActual={},this.intentos+=1}}},I=R,S=(a("f212"),Object(p["a"])(I,o,n,!1,null,"1f7092aa",null)),w=S.exports,N={name:"ActividadDidactica",components:{Actividad:w},data:function(){return{cuestionario:{tema:"Técnicas y metodologías educativas",titulo:"Cuestionario",introduccion:"<b> Objetivo:</b> Validar el conocimiento adquirido sobre la competitividad y la gestión turística.",barajarPreguntas:!1,preguntas:[{id:1,texto:"La gestión del turismo se enfoca en la administración y optimización de los recursos turísticos que posee una región o país, estos recursos pueden ser de naturaleza diversa, como el patrimonio natural, histórico, folclórico o gastronómico, entre otros.",imagen:a("46d4"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Verdadero",esCorrecta:!0},{id:"b",texto:"Falso",esCorrecta:!1}],mensaje_correcto:"Excelente trabajo. Tiene claros los conceptos de competitividad y sobre la gestión turística.",mensaje_incorrecto:"Respuesta incorrecta, revise nuevamente el contenido del componente formativo."},{id:2,texto:"El turismo, no contribuye al desarrollo económico local, generando ingresos que permiten mejorar las condiciones sociales de la comunidad.",imagen:a("055a"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Verdadero",esCorrecta:!1},{id:"b",texto:"Falso",esCorrecta:!0}],mensaje_correcto:"Excelente trabajo. Tiene claros los conceptos de competitividad y sobre la gestión turística.",mensaje_incorrecto:"Respuesta incorrecta, revise nuevamente el contenido del componente formativo."},{id:3,texto:"Según Arias (2008), citado por Arauz Beita (2010), esta gestión no debe mantener un equilibrio entre los diferentes componentes del espacio turístico, ni asegurar una interacción armónica entre los atractivos naturales y culturales y la infraestructura necesaria para el turismo.",imagen:a("875f"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Verdadero",esCorrecta:!1},{id:"b",texto:"Falso",esCorrecta:!0}],mensaje_correcto:"Excelente trabajo. Tiene claros los conceptos de competitividad y sobre la gestión turística.",mensaje_incorrecto:"Respuesta incorrecta, revise nuevamente el contenido del componente formativo."},{id:4,texto:"El espacio turístico está definido por la presencia de roles, que facilitan la actividad turística.",imagen:a("25c1"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Verdadero",esCorrecta:!1},{id:"b",texto:"Falso",esCorrecta:!0}],mensaje_correcto:"Excelente trabajo. Tiene claros los conceptos de competitividad y sobre la gestión turística.",mensaje_incorrecto:"Respuesta incorrecta, revise nuevamente el contenido del componente formativo."},{id:5,texto:"La gestión pública se refiere a las actividades desarrolladas por los organismos oficiales para cumplir con los fines del Estado.",imagen:a("46d4"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Verdadero",esCorrecta:!0},{id:"b",texto:"Falso",esCorrecta:!1}],mensaje_correcto:"Excelente trabajo. Tiene claros los conceptos de competitividad y sobre la gestión turística.",mensaje_incorrecto:"Respuesta incorrecta, revise nuevamente el contenido del componente formativo."},{id:6,texto:"La planeación es el proceso inicial donde se establecen los objetivos, estrategias y recursos necesarios para el desarrollo turístico sostenible y competitivo.",imagen:a("055a"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Verdadero",esCorrecta:!0},{id:"b",texto:"Falso",esCorrecta:!1}],mensaje_correcto:"Excelente trabajo. Tiene claros los conceptos de competitividad y sobre la gestión turística.",mensaje_incorrecto:"Respuesta incorrecta, revise nuevamente el contenido del componente formativo."},{id:7,texto:"La gestión turística sostenible implica un equilibrio entre los aspectos económicos, sociales y ambientales sin comprometer el bienestar de futuras generaciones.",imagen:a("875f"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Verdadero",esCorrecta:!0},{id:"b",texto:"Falso",esCorrecta:!1}],mensaje_correcto:"Excelente trabajo. Tiene claros los conceptos de competitividad y sobre la gestión turística.",mensaje_incorrecto:"Respuesta incorrecta, revise nuevamente el contenido del componente formativo."},{id:8,texto:"La competitividad de un destino turístico depende únicamente de sus recursos naturales y culturales, sin necesidad de una gestión eficaz.",imagen:a("25c1"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Verdadero",esCorrecta:!1},{id:"b",texto:"Falso",esCorrecta:!0}],mensaje_correcto:"Excelente trabajo. Tiene claros los conceptos de competitividad y sobre la gestión turística.",mensaje_incorrecto:"Respuesta incorrecta, revise nuevamente el contenido del componente formativo."},{id:9,texto:"El sector privado en el turismo no juega un papel fundamental en la provisión de servicios esenciales como alojamiento y transporte.",imagen:a("46d4"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Verdadero",esCorrecta:!1},{id:"b",texto:"Falso",esCorrecta:!0}],mensaje_correcto:"Excelente trabajo. Tiene claros los conceptos de competitividad y sobre la gestión turística.",mensaje_incorrecto:"Respuesta incorrecta, revise nuevamente el contenido del componente formativo."},{id:10,texto:"El modelo de competitividad de Porter sugiere que un país puede mejorar su prosperidad mediante la organización de sus políticas y leyes enfocadas en la productividad.",imagen:a("055a"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Verdadero",esCorrecta:!0},{id:"b",texto:"Falso",esCorrecta:!1}],mensaje_correcto:"Excelente trabajo. Tiene claros los conceptos de competitividad y sobre la gestión turística.",mensaje_incorrecto:"Respuesta incorrecta, revise nuevamente el contenido del componente formativo."}],mensaje_final_aprobado:"¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.",mensaje_final_reprobado:"No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica."}}},computed:{},methods:{}},P=N,T=Object(p["a"])(P,r,s,!1,null,null,null);t["default"]=T.exports},"46d4":function(e,t,a){e.exports=a.p+"img/1.a37079ad.png"},"4afc":function(e,t,a){},5530:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a("b64b"),a("a4d3"),a("4de4"),a("e439"),a("159b"),a("dbb4");function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},5585:function(e,t,a){},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,a){var r=a("1d80"),s=a("5899"),o="["+s+"]",n=RegExp("^"+o+o+"*"),i=RegExp(o+o+"*$"),c=function(e){return function(t){var a=String(r(t));return 1&e&&(a=a.replace(n,"")),2&e&&(a=a.replace(i,"")),a}};e.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(e,t,a){var r=a("861d"),s=a("d2bb");e.exports=function(e,t,a){var o,n;return s&&"function"==typeof(o=t.constructor)&&o!==a&&r(n=o.prototype)&&n!==a.prototype&&s(e,n),e}},"875f":function(e,t,a){e.exports=a.p+"img/3.2397b0d2.png"},"8da0":function(e,t,a){e.exports=a.p+"img/icon-actividad.3d896e1e.svg"},a46c:function(e,t,a){e.exports=a.p+"img/cuestionario-resultado.a5584db8.svg"},a631:function(e,t,a){"use strict";a("d228")},a640:function(e,t,a){"use strict";var r=a("d039");e.exports=function(e,t){var a=[][e];return!!a&&r((function(){a.call(null,t||function(){throw 1},1)}))}},a9e3:function(e,t,a){"use strict";var r=a("83ab"),s=a("da84"),o=a("94ca"),n=a("6eeb"),i=a("5135"),c=a("c6b6"),d=a("7156"),u=a("c04e"),l=a("d039"),p=a("7c73"),m=a("241c").f,f=a("06cf").f,v=a("9bf2").f,b=a("58a8").trim,g="Number",h=s[g],j=h.prototype,x=c(p(j))==g,_=function(e){var t,a,r,s,o,n,i,c,d=u(e,!1);if("string"==typeof d&&d.length>2)if(d=b(d),t=d.charCodeAt(0),43===t||45===t){if(a=d.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(d.charCodeAt(1)){case 66:case 98:r=2,s=49;break;case 79:case 111:r=8,s=55;break;default:return+d}for(o=d.slice(2),n=o.length,i=0;i<n;i++)if(c=o.charCodeAt(i),c<48||c>s)return NaN;return parseInt(o,r)}return+d};if(o(g,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var C,y=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof y&&(x?l((function(){j.valueOf.call(a)})):c(a)!=g)?d(new h(_(t)),a,y):_(t)},E=r?m(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),A=0;E.length>A;A++)i(h,C=E[A])&&!i(y,C)&&v(y,C,f(h,C));y.prototype=j,j.constructor=y,n(s,g,y)}},aeef:function(e,t,a){"use strict";a("5585")},b64b:function(e,t,a){var r=a("23e7"),s=a("7b0b"),o=a("df75"),n=a("d039"),i=n((function(){o(1)}));r({target:"Object",stat:!0,forced:i},{keys:function(e){return o(s(e))}})},c740:function(e,t,a){"use strict";var r=a("23e7"),s=a("b727").findIndex,o=a("44d2"),n="findIndex",i=!0;n in[]&&Array(1)[n]((function(){i=!1})),r({target:"Array",proto:!0,forced:i},{findIndex:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),o(n)},d228:function(e,t,a){},d81d:function(e,t,a){"use strict";var r=a("23e7"),s=a("b727").map,o=a("1dde"),n=o("map");r({target:"Array",proto:!0,forced:!n},{map:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}})},dbb4:function(e,t,a){var r=a("23e7"),s=a("83ab"),o=a("56ef"),n=a("fc6a"),i=a("06cf"),c=a("8418");r({target:"Object",stat:!0,sham:!s},{getOwnPropertyDescriptors:function(e){var t,a,r=n(e),s=i.f,d=o(r),u={},l=0;while(d.length>l)a=s(r,t=d[l++]),void 0!==a&&c(u,t,a);return u}})},e439:function(e,t,a){var r=a("23e7"),s=a("d039"),o=a("fc6a"),n=a("06cf").f,i=a("83ab"),c=s((function(){n(1)})),d=!i||c;r({target:"Object",stat:!0,forced:d,sham:!i},{getOwnPropertyDescriptor:function(e,t){return n(o(e),t)}})},f212:function(e,t,a){"use strict";a("2cc0")}}]);
//# sourceMappingURL=actividad.ec616f85.js.map