(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{50:function(e,t,a){e.exports=a(83)},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(21),o=a.n(i),c=a(12),l=a(13),s=a(15),m=a(14),u=a(16),d=a(6),p=a.n(d),g=a(4),f=a(10),h=a(8);function y(e){var t=e.style,a=e.symbol,n=e.onClick,i=e.className;return r.a.createElement("button",{style:Object(g.a)({fontSize:"inherit"},t,{padding:0,border:"none",background:"none",outline:"none",pointerEvents:"auto"}),onClick:n,type:"button",className:i},a)}y.defaultProps={onClick:null,className:null};var b=y,v={center:h.Keyframes.Spring({show:{opacity:1},spin:function(){var e=Object(f.a)(p.a.mark(function e(t){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({transform:"rotate(0deg)",config:{easing:function(e){return e},duration:0}});case 2:return e.next=4,t({transform:"rotate(1080000deg)",config:{easing:function(e){return e},duration:5e7}});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}),earth:h.Keyframes.Spring({show:{opacity:1},spin:function(){var e=Object(f.a)(p.a.mark(function e(t){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({transform:"rotate(0deg)",config:{easing:function(e){return e},duration:0}});case 2:return e.next=4,t({transform:"rotate(39420000deg)",config:{easing:function(e){return e},duration:5e7}});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}),comet:h.Keyframes.Spring({show:{opacity:1},spin:function(){var e=Object(f.a)(p.a.mark(function e(t){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({transform:"rotate(180deg)",config:{easing:function(e){return e},duration:0}});case 2:return e.next=4,t({transform:"rotate(3180deg)",config:{easing:function(e){return e},duration:5e7}});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()})},E=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={day:!0},a.onClick=function(){var e=a.state.day;document.body.style.backgroundColor=e?"#171c28":"white",document.body.style.color=e?"white":"black";var t=!0,n=!1,r=void 0;try{for(var i,o=document.getElementsByTagName("a")[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var c=i.value;c.style.color=e?"white":"black","imnields@gmail.com"!==c.innerText&&"\ud83d\udd17"!==c.innerText&&"social-icon"!==c.className&&"tab"!==c.getAttribute("role")&&(c.style.boxShadow=e?"inset 0 -1.5px 0 0 white":null)}}catch(f){n=!0,r=f}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}var l=!0,s=!1,m=void 0;try{for(var u,d=document.getElementsByClassName("card")[Symbol.iterator]();!(l=(u=d.next()).done);l=!0){u.value.style.border=e?"1px solid white":"1px solid black"}}catch(f){s=!0,m=f}finally{try{l||null==d.return||d.return()}finally{if(s)throw m}}var p=Object(g.a)({},a.state,{day:!e});a.setState(p)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.day;return r.a.createElement("div",{style:{top:"5.0vh",right:"7.0vw",position:"absolute"}},r.a.createElement(b,{className:"l",style:{fontSize:null,zIndex:-1,userSelect:"none"},symbol:e?"\u2600\ufe0f":"\ud83c\udf11",onClick:this.onClick}),r.a.createElement(v.center,{state:"spin"},function(t){return r.a.createElement("span",{style:Object(g.a)({},t,{paddingLeft:"5.0vh",marginLeft:-30,marginTop:20,position:"absolute",zIndex:-1,transformOrigin:"left"})},e?r.a.createElement(v.earth,{state:"spin"},function(e){return r.a.createElement(b,{className:"xs",style:Object(g.a)({},e,{fontSize:null,lineHeight:0,lineWidth:0}),symbol:"\ud83c\udf0e"})}):r.a.createElement(v.comet,{state:"spin"},function(e){return r.a.createElement(b,{style:Object(g.a)({},e,{fontSize:19}),symbol:"\ud83d\ude80\ufe0f"})}))}))}}]),t}(r.a.Component),w={container:{height:"100vh"},greeting:{position:"absolute",left:"10vw",top:"15vh",letterSpacing:1},introduction:{position:"absolute",left:"10vw",top:"35vh",maxWidth:700,marginRight:"15vw",letterSpacing:1,lineHeight:1.9},contact:{position:"absolute",left:"10vw",top:"80vh",pointerEvents:"auto"}},k={wave:h.Keyframes.Spring({show:{opacity:1,paddingLeft:0,paddingTop:0},wave:function(){var e=Object(f.a)(p.a.mark(function e(t,a,n){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({transform:"rotate(0deg)",paddingTop:0,paddingLeft:0});case 2:return e.next=4,t({transform:"rotate(-10deg)",paddingLeft:0,paddingTop:15,config:Object(g.a)({},h.config.gentle,{duration:150})});case 4:return e.next=6,t({transform:"rotate(0deg)",paddingLeft:19,paddingTop:0,config:Object(g.a)({},h.config.gentle,{duration:150})});case 6:return e.next=8,t({transform:"rotate(-10deg)",paddingLeft:0,paddingTop:15,config:Object(g.a)({},h.config.gentle,{duration:200})});case 8:return e.next=10,t({transform:"rotate(0deg)",paddingLeft:16,paddingTop:0,config:Object(g.a)({},h.config.gentle,{duration:200})});case 10:return e.next=12,t({transform:"rotate(-10deg)",paddingLeft:0,paddingTop:15,config:Object(g.a)({},h.config.gentle,{duration:200})});case 12:return e.next=14,t({transform:"rotate(0deg)",paddingLeft:16,paddingTop:0,config:Object(g.a)({},h.config.gentle,{duration:200})});case 14:return e.next=16,t({transform:"rotate(-2deg)",paddingLeft:13,paddingTop:2,config:Object(g.a)({},h.config.gentle,{duration:150})});case 16:return e.next=18,t({transform:"rotate(0deg)",paddingLeft:0,paddingTop:0,config:Object(g.a)({},h.config.gentle,{duration:200})});case 18:n.onRest();case 19:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}()}),poke:h.Keyframes.Spring({show:{opacity:1},poke:function(){var e=Object(f.a)(p.a.mark(function e(t,a,n){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({paddingLeft:0,paddingRight:0,config:{easing:function(e){return e},duration:100}});case 2:return e.next=4,t({paddingLeft:10,paddingRight:0,config:{easing:function(e){return e},duration:100}});case 4:return e.next=6,t({paddingLeft:0,paddingRight:0,config:{easing:function(e){return e},duration:100}});case 6:n.onRest();case 7:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}()}),link:h.Keyframes.Spring({show:{opacity:1},poke:function(){var e=Object(f.a)(p.a.mark(function e(t,a,n){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({paddingLeft:0,paddingRight:0,config:{easing:function(e){return e},duration:100}});case 2:return e.next=4,t({paddingLeft:10,paddingRight:0,config:{easing:function(e){return e},duration:100}});case 4:return e.next=6,t({paddingLeft:0,paddingRight:0,config:{easing:function(e){return e},duration:100}});case 6:n.onRest();case 7:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}()})},x=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={animateWave:!0,animatePoke:!1},a.onClickWave=function(){var e=Object(g.a)({},a.state,{animateWave:!0});a.setState(e)},a.onEndWave=function(){var e=Object(g.a)({},a.state,{animateWave:!1});a.setState(e)},a.onClickPoke=function(){var e=Object(g.a)({},a.state,{animatePoke:!0});a.setState(e)},a.onEndPoke=function(){var e=Object(g.a)({},a.state,{animatePoke:!1});a.setState(e)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.animateWave,n=t.animatePoke;return r.a.createElement("div",{style:w.container},r.a.createElement(E,null),r.a.createElement("div",{style:w.greeting,className:"xl"},"Hello!\xa0",r.a.createElement(k.wave,{state:a?"wave":"show",onRest:this.onEndWave},function(t){return r.a.createElement("span",null,r.a.createElement(b,{onClick:e.onClickWave,symbol:"\ud83d\udc4b",style:Object(g.a)({},t,{transformOrigin:"center",position:"absolute"}),label:"wave"}))})),r.a.createElement("div",{style:w.introduction,className:"l"},"I'm ",r.a.createElement("b",null,"Isaiah Nields"),", a CS student with expertise in machine learning."," I'll ","be a SWE Intern at Facebook for Summer 2019 \ud83d\udc68\u200d\ud83d\udcbb"),r.a.createElement("div",{style:w.contact,className:"m"},"Get in touch \xa0",r.a.createElement(k.poke,{state:n?"poke":"show",onRest:this.onEndPoke},function(t){return r.a.createElement(b,{onClick:e.onClickPoke,style:t,symbol:" \ud83d\udc49 ",label:"point-right"})}),"\xa0",r.a.createElement("a",{className:"m",style:w.link,target:"_blank",rel:"noopener noreferrer",href:"mailto:imnields@gmail.com"},"imnields@gmail.com")))}}]),t}(n.Component),S=a(84),j=a(86),O=a(85),L=a(88),C=a(87),P={date:{fontFamily:"Inconsolata,monospace",fontSie:"10pt",whiteSpace:"nowrap"},location:{fontWeight:"bold",fontSie:"10pt",whiteSpace:"nowrap"}},T=function(e){function t(e){var a;Object(c.a)(this,t);var n=(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).props.jobs;return a.state={key:n[0].company},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.jobs,t=this.state.key;return r.a.createElement(L.a.Container,{defaultActiveKey:t},r.a.createElement(S.a,null,r.a.createElement(O.a,{sm:3,style:{marginRight:"10px"}},r.a.createElement(C.a,{variant:"pills",className:"flex-column"},e.map(function(e){return r.a.createElement(C.a.Item,{key:e.company},r.a.createElement(C.a.Link,{eventKey:e.company},e.company))}))),r.a.createElement(O.a,{sm:7,style:{marginTop:"10px"}},r.a.createElement(L.a.Content,null,e.map(function(e){return r.a.createElement(L.a.Pane,{key:e.company,eventKey:e.company},r.a.createElement(S.a,null,r.a.createElement(O.a,{style:P.location},"\ud83d\udccd ",e.location),r.a.createElement(O.a,{md:7,style:P.date},"\ud83d\udcc5 ",e.date)),r.a.createElement("ul",null,e.items.map(function(e){return r.a.createElement("li",{key:e},e)})))})))))}}]),t}(r.a.Component),R=a(11),N=a.n(R),W={container:{paddingBottom:"70px"},title:{color:"#007bff",fontWeight:"bold",letterSpacing:2,fontSize:"16pt",marginBottom:"20px"},content:{lineHeight:"25pt",fontSize:"13pt"}};function A(e){var t=e.children,a=e.title;return r.a.createElement(j.a,{style:W.container},r.a.createElement(S.a,null,r.a.createElement(O.a,{lg:2,style:W.title},a),r.a.createElement(O.a,{lg:10,style:W.content},t)))}A.propTyps={children:N.a.objectOf(N.a.object).isRequired,title:N.a.string.isRequired};var I=A;var M=function(e){var t=e.href,a=e.children;return r.a.createElement("a",{href:t,className:"small-link",target:"_blank",rel:"noopener noreferrer"},a)},B={margin:"10px 0px 0px 15px",color:"rgb(0, 123, 255)",border:"1px solid rgb(0, 123, 255)",borderRadius:"5px",paddingLeft:"10px",paddingRight:"10px",fontWeight:"bold",fontSize:"10pt",whiteSpace:"nowrap"};var F=function(e){var t=e.children;return r.a.createElement("span",{style:B},t)},J={container:{paddingBottom:"40px"},icon:{width:"25pt",marginLeft:"12.5pt",boxShadow:"0pt 0pt 1pt 0px",borderRadius:"25pt"},award:{fontWeight:"bold"}};function H(e){var t=e.icon,a=e.title,n=e.children,i=e.stack,o=e.href,c=e.award;return r.a.createElement(j.a,{style:J.container},r.a.createElement(S.a,null,r.a.createElement(O.a,{lg:.1},r.a.createElement("img",{src:t,style:J.icon,alt:"icon"})),r.a.createElement(O.a,null,r.a.createElement("span",{style:J.title},r.a.createElement(M,{href:o},a)))),r.a.createElement(S.a,null,r.a.createElement(O.a,null,n)),r.a.createElement(S.a,null,r.a.createElement(O.a,{style:J.award},c)),r.a.createElement(S.a,null,i.map(function(e){return r.a.createElement(F,{key:e},e)})))}H.defaultProps={award:""};var z=H,K=a(89),G={link:{textDecoration:"none",float:"right"},title:{fontSize:"13pt",display:"flex",height:"30pt"},date:{float:"left",fontFamily:"Inconsolata,monospace"},card:{marginBottom:"25px",backgroundColor:"inherit",border:"1px solid black"},image:{maxHeight:"480px",maxWidth:"270px",marginRight:"auto",marginLeft:"auto",paddingTop:"10px"}};var D=function(e){var t=e.date,a=e.title,n=e.img,i=e.link;return r.a.createElement(K.a,{style:G.card},r.a.createElement(K.a.Img,{variant:"top",src:n,style:G.image}),r.a.createElement(K.a.Body,null,r.a.createElement(K.a.Title,{style:G.title},r.a.createElement("span",{style:{alignSelf:"flex-end"}},a)),r.a.createElement("span",{style:G.date},"\ud83d\udcc5 ",t),r.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer",style:G.link},"\ud83d\udd17")))},_={title:{fontWeight:"bold"},list:{listStyleType:"none",paddingLeft:0},container:{paddingBottom:"10px"}};var q=function(e){var t=e.items,a=e.title;return r.a.createElement("div",{style:_.container},r.a.createElement("div",{style:_.title},a),r.a.createElement("ul",{style:_.list},t.map(function(e){return r.a.createElement("li",{key:e},e)})))},Q={marginLeft:"6vw",marginRight:"5vw"};var V=function(){return r.a.createElement("div",{style:Q},r.a.createElement(I,{title:"About Me"},"I'm a 2nd-year computer science undergrad at the ",r.a.createElement(M,{href:"http://www.ufl.edu/"},"University of Florida"),". While I'm not big on going to class, I enjoy learning through my personal projects. "," For my projects, I focus on simplicity, efficiency, and utility. ","When I'm not in in front of a computer, I enjoy playing basketball and reading."),r.a.createElement(I,{title:"Projects"},r.a.createElement(S.a,null,r.a.createElement(z,{title:"DeepTrash",icon:"https://raw.githubusercontent.com/isaiahnields/deep-trash/master/icon.png",stack:["Keras","Tensorflow","Python","Arduino","Raspberry Pi"],href:"https://github.com/isaiahnields/deep-trash",award:"\ud83c\udfc6 1st Place - MakeHarvard 2019 \ud83c\udfc6"},"An intelligent trashcan that automatically sorts your waste for you"),r.a.createElement(z,{icon:"https://raw.githubusercontent.com/isaiahnields/danger.ai/master/logo.png",title:"Danger.ai",stack:["OpenPose","Python","JavaScript","HTML","CSS","Google Cloud Platform"],href:"https://github.com/isaiahnields/danger.ai",award:"\ud83e\udd48 2nd Place - SwampHacks V \ud83e\udd48"},"A video monitoring system powered by deep learning"),r.a.createElement(z,{icon:"https://raw.githubusercontent.com/isaiahnields/machine-learning-models/master/icon.png",title:"Machine Learning Models",stack:["Python","NumPy","SciPy","Matplotlib","Seaborn","ImageMagick"],href:"https://github.com/isaiahnields/machine-learning-from-scratch"},"A collection of machine learning models implemented from scratch"),r.a.createElement(z,{icon:"https://raw.githubusercontent.com/isaiahnields/csv-to-sqlite/master/build/icons/icon.png",title:"CSV to SQLite",stack:["Electron","JavaScript","HTML","CSS","SQLite","Material UI"],href:"https://github.com/isaiahnields/csv-to-sqlite",award:"\u2601\ufe0f 950+ downloads \u2601\ufe0f"},"A desktop app to convert CSV files to SQLite databases"),r.a.createElement(z,{icon:"https://raw.githubusercontent.com/isaiahnields/business-classifier/master/logo.png",title:"Business Classifier",stack:["Python","Tkinter","Selenium","Yelp API","Facebook Graph API"],href:"https://github.com/isaiahnields/business-classifier"},"A business classifier that uses data from Facebook, Google, and Yelp"),r.a.createElement(z,{icon:"https://raw.githubusercontent.com/isaiahnields/web-loader/master/logo.png",title:"Web Loader",stack:["JavaScript","PhantomJS"],href:"https://github.com/isaiahnields/web-loader"},"A website downloader with a built-in JavaScript engine"),r.a.createElement(z,{icon:"https://raw.githubusercontent.com/isaiahnields/app-scraper/master/logo.png",title:"App Scraper",stack:["JavaScript","NodeJS","Google Sheets API"],href:"https://github.com/isaiahnields/app-scraper"},"A scraper that saves Google Play and App Store data to a spreadsheet"),r.a.createElement(z,{icon:"https://raw.githubusercontent.com/isaiahnields/search-queue/master/resources/images/icon.png",title:"Search Queue",stack:["JavaScript","HTML","CSS","Chrome Extension"],href:"https://github.com/isaiahnields/search-queue"},"A queue for searching the web"))),r.a.createElement(I,{title:"Experience"},r.a.createElement(T,{jobs:[{company:"Facebook",items:["Will be working on applied machine learning projects for the Video ASR team.","Super pumped for my first day\u2014May 28."],location:"Menlo Park, CA",date:"May 2019 - Aug 2019"},{company:"iMobile3",items:["Built machine learning models to predict merchant churn.","Analyzed data about 22 competitor POS applications.","Created tools to automate business tasks which saved hours for team."],location:"Jacksonville, FL",date:"Jan 2018 - Jan 2019"},{company:"Coleman Lab",items:["Developed a low-cost operant chamber for mouse behavior experiments.","Created object tracking script to record mouse (x, y) position.","Received 1st place at Florida State Science Fair for work."],location:"Gainesville, FL",date:"May 2016 - May 2017"}]})),r.a.createElement(I,{title:"Writing"},r.a.createElement(j.a,null,r.a.createElement(S.a,null,r.a.createElement(O.a,{lg:6,md:6},r.a.createElement(D,{title:"Neural Networks: why do they work so well? Part I",img:"https://raw.githubusercontent.com/isaiahnields/machine-learning-models/master/demos/results/2_spiral_neural_network.gif",link:"https://towardsdatascience.com/neural-networks-why-do-they-work-so-well-part-i-22f0d3690511",date:"Apr 3, 2019"})),r.a.createElement(O.a,{lg:6,md:6},r.a.createElement(D,{title:"Linear Regression from Scratch",img:"https://raw.githubusercontent.com/isaiahnields/machine-learning-models/master/demos/results/linear_regression_train.gif",link:"https://towardsdatascience.com/linear-regression-from-scratch-977cd3a1db16",date:"Feb 1, 2019"})),r.a.createElement(O.a,null,r.a.createElement(D,{title:"DeepTrash @ MakeHarvard 2019",img:"https://cdn-images-1.medium.com/max/800/1*DBhJOOcWXUiVjZaYfExWSQ.gif",link:"https://medium.com/@isaiahnields/deeptrash-makeharvard-2019-aa0a9cf0b68b",date:"Feb 6, 2019"}))))),r.a.createElement(I,{title:"Skills"},r.a.createElement(S.a,null,r.a.createElement(O.a,{xl:3,md:6,xs:6},r.a.createElement(q,{title:"Languages",items:["Python","JavaScript","Java","C++","HTML","CSS","SQL"]})),r.a.createElement(O.a,{xl:3,md:6,xs:6},r.a.createElement(q,{title:"Tools",items:["Bash","Git & GitHub","Postman","Chrome DevTools"]})),r.a.createElement(O.a,{xl:3,md:6,xs:6},r.a.createElement(q,{title:"Libraries",items:["TensorFlow","PyTorch","Keras","Pandas","React","Node.js","Electron"]})),r.a.createElement(O.a,{xl:3,md:6,xs:6},r.a.createElement(q,{title:"Machine Learning",items:["Feedforward NN","Recurrent NN","Convolutional NN","Gradient Descent","Regression","Gradient Boosting"]})))))},U=a(48),Y={fontSize:"12pt",marginRight:"10vw",float:"right"},X=U.Keyframes.Spring({show:{opacity:1},beat:function(){var e=Object(f.a)(p.a.mark(function e(t){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({transform:"scale(1.0)",config:{duration:0}});case 2:return e.next=4,t({transform:"scale(1.2)",config:{duration:900}});case 4:return e.next=6,t({transform:"scale(1.0)",config:{duration:900}});case 6:return e.next=8,t({transform:"scale(1.2)",config:{duration:900}});case 8:return e.next=10,t({transform:"scale(1.0)",config:{duration:900}});case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()});var Z=function(e){var t=e.text;return r.a.createElement("div",null,r.a.createElement(X,{state:"show"},function(e){return r.a.createElement(b,{style:Object(g.a)({},e,Y,{transform:"scale(1.0)"}),symbol:t})}))},$=a(49),ee={container:{float:"left",marginBottom:"3vh",marginLeft:"7vw"},icon:{width:"20pt",height:"20pt",marginRight:"5px",boxShadow:"0px"}};var te=function(e){var t=e.sites;return r.a.createElement("div",{style:ee.container},t.map(function(e){return r.a.createElement($.SocialIcon,{key:e,style:ee.icon,url:e})}))},ae=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S.a,null,r.a.createElement(O.a,null,r.a.createElement(te,{sites:["https://www.linkedin.com/in/isaiahnields/","https://twitter.com/isaiahnields","https://github.com/isaiahnields","https://medium.com/@isaiahnields"]})),r.a.createElement(O.a,null,r.a.createElement(Z,{text:"\u2764\ufe0f"}))))}}]),t}(r.a.Component);a(82);var ne=function(){return r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement(V,null),r.a.createElement(ae,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[50,1,2]]]);
//# sourceMappingURL=main.59ae5a15.chunk.js.map