(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ae755c9"],{"05ce":function(e,t,r){},"20e8":function(e,t,r){"use strict";var a=r("cd86"),o=r.n(a);o.a},"222c":function(e,t,r){"use strict";var a=r("25b6"),o=r.n(a);o.a},"25b6":function(e,t,r){},"2b10":function(e,t,r){"use strict";r.d(t,"d",(function(){return o})),r.d(t,"j",(function(){return i})),r.d(t,"h",(function(){return n})),r.d(t,"i",(function(){return l})),r.d(t,"b",(function(){return s})),r.d(t,"k",(function(){return u})),r.d(t,"a",(function(){return c})),r.d(t,"g",(function(){return d})),r.d(t,"f",(function(){return p})),r.d(t,"e",(function(){return m})),r.d(t,"c",(function(){return f}));var a=r("b775");function o(e){return Object(a["a"])({url:"api/job/pageList",method:"get",params:e})}function i(e){return Object(a["a"])({url:"/api/job/trigger",method:"post",data:e})}function n(e){return Object(a["a"])({url:"/api/job/start?id="+e,method:"post"})}function l(e){return Object(a["a"])({url:"/api/job/stop?id="+e,method:"post"})}function s(){return Object(a["a"])({url:"api/jobGroup/list",method:"get"})}function u(e){return Object(a["a"])({url:"/api/job/update",method:"post",data:e})}function c(e){return Object(a["a"])({url:"/api/job/add/",method:"post",data:e})}function d(e){return Object(a["a"])({url:"/api/job/remove/"+e,method:"post"})}function p(e){return Object(a["a"])({url:"/api/job/nextTriggerTime?cron="+e,method:"get"})}function m(e){return Object(a["a"])({url:"api/user/list",method:"get",params:e})}function f(e){return Object(a["a"])({url:"api/job/list",method:"get",params:e})}},"333d":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[r("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},o=[];r("c5f6");Math.easeInOutQuad=function(e,t,r,a){return e/=a/2,e<1?r/2*e*e+t:(e--,-r/2*(e*(e-2)-1)+t)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function n(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function l(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(e,t,r){var a=l(),o=e-a,s=20,u=0;t="undefined"===typeof t?500:t;var c=function e(){u+=s;var l=Math.easeInOutQuad(u,a,o,t);n(l),u<t?i(e):r&&"function"===typeof r&&r()};c()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&s(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&s(0,800)}}},c=u,d=(r("e498"),r("2877")),p=Object(d["a"])(c,a,o,!1,null,"6af373ef",null);t["a"]=p.exports},"39ed":function(e,t,r){"use strict";r.d(t,"d",(function(){return o})),r.d(t,"f",(function(){return i})),r.d(t,"a",(function(){return n})),r.d(t,"e",(function(){return l})),r.d(t,"b",(function(){return s}));var a=r("b775");function o(){return Object(a["a"])({url:"/api/jobGroup/list",method:"get"})}function i(e){return Object(a["a"])({url:"/api/jobGroup/update",method:"post",data:e})}function n(e){return Object(a["a"])({url:"/api/jobGroup/save",method:"post",data:e})}function l(e){return Object(a["a"])({url:"/api/jobGroup/loadById?id="+e,method:"post"})}function s(e){return Object(a["a"])({url:"/api/jobGroup/remove?id="+e,method:"post"})}},"44c8":function(e,t,r){},6724:function(e,t,r){"use strict";r("8d41");var a="@@wavesContext";function o(e,t){function r(r){var a=Object.assign({},t.value),o=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),i=o.ele;if(i){i.style.position="relative",i.style.overflow="hidden";var n=i.getBoundingClientRect(),l=i.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":(l=document.createElement("span"),l.className="waves-ripple",l.style.height=l.style.width=Math.max(n.width,n.height)+"px",i.appendChild(l)),o.type){case"center":l.style.top=n.height/2-l.offsetHeight/2+"px",l.style.left=n.width/2-l.offsetWidth/2+"px";break;default:l.style.top=(r.pageY-n.top-l.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",l.style.left=(r.pageX-n.left-l.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return l.style.backgroundColor=o.color,l.className="waves-ripple z-active",!1}}return e[a]?e[a].removeHandle=r:e[a]={removeHandle:r},r}var i={bind:function(e,t){e.addEventListener("click",o(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[a].removeHandle,!1),e.addEventListener("click",o(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[a].removeHandle,!1),e[a]=null,delete e[a]}},n=function(e){e.directive("waves",i)};window.Vue&&(window.waves=i,Vue.use(n)),i.install=n;t["a"]=i},7456:function(e,t,r){},"8d41":function(e,t,r){},"8f79":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("div",{staticClass:"filter-container"},[r("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"任务描述"},model:{value:e.listQuery.jobDesc,callback:function(t){e.$set(e.listQuery,"jobDesc",t)},expression:"listQuery.jobDesc"}}),e._v(" "),r("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"负责人"},model:{value:e.listQuery.author,callback:function(t){e.$set(e.listQuery,"author",t)},expression:"listQuery.author"}}),e._v(" "),r("el-select",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"任务类型"},model:{value:e.listQuery.glueType,callback:function(t){e.$set(e.listQuery,"glueType",t)},expression:"listQuery.glueType"}},e._l(e.glueTypes,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),r("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.fetchData}},[e._v("\n      搜索\n    ")]),e._v(" "),r("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v("\n      添加\n    ")])],1),e._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[r("el-table-column",{attrs:{align:"center",label:"ID",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.id))]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"任务名称",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.jobDesc))]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"Cron",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row.jobCron))])]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"路由策略",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.routeStrategies.find((function(e){return e.value===t.row.executorRouteStrategy})).label))]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"状态",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-switch",{attrs:{"active-color":"#00A854","active-value":1,"inactive-color":"#F04134","inactive-value":0},on:{change:function(r){return e.changeSwitch(t.row)}},model:{value:t.row.triggerStatus,callback:function(r){e.$set(t.row,"triggerStatus",r)},expression:"scope.row.triggerStatus"}})]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"注册节点",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-popover",{attrs:{placement:"bottom",width:"500"},on:{show:function(r){return e.loadById(t.row)}}},[r("el-table",{attrs:{data:e.registerNode}},[r("el-table-column",{attrs:{width:"150",property:"title",label:"执行器名称"}}),e._v(" "),r("el-table-column",{attrs:{width:"150",property:"appName",label:"appName"}}),e._v(" "),r("el-table-column",{attrs:{width:"150",property:"registryList",label:"机器地址"}})],1),e._v(" "),r("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("查看")])],1)]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"下次触发时间",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-popover",{attrs:{placement:"bottom",width:"300"},on:{show:function(r){return e.nextTriggerTime(t.row)}}},[r("h5",{domProps:{innerHTML:e._s(e.triggerNextTimes)}}),e._v(" "),r("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("查看")])],1)]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"执行状态",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.statusList.find((function(e){return e.value===t.row.lastHandleCode})).label))]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handlerExecute(a)}}},[e._v("\n          执行一次\n        ")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handlerViewLog(a)}}},[e._v("\n          查询日志\n        ")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handlerUpdate(a)}}},[e._v("\n          编辑\n        ")]),e._v(" "),r("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handlerDelete(a)}}},[e._v("\n          删除\n        ")])]}}])})],1),e._v(" "),r("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.current,limit:e.listQuery.size},on:{"update:page":function(t){return e.$set(e.listQuery,"current",t)},"update:limit":function(t){return e.$set(e.listQuery,"size",t)},pagination:e.fetchData}}),e._v(" "),r("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,width:"1000px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"dataForm",attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"110px"}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"执行器",prop:"jobGroup"}},[r("el-select",{attrs:{placeholder:"请选择执行器"},model:{value:e.temp.jobGroup,callback:function(t){e.$set(e.temp,"jobGroup",t)},expression:"temp.jobGroup"}},e._l(e.executorList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"任务描述",prop:"jobDesc"}},[r("el-input",{attrs:{size:"medium",placeholder:"请输入任务描述"},model:{value:e.temp.jobDesc,callback:function(t){e.$set(e.temp,"jobDesc",t)},expression:"temp.jobDesc"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"路由策略",prop:"executorRouteStrategy"}},[r("el-select",{attrs:{placeholder:"请选择路由策略"},model:{value:e.temp.executorRouteStrategy,callback:function(t){e.$set(e.temp,"executorRouteStrategy",t)},expression:"temp.executorRouteStrategy"}},e._l(e.routeStrategies,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"Cron",prop:"jobCron"}},[r("el-input",{attrs:{placeholder:"请输入Cron表达式"},model:{value:e.temp.jobCron,callback:function(t){e.$set(e.temp,"jobCron",t)},expression:"temp.jobCron"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"阻塞处理",prop:"executorBlockStrategy"}},[r("el-select",{attrs:{placeholder:"请选择阻塞处理策略"},model:{value:e.temp.executorBlockStrategy,callback:function(t){e.$set(e.temp,"executorBlockStrategy",t)},expression:"temp.executorBlockStrategy"}},e._l(e.blockStrategies,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"负责人",prop:"author"}},[r("el-select",{attrs:{multiple:"",placeholder:"请输入负责人","value-key":"id"},model:{value:e.temp.author,callback:function(t){e.$set(e.temp,"author",t)},expression:"temp.author"}},e._l(e.authorList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.nickname,value:e}})})),1)],1)],1)],1),e._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"任务类型",prop:"glueType"}},[r("el-select",{attrs:{placeholder:"任务脚本类型"},model:{value:e.temp.glueType,callback:function(t){e.$set(e.temp,"glueType",t)},expression:"temp.glueType"}},e._l(e.glueTypes,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),e._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"父任务ID"}},[r("el-select",{attrs:{multiple:"",placeholder:"父任务ID","value-key":"id"},model:{value:e.temp.parentJobId,callback:function(t){e.$set(e.temp,"parentJobId",t)},expression:"temp.parentJobId"}},e._l(e.JobIdList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.jobDesc,value:e}})})),1)],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"子任务ID"}},[r("el-select",{attrs:{multiple:"",placeholder:"子任务ID","value-key":"id"},model:{value:e.temp.childJobId,callback:function(t){e.$set(e.temp,"childJobId",t)},expression:"temp.childJobId"}},e._l(e.JobIdList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.jobDesc,value:e}})})),1)],1)],1)],1),e._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"超时时间(分钟)"}},[r("el-input-number",{attrs:{min:0,max:20},model:{value:e.temp.executorTimeout,callback:function(t){e.$set(e.temp,"executorTimeout",t)},expression:"temp.executorTimeout"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"失败重试次数"}},[r("el-input-number",{attrs:{min:0,max:20},model:{value:e.temp.executorFailRetryCount,callback:function(t){e.$set(e.temp,"executorFailRetryCount",t)},expression:"temp.executorFailRetryCount"}})],1)],1)],1),e._v(" "),"BEAN"===e.temp.glueType?r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"增量开始时间",prop:"incStartTime"}},[r("el-date-picker",{staticStyle:{width:"56%"},attrs:{type:"datetime",placeholder:"首次增量使用",format:"yyyy-MM-dd HH:mm:ss","default-time":"00:00:00"},model:{value:e.temp.incStartTime,callback:function(t){e.$set(e.temp,"incStartTime",t)},expression:"temp.incStartTime"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"增量时间字段"}},[r("el-input",{attrs:{placeholder:"-DlastTime='%s' -DcurrentTime='%s'"},model:{value:e.temp.replaceParam,callback:function(t){e.$set(e.temp,"replaceParam",t)},expression:"temp.replaceParam"}})],1)],1)],1):e._e(),e._v(" "),"BEAN"===e.temp.glueType?r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"分区字段"}},[r("el-input",{staticStyle:{width:"56%"},attrs:{placeholder:"请输入分区字段"},model:{value:e.partitionField,callback:function(t){e.partitionField=t},expression:"partitionField"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:7}},[r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.partitionField,expression:"partitionField"}],attrs:{label:"分区时间"}},[r("el-select",{attrs:{placeholder:"分区时间格式"},model:{value:e.timeFormatType,callback:function(t){e.timeFormatType=t},expression:"timeFormatType"}},e._l(e.timeFormatTypes,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),e._v(" "),r("el-col",{directives:[{name:"show",rawName:"v-show",value:e.partitionField,expression:"partitionField"}],attrs:{span:5}},[r("el-input-number",{staticStyle:{width:"65%"},attrs:{min:-20,max:0},model:{value:e.timeOffset,callback:function(t){e.timeOffset=t},expression:"timeOffset"}})],1)],1):e._e(),e._v(" "),"BEAN"===e.temp.glueType?r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"JVM启动参数"}},[r("el-input",{attrs:{placeholder:"-Xms1024m -Xmx1024m -XX:+HeapDumpOnOutOfMemoryError"},model:{value:e.temp.jvmParam,callback:function(t){e.$set(e.temp,"jvmParam",t)},expression:"temp.jvmParam"}})],1)],1)],1):e._e()],1),e._v(" "),"BEAN"===e.temp.glueType?r("json-editor",{ref:"jsonEditor",model:{value:e.jobJson,callback:function(t){e.jobJson=t},expression:"jobJson"}}):e._e(),e._v(" "),"GLUE_SHELL"===e.temp.glueType?r("shell-editor",{ref:"shellEditor",model:{value:e.glueSource,callback:function(t){e.glueSource=t},expression:"glueSource"}}):e._e(),e._v(" "),"GLUE_PYTHON"===e.temp.glueType?r("python-editor",{ref:"pythonEditor",model:{value:e.glueSource,callback:function(t){e.glueSource=t},expression:"glueSource"}}):e._e(),e._v(" "),"GLUE_POWERSHELL"===e.temp.glueType?r("powershell-editor",{ref:"powershellEditor",model:{value:e.glueSource,callback:function(t){e.glueSource=t},expression:"glueSource"}}):e._e(),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("\n        取消\n      ")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}},[e._v("\n        确定\n      ")])],1)],1)],1)},o=[],i=(r("28a5"),r("39ed")),n=r("2b10"),l=r("6724"),s=r("333d"),u=r("fa7e"),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"shell-editor"},[r("textarea",{ref:"textarea"})])},d=[],p=r("56b3"),m=r.n(p);r("0dd0"),r("a7be"),r("acdf"),r("f9d4"),r("8822");r("02f0");var f={name:"ShellEditor",props:["value"],data:function(){return{shellEditor:!1}},watch:{value:function(e){var t=this.shellEditor.getValue();e!==t&&this.shellEditor.setValue(this.value)}},mounted:function(){var e=this;this.shellEditor=m.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"text/x-sh",gutters:["CodeMirror-lint-markers"],theme:"rubyblue",lint:!0}),this.shellEditor.setValue(this.value),this.shellEditor.on("change",(function(t){e.$emit("changed",t.getValue()),e.$emit("input",t.getValue())}))},methods:{getValue:function(){return this.shellEditor.getValue()}}},h=f,b=(r("dce6"),r("2877")),g=Object(b["a"])(h,c,d,!1,null,"783af5a8",null),v=g.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"python-editor"},[r("textarea",{ref:"textarea"})])},S=[];r("db91");var x={name:"PythonEditor",props:["value"],data:function(){return{pythonEditor:!1}},watch:{value:function(e){var t=this.pythonEditor.getValue();e!==t&&this.pythonEditor.setValue(this.value)}},mounted:function(){var e=this;this.pythonEditor=m.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"text/x-python",gutters:["CodeMirror-lint-markers"],theme:"rubyblue",lint:!0}),this.pythonEditor.setValue(this.value),this.pythonEditor.on("change",(function(t){e.$emit("changed",t.getValue()),e.$emit("input",t.getValue())}))},methods:{getValue:function(){return this.pythonEditor.getValue()}}},_=x,w=(r("20e8"),Object(b["a"])(_,y,S,!1,null,"74d561f1",null)),j=w.exports,E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"powershell-editor"},[r("textarea",{ref:"textarea"})])},T=[];r("9da3");var k={name:"PowershellEditor",props:["value"],data:function(){return{powershellEditor:!1}},watch:{value:function(e){var t=this.powershellEditor.getValue();e!==t&&this.powershellEditor.setValue(this.value)}},mounted:function(){var e=this;this.powershellEditor=m.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"powershell",gutters:["CodeMirror-lint-markers"],theme:"rubyblue",lint:!0}),this.powershellEditor.setValue(this.value),this.powershellEditor.on("change",(function(t){e.$emit("changed",t.getValue()),e.$emit("input",t.getValue())}))},methods:{getValue:function(){return this.powershellEditor.getValue()}}},L=k,J=(r("fab6"),Object(b["a"])(L,E,T,!1,null,"7f6ac95b",null)),I=J.exports,$={name:"JobInfo",components:{Pagination:s["a"],JsonEditor:u["a"],ShellEditor:v,PythonEditor:j,PowershellEditor:I},directives:{waves:l["a"]},filters:{statusFilter:function(e){var t={published:"success",draft:"gray",deleted:"danger"};return t[e]}},data:function(){var e=this,t=function(t,r,a){e.temp.replaceParam&&!e.temp.incStartTime&&a(new Error("incStartTime is required")),a()};return{list:null,listLoading:!0,total:0,listQuery:{current:1,size:10,jobGroup:0,triggerStatus:-1,jobDesc:"",glueType:"",author:""},dialogPluginVisible:!1,pluginData:[],dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},rules:{jobGroup:[{required:!0,message:"jobGroup is required",trigger:"change"}],executorRouteStrategy:[{required:!0,message:"executorRouteStrategy is required",trigger:"change"}],executorBlockStrategy:[{required:!0,message:"executorBlockStrategy is required",trigger:"change"}],glueType:[{required:!0,message:"jobType is required",trigger:"change"}],jobDesc:[{required:!0,message:"jobDesc is required",trigger:"blur"}],jobCron:[{required:!0,message:"jobCron is required",trigger:"blur"}],author:[{required:!0,message:"author is required",trigger:"blur"}],incStartTime:[{trigger:"blur",validator:t}]},temp:{id:void 0,jobGroup:"",jobCron:"",jobDesc:"",executorRouteStrategy:"",executorBlockStrategy:"",childJobId:"",parentJobId:"",executorFailRetryCount:"",alarmEmail:"",executorTimeout:"",author:"",jobConfigId:"",executorHandler:"",glueType:"",glueSource:"",jobJson:"",executorParam:"",replaceParam:"",jvmParam:"",incStartTime:"",partitionInfo:""},resetTemp:function(){this.temp=this.$options.data().temp,this.jobJson="",this.glueSource="",this.timeOffset=0,this.timeFormatType="yyyy-MM-dd",this.partitionField=""},executorList:"",authorList:"",JobIdList:"",blockStrategies:[{value:"SERIAL_EXECUTION",label:"单机串行"},{value:"DISCARD_LATER",label:"丢弃后续调度"},{value:"COVER_EARLY",label:"覆盖之前调度"}],routeStrategies:[{value:"FIRST",label:"第一个"},{value:"LAST",label:"最后一个"},{value:"ROUND",label:"轮询"},{value:"RANDOM",label:"随机"},{value:"CONSISTENT_HASH",label:"一致性HASH"},{value:"LEAST_FREQUENTLY_USED",label:"最不经常使用"},{value:"LEAST_RECENTLY_USED",label:"最近最久未使用"},{value:"FAILOVER",label:"故障转移"},{value:"BUSYOVER",label:"忙碌转移"}],glueTypes:[{value:"BEAN",label:"DataX任务"},{value:"GLUE_SHELL",label:"Shell任务"},{value:"GLUE_PYTHON",label:"Python任务"},{value:"GLUE_POWERSHELL",label:"PowerShell任务"}],triggerNextTimes:"",registerNode:[],jobJson:"",glueSource:"",timeOffset:0,timeFormatType:"yyyy-MM-dd",partitionField:"",timeFormatTypes:[{value:"yyyy-MM-dd",label:"yyyy-MM-dd"},{value:"yyyyMMdd",label:"yyyyMMdd"},{value:"yyyy/MM/dd",label:"yyyy/MM/dd"}],statusList:[{value:500,label:"失败"},{value:502,label:"失败(超时)"},{value:200,label:"成功"},{value:0,label:"无"}]}},created:function(){this.fetchData(),this.getExecutor(),this.getUsers(),this.getJobIdList()},methods:{getExecutor:function(){var e=this;n["b"]().then((function(t){var r=t.content;e.executorList=r}))},getUsers:function(){var e=this;n["e"]().then((function(t){var r=t.content;e.authorList=r}))},getJobIdList:function(){var e=this;n["c"]().then((function(t){var r=t.content;e.JobIdList=r}))},fetchData:function(){var e=this;this.listLoading=!0,n["d"](this.listQuery).then((function(t){var r=t.content;e.total=r.recordsTotal,e.list=r.data,e.listLoading=!1}))},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},createData:function(){var e=this;this.$refs["dataForm"].validate((function(t){t&&(e.temp.jobJson=e.jobJson,e.temp.glueSource=e.glueSource,e.temp.executorHandler="BEAN"===e.temp.glueType?"executorJobHandler":"",e.partitionField&&(e.temp.partitionInfo=e.partitionField+","+e.timeOffset+","+e.timeFormatType),n["a"](e.temp).then((function(){e.fetchData(),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3})})))}))},handlerUpdate:function(e){var t=this;this.resetTemp(),this.temp=Object.assign({},e),this.temp.jobJson&&(this.jobJson=JSON.parse(this.temp.jobJson)),this.glueSource=this.temp.glueSource;var r=[],a=[],o=[],i=[];if(this.JobIdList){for(var n in this.JobIdList)this.JobIdList[n].id!==this.temp.id&&i.push(this.JobIdList[n]);this.JobIdList=i}if(this.temp.author){var l=this.temp.author.split(",");for(var s in l)for(var u in this.authorList)this.authorList[u].id==l[s]&&r.push(this.authorList[u]);this.temp.author=r}if(this.temp.childJobId){var c=this.temp.childJobId.split(",");for(var d in console.log(c),console.log(this.JobIdList),c)for(var p in this.JobIdList)this.JobIdList[p].id==c[d]&&a.push(this.JobIdList[p]);this.temp.childJobId=a}if(console.log(this.temp.childJobId),this.temp.parentJobId){var m=this.temp.parentJobId.split(",");for(var f in m)for(var h in this.JobIdList)this.JobIdList[h].id==m[f]&&o.push(this.JobIdList[h]);this.temp.parentJobId=o}if(this.temp.partitionInfo){var b=this.temp.partitionInfo.split(",");this.partitionField=b[0],this.timeOffset=b[1],this.timeFormatType=b[2]}this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},updateData:function(){var e=this;this.$refs["dataForm"].validate((function(t){if(t){if(e.temp.author){var r=[];for(var a in e.temp.author)r.push(e.temp.author[a].id);e.temp.author=r.toString()}if(e.temp.childJobId){var o=[];for(var i in e.temp.childJobId)o.push(e.temp.childJobId[i].id);e.temp.childJobId=o.toString()}if(e.temp.parentJobId){var l=[];for(var s in e.temp.parentJobId)l.push(e.temp.parentJobId[s].id);e.temp.parentJobId=l.toString()}e.temp.executorHandler="BEAN"===e.temp.glueType?"executorJobHandler":"",e.temp.jobJson="string"!==typeof e.jobJson?JSON.stringify(e.jobJson):e.jobJson,e.temp.glueSource=e.glueSource,e.partitionField&&(e.temp.partitionInfo=e.partitionField+","+e.timeOffset+","+e.timeFormatType),n["k"](e.temp).then((function(){e.fetchData(),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})}))}}))},handlerDelete:function(e){var t=this;this.$confirm("确定删除吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){n["g"](e.id).then((function(e){t.fetchData(),t.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3})}))}))},handlerExecute:function(e){var t=this;this.$confirm("确定执行吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var r={};r.jobId=e.id,r.executorParam=e.executorParam,n["j"](r).then((function(e){t.$notify({title:"Success",message:"Execute Successfully",type:"success",duration:2e3})}))}))},handlerViewLog:function(e){this.$router.push({path:"/datax/log/jobLog",query:{jobId:e.id}})},handlerStart:function(e){var t=this;n["h"](e.id).then((function(e){t.$notify({title:"Success",message:"Start Successfully",type:"success",duration:2e3})}))},handlerStop:function(e){var t=this;n["i"](e.id).then((function(e){t.$notify({title:"Success",message:"Start Successfully",type:"success",duration:2e3})}))},changeSwitch:function(e){1===e.triggerStatus?this.handlerStart(e):this.handlerStop(e)},nextTriggerTime:function(e){var t=this;n["f"](e.jobCron).then((function(e){var r=e.content;t.triggerNextTimes=r.join("<br>")}))},loadById:function(e){var t=this;i["e"](e.jobGroup).then((function(e){t.registerNode=[];var r=e.content;t.registerNode.push(r)}))}}},C=$,O=(r("fe6f"),Object(b["a"])(C,a,o,!1,null,null,null));t["default"]=O.exports},c319:function(e,t,r){},cd86:function(e,t,r){},dce6:function(e,t,r){"use strict";var a=r("44c8"),o=r.n(a);o.a},e498:function(e,t,r){"use strict";var a=r("7456"),o=r.n(a);o.a},fa7e:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"json-editor"},[r("textarea",{ref:"textarea"})])},o=[],i=r("56b3"),n=r.n(i);r("0dd0"),r("a7be"),r("acdf"),r("f9d4"),r("8822"),r("d2de");r("ae67");var l={name:"JsonEditor",props:["value"],data:function(){return{jsonEditor:!1}},watch:{value:function(e){var t=this.jsonEditor.getValue();e!==t&&this.jsonEditor.setValue(JSON.stringify(this.value,null,2))}},mounted:function(){var e=this;this.jsonEditor=n.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"application/json",gutters:["CodeMirror-lint-markers"],theme:"rubyblue",lint:!0}),this.jsonEditor.setValue(JSON.stringify(this.value,null,2)),this.jsonEditor.on("change",(function(t){e.$emit("changed",t.getValue()),e.$emit("input",t.getValue())}))},methods:{getValue:function(){return this.jsonEditor.getValue()}}},s=l,u=(r("222c"),r("2877")),c=Object(u["a"])(s,a,o,!1,null,"7b489788",null);t["a"]=c.exports},fab6:function(e,t,r){"use strict";var a=r("05ce"),o=r.n(a);o.a},fe6f:function(e,t,r){"use strict";var a=r("c319"),o=r.n(a);o.a}}]);