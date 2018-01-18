﻿/**
 * jQuery EasyUI 1.3.3
 * 
 * Copyright (c) 2009-2013 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the GPL or commercial licenses
 * To use it on other terms please contact us: info@jeasyui.com
 * http://www.gnu.org/licenses/gpl.txt
 * http://www.jeasyui.com/license_commercial.php
 *
 */
(function($){
function _1(_2){
$(_2).addClass("validatebox-text");
};
function _3(_4){
var _5=$.data(_4,"validatebox");
_5.validating=false;
$(_4).tooltip("destroy");
$(_4).unbind();
$(_4).remove();
};
function _6(_7){
var _8=$(_7);
var _9=$.data(_7,"validatebox");
_8.unbind(".validatebox").bind("focus.validatebox",function(){
_9.validating=true;
_9.value=undefined;
(function(){
if(_9.validating){
if(_9.value!=_8.val()){
_9.value=_8.val();
if(_9.timer){
clearTimeout(_9.timer);
}
_9.timer=setTimeout(function(){
$(_7).validatebox("validate");
},_9.options.delay);
}else{
_f(_7);
}
setTimeout(arguments.callee,200);
}
})();
}).bind("blur.validatebox",function(){
if(_9.timer){
clearTimeout(_9.timer);
_9.timer=undefined;
}
_9.validating=false;
_a(_7);
}).bind("mouseenter.validatebox",function(){
if(_8.hasClass("validatebox-invalid")){
_b(_7);
}
}).bind("mouseleave.validatebox",function(){
if(!_9.validating){
_a(_7);
}
});
};
function _b(_c){
var _d=$.data(_c,"validatebox");
var _e=_d.options;
$(_c).tooltip($.extend({},_e.tipOptions,{content:_d.message,position:_e.tipPosition,deltaX:_e.deltaX})).tooltip("show");
_d.tip=true;
};
function _f(_10){
var _11=$.data(_10,"validatebox");
if(_11&&_11.tip){
$(_10).tooltip("reposition");
}
};
function _a(_12){
var _13=$.data(_12,"validatebox");
_13.tip=false;
$(_12).tooltip("hide");
};
function _14(_15){
var _16=$.data(_15,"validatebox");
var _17=_16.options;
var box=$(_15);
var _18=box.val();
function _19(msg){
_16.message=msg;
};
function _1a(_1b){
var _1c=/([a-zA-Z_]+)(.*)/.exec(_1b);
var _1d=_17.rules[_1c[1]];
if(_1d&&_18){
var _1e=eval(_1c[2]);
if(!_1d["validator"](_18,_1e)){
box.addClass("validatebox-invalid");
var _1f=_1d["message"];
if(_1e){
for(var i=0;i<_1e.length;i++){
_1f=_1f.replace(new RegExp("\\{"+i+"\\}","g"),_1e[i]);
}
}
_19(_17.invalidMessage||_1f);
if(_16.validating){
_b(_15);
}
return false;
}
}
return true;
};
if(_17.required){
if(_18==""){
box.addClass("validatebox-invalid");
_19(_17.missingMessage);
if(_16.validating){
_b(_15);
}
return false;
}
}
if(_17.validType){
if(typeof _17.validType=="string"){
if(!_1a(_17.validType)){
return false;
}
}else{
for(var i=0;i<_17.validType.length;i++){
if(!_1a(_17.validType[i])){
return false;
}
}
}
}
box.removeClass("validatebox-invalid");
_a(_15);
return true;
};
$.fn.validatebox=function(_20,_21){
if(typeof _20=="string"){
return $.fn.validatebox.methods[_20](this,_21);
}
_20=_20||{};
return this.each(function(){
var _22=$.data(this,"validatebox");
if(_22){
$.extend(_22.options,_20);
}else{
_1(this);
$.data(this,"validatebox",{options:$.extend({},$.fn.validatebox.defaults,$.fn.validatebox.parseOptions(this),_20)});
}
_6(this);
});
};
$.fn.validatebox.methods={options:function(jq){
return $.data(jq[0],"validatebox").options;
},destroy:function(jq){
return jq.each(function(){
_3(this);
});
},validate:function(jq){
return jq.each(function(){
_14(this);
});
},isValid:function(jq){
return _14(jq[0]);
}};
$.fn.validatebox.parseOptions=function(_23){
var t=$(_23);
return $.extend({},$.parser.parseOptions(_23,["validType","missingMessage","invalidMessage","tipPosition",{delay:"number",deltaX:"number"}]),{required:(t.attr("required")?true:undefined)});
};
$.fn.validatebox.defaults={required:false,validType:null,delay:200,missingMessage:"This field is required.",invalidMessage:null,tipPosition:"right",deltaX:0,tipOptions:{showEvent:"none",hideEvent:"none",showDelay:0,hideDelay:0,zIndex:"",onShow:function(){
$(this).tooltip("tip").css({color:"#000",borderColor:"#CC9933",backgroundColor:"#FFFFCC"});
},onHide:function(){
$(this).tooltip("destroy");
}},rules:{email:{validator:function(_24){
return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(_24);
},message:"Please enter a valid email address."},url:{validator:function(_25){
return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(_25);
},message:"Please enter a valid URL."},length:{validator:function(_26,_27){
var len=$.trim(_26).length;
return len>=_27[0]&&len<=_27[1];
},message:"Please enter a value between {0} and {1}."},remote:{validator:function(_28,_29){
var _2a={};
_2a[_29[1]]=_28;
var _2b=$.ajax({url:_29[0],dataType:"json",data:_2a,async:false,cache:false,type:"post"}).responseText;
return _2b=="true";
},message:"Please fix this field."}}};
})(jQuery);

