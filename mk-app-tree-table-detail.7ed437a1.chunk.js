webpackJsonp([10],{1922:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,u,c=r(2),o=n(c),s=r(60),i=n(s),f=r(4),d=n(f),p=r(10),l=n(p),h=r(7),m=n(h),v=r(8),k=n(v),x=r(0),b=(n(x),r(289)),w=r(731),y=n(w),_=(a=(0,b.wrapper)(y.default))(u=function(e){function t(){return(0,d.default)(this,t),(0,m.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,k.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){return this.props.monkeyKing((0,o.default)({},this.props,{path:"root"}))}}]),t}(x.Component))||u;t.default=_,e.exports=t.default},1923:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=new x.action(e),r=new _((0,s.default)({},e,{metaAction:t})),n=(0,s.default)({},t,r);return t.config({metaHandlers:n}),n}Object.defineProperty(t,"__esModule",{value:!0});var u=r(16),c=n(u),o=r(2),s=n(o),i=r(113),f=n(i),d=r(631),p=n(d),l=r(632),h=n(l),m=r(4),v=n(m);t.default=a;var k=r(0),x=(n(k),r(289)),b=(r(189),r(9)),w=(n(b),r(664)),y=n(w),_=function e(t){var r=this;(0,v.default)(this,e),this.onInit=function(e){var t=e.component,n=e.injections;r.component=t,r.injections=n,r.component.props.setOkListener&&r.component.props.setOkListener(r.onOk),r.component.props.id?(n.reduce("init"),r.load()):n.reduce("init",{typeId:r.component.props.typeId})},this.load=(0,h.default)(p.default.mark(function e(){var t;return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.webapi.goods.findById(r.component.props.id);case 2:t=e.sent,r.injections.reduce("load",t);case 4:case"end":return e.stop()}},e,r)})),this.onOk=(0,h.default)(p.default.mark(function e(){return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.save();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,r)})),this.save=(0,h.default)(p.default.mark(function e(){var t,n,a,u;return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.metaAction.gf("data.form").toJS(),e.next=3,r.check([{path:"data.form.name",value:t.name},{path:"data.form.code",value:t.code}]);case 3:if(n=e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:if(!t.id){e.next=14;break}return e.next=9,r.webapi.goods.update(t);case 9:return a=e.sent,r.metaAction.toast("success","修改成功"),e.abrupt("return",a);case 14:return e.next=16,r.webapi.goods.create(t);case 16:return u=e.sent,r.metaAction.toast("success","新增成功"),e.abrupt("return",u);case 19:case"end":return e.stop()}},e,r)})),this.fieldChange=function(){var e=(0,h.default)(p.default.mark(function e(t,n){return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.check([{path:t,value:n}]);case 2:case"end":return e.stop()}},e,r)}));return function(t,r){return e.apply(this,arguments)}}(),this.check=function(){var e=(0,h.default)(p.default.mark(function e(t){var n,a,u,o,i,d,l,h,m,v;return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:n=[],a=!0,u=!1,o=void 0,e.prev=6,i=(0,f.default)(t);case 8:if(a=(d=i.next()).done){e.next=31;break}if(l=d.value,h=(0,s.default)({},l),"data.form.name"!=l.path){e.next=20;break}return e.t0=c.default,e.t1=h,e.next=16,r.checkName(l.value);case 16:e.t2=e.sent,(0,e.t0)(e.t1,e.t2),e.next=27;break;case 20:if("data.form.code"!=l.path){e.next=27;break}return e.t3=c.default,e.t4=h,e.next=25,r.checkCode(l.value);case 25:e.t5=e.sent,(0,e.t3)(e.t4,e.t5);case 27:n.push(h);case 28:a=!0,e.next=8;break;case 31:e.next=37;break;case 33:e.prev=33,e.t6=e.catch(6),u=!0,o=e.t6;case 37:e.prev=37,e.prev=38,!a&&i.return&&i.return();case 40:if(e.prev=40,!u){e.next=43;break}throw o;case 43:return e.finish(40);case 44:return e.finish(37);case 45:return m={},v=!0,n.forEach(function(e){m[e.path]=e.value,m[e.errorPath]=e.message,e.message&&(v=!1)}),r.metaAction.sfs(m),e.abrupt("return",v);case 50:case"end":return e.stop()}},e,r,[[6,33,37,45],[38,,40,44]])}));return function(t){return e.apply(this,arguments)}}(),this.checkCode=function(){var e=(0,h.default)(p.default.mark(function e(t){var n;return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t||(n="请录入编码"),e.abrupt("return",{errorPath:"data.other.error.code",message:n});case 2:case"end":return e.stop()}},e,r)}));return function(t){return e.apply(this,arguments)}}(),this.checkName=function(){var e=(0,h.default)(p.default.mark(function e(t){var n;return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t||(n="请录入名称"),e.abrupt("return",{errorPath:"data.other.error.name",message:n});case 2:case"end":return e.stop()}},e,r)}));return function(t){return e.apply(this,arguments)}}(),this.metaAction=t.metaAction,this.config=y.default.current,this.webapi=this.config.webapi};e.exports=t.default},1924:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=new l.reducer(e),r=new k((0,i.default)({},e,{metaReducer:t}));return(0,i.default)({},t,r)}Object.defineProperty(t,"__esModule",{value:!0});var u,c,o,s=r(2),i=n(s),f=r(4),d=n(f);t.default=a;var p=r(189),l=r(289),h=r(664),m=(n(h),r(9)),v=(n(m),r(732)),k=(c=u=function e(t){(0,d.default)(this,e),o.call(this),this.metaReducer=t.metaReducer},o=function(){var e=this;this.init=function(t,r){var n=(0,v.getInitState)();return r&&r.typeId&&(n.data.form.type=r.typeId),e.metaReducer.init(t,n)},this.load=function(t,r){return e.metaReducer.sf(t,"data.form",(0,p.fromJS)(r))}},c);e.exports=t.default}});