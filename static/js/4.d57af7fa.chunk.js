(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[4],{101:function(e,t,a){e.exports={Auth:"Auth_Auth__1Zul_"}},102:function(e,t,a){"use strict";a.r(t);var n=a(23),l=a(10),i=a(11),r=a(13),u=a(12),o=a(0),s=a.n(o),c=a(4),h=a(17),d=a(3),p=a(101),m=a.n(p),v=a(16),g=a(96),f=a(37),b=a(28),E=function(e){Object(r.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var i=arguments.length,r=new Array(i),u=0;u<i;u++)r[u]=arguments[u];return(e=t.call.apply(t,[this].concat(r))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Email Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!0},e.handleInputChange=function(t,a){var l=t.target.value,i=Object(d.b)(e.state.controls,Object(n.a)({},a,Object(d.b)(e.state.controls[a],{value:l,valid:Object(d.a)(l,e.state.controls[a].validation),touched:!0})));e.setState({controls:i})},e.handleSubmit=function(t){t.preventDefault(),e.props.onAuth(e.state.controls.email.value,e.state.controls.password.value,e.state.isSignup)},e.handlSwitchAuthMode=function(){e.setState((function(e){return{isSignup:!e.isSignup}}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.isBuilding||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,t=[];for(var a in this.state.controls)t.push({id:a,config:this.state.controls[a]});var n=t.map((function(t){return s.a.createElement(g.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,handleChange:function(a){return e.handleInputChange(a,t.id)},invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched})}));this.props.loading&&(n=s.a.createElement(b.a,null));var l=null;this.props.error&&(l=s.a.createElement("p",null,"Error: ",this.props.error.message));var i=null;return this.props.isAuth&&(i=s.a.createElement(c.a,{to:this.props.authRedirectPath})),s.a.createElement("div",{className:m.a.Auth},i,l,s.a.createElement("form",{onSubmit:this.handleSubmit},n,s.a.createElement(f.a,{buttonType:"Success"},"SUBMIT")),s.a.createElement(f.a,{buttonType:"Danger",handleClick:this.handlSwitchAuthMode},"Switch to ",this.state.isSignup?"SIGN IN":"SIGN UP"))}}]),a}(o.Component);t.default=Object(h.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuth:null!==e.auth.token,isBuilding:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{onAuth:function(t,a,n){return e(v.b(t,a,n))},onSetAuthRedirectPath:function(){return e(v.l("/"))}}}))(E)},96:function(e,t,a){"use strict";var n=a(0),l=a.n(n),i=a(97),r=a.n(i);t.a=function(e){var t=null,a=[r.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&a.push(r.a.Invalid),e.elementType){case"input":t=l.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.handleChange}));break;case"textarea":t=l.a.createElement("textarea",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.handleChange}));break;case"select":t=l.a.createElement("select",{className:a.join(" "),value:e.value,onChange:e.handleChange},e.elementConfig.options.map((function(e,t){return l.a.createElement("option",{key:t,value:e.value},e.displayValue)})));break;default:t=l.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.handleChange}))}var n=null;return e.invalid&&e.touched&&(n=l.a.createElement("p",{className:r.a.ValidationError},"Please enter a valid value!")),l.a.createElement("div",{className:r.a.Input},l.a.createElement("label",{className:r.a.Label},e.label),t,n)}},97:function(e,t,a){e.exports={Input:"Input_Input__3r5Ke",Label:"Input_Label__1qyHr",InputElement:"Input_InputElement__2m88K",Invalid:"Input_Invalid__16Mis",ValidationError:"Input_ValidationError__qMR97"}}}]);
//# sourceMappingURL=4.d57af7fa.chunk.js.map