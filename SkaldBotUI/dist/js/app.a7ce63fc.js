(function(e){function t(t){for(var a,n,i=t[0],c=t[1],u=t[2],d=0,m=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&m.push(o[n][0]),o[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(m.length)m.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,i=1;i<s.length;i++){var c=s[i];0!==o[c]&&(a=!1)}a&&(r.splice(t--,1),e=n(n.s=s[0]))}return e}var a={},o={app:0},r=[];function n(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=a,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var a=s("e773"),o=s.n(a);o.a},"09e8":function(e,t,s){"use strict";var a=s("585b"),o=s.n(a);o.a},"1af1":function(e,t,s){},2616:function(e,t,s){"use strict";var a=s("553e"),o=s.n(a);o.a},"35d5":function(e,t,s){"use strict";var a=s("3d80"),o=s.n(a);o.a},"3d80":function(e,t,s){},"553e":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);var a=s("2b0e"),o=s("8c4f"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"login"}},[s("div",[""!=e.formKey?s("Form",{attrs:{formKey:e.formKey},on:{LoginSuccess:e.login}}):e._e(),s("router-link",{staticClass:"link",attrs:{to:"/register"}},[e._v("Register")])],1)])},n=[],i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"form"},[e.loaded?e._e():s("div",[s("VueLoading")],1),e.submitted?s("div",{class:e.isError?"errorMsg":"successMsg"},[s("p",{staticStyle:{"font-weight":"bold"}},[e._v(e._s(e.msg))]),s("button",{staticClass:"close",on:{click:e.closeNotification}},[e._v("x")])]):e._e(),e.loaded?s("div",{staticClass:"panel"},[s("div",{staticClass:"panel-heading"},[e._v(e._s(e.formName))]),s("hr"),s("div",{staticClass:"panel-body"},[s("form",{attrs:{action:""},on:{submit:e.formSubmit}},[e.loaded?s("vue-form-generator",{attrs:{schema:e.schema,model:e.model,options:e.formOptions},on:{validated:e.validateForm}}):e._e()],1)])]):e._e(),e.admin?s("div",[s("input",{attrs:{type:"checkbox",id:"cbShowFormDetails",name:"cbShowFormDetails"},on:{change:e.showFormDetails}}),s("label",{attrs:{for:"cbShowFormDetails"}},[e._v("Show Form Information")])]):e._e(),e.showFormExtras?s("div",{staticClass:"panel panel-default"},[s("div",{staticClass:"panel-heading"},[e._v("Model")]),s("div",{staticClass:"panel-body"},[e.model?s("pre",{domProps:{innerHTML:e._s(e.prettyJSON(e.model))}}):e._e()])]):e._e(),e.showFormExtras?s("div",{staticClass:"panel panel-default"},[s("div",{staticClass:"panel-heading"},[e._v("Schema")]),s("div",{staticClass:"panel-body"},[e.model?s("pre",{domProps:{innerHTML:e._s(e.prettyJSON(e.schema))}}):e._e()])]):e._e()])},c=[],u=(s("6b54"),s("a481"),s("5530")),l=s("bc3a"),d=s.n(l),m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("img",{staticClass:"loadingImg",attrs:{src:e.loader,alt:"loadingGif"}})])},h=[],f={name:"vue-loading",data:function(){return{loader:s("cf1c")}}},v=f,p=(s("b98d"),s("2877")),g=Object(p["a"])(v,m,h,!1,null,"176b3d38",null),A=g.exports,b=s("4309"),y=s.n(b),w=(s("92bd"),s("2f62")),_="http://127.0.0.1:5000/api/";y.a.validators.emailValidation=function(e,t,s){var a=s.email,o=e;return a!=o?["Emails do not match!"]:[]},y.a.validators.passwordValidation=function(e,t,s){var a=s.password,o=e;return a!=o?["Passwords do not match!"]:[]};var I={name:"Form",components:{VueLoading:A},props:{formKey:{type:String,required:!0}},mounted:function(){this.loaded=!1;var e=_+"getFormSchema?formKey="+this.formKey,t=_+"getActionLink?formKey="+this.formKey,s=_+"getFormName?formKey="+this.formKey,a=this;d.a.get(e).then(function(e){a.schema=JSON.parse(e.data)}).catch(function(e){console.log(e),this.$emit("error",!0)}),d.a.get(t).then(function(e){var t=JSON.parse(e.data),s=t[0];a.action=baseUrl+s.ActionLink}).catch(function(e){console.log(e)}),d.a.get(s).then(function(e){var t=JSON.parse(e.data),s=t[0].FormName;a.formName=s,a.loaded=!0}).catch(function(e){console.log(e)})},watch:{formKey:function(){this.loaded=!1;var e="http://127.0.0.1:5000",t=_+"getFormSchema?formKey="+this.formKey,s=e+"getActionLink?formKey="+this.formKey,a=_+"getFormName?formKey="+this.formKey,o=this;d.a.get(t).then(function(e){o.schema=JSON.parse(e.data)}).catch(function(e){console.log(e),this.$emit("error",!0)}),d.a.get(s).then(function(t){var s=JSON.parse(t.data),a=s[0];o.action=e+a.ActionLink}).catch(function(e){console.log(e)}),d.a.get(a).then(function(e){var t=JSON.parse(e.data),s=t[0].FormName;o.formName=s,o.loaded=!0}).catch(function(e){console.log(e)})},loaded:function(){this.loaded&&this.newModel()},submitted:function(){this.submitted&&setTimeout(this.closeNotification,5e3)}},data:function(){return{action:"",model:{},schema:null,options:{validatedAfterLoad:!1,validatedAfterChange:!0},loaded:!1,msg:"",isError:!1,submitted:!1,admin:!1,formName:"Test",showFormExtras:!1,isValid:!1,formOptions:{validateAfterLoad:!1,validateAfterChanged:!0}}},created:function(){console.log(this.$store.getters.isAdmin),console.log(this.$store.getters.isMasterAdmin),(this.$store.getters.isAdmin||this.$store.getters.isMasterAdmin)&&(this.admin=!0)},methods:Object(u["a"])(Object(u["a"])({},Object(w["b"])(["fetchFormData"])),{},{prettyJSON:function(e){if(e)return e=JSON.stringify(e,void 0,4),e=e.replace(/&/g,"&").replace(/</g,"<").replace(/>/g,">"),e.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,function(e){var t="number";return/^"/.test(e)?t=/:$/.test(e)?"key":"string":/true|false/.test(e)?t="boolean":/null/.test(e)&&(t="null"),'<span class="'+t+'">'+e+"</span>"})},newModel:function(){"LoginForm"!=this.formKey&&(this.model=y.a.schema.createDefaultObject(this.schema))},validateForm:function(e){this.isValid=e},formSubmit:function(){var e=this;if(this.isValid){var t=this.action,s=this;if("LoginForm"==this.formKey||"RegisterForm"==this.formKey){var a=this.model.username,o=this.model.password;if("LoginForm"==this.formKey)this.$store.dispatch("login",{username:a,password:o}).then(function(t){return"OK"==t.statusText?e.$emit("LoginSuccess",!0):e.$emit("LoginSuccess",!1)}).catch(function(e){return console.log(e)});else{var r=this.model.firstname,n=this.model.lastname;this.$store.dispatch("register",{username:a,firstname:r,lastname:n,password:o}).then(function(){return e.$emit("RegisterSuccess",!0)}).catch(function(e){return console.log(e)})}}else d.a.post(t,this.model).then(function(e){var t=e.data;"Success"==t.Message.toString()?s.setNotification(!0):s.setNotification(!1)})}event.preventDefault()},setNotification:function(e){e?(this.submitted=!0,this.msg="Successfully submitted the suggestion!"):(this.submitted=!0,this.isError=!0,this.msg="There was an error submitting the suggestion. Please try again.")},closeNotification:function(){this.msg="",this.submitted=!1},showFormDetails:function(){this.showFormExtras?this.showFormExtras=!1:this.showFormExtras=!0}}),computed:Object(u["a"])({},Object(w["c"])(["formSchema","isAdmin","isMasterAdmin","isUser"]))},k=I,D=(s("6470"),Object(p["a"])(k,i,c,!1,null,"0cfb1f04",null)),S=D.exports,F={name:"Login",components:{Form:S},data:function(){return{formKey:"LoginForm"}},methods:{login:function(){console.log("Logging in..."),this.$emit("authenticated",!0)}}},C=F,x=(s("2616"),Object(p["a"])(C,r,n,!1,null,"3fb9a190",null)),N=x.exports,E=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"login"}},[""!=e.formKey?s("Form",{attrs:{formKey:e.formKey},on:{RegisterSuccess:e.login}}):e._e(),s("router-link",{staticClass:"link",attrs:{to:"/login"}},[e._v("Login")])],1)},L=[],O={name:"Register",components:{Form:S},data:function(){return{formKey:"RegisterForm"}},methods:{login:function(){console.log("Logging in..."),this.$emit("authenticated",!0)}}},$=O,T=(s("c123"),Object(p["a"])($,E,L,!1,null,"1a7bca44",null)),K=T.exports,M=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},U=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"image"})])}],j={name:"HomePage"},R=j,P=(s("8ad9"),Object(p["a"])(R,M,U,!1,null,"a8013690",null)),B=P.exports,J=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Q=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"about"},[s("h1",[e._v("About")]),s("hr"),s("p",[e._v("About the SkaldBot")])])}],H={},G=Object(p["a"])(H,J,Q,!1,null,null,null),z=G.exports,Y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"suggestions"},[s("SelectForm",{attrs:{pageId:e.pageId},on:{formKey:e.onChildChange}}),""!=e.formKey?s("Form",{attrs:{formKey:e.formKey},on:{error:e.error}}):e._e()],1)},V=[],q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"selectsuggestion"},[s("div",[s("select",{staticClass:"select-css",on:{change:function(t){e.setKey(t)}}},[s("option",{attrs:{value:"select"}},[e._v("Select")]),e._l(e.allForms,function(t){return s("option",{key:t.FormKey,domProps:{value:t.FormKey}},[e._v(e._s(t.FormName))])})],2)])])},W=[],Z={name:"SelectForm",props:["pageId"],data:function(){return{formKey:"",thePageId:Object(u["a"])({},this.pageId)}},methods:Object(u["a"])(Object(u["a"])({},Object(w["b"])(["fetchAllForms","fetchAllFormsByPageId"])),{},{setKey:function(e){var t=e.target.options[e.target.options.selectedIndex].value;"select"==t?(this.formKey=t,this.$emit("formKey","")):(this.formKey=t,this.$emit("formKey",t))}}),computed:Object(w["c"])(["allForms"]),created:function(){0==this.pageId||void 0==this.pageId?this.fetchAllForms():(console.log(this.pageId),this.fetchAllFormsByPageId(this.pageId))}},X=Z,ee=(s("ee26"),Object(p["a"])(X,q,W,!1,null,"ab3fd65a",null)),te=ee.exports,se={name:"Suggestions",components:{SelectForm:te,Form:S},data:function(){return{formKey:"",pageId:"1"}},methods:{onChildChange:function(e){""!=this.formKey&&(this.formKey=""),this.formKey=e},error:function(e){1==e&&(this.formKey="")}}},ae=se,oe=Object(p["a"])(ae,Y,V,!1,null,"710d7b04",null),re=oe.exports,ne=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"dashboard"}},[s("div",{staticClass:"sidenav"},[s("ul",[s("li",[s("router-link",{attrs:{to:"/dashboardhome"}},[e._v("Dashboard Home")])],1),s("li",[s("router-link",{attrs:{to:"/manageusers"}},[e._v("Users")])],1),s("li",[s("router-link",{attrs:{to:"/manageforms"}},[e._v("Manage Forms")])],1),s("li",[s("router-link",{attrs:{to:"/managestories"}},[e._v("Manage Stories")])],1),s("li",[s("router-link",{attrs:{to:"/managewisdoms"}},[e._v("Manage Wisdoms")])],1)])]),s("div",{staticClass:"dashboardContainer"},[s("router-view")],1)])},ie=[],ce={name:"Dashboard",data:function(){return{isLoaded:!1}}},ue=ce,le=(s("e2c3"),Object(p["a"])(ue,ne,ie,!1,null,"72653794",null)),de=le.exports,me=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.loaded?e._e():s("VueLoading"),e.loaded?s("div",[s("div",{staticStyle:{"margin-bottom":"10px"}},[s("el-row",[s("el-col",{attrs:{span:6}},[s("el-input",{attrs:{placeholder:"Search Username"},model:{value:e.filters[0].value,callback:function(t){e.$set(e.filters[0],"value",t)},expression:"filters[0].value"}})],1)],1)],1),s("data-tables",{attrs:{data:e.data,"action-col":e.actionCol,filters:e.filters},on:{"selection-change":e.handleSelectionChange}},[e._l(e.titles,function(e){return s("el-table-column",{key:e.prop,attrs:{prop:e.prop,label:e.label,sortable:"custom"}})}),s("el-table-column",{attrs:{prop:"IsActive",label:"User Active"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("div",[e._v(e._s(e.getBool(t.row.IsActive)))])]}}])}),s("el-table-column",{attrs:{prop:"CreateDate",label:"Date Created"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("div",[e._v(e._s(e.getDate(t.row.CreateDate)))])]}}])})],2)],1):e._e()],1)},he=[],fe={name:"ManageUsers",components:{VueLoading:A},data:function(){var e=this;return{userId:"",loaded:!1,data:[],titles:[{prop:"Id",label:"User Id"},{prop:"Username",label:"Username"},{prop:"FirstName",label:"First Name"},{prop:"LastName",label:"Last Name"}],filters:[{prop:"Username",value:""}],actionCol:{props:{label:"Actions"},buttons:[{props:{type:"primary"},handler:function(t){e.userId=t.Id,e.$router.push("/userprofile/"+e.userId)},label:"Edit"}]},selectedRow:[]}},mounted:function(){this.loaded=!1;var e=_+"getUsers?isMaster="+this.$store.getters.isMasterAdmin,t=this;d.a.get(e).then(function(e){t.data=JSON.parse(e.data)}).catch(function(e){console.log(e),this.$emit("error",!0)}),t.loaded=!0},methods:{handleSelectionChange:function(e){this.selectedRow=e},getDate:function(e){var t=new Date(e);return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()},getBool:function(e){return e?"True":"False"}}},ve=fe,pe=Object(p["a"])(ve,me,he,!1,null,null,null),ge=pe.exports,Ae=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},be=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"wrapper",attrs:{id:"unauthorized"}},[s("p",{staticClass:"centerText"},[e._v("You do not have permission to view this page.")])])}],ye={name:"unauthorized"},we=ye,_e=(s("35d5"),Object(p["a"])(we,Ae,be,!1,null,"58576fd2",null)),Ie=_e.exports,ke=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},De=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"DashboardHome"}},[s("p",[e._v("This is the home dashboard")])])}],Se={name:"DashboardHome",created:function(){this.$store.getters.isMasterAdmin||this.$store.getters.isAdmin?(this.isLoaded=!0,this.$router.push("/dashboardhome")):this.$router.push("/unauthorized")}},Fe=Se,Ce=Object(p["a"])(Fe,ke,De,!1,null,"18af8d56",null),xe=Ce.exports,Ne=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"UserProfile"}},[e.submitted?s("div",{class:e.isError?"errorMsg":"successMsg"},[s("p",{staticStyle:{"font-weight":"bold"}},[e._v(e._s(e.msg))]),s("button",{staticClass:"close",on:{click:e.closeNotification}},[e._v("x")])]):e._e(),s("div",{staticClass:"panel"},[e._m(0),s("div",{staticClass:"panel-body"},[s("h4",{staticClass:"sectionHeading"},[e._v(e._s(e.userData.FirstName)+" "+e._s(e.userData.LastName))]),s("hr"),s("form",{on:{submit:e.formSubmit}},[s("label",{attrs:{for:"userName"}},[e._v("Username:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userData.Username,expression:"userData.Username"}],attrs:{type:"text",id:"userName",name:"userName",disabled:""},domProps:{value:e.userData.Username},on:{input:function(t){t.target.composing||e.$set(e.userData,"Username",t.target.value)}}}),s("label",{attrs:{for:"firstName"}},[e._v("First Name:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userData.FirstName,expression:"userData.FirstName"}],attrs:{type:"text",id:"firstName",name:"firstName"},domProps:{value:e.userData.FirstName},on:{input:function(t){t.target.composing||e.$set(e.userData,"FirstName",t.target.value)}}}),s("label",{attrs:{for:"lastName"}},[e._v("Last Name:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userData.LastName,expression:"userData.LastName"}],attrs:{type:"text",id:"lastName",name:"lastName"},domProps:{value:e.userData.LastName},on:{input:function(t){t.target.composing||e.$set(e.userData,"LastName",t.target.value)}}}),s("label",{attrs:{for:"createDate"}},[e._v("Date Created:")]),s("input",{attrs:{type:"text",id:"createDate",name:"createDate",disabled:""},domProps:{value:e.getDate(e.userData.CreateDate)}}),e.isAdmin?s("div",[s("div",[s("hr"),s("h4",{staticClass:"sectionHeading"},[e._v("Admin Options")]),s("div",[s("label",{attrs:{for:"isActive"}},[e._v("Is User Active:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userData.IsActive,expression:"userData.IsActive"}],attrs:{type:"checkbox",id:"isActive",name:"isActive"},domProps:{checked:Array.isArray(e.userData.IsActive)?e._i(e.userData.IsActive,null)>-1:e.userData.IsActive},on:{change:function(t){var s=e.userData.IsActive,a=t.target,o=!!a.checked;if(Array.isArray(s)){var r=null,n=e._i(s,r);a.checked?n<0&&e.$set(e.userData,"IsActive",s.concat([r])):n>-1&&e.$set(e.userData,"IsActive",s.slice(0,n).concat(s.slice(n+1)))}else e.$set(e.userData,"IsActive",o)}}})]),s("div",[s("label",{attrs:{for:"isLocked"}},[e._v("Is User Locked:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userData.IsLocked,expression:"userData.IsLocked"}],attrs:{type:"checkbox",id:"isLocked",name:"isLocked"},domProps:{checked:Array.isArray(e.userData.IsLocked)?e._i(e.userData.IsLocked,null)>-1:e.userData.IsLocked},on:{change:function(t){var s=e.userData.IsLocked,a=t.target,o=!!a.checked;if(Array.isArray(s)){var r=null,n=e._i(s,r);a.checked?n<0&&e.$set(e.userData,"IsLocked",s.concat([r])):n>-1&&e.$set(e.userData,"IsLocked",s.slice(0,n).concat(s.slice(n+1)))}else e.$set(e.userData,"IsLocked",o)}}})])]),s("div",[s("hr"),s("h4",{staticClass:"sectionHeading"},[e._v("Permissions")]),s("div",e._l(e.roles,function(t){return s("div",{key:t.Role},[s("label",{attrs:{for:"item.Role"}},[e._v(e._s(t.RoleName))]),s("input",{attrs:{type:"checkbox",name:t.Role},domProps:{value:t.Role,checked:t.Role==e.selectedRole},on:{change:e.updateSelectedRole}})])}))])]):e._e(),s("button",{attrs:{type:"submit"}},[e._v("Update")])])])])])},Ee=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"panel-heading"},[s("h4",[e._v("User Profile")])])}],Le={name:"UserProfile",props:{userId:{type:String,required:!0}},data:function(){return{isAdmin:!1,userData:[],oldUserData:[],roles:[],selectedRole:"",msg:"",isError:!0,submitted:!1,success:!1}},watch:{submitted:function(){this.submitted&&setTimeout(this.closeNotification,5e3)}},mounted:function(){this.getData()},methods:{getDate:function(e){var t=new Date(e);return t.getMonth()+1+"-"+t.getDate()+"-"+t.getFullYear()},updateSelectedRole:function(e){this.selectedRole="",e.target.checked&&(this.selectedRole=e.target.value)},formSubmit:function(){if(event.preventDefault(),console.log(this.userData),console.log(this.oldUserData),this.objectsAreSame(this.userData,this.oldUserData))this.setNotification(!1);else{var e=_+"getUser",t=[],s=this;this.selectedRole!=this.userData.r[0].Role&&(this.userData.r[0].Role=this.selectedRole),t.push(this.userData),d.a.post(e,t).then(function(e){var t=e.data;"Success"==t.Message.toString()?(s.success=!0,s.setNotification(s.success),s.getData()):(s.success=!1,s.setNotification(s.success),s.getData())})}},closeNotification:function(){this.msg="",this.submitted=!1,this.isError=!1},setNotification:function(e){console.log("Success value: "+e),e?(this.submitted=!0,this.msg="Successfully updated the user!"):(this.submitted=!0,this.isError=!0,this.msg="There was an error updating the user. Please try again.")},getData:function(){var e=_+"getUser?userId="+this.userId,t=_+"getRoles",s=this;d.a.get(e).then(function(e){var t=e.data[0];s.userData=JSON.parse(t),s.userData=s.userData[0],s.oldUserData=JSON.parse(t),s.oldUserData=s.oldUserData[0],s.selectedRole=s.userData.r[0].Role}).catch(function(e){console.log(e)}),d.a.get(t).then(function(e){s.roles=JSON.parse(e.data)}).catch(function(e){console.log(e)}),(this.$store.getters.isAdmin||this.$store.getters.isMasterAdmin)&&(this.isAdmin=!0)},objectsAreSame:function(e,t){var s=!0;for(var a in e)"r"==a?e[a][0].Role!=t[a][0].Role&&(s=!1):e[a]!=t[a]&&(s=!1);return s}}},Oe=Le,$e=(s("84e6"),Object(p["a"])(Oe,Ne,Ee,!1,null,"2647f813",null)),Te=$e.exports;a["default"].use(o["a"]);var Ke=new o["a"]({mode:"history",routes:[{path:"/home",name:"home",component:B},{path:"/login",name:"login",component:N},{path:"/register",name:"register",component:K},{path:"/about",component:z},{path:"/suggestions",component:re},{path:"/dashboard",component:de,redirect:"/dashboardhome",children:[{path:"/dashboardhome",name:"dashboardhome",component:xe},{path:"/manageusers",name:"manageusers",component:ge}]},{path:"/userprofile/:userId",component:Te,props:!0},{path:"/unauthorized",component:Ie},{path:"*",redirect:"/home"}],linkExactActiveClass:"activeLink"}),Me=(s("96cf"),s("1da1")),Ue={forms:[]},je={allForms:function(e){return e.forms},formSchema:function(e){return e.formSchema}},Re={fetchAllForms:function(){var e=Object(Me["a"])(regeneratorRuntime.mark(function e(t){var s,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return s=t.commit,e.next=3,d.a.get("http://127.0.0.1:5000/api/getForms");case 3:a=e.sent,s("setForms",JSON.parse(a.data));case 5:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),fetchAllFormsByPageId:function(){var e=Object(Me["a"])(regeneratorRuntime.mark(function e(t,s){var a,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,e.next=3,d.a.get("http://127.0.0.1:5000/api/getFormByPageId?pageId=".concat(s));case 3:o=e.sent,a("setForms",JSON.parse(o.data));case 5:case"end":return e.stop()}},e)}));function t(t,s){return e.apply(this,arguments)}return t}()},Pe={setForms:function(e,t){return e.forms=t}},Be={state:Ue,getters:je,actions:Re,mutations:Pe};a["default"].prototype.$http=d.a;var Je=localStorage.getItem("token");Je&&(a["default"].prototype.$http.defaults.headers.common["Authorization"]=Je);var Qe={token:localStorage.getItem("token")||"",status:"",isMasterAdmin:localStorage.getItem("isMasterAdmin")||!1,isAdmin:localStorage.getItem("isAdmin")||!1,isUser:!0},He={userId:function(e){return e.token},isLoggedIn:function(e){return!!e.token},authStatus:function(e){return e.status},isMasterAdmin:function(e){return e.isMasterAdmin},isAdmin:function(e){return e.isAdmin},isUser:function(e){return e.isUser}},Ge={login:function(){var e=Object(Me["a"])(regeneratorRuntime.mark(function e(t,s){var a,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,o=s,e.abrupt("return",new Promise(function(e,t){a("auth_request");var r=_+"login";d.a.post(r,s).then(function(r){var n=r.data[0].Id;console.log(n),localStorage.setItem("token",n),d.a.defaults.headers.common["Authorization"]=n,a("auth_success",n,s);var i=_+"roles?username="+o.username;d.a.get(i).then(function(t){var s=JSON.parse(t.data);a("user_roles",s[0].Role),e(t)}).catch(function(e){a("auth_error"),localStorage.removeItem("token"),t(e)}),e(r)}).catch(function(e){a("auth_error"),localStorage.removeItem("token"),t(e)})}));case 3:case"end":return e.stop()}},e)}));function t(t,s){return e.apply(this,arguments)}return t}(),register:function(){var e=Object(Me["a"])(regeneratorRuntime.mark(function e(t,s){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,e.abrupt("return",new Promise(function(e,t){a("auth_request");var o=_+"register";d.a.post(o,s).then(function(t){var s=t.data.token,o=t.data.user;localStorage.setItem("token",s),d.a.defaults.headers.common["Authorization"]=s,a("auth_success",s,o),e(t)}).catch(function(e){a("auth_error"),localStorage.removeItem("token"),t(e)})}));case 2:case"end":return e.stop()}},e)}));function t(t,s){return e.apply(this,arguments)}return t}(),logout:function(e){var t=e.commit;return new Promise(function(e,s){t("logout"),localStorage.removeItem("token"),delete d.a.defaults.headers.common["Authorization"],e()})}},ze={auth_request:function(e){e.status="loading"},auth_success:function(e,t){e.status="success",e.token=t},user_roles:function(e,t){"MasterAdmin"==t&&localStorage.setItem("isMasterAdmin",!0),"Admin"==t&&localStorage.setItem("isAdmin",!0)},auth_error:function(e){e.status="error"},logout:function(e){e.status="",e.token="",e.isMasterAdmin=!1,localStorage.removeItem("isMasterAdmin"),e.isAdmin=!1,localStorage.removeItem("isAdmin"),e.isUser=!0}},Ye={state:Qe,getters:He,actions:Ge,mutations:ze};a["default"].use(w["a"]);var Ve=new w["a"].Store({modules:{authentication:Ye,forms:Be}}),qe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"logo"},[s("img",{staticStyle:{height:"60px"},attrs:{src:e.logoImage}})]),s("div",{staticClass:"navbar"},[s("div",{staticClass:"icon-bar",on:{click:function(t){e.Show()}}},[s("i"),s("i"),s("i")]),s("ul",{attrs:{id:"nav-lists"}},[s("li",{staticClass:"close"},[s("span",{on:{click:function(t){e.Hide()}}},[e._v("×")])]),s("li",[s("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),s("li",[s("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),s("li",[s("router-link",{attrs:{to:"/suggestions"}},[e._v("Submit Ideas")])],1),s("li",[e.authenticated&&(e.admin||e.masterAdmin)?s("router-link",{attrs:{to:"/dashboard"}},[e._v("Dashboard")]):e._e()],1),s("li",[e.authenticated?s("router-link",{attrs:{to:"/"},nativeOn:{click:function(t){e.logout()}}},[e._v("Logout")]):e._e()],1),s("li",[e.authenticated?e._e():s("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1)])])]),s("router-view",{on:{authenticated:e.setAuthenticated}})],1)},We=[],Ze={name:"app",data:function(){return{authenticated:!1,logoImage:s("cf05"),background:s("749f"),masterAdmin:!1,admin:!1,user:!0,isInactive:!1,userActivityThrottlerTimeout:null,userActivityTimeout:null,userId:""}},beforeMount:function(){this.activateActivityTracker()},beforeDestroy:function(){window.removeEventListener("mousemove",this.userActivityThrottler),window.removeEventListener("scroll",this.userActivityThrottler),window.removeEventListener("keydown",this.userActivityThrottler),window.removeEventListener("resize",this.userActivityThrottler),clearTimeout(this.userActivityTimeout),clearTimeout(this.userActivityThrottlerTimeout)},mounted:function(){this.isLoggedIn?this.authenticated||(this.authenticated=!0):this.authenticated&&(this.authenticated=!1)},watch:{isLoggedIn:function(){this.isLoggedIn&&!this.authenticated?this.setAuthenticated(!0):!this.isLoggedIn&&this.authenticated&&this.setAuthenticated(!1)}},computed:Object(u["a"])({},Object(w["c"])(["isLoggedIn","isAdmin","isMasterAdmin","isUser"])),created:function(){this.$http.interceptors.response.use(void 0,function(e){return new Promise(function(t,s){throw 401==e.status&&e.config&&!e.config__isRetryRequest&&this.$store.dispatch(logout),e})}),this.$store.getters.isMasterAdmin?(this.masterAdmin=!0,this.admin=!0):this.$store.getters.isAdmin&&(this.admin=!0),console.log(localStorage.getItem("token"))},methods:{Show:function(){document.getElementById("nav-lists").classList.add("_Menus-show")},Hide:function(){document.getElementById("nav-lists").classList.remove("_Menus-show")},setAuthenticated:function(e){console.log("Setting authentication"),this.authenticated=e,e?this.userId:this.userId="",this.$router.push("/")},logout:function(){var e=this;this.$store.dispatch("logout").then(function(){e.authenticated=!1}),this.masterAdmin=!1,this.admin=!1},activateActivityTracker:function(){window.addEventListener("mousemove",this.userActivityThrottler),window.addEventListener("mousemove",this.resetUserActivityTimeout),window.addEventListener("scroll",this.resetUserActivityTimeout),window.addEventListener("keydown",this.resetUserActivityTimeout),window.addEventListener("resize",this.resetUserActivityTimeout),window.addEventListener("beforeunload",function(){console.log("Unloading"),this.inactiveUserAction()})},resetUserActivityTimeout:function(){var e=this;clearTimeout(this.userActivityTimeout),this.userActivityTimeout=setTimeout(function(){e.inactiveUserAction()},18e5)},userActivityThrottler:function(){var e=this;this.userActivityThrottlerTimeout||(this.userActivityThrottlerTimeout=setTimeout(function(){e.resetUserActivityTimeout(),clearTimeout(e.userActivityThrottlerTimeout),e.userActivityThrottlerTimeout=null},18e5))},inactiveUserAction:function(){this.authenticated&&(this.$store.dispatch("logout"),location.reload())}}},Xe=Ze,et=(s("034f"),Object(p["a"])(Xe,qe,We,!1,null,null,null)),tt=et.exports,st=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",["checkbox"===e.passwordFieldType?s("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"form-control",attrs:{disabled:e.schema.disabled,maxlength:e.schema.max,placeholder:e.schema.placeholder,readonly:e.schema.readonly,validators:e.schema.validators,showButton:e.schema.showButton,type:"checkbox"},domProps:{checked:Array.isArray(e.value)?e._i(e.value,null)>-1:e.value},on:{change:function(t){var s=e.value,a=t.target,o=!!a.checked;if(Array.isArray(s)){var r=null,n=e._i(s,r);a.checked?n<0&&(e.value=s.concat([r])):n>-1&&(e.value=s.slice(0,n).concat(s.slice(n+1)))}else e.value=o}}}):"radio"===e.passwordFieldType?s("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"form-control",attrs:{disabled:e.schema.disabled,maxlength:e.schema.max,placeholder:e.schema.placeholder,readonly:e.schema.readonly,validators:e.schema.validators,showButton:e.schema.showButton,type:"radio"},domProps:{checked:e._q(e.value,null)},on:{change:function(t){e.value=null}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"form-control",attrs:{disabled:e.schema.disabled,maxlength:e.schema.max,placeholder:e.schema.placeholder,readonly:e.schema.readonly,validators:e.schema.validators,showButton:e.schema.showButton,type:e.passwordFieldType},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}}),e.showButton?s("input",{attrs:{type:"checkbox",id:"togglePassword"},on:{click:e.showPassword}}):e._e(),e.showButton?s("label",{attrs:{for:"togglePassword"}},[e._v("Show Password")]):e._e()])},at=[],ot={name:"passwordField",mixins:[b["abstractField"]],data:function(){return{showButton:!1,passwordFieldType:"password"}},mounted:function(){this.showButton=this.schema.showButton},watch:{showButton:function(e,t){e!=t&&(this.showButton=e)}},methods:{showPassword:function(){"password"==this.passwordFieldType?this.passwordFieldType="text":this.passwordFieldType="password"}}},rt=ot,nt=(s("09e8"),Object(p["a"])(rt,st,at,!1,null,"4e8a6ce6",null)),it=nt.exports,ct=s("5c96"),ut=s.n(ct),lt=(s("0fae"),s("b2d6")),dt=s.n(lt),mt=s("4897"),ht=s.n(mt),ft=s("e391"),vt=s.n(ft);ht.a.use(dt.a),a["default"].component("fieldPassword",it),a["default"].use(ut.a),a["default"].use(y.a),a["default"].use(vt.a),new a["default"]({el:"#app",router:Ke,store:Ve,render:function(e){return e(tt)}})},"585b":function(e,t,s){},6470:function(e,t,s){"use strict";var a=s("f859"),o=s.n(a);o.a},"749f":function(e,t,s){e.exports=s.p+"img/SbBackground.0eea793b.jpg"},7931:function(e,t,s){},"84e6":function(e,t,s){"use strict";var a=s("ddd2"),o=s.n(a);o.a},"89c8":function(e,t,s){},"8ad9":function(e,t,s){"use strict";var a=s("ff3a"),o=s.n(a);o.a},b98d:function(e,t,s){"use strict";var a=s("7931"),o=s.n(a);o.a},c123:function(e,t,s){"use strict";var a=s("1af1"),o=s.n(a);o.a},cf05:function(e,t,s){e.exports=s.p+"img/logo.589e42b4.png"},cf1c:function(e,t){e.exports="data:image/gif;base64,R0lGODlhEAAQAPIAACjGw9ns8FHOzKrh49ns8JTc3n3Y2HLV1iH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="},ddd2:function(e,t,s){},e2c3:function(e,t,s){"use strict";var a=s("ed2a"),o=s.n(a);o.a},e773:function(e,t,s){},ed2a:function(e,t,s){},ee26:function(e,t,s){"use strict";var a=s("89c8"),o=s.n(a);o.a},f859:function(e,t,s){},ff3a:function(e,t,s){}});
//# sourceMappingURL=app.a7ce63fc.js.map