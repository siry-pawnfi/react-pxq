webpackJsonp([1],{518:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c,l,s=n(5),a=n.n(s),p=n(51),A=(n.n(p),n(113)),u=n(527),m=n(7),f=n.n(m),d=n(181),B=n(528),C=(n.n(B),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),g=(l=c=function(e){function t(){var e,n,i,c;r(this,t);for(var l=arguments.length,s=Array(l),a=0;a<l;a++)s[a]=arguments[a];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),i.handleEdit=function(e,t){var n=i.props.proData.dataList[e].selectNum+t;n<0||i.props.editPro(e,n)},i.togSelect=function(e){i.props.togSelectPro(e)},c=n,o(i,c)}return i(t,e),C(t,[{key:"shouldComponentUpdate",value:function(e,t){return!Object(p.is)(Object(p.fromJS)(this.props),Object(p.fromJS)(e))||!Object(p.is)(Object(p.fromJS)(this.state),Object(p.fromJS)(t))}},{key:"componentDidMount",value:function(){this.props.proData.dataList.length||this.props.getProData()}},{key:"render",value:function(){var e=this;return a.a.createElement("main",{className:"common-con-top"},a.a.createElement(d.a,{title:"\u9996\u9875",confirm:!0}),a.a.createElement("section",{className:"pro-list-con"},a.a.createElement("ul",{className:"pro-list-ul"},this.props.proData.dataList.map(function(t,n){return a.a.createElement("li",{className:"pro-item",key:n},a.a.createElement("div",{className:"pro-item-select",onClick:e.togSelect.bind(e,n)},a.a.createElement("span",{className:"icon-xuanze1 pro-select-status "+(t.selectStatus?"pro-selected":"")}),a.a.createElement("span",{className:"pro-name"},t.product_name)),a.a.createElement("div",{className:"pro-item-edit"},a.a.createElement("span",{className:"icon-jian "+(t.selectNum>0?"edit-active":""),onClick:e.handleEdit.bind(e,n,-1)}),a.a.createElement("span",{className:"pro-num"},t.selectNum),a.a.createElement("span",{className:"icon-jia",onClick:e.handleEdit.bind(e,n,1)})))}))))}}]),t}(s.Component),c.propTypes={proData:f.a.object.isRequired,getProData:f.a.func.isRequired,togSelectPro:f.a.func.isRequired,editPro:f.a.func.isRequired},l);t.default=Object(A.b)(function(e){return{proData:e.proData}},{getProData:u.b,togSelectPro:u.c,editPro:u.a})(g)},527:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,i){try{var c=t[o](i),l=c.value}catch(e){return void n(e)}if(!c.done)return Promise.resolve(l).then(function(e){r("next",e)},function(e){r("throw",e)});e(l)}return r("next")})}}n.d(t,"b",function(){return a}),n.d(t,"c",function(){return p}),n.d(t,"a",function(){return A});var o=n(74),i=n.n(o),c=n(184),l=n(182),s=this,a=function(){return function(){var e=r(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.getProduction();case 3:n=e.sent,n.map(function(e){return e.selectStatus=!1,e.selectNum=0,e}),t({type:c.b,dataList:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0);case 11:case"end":return e.stop()}},e,s,[[0,8]])}));return function(t){return e.apply(this,arguments)}}()},p=function(e){return{type:c.c,index:e}},A=function(e,t){return{type:c.a,index:e,selectNum:t}}},528:function(e,t,n){var r=n(529);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0};o.transform=void 0;n(514)(r,o);r.locals&&(e.exports=r.locals)},529:function(e,t,n){t=e.exports=n(180)(!0),t.i(n(515),""),t.push([e.i,".pro-list-con{padding-top:.4rem}.pro-list-ul{background-color:#fff}.pro-list-ul .pro-item{min-height:1.866667rem;padding:.4rem;border-bottom:1px solid #eee;-ms-flex-pack:justify;justify-content:space-between}.pro-list-ul .pro-item,.pro-list-ul .pro-item .pro-item-select{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.pro-list-ul .pro-item .pro-item-select{-ms-flex-pack:center;justify-content:center}.pro-list-ul .pro-item .pro-item-select .pro-select-status{font-size:.6rem;color:#ccc;text-align:left}.pro-list-ul .pro-item .pro-item-select .pro-selected{color:#975ec9}.pro-list-ul .pro-item .pro-item-select .pro-name{font-size:.48rem;color:#333;text-align:left;margin-left:.266667rem;margin-top:.16rem}.pro-list-ul .pro-item .pro-item-edit{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.pro-list-ul .pro-item .pro-item-edit .icon-jian{font-size:.666667rem;color:#ccc;text-align:left}.pro-list-ul .pro-item .pro-item-edit .pro-num{font-size:.4rem;color:#333;text-align:center;min-width:.8rem}.pro-list-ul .pro-item .pro-item-edit .icon-jia{font-size:.666667rem;color:#975ec9;text-align:left}.pro-list-ul .pro-item .pro-item-edit .edit-active{color:#975ec9}","",{version:3,sources:["/template/react-pxq/src/pages/production/production.css"],names:[],mappings:"AAEA,cACE,iBAAoB,CACrB,AAED,aACE,qBAAuB,CACxB,AAED,uBACE,uBAAwB,AACxB,cAAgB,AAChB,6BAA8B,AAG9B,sBAAuB,AACvB,6BAA+B,CAGhC,AAED,+DARE,oBAAqB,AACrB,aAAc,AAGd,sBAAuB,AACvB,kBAAoB,CAUrB,AAPD,wCAGE,qBAAsB,AACtB,sBAAwB,CAGzB,AAED,2DACE,gBAAkB,AAClB,WAAY,AACZ,eAAiB,CAClB,AAED,sDACE,aAAe,CAChB,AAED,kDACE,iBAAmB,AACnB,WAAY,AACZ,gBAAiB,AACjB,uBAAyB,AACzB,iBAAoB,CACrB,AAED,sCACE,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AACtB,uBAAwB,AACxB,sBAAuB,AACvB,kBAAoB,CACrB,AAED,iDACE,qBAAuB,AACvB,WAAY,AACZ,eAAiB,CAClB,AAED,+CACE,gBAAkB,AAClB,WAAY,AACZ,kBAAmB,AACnB,eAAkB,CACnB,AAED,gDACE,qBAAuB,AACvB,cAAe,AACf,eAAiB,CAClB,AAED,mDACE,aAAe,CAChB",file:"production.css",sourcesContent:['@import "../../assets/iconfonts/iconfont.css";\n\n.pro-list-con {\n  padding-top: 0.4rem;\n}\n\n.pro-list-ul {\n  background-color: #fff;\n}\n\n.pro-list-ul .pro-item {\n  min-height: 1.866667rem;\n  padding: 0.4rem;\n  border-bottom: 1PX solid #eee;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.pro-list-ul .pro-item .pro-item-select {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.pro-list-ul .pro-item .pro-item-select .pro-select-status {\n  font-size: 0.6rem;\n  color: #ccc;\n  text-align: left;\n}\n\n.pro-list-ul .pro-item .pro-item-select .pro-selected {\n  color: #975ec9;\n}\n\n.pro-list-ul .pro-item .pro-item-select .pro-name {\n  font-size: 0.48rem;\n  color: #333;\n  text-align: left;\n  margin-left: 0.266667rem;\n  margin-top: 0.16rem;\n}\n\n.pro-list-ul .pro-item .pro-item-edit {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.pro-list-ul .pro-item .pro-item-edit .icon-jian {\n  font-size: 0.666667rem;\n  color: #ccc;\n  text-align: left;\n}\n\n.pro-list-ul .pro-item .pro-item-edit .pro-num {\n  font-size: 0.4rem;\n  color: #333;\n  text-align: center;\n  min-width: 0.8rem;\n}\n\n.pro-list-ul .pro-item .pro-item-edit .icon-jia {\n  font-size: 0.666667rem;\n  color: #975ec9;\n  text-align: left;\n}\n\n.pro-list-ul .pro-item .pro-item-edit .edit-active {\n  color: #975ec9;\n}'],sourceRoot:""}])}});