(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,n){e.exports=n.p+"static/media/logo.bb4ea064.jpg"},107:function(e,t,n){e.exports=n.p+"static/media/banner1.790b1975.jpg"},108:function(e,t,n){e.exports=n.p+"static/media/banner2.57c4fb01.jpg"},109:function(e,t,n){e.exports=n.p+"static/media/banner3.87b16c21.jpg"},114:function(e,t,n){e.exports=n(201)},119:function(e,t,n){},120:function(e,t,n){},201:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(4),o=n.n(l),r=(n(119),n(27)),c=n(28),s=n(30),m=n(29),d=n(31),u=(n(120),n(18)),p=n(206),b=n(203),h=n(210),y=n(209),E=n(204),g=n(208),f=n(54),k=n(205),v=n(9),w=n(212),j=n(112),O=n(207),x=Object(j.a)({getUserConfirmation:function(e,t){O.a.confirm({title:"\u786e\u8ba4\u8981\u79bb\u5f00\u5417",content:e,onOk:function(){t(!0)},onCancel:function(){t(!1)}})}}),I=n(106),C=n.n(I),S=n(107),L=n.n(S),M=n(108),D=n.n(M),B=n(109),F=n.n(B),T=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{fontWeight:"bold"}},i.a.createElement("p",null,"I am very honored to be here to meet you!"),i.a.createElement("p",null,"My name is ",i.a.createElement("span",{style:{color:"red"}},"Clark"),"."),i.a.createElement("p",null,"Currently living in ",i.a.createElement("span",{style:{color:"blue"}},"Beijing"),"."),i.a.createElement("p",null,"Is a ",i.a.createElement("span",{style:{color:"green"}},"Web engineer"),"."),i.a.createElement("p",null,"Here, "),i.a.createElement("p",null,"you can find relevant knowledge about the web front end,"),i.a.createElement("p",null,"and some personal insights with me,"),i.a.createElement("p",null,"I hope to help you."))}}]),t}(i.a.Component),H=n(211),z=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(H.a,{mode:"alternate",style:{marginTop:"20px"}},i.a.createElement(H.a.Item,{dot:i.a.createElement(v.a,{type:"clock-circle-o",style:{fontSize:"16px"}})},"Now..."),i.a.createElement(H.a.Item,{dot:i.a.createElement(v.a,{type:"clock-circle-o",style:{fontSize:"16px"}})},"report 2019-09-01"),i.a.createElement(H.a.Item,{dot:i.a.createElement(v.a,{type:"clock-circle-o",style:{fontSize:"16px"}})},"edu 2018-09-01"),i.a.createElement(H.a.Item,{color:"red"},"Network problems being solved 2015-09-01"),i.a.createElement(H.a.Item,null,"Create a services site 2015-09-01"))}}]),t}(i.a.Component),W=p.b.SubMenu,N=b.a.Header,K=b.a.Content,J=b.a.Footer,R=b.a.Sider,A=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).showMe=n.showMe.bind(Object(u.a)(n)),n.renderDrawer=n.renderDrawer.bind(Object(u.a)(n)),n.hiddenMe=n.hiddenMe.bind(Object(u.a)(n)),n.getInitData=n.getInitData.bind(Object(u.a)(n)),n.simulationLoading=n.simulationLoading.bind(Object(u.a)(n)),n.menuClick=n.menuClick.bind(Object(u.a)(n)),n.renderContent=n.renderContent.bind(Object(u.a)(n)),n.contentLoading=n.contentLoading.bind(Object(u.a)(n)),n.hiddenBanner=n.hiddenBanner.bind(Object(u.a)(n)),n.state={loading:!0,contentLoading:!1,visible:!0,placement:"right",showContent:"",bannerFlag:"block",siderFlag:"block"},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.simulationLoading(),this.getInitData(),document.body.scrollTop=document.documentElement.scrollTop=200}},{key:"getInitData",value:function(){fetch("./jsonData/init.json").then(function(e){return e.json()}).then(function(e){}).catch(function(){x.push("/")})}},{key:"showMe",value:function(){this.setState({visible:!0})}},{key:"simulationLoading",value:function(){var e=this;setTimeout(function(){e.setState({loading:!1})},500),setTimeout(function(){e.setState({visible:!1})},4e3)}},{key:"hiddenMe",value:function(){this.setState({visible:!1})}},{key:"renderDrawer",value:function(){return i.a.createElement(h.a,{title:i.a.createElement("span",{style:{fontWeight:"bold"}},"about Me"),placement:this.state.placement,closable:!0,onClose:this.hiddenMe,visible:this.state.visible,width:350},i.a.createElement(T,null))}},{key:"menuClick",value:function(e,t,n){var a=this;"home"!==e.key?a.setState({siderFlag:"none"}):a.setState({siderFlag:"block"}),a.contentLoading(!0),a.setState({showContent:e.key},function(){a.contentLoading(!1)})}},{key:"renderContent",value:function(){switch(this.state.showContent){case"":return i.a.createElement(y.a,{active:!0});case"workExperience":return i.a.createElement(z,null);default:return i.a.createElement(y.a,{active:!0})}}},{key:"contentLoading",value:function(e){e?this.setState({contentLoading:!0}):this.setState({contentLoading:!1})}},{key:"hiddenBanner",value:function(){this.setState({bannerFlag:"none"})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"homeStyle"},i.a.createElement(E.a,{spinning:this.state.loading,tip:"try find something..."},i.a.createElement(b.a,null,i.a.createElement(N,{className:"header"},i.a.createElement("div",{className:"logo",style:{display:"inline-block",boxShadow:"2px 2px 2px",marginRight:"20px"}},i.a.createElement("a",{onClick:this.showMe},i.a.createElement("img",{src:C.a,alt:"logo",style:{width:"54px"}}))),i.a.createElement(p.b,{theme:"dark",mode:"horizontal",onClick:this.menuClick,defaultSelectedKeys:["home"],style:{lineHeight:"64px",display:"inline-block"}},i.a.createElement(p.b.Item,{key:"home"},"Home"),i.a.createElement(p.b.Item,{key:"workExperience"},"workExperience"))),i.a.createElement("div",{style:{width:"100%",height:"1080px",marginTop:"1px",marginBottom:"15px",display:this.state.bannerFlag}},i.a.createElement(g.a,{offsetTop:10,style:{position:"absolute",zIndex:1}},i.a.createElement(f.a,{type:"primary",onClick:function(){e.hiddenBanner()}},"hidden Banner")),i.a.createElement(k.a,{autoplay:!0},i.a.createElement("div",null,i.a.createElement("img",{src:L.a,style:{width:"100%"},alt:"banner"})),i.a.createElement("div",null,i.a.createElement("img",{src:D.a,style:{width:"100%"},alt:"banner"})),i.a.createElement("div",null,i.a.createElement("img",{src:F.a,style:{width:"100%"},alt:"banner"})))),i.a.createElement(K,{style:{padding:"0 50px",minHeight:"800px",marginTop:"15px"}},i.a.createElement(b.a,{style:{padding:"24px 0",background:"#fff"}},i.a.createElement(R,{width:200,style:{background:"#3da8ff",display:this.state.siderFlag}},i.a.createElement(p.b,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%"}},i.a.createElement(W,{key:"sub1",title:i.a.createElement("span",null,i.a.createElement(v.a,{type:"user"}),"\u6280\u672f\u5206\u4eab")},i.a.createElement(p.b.Item,{key:"1"},"option1"),i.a.createElement(p.b.Item,{key:"2"},"option2"),i.a.createElement(p.b.Item,{key:"3"},"option3"),i.a.createElement(p.b.Item,{key:"4"},"option4")),i.a.createElement(W,{key:"sub2",title:i.a.createElement("span",null,i.a.createElement(v.a,{type:"laptop"}),"\u56fe\u4e66\u63a8\u8350")},i.a.createElement(p.b.Item,{key:"5"},"option5"),i.a.createElement(p.b.Item,{key:"6"},"option6"),i.a.createElement(p.b.Item,{key:"7"},"option7"),i.a.createElement(p.b.Item,{key:"8"},"option8")),i.a.createElement(W,{key:"sub3",title:i.a.createElement("span",null,i.a.createElement(v.a,{type:"notification"}),"\u4e2a\u4eba\u611f\u609f")},i.a.createElement(p.b.Item,{key:"9"},"option9"),i.a.createElement(p.b.Item,{key:"10"},"option10"),i.a.createElement(p.b.Item,{key:"11"},"option11"),i.a.createElement(p.b.Item,{key:"12"},"option12")))),i.a.createElement(K,{style:{padding:"0 24px",minHeight:280}},i.a.createElement(E.a,{spinning:this.state.contentLoading,tip:"try find content..."},this.renderContent())))),i.a.createElement(J,{style:{textAlign:"center"}},i.a.createElement(w.a,{visibilityHeight:100}),"Created by ",i.a.createElement("span",{style:{fontWeight:"bold",fontSize:"15px"}},"Clark")," with React")),this.renderDrawer()))}}]),t}(i.a.Component),U=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(A,null)}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[114,1,2]]]);
//# sourceMappingURL=main.54d58680.chunk.js.map