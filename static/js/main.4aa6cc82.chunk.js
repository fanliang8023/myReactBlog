(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,n){e.exports=n.p+"static/media/logo.bb4ea064.jpg"},111:function(e,t,n){e.exports=n.p+"static/media/banner1.790b1975.jpg"},112:function(e,t,n){e.exports=n.p+"static/media/banner2.57c4fb01.jpg"},113:function(e,t,n){e.exports=n.p+"static/media/banner3.87b16c21.jpg"},121:function(e,t,n){e.exports=n(212)},126:function(e,t,n){},127:function(e,t,n){},212:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(5),o=n.n(l),r=(n(126),n(42)),c=n(43),m=n(49),s=n(44),u=n(48),d=(n(127),n(221)),p=n(26),b=n(217),h=Object(p.a)({getUserConfirmation:function(e,t){b.a.confirm({title:"\u786e\u8ba4\u8981\u79bb\u5f00\u5417",content:e,onOk:function(){t(!0)},onCancel:function(){t(!1)}})}}),y=n(30),E=n(218),g=n(214),f=n(220),k=n(215),v=n(216),w=n(9),j=n(219),O=n(222),x=n(110),I=n.n(x),C=n(111),M=n.n(C),D=n(112),S=n.n(D),H=n(113),W=n.n(H),B=function(e){function t(){return Object(r.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{fontWeight:"bold"}},i.a.createElement("p",null,"I am very honored to be here to meet you!"),i.a.createElement("p",null,"My name is ",i.a.createElement("span",{style:{color:"red"}},"Clark"),"."),i.a.createElement("p",null,"Currently living in ",i.a.createElement("span",{style:{color:"blue"}},"Beijing"),"."),i.a.createElement("p",null,"Is a ",i.a.createElement("span",{style:{color:"green"}},"Web engineer"),"."),i.a.createElement("p",null,"Here, "),i.a.createElement("p",null,"you can find relevant knowledge about the web front end,"),i.a.createElement("p",null,"and some personal insights with me,"),i.a.createElement("p",null,"I hope to help you."))}}]),t}(i.a.Component),L=E.b.SubMenu,T=g.a.Header,K=g.a.Content,N=g.a.Footer,z=g.a.Sider,J=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(m.a)(this,Object(s.a)(t).call(this,e))).showMe=n.showMe.bind(Object(y.a)(n)),n.renderDrawer=n.renderDrawer.bind(Object(y.a)(n)),n.hiddenMe=n.hiddenMe.bind(Object(y.a)(n)),n.getInitData=n.getInitData.bind(Object(y.a)(n)),n.simulationLoading=n.simulationLoading.bind(Object(y.a)(n)),n.state={loading:!0,visible:!0,placement:"right"},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.simulationLoading(),this.getInitData(),document.body.scrollTop=document.documentElement.scrollTop=200}},{key:"getInitData",value:function(){fetch("./jsonData/init.json").then(function(e){return e.json()}).then(function(e){}).catch(function(){h.push("/")})}},{key:"showMe",value:function(){this.setState({visible:!0})}},{key:"simulationLoading",value:function(){var e=this;setTimeout(function(){e.setState({loading:!1})},500)}},{key:"hiddenMe",value:function(){this.setState({visible:!1})}},{key:"renderDrawer",value:function(){return i.a.createElement(f.a,{title:i.a.createElement("span",{style:{fontWeight:"bold"}},"about Me"),placement:this.state.placement,closable:!0,onClose:this.hiddenMe,visible:this.state.visible,width:350},i.a.createElement(B,null))}},{key:"render",value:function(){return i.a.createElement("div",{className:"homeStyle"},i.a.createElement(k.a,{spinning:this.state.loading,tip:"try find something..."},i.a.createElement(g.a,null,i.a.createElement(T,{className:"header"},i.a.createElement("div",{className:"logo",style:{display:"inline-block",boxShadow:"2px 2px 2px",marginRight:"20px"}},i.a.createElement("a",{onClick:this.showMe},i.a.createElement("img",{src:I.a,alt:"logo",style:{width:"54px"}}))),i.a.createElement(E.b,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["home"],style:{lineHeight:"64px",display:"inline-block"}},i.a.createElement(E.b.Item,{key:"home"},"Home"))),i.a.createElement("div",{style:{width:"100%",height:"1080px",marginTop:"1px",marginBottom:"30px"}},i.a.createElement(v.a,{autoplay:!0},i.a.createElement("div",null,i.a.createElement("img",{src:M.a,style:{width:"100%"},alt:"banner"})),i.a.createElement("div",null,i.a.createElement("img",{src:S.a,style:{width:"100%"},alt:"banner"})),i.a.createElement("div",null,i.a.createElement("img",{src:W.a,style:{width:"100%"},alt:"banner"})))),i.a.createElement(K,{style:{padding:"0 50px"}},i.a.createElement(g.a,{style:{padding:"24px 0",background:"#fff"}},i.a.createElement(z,{width:200,style:{background:"#3da8ff"}},i.a.createElement(E.b,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%"}},i.a.createElement(L,{key:"sub1",title:i.a.createElement("span",null,i.a.createElement(w.a,{type:"user"}),"\u6280\u672f\u5206\u4eab")},i.a.createElement(E.b.Item,{key:"1"},"option1"),i.a.createElement(E.b.Item,{key:"2"},"option2"),i.a.createElement(E.b.Item,{key:"3"},"option3"),i.a.createElement(E.b.Item,{key:"4"},"option4")),i.a.createElement(L,{key:"sub2",title:i.a.createElement("span",null,i.a.createElement(w.a,{type:"laptop"}),"\u56fe\u4e66\u63a8\u8350")},i.a.createElement(E.b.Item,{key:"5"},"option5"),i.a.createElement(E.b.Item,{key:"6"},"option6"),i.a.createElement(E.b.Item,{key:"7"},"option7"),i.a.createElement(E.b.Item,{key:"8"},"option8")),i.a.createElement(L,{key:"sub3",title:i.a.createElement("span",null,i.a.createElement(w.a,{type:"notification"}),"\u4e2a\u4eba\u611f\u609f")},i.a.createElement(E.b.Item,{key:"9"},"option9"),i.a.createElement(E.b.Item,{key:"10"},"option10"),i.a.createElement(E.b.Item,{key:"11"},"option11"),i.a.createElement(E.b.Item,{key:"12"},"option12")))),i.a.createElement(K,{style:{padding:"0 24px",minHeight:280}},i.a.createElement(j.a,{active:!0})))),i.a.createElement(N,{style:{textAlign:"center"}},i.a.createElement(O.a,{visibilityHeight:100}),"Created by ",i.a.createElement("span",{style:{fontWeight:"bold",fontSize:"15px"}},"Clark")," with React")),this.renderDrawer()))}}]),t}(i.a.Component),R=function(e){function t(){return Object(r.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(d.b,{history:h},i.a.createElement("div",{style:{height:"100%",width:"100%"}},i.a.createElement(d.a,{exact:!0,path:"/",component:J})))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[121,1,2]]]);
//# sourceMappingURL=main.4aa6cc82.chunk.js.map