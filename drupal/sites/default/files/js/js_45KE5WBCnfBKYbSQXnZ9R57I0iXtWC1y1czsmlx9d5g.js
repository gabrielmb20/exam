/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */(function(e){typeof define=="function"&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){var t=0,n=Array.prototype.slice;return e.cleanData=function(t){return function(n){var r,i,s;for(s=0;(i=n[s])!=null;s++)try{r=e._data(i,"events"),r&&r.remove&&e(i).triggerHandler("remove")}catch(o){}t(n)}}(e.cleanData),e.widget=function(t,n,r){var i,s,o,u,a={},f=t.split(".")[0];return t=t.split(".")[1],i=f+"-"+t,r||(r=n,n=e.Widget),e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)},e[f]=e[f]||{},s=e[f][t],o=e[f][t]=function(e,t){if(!this._createWidget)return new o(e,t);arguments.length&&this._createWidget(e,t)},e.extend(o,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),u=new n,u.options=e.widget.extend({},u.options),e.each(r,function(t,r){if(!e.isFunction(r)){a[t]=r;return}a[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},i=function(e){return n.prototype[t].apply(this,e)};return function(){var t=this._super,n=this._superApply,s;return this._super=e,this._superApply=i,s=r.apply(this,arguments),this._super=t,this._superApply=n,s}}()}),o.prototype=e.widget.extend(u,{widgetEventPrefix:s?u.widgetEventPrefix||t:t},a,{constructor:o,namespace:f,widgetName:t,widgetFullName:i}),s?(e.each(s._childConstructors,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,o,n._proto)}),delete s._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){var r=n.call(arguments,1),i=0,s=r.length,o,u;for(;i<s;i++)for(o in r[i])u=r[i][o],r[i].hasOwnProperty(o)&&u!==undefined&&(e.isPlainObject(u)?t[o]=e.isPlainObject(t[o])?e.widget.extend({},t[o],u):e.widget.extend({},u):t[o]=u);return t},e.widget.bridge=function(t,r){var i=r.prototype.widgetFullName||t;e.fn[t]=function(s){var o=typeof s=="string",u=n.call(arguments,1),a=this;return o?this.each(function(){var n,r=e.data(this,i);if(s==="instance")return a=r,!1;if(!r)return e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+s+"'");if(!e.isFunction(r[s])||s.charAt(0)==="_")return e.error("no such method '"+s+"' for "+t+" widget instance");n=r[s].apply(r,u);if(n!==r&&n!==undefined)return a=n&&n.jquery?a.pushStack(n.get()):n,!1}):(u.length&&(s=e.widget.extend.apply(null,[s].concat(u))),this.each(function(){var t=e.data(this,i);t?(t.option(s||{}),t._init&&t._init()):e.data(this,i,new r(s,this))})),a}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(n,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=t++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===r&&this.destroy()}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),n),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,n){var r=t,i,s,o;if(arguments.length===0)return e.widget.extend({},this.options);if(typeof t=="string"){r={},i=t.split("."),t=i.shift();if(i.length){s=r[t]=e.widget.extend({},this.options[t]);for(o=0;o<i.length-1;o++)s[i[o]]=s[i[o]]||{},s=s[i[o]];t=i.pop();if(arguments.length===1)return s[t]===undefined?null:s[t];s[t]=n}else{if(arguments.length===1)return this.options[t]===undefined?null:this.options[t];r[t]=n}}return this._setOptions(r),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,e==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,n,r){var i,s=this;typeof t!="boolean"&&(r=n,n=t,t=!1),r?(n=i=e(n),this.bindings=this.bindings.add(n)):(r=n,n=this.element,i=this.widget()),e.each(r,function(r,o){function u(){if(!t&&(s.options.disabled===!0||e(this).hasClass("ui-state-disabled")))return;return(typeof o=="string"?s[o]:o).apply(s,arguments)}typeof o!="string"&&(u.guid=o.guid=o.guid||u.guid||e.guid++);var a=r.match(/^([\w:-]*)\s*(.*)$/),f=a[1]+s.eventNamespace,l=a[2];l?i.delegate(l,f,u):n.bind(f,u)})},_off:function(t,n){n=(n||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(n).undelegate(n),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function n(){return(typeof e=="string"?r[e]:e).apply(r,arguments)}var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options[t];r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){typeof i=="string"&&(i={effect:i});var o,u=i?i===!0||typeof i=="number"?n:i.effect||n:t;i=i||{},typeof i=="number"&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&e.effects.effect[u]?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})}}),e.widget});;
/*!
 * jQuery UI Menu 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/menu/
 */(function(e){typeof define=="function"&&define.amd?define(["jquery","./core","./widget","./position"],e):e(jQuery)})(function(e){return e.widget("ui.menu",{version:"1.11.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item":function(e){e.preventDefault()},"click .ui-menu-item":function(t){var n=e(t.target);!this.mouseHandled&&n.not(".ui-state-disabled").length&&(this.select(t),t.isPropagationStopped()||(this.mouseHandled=!0),n.has(".ui-menu").length?this.expand(t):!this.element.is(":focus")&&e(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&this.active.parents(".ui-menu").length===1&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){if(this.previousFilter)return;var n=e(t.currentTarget);n.siblings(".ui-state-active").removeClass("ui-state-active"),this.focus(t,n)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var n=this.active||this.element.find(this.options.items).eq(0);t||this.focus(e,n)},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){this._closeOnDocumentClick(e)&&this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){var n,r,i,s,o=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:o=!1,r=this.previousFilter||"",i=String.fromCharCode(t.keyCode),s=!1,clearTimeout(this.filterTimer),i===r?s=!0:i=r+i,n=this._filterMenuItems(i),n=s&&n.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):n,n.length||(i=String.fromCharCode(t.keyCode),n=this._filterMenuItems(i)),n.length?(this.focus(t,n),this.previousFilter=i,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}o&&t.preventDefault()},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.is("[aria-haspopup='true']")?this.expand(e):this.select(e))},refresh:function(){var t,n,r=this,i=this.options.icons.submenu,s=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),n=t.parent(),r=e("<span>").addClass("ui-menu-icon ui-icon "+i).data("ui-menu-submenu-carat",!0);n.attr("aria-haspopup","true").prepend(r),t.attr("aria-labelledby",n.attr("id"))}),t=s.add(this.element),n=t.find(this.options.items),n.not(".ui-menu-item").each(function(){var t=e(this);r._isDivider(t)&&t.addClass("ui-widget-content ui-menu-divider")}),n.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),n.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){e==="icons"&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),e==="disabled"&&this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this._super(e,t)},focus:function(e,t){var n,r;this.blur(e,e&&e.type==="focus"),this._scrollIntoView(t),this.active=t.first(),r=this.active.addClass("ui-state-focus").removeClass("ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",r.attr("id")),this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),e&&e.type==="keydown"?this._close():this.timer=this._delay(function(){this._close()},this.delay),n=t.children(".ui-menu"),n.length&&e&&/^mouse/.test(e.type)&&this._startOpening(n),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var n,r,i,s,o,u;this._hasScroll()&&(n=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,r=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,i=t.offset().top-this.activeMenu.offset().top-n-r,s=this.activeMenu.scrollTop(),o=this.activeMenu.height(),u=t.outerHeight(),i<0?this.activeMenu.scrollTop(s+i):i+u>o&&this.activeMenu.scrollTop(s+i-o+u))},blur:function(e,t){t||clearTimeout(this.timer);if(!this.active)return;this.active.removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active})},_startOpening:function(e){clearTimeout(this.timer);if(e.attr("aria-hidden")!=="true")return;this.timer=this._delay(function(){this._close(),this._open(e)},this.delay)},_open:function(t){var n=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(n)},collapseAll:function(t,n){clearTimeout(this.timer),this.timer=this._delay(function(){var r=n?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));r.length||(r=this.element),this._close(r),this.blur(t),this.activeMenu=r},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")},_closeOnDocumentClick:function(t){return!e(t.target).closest(".ui-menu").length},_isDivider:function(e){return!/[^\-\u2014\u2013\s]/.test(e.text())},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,n){var r;this.active&&(e==="first"||e==="last"?r=this.active[e==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1):r=this.active[e+"All"](".ui-menu-item").eq(0));if(!r||!r.length||!this.active)r=this.activeMenu.find(this.options.items)[t]();this.focus(n,r)},nextPage:function(t){var n,r,i;if(!this.active){this.next(t);return}if(this.isLastItem())return;this._hasScroll()?(r=this.active.offset().top,i=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return n=e(this),n.offset().top-r-i<0}),this.focus(t,n)):this.focus(t,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())},previousPage:function(t){var n,r,i;if(!this.active){this.next(t);return}if(this.isFirstItem())return;this._hasScroll()?(r=this.active.offset().top,i=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return n=e(this),n.offset().top-r+i>0}),this.focus(t,n)):this.focus(t,this.activeMenu.find(this.options.items).first())},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var n={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,n)},_filterMenuItems:function(t){var n=t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),r=new RegExp("^"+n,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return r.test(e.trim(e(this).text()))})}})});;
/*!
 * jQuery UI Autocomplete 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/autocomplete/
 */(function(e){typeof define=="function"&&define.amd?define(["jquery","./core","./widget","./position","./menu"],e):e(jQuery)})(function(e){return e.widget("ui.autocomplete",{version:"1.11.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var t,n,r,i=this.element[0].nodeName.toLowerCase(),s=i==="textarea",o=i==="input";this.isMultiLine=s?!0:o?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[s||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(i){if(this.element.prop("readOnly")){t=!0,r=!0,n=!0;return}t=!1,r=!1,n=!1;var s=e.ui.keyCode;switch(i.keyCode){case s.PAGE_UP:t=!0,this._move("previousPage",i);break;case s.PAGE_DOWN:t=!0,this._move("nextPage",i);break;case s.UP:t=!0,this._keyEvent("previous",i);break;case s.DOWN:t=!0,this._keyEvent("next",i);break;case s.ENTER:this.menu.active&&(t=!0,i.preventDefault(),this.menu.select(i));break;case s.TAB:this.menu.active&&this.menu.select(i);break;case s.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(i),i.preventDefault());break;default:n=!0,this._searchTimeout(i)}},keypress:function(r){if(t){t=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&r.preventDefault();return}if(n)return;var i=e.ui.keyCode;switch(r.keyCode){case i.PAGE_UP:this._move("previousPage",r);break;case i.PAGE_DOWN:this._move("nextPage",r);break;case i.UP:this._keyEvent("previous",r);break;case i.DOWN:this._keyEvent("next",r)}},input:function(e){if(r){r=!1,e.preventDefault();return}this._searchTimeout(e)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){if(this.cancelBlur){delete this.cancelBlur;return}clearTimeout(this.searching),this.close(e),this._change(e)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var n=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(r){r.target!==t.element[0]&&r.target!==n&&!e.contains(n,r.target)&&t.close()})})},menufocus:function(t,n){var r,i;if(this.isNewMenu){this.isNewMenu=!1;if(t.originalEvent&&/^mouse/.test(t.originalEvent.type)){this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)});return}}i=n.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",t,{item:i})&&t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(i.value),r=n.item.attr("aria-label")||i.value,r&&e.trim(r).length&&(this.liveRegion.children().hide(),e("<div>").text(r).appendTo(this.liveRegion))},menuselect:function(e,t){var n=t.item.data("ui-autocomplete-item"),r=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=r,this._delay(function(){this.previous=r,this.selectedItem=n})),!1!==this._trigger("select",e,{item:n})&&this._value(n.value),this.term=this._value(),this.close(e),this.selectedItem=n}}),this.liveRegion=e("<span>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),e==="source"&&this._initSource(),e==="appendTo"&&this.menu.element.appendTo(this._appendTo()),e==="disabled"&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0));if(!t||!t[0])t=this.element.closest(".ui-front");return t.length||(t=this.document[0].body),t},_initSource:function(){var t,n,r=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(n,r){r(e.ui.autocomplete.filter(t,n.term))}):typeof this.options.source=="string"?(n=this.options.source,this.source=function(t,i){r.xhr&&r.xhr.abort(),r.xhr=e.ajax({url:n,data:t,dataType:"json",success:function(e){i(e)},error:function(){i([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){var t=this.term===this._value(),n=this.menu.element.is(":visible"),r=e.altKey||e.ctrlKey||e.metaKey||e.shiftKey;if(!t||t&&!n&&!r)this.selectedItem=null,this.search(null,e)},this.options.delay)},search:function(e,t){e=e!=null?e:this._value(),this.term=this._value();if(e.length<this.options.minLength)return this.close(t);if(this._trigger("search",t)===!1)return;return this._search(e)},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var t=++this.requestIndex;return e.proxy(function(e){t===this.requestIndex&&this.__response(e),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return typeof t=="string"?{label:t,value:t}:e.extend({},t,{label:t.label||t.value,value:t.value||t.label})})},_suggest:function(t){var n=this.menu.element.empty();this._renderMenu(n,t),this.isNewMenu=!0,this.menu.refresh(),n.show(),this._resizeMenu(),n.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,n){var r=this;e.each(n,function(e,n){r._renderItemData(t,n)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,n){return e("<li>").text(n.label).appendTo(t)},_move:function(e,t){if(!this.menu.element.is(":visible")){this.search(null,t);return}if(this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)){this.isMultiLine||this._value(this.term),this.menu.blur();return}this.menu[e](t)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){if(!this.isMultiLine||this.menu.element.is(":visible"))this._move(e,t),t.preventDefault()}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,n){var r=new RegExp(e.ui.autocomplete.escapeRegex(n),"i");return e.grep(t,function(e){return r.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var n;this._superApply(arguments);if(this.options.disabled||this.cancelSearch)return;t&&t.length?n=this.options.messages.results(t.length):n=this.options.messages.noResults,this.liveRegion.children().hide(),e("<div>").text(n).appendTo(this.liveRegion)}}),e.ui.autocomplete});;
/**
 * @file
 *   Javascript for the plugin-based geocoder function.
 */

/**
 * Callback for results in autocomplete field.
 *
 * @callback geolocationGeocoderResultCallback
 * @param {GoogleAddress} address - Google address.
 *
 * @callback geolocationGeocoderClearCallback
 */

(function ($, Drupal) {
  'use strict';

  /**
   * @namespace
   */
  Drupal.geolocation = Drupal.geolocation || {};
  Drupal.geolocation.geocoder = Drupal.geolocation.geocoder || {};

  drupalSettings.geolocation.geocoder = drupalSettings.geolocation.geocoder || {};

  /**
   * Provides the callback that is called when geocoded results are found loads.
   *
   * @param {GoogleAddress} result - first returned address
   * @param {string} elementId - Source ID.
   */
  Drupal.geolocation.geocoder.resultCallback = function (result, elementId) {
    // Ensure callbacks array;
    Drupal.geolocation.geocoder.resultCallbacks = Drupal.geolocation.geocoder.resultCallbacks || [];
    $.each(Drupal.geolocation.geocoder.resultCallbacks, function (index, callbackContainer) {
      if (callbackContainer.elementId === elementId) {
        callbackContainer.callback(result);
      }
    });
  };

  /**
   * Adds a callback that will be called when results are found.
   *
   * @param {geolocationGeocoderResultCallback} callback - The callback
   * @param {string} elementId - Identify source of result by its element ID.
   */
  Drupal.geolocation.geocoder.addResultCallback = function (callback, elementId) {
    if (typeof elementId === 'undefined') {
      return;
    }
    Drupal.geolocation.geocoder.resultCallbacks = Drupal.geolocation.geocoder.resultCallbacks || [];
    Drupal.geolocation.geocoder.resultCallbacks.push({callback: callback, elementId: elementId});
  };

  /**
   * Remove a callback that will be called when results are found.
   *
   * @param {string} elementId - Identify the source
   */
  Drupal.geolocation.geocoder.removeResultCallback = function (elementId) {
    Drupal.geolocation.geocoder.resultCallbacks = Drupal.geolocation.geocoder.resultCallbacks || [];
    $.each(Drupal.geolocation.geocoder.resultCallbacks, function (index, callback) {
      if (callback.elementId === elementId) {
        Drupal.geolocation.geocoder.resultCallbacks.splice(index, 1);
      }
    });
  };

  /**
   * Provides the callback that is called when results become invalid loads.
   *
   * @param {string} elementId - Source ID.
   */
  Drupal.geolocation.geocoder.clearCallback = function (elementId) {
    // Ensure callbacks array;
    Drupal.geolocation.geocoder.clearCallbacks = Drupal.geolocation.geocoder.clearCallbacks || [];
    $.each(Drupal.geolocation.geocoder.clearCallbacks, function (index, callbackContainer) {
      if (callbackContainer.elementId === elementId) {
        callbackContainer.callback();
      }
    });
  };

  /**
   * Adds a callback that will be called when results should be cleared.
   *
   * @param {geolocationGeocoderClearCallback} callback - The callback
   * @param {string} elementId - Identify source of result by its element ID.
   */
  Drupal.geolocation.geocoder.addClearCallback = function (callback, elementId) {
    if (typeof elementId === 'undefined') {
      return;
    }
    Drupal.geolocation.geocoder.clearCallbacks = Drupal.geolocation.geocoder.clearCallbacks || [];
    Drupal.geolocation.geocoder.clearCallbacks.push({callback: callback, elementId: elementId});
  };

  /**
   * Remove a callback that will be called when results should be cleared.
   *
   * @param {string} elementId - Identify the source
   */
  Drupal.geolocation.geocoder.removeClearCallback = function (elementId) {
    Drupal.geolocation.geocoder.clearCallbacks = Drupal.geolocation.geocoder.clearCallbacks || [];
    $.each(Drupal.geolocation.geocoder.clearCallbacks, function (index, callback) {
      if (callback.elementId === elementId) {
        Drupal.geolocation.geocoder.clearCallbacks.splice(index, 1);
      }
    });
  };

})(jQuery, Drupal);
;
/**
 * @file
 *   Javascript for the geolocation module.
 */

/**
 * @param {Object} drupalSettings.geolocation
 * @param {String} drupalSettings.geolocation.google_map_url
 */

/**
 * @name GoogleMapSettings
 * @property {String} info_auto_display
 * @property {String} marker_icon_path
 * @property {String} height
 * @property {String} width
 * @property {String} zoom
 * @property {String} maxZoom
 * @property {String} minZoom
 * @property {String} type
 * @property {Boolean} scrollwheel
 * @property {Boolean} preferScrollingToZooming
 * @property {String} gestureHandling
 * @property {Boolean} panControl
 * @property {Boolean} mapTypeControl
 * @property {Boolean} scaleControl
 * @property {Boolean} streetViewControl
 * @property {Boolean} overviewMapControl
 * @property {Boolean} zoomControl
 * @property {Boolean} rotateControl
 * @property {Boolean} fullscreenControl
 * @property {Object} zoomControlOptions
 * @property {String} mapTypeId
 * @property {String} info_text
 */

/**
 * @typedef {Object} GoogleMapBounds
 * @property {function():GoogleMapLatLng} getNorthEast
 * @property {function():GoogleMapLatLng} getSouthWest
 */

/**
 * @typedef {Object} GoogleMapLatLng
 * @property {function():float} lat
 * @property {function():float} lng
 */

/**
 * @typedef {Object} GoogleMapPoint
 * @property {function():float} x
 * @property {function():float} y
 */

/**
 * @typedef {Object} AddressComponent
 * @property {String} long_name - Long component name
 * @property {String} short_name - Short component name
 * @property {String[]} types - Component type
 * @property {GoogleGeometry} geometry
 */

/**
 * @typedef {Object} GoogleAddress
 * @property {AddressComponent[]} address_components - Components
 * @property {String} formatted_address - Formatted address
 * @property {GoogleGeometry} geometry - Geometry
 */

/**
 * @typedef {Object} GoogleGeometry
 * @property {GoogleMapLatLng} location - Location
 * @property {String} location_type - Location type
 * @property {GoogleMapBounds} viewport - Viewport
 * @property {GoogleMapBounds} bounds - Bounds (optionally)
 */

/**
 * @typedef {Object} GoogleMapProjection
 * @property {function(GoogleMapLatLng):GoogleMapPoint} fromLatLngToPoint
 */

/**
 * @typedef {Object} GoogleMarkerSettings
 *
 * Settings from https://developers.google.com/maps/documentation/javascript/3.exp/reference#MarkerOptions:
 * @property {GoogleMapLatLng} position
 * @property {GoogleMap} map
 * @property {string} title
 * @property {string} [icon]
 *
 * Settings from Geolocation module:
 * @property {string} [infoWindowContent]
 * @property {boolean} [infoWindowSolitary]
 */

/**
 * @typedef {Object} GoogleMarker
 * @property {Function} setPosition
 * @property {Function} setMap
 * @property {Function} setIcon
 * @property {Function} setTitle
 * @property {Function} addListener
 */

/**
 * @typedef {Object} GoogleInfoWindow
 * @property {Function} open
 * @property {Function} close
 */

/**
 * @typedef {Object} GoogleCircle
 * @property {function():GoogleMapBounds} Circle.getBounds()
 */

/**
 * @typedef {Object} GoogleMap
 * @property {Object} ZoomControlStyle
 * @property {String} ZoomControlStyle.LARGE
 *
 * @property {Object} ControlPosition
 * @property {String} ControlPosition.LEFT_TOP
 * @property {String} ControlPosition.TOP_LEFT
 * @property {String} ControlPosition.RIGHT_BOTTOM
 * @property {String} ControlPosition.RIGHT_CENTER
 *
 * @property {Object} MapTypeId
 * @property {String} MapTypeId.ROADMAP
 *
 * @property {Function} LatLngBounds
 *
 * @function
 * @property Map
 *
 * @function
 * @property InfoWindow
 *
 * @function
 * @property {function({GoogleMarkerSettings}):GoogleMarker} Marker
 *
 * @function
 * @property {function({}):GoogleInfoWindow} InfoWindow
 *
 * @function
 * @property {function(string|number|float, string|number|float):GoogleMapLatLng} LatLng
 *
 * @function
 * @property {function(string|number|float, string|number|float):GoogleMapPoint} Point
 *
 * @property {function(Object):GoogleCircle} Circle
 *
 * @property {function():GoogleMapProjection} getProjection
 *
 * @property {Function} fitBounds
 *
 * @property {Function} setCenter
 * @property {Function} setZoom
 * @property {Function} getZoom
 * @property {Function} setOptions
 *
 * @property {function():GoogleMapBounds} getBounds
 * @property {function():GoogleMapLatLng} getCenter
 */

/**
 * @typedef {Object} google
 * @property {GoogleMap} maps
 * @property {Object} event
 * @property {Function} addListener
 * @property {Function} addDomListener
 * @property {Function} addListenerOnce
 * @property {Function} addDomListenerOnce
 */

/**
 * @typedef {Object} GeolocationMap
 * @property {string} id
 * @property {Object} settings
 * @property {GoogleMapSettings} settings.google_map_settings
 * @property {GoogleMap} googleMap
 * @property {Number} lat
 * @property {Number} lng
 * @property {jQuery} container
 * @property {GoogleMarker[]} mapMarkers
 * @property {GoogleInfoWindow} infoWindow
 */

(function ($, _, Drupal, drupalSettings) {
  'use strict';

  /* global google */

  /**
   * JSLint handing.
   *
   *  @callback geolocationCallback
   */

  /**
   * @namespace
   */
  Drupal.geolocation = Drupal.geolocation || {};

  // Google Maps are loaded lazily. In some situations load_google() is called twice, which results in
  // "You have included the Google Maps API multiple times on this page. This may cause unexpected errors." errors.
  // This flag will prevent repeat $.getScript() calls.
  Drupal.geolocation.maps_api_loading = false;

  /**
   * Gets the default settings for the Google Map.
   *
   * @return {{GoogleMapSettings}}.
   */
  Drupal.geolocation.defaultSettings = function () {
    return {
      google_map_settings: {
        scrollwheel: false,
        panControl: false,
        mapTypeControl: true,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false,
        rotateControl: false,
        fullscreenControl: false,
        zoomControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 2,
        maxZoom: 0,
        minZoom: 18,
        style: [],
        gestureHandling: 'auto'
      }
    };
  };

  /**
   * Provides the callback that is called when maps loads.
   */
  Drupal.geolocation.googleCallback = function () {
    // Ensure callbacks array;
    Drupal.geolocation.googleCallbacks = Drupal.geolocation.googleCallbacks || [];

    // Wait until the window load event to try to use the maps library.
    $(document).ready(function (e) {
      _.invoke(Drupal.geolocation.googleCallbacks, 'callback');
      Drupal.geolocation.googleCallbacks = [];
    });
  };

  /**
   * Adds a callback that will be called once the maps library is loaded.
   *
   * @param {geolocationCallback} callback - The callback
   */
  Drupal.geolocation.addCallback = function (callback) {
    Drupal.geolocation.googleCallbacks = Drupal.geolocation.googleCallbacks || [];
    Drupal.geolocation.googleCallbacks.push({callback: callback});
  };

  /**
   * Load Google Maps and set a callback to run when it's ready.
   *
   * @param {geolocationCallback} callback - The callback
   */
  Drupal.geolocation.loadGoogle = function (callback) {
    // Add the callback.
    Drupal.geolocation.addCallback(callback);

    // Check for Google Maps.
    if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
      if (Drupal.geolocation.maps_api_loading === true) {
        return;
      }

      Drupal.geolocation.maps_api_loading = true;
      // Google Maps isn't loaded so lazy load Google Maps.

      if (typeof drupalSettings.geolocation.google_map_url !== 'undefined') {
        $.getScript(drupalSettings.geolocation.google_map_url)
          .done(function () {
            Drupal.geolocation.maps_api_loading = false;
          });
      }
      else {
        console.error('Geolocation - Google map url not set.'); // eslint-disable-line no-console
      }
    }
    else {
      // Google Maps loaded. Run callback.
      Drupal.geolocation.googleCallback();
    }
  };

  /**
   * Load Google Maps and set a callback to run when it's ready.
   *
   * @param {GeolocationMap} map - Container of settings and ID.
   *
   * @return {object} - The Google Map object.
   */
  Drupal.geolocation.addMap = function (map) {
    // Set the container size.
    map.container.css({
      height: map.settings.google_map_settings.height,
      width: map.settings.google_map_settings.width
    });

    // Get the center point.
    var center = new google.maps.LatLng(map.lat, map.lng);

    /**
     * Create the map object and assign it to the map.
     *
     * @type {GoogleMap} map.googleMap
     */
    map.googleMap = new google.maps.Map(map.container.get(0), {
      zoom: parseInt(map.settings.google_map_settings.zoom),
      maxZoom: parseInt(map.settings.google_map_settings.maxZoom),
      minZoom: parseInt(map.settings.google_map_settings.minZoom),
      center: center,
      mapTypeId: google.maps.MapTypeId[map.settings.google_map_settings.type],
      mapTypeControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM
      },
      rotateControl: map.settings.google_map_settings.rotateControl,
      fullscreenControl: map.settings.google_map_settings.fullscreenControl,
      zoomControl: map.settings.google_map_settings.zoomControl,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.RIGHT_CENTER
      },
      streetViewControl: map.settings.google_map_settings.streetViewControl,
      streetViewControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER
      },
      mapTypeControl: map.settings.google_map_settings.mapTypeControl,
      scrollwheel: map.settings.google_map_settings.scrollwheel,
      disableDoubleClickZoom: map.settings.google_map_settings.disableDoubleClickZoom,
      draggable: map.settings.google_map_settings.draggable,
      styles: map.settings.google_map_settings.style,
      gestureHandling: map.settings.google_map_settings.gestureHandling
    });

    if (!Drupal.geolocation.hasOwnProperty('maps')) {
      Drupal.geolocation.maps = [];
    }

    if (map.settings.google_map_settings.scrollwheel && map.settings.google_map_settings.preferScrollingToZooming) {
      map.googleMap.setOptions({scrollwheel: false});
      map.googleMap.addListener('click', function () {
        map.googleMap.setOptions({scrollwheel: true});
      });
    }

    Drupal.geolocation.maps.push(map);

    return map.googleMap;
  };

  /**
   * Set/Update a marker on a map
   *
   * @param {GeolocationMap} map - The settings object that contains all of the necessary metadata for this map.
   * @param {GoogleMarkerSettings} markerSettings - Marker settings.
   * @param {Boolean} [skipInfoWindow=false] - Skip attaching InfoWindow.
   * @return {GoogleMarker} - Created marker.
   */
  Drupal.geolocation.setMapMarker = function (map, markerSettings, skipInfoWindow) {
    map.mapMarkers = map.mapMarkers || [];
    skipInfoWindow = skipInfoWindow || false;

    if (typeof map.settings.google_map_settings.marker_icon_path === 'string') {
      if (typeof markerSettings.icon === 'undefined') {
        markerSettings.icon = map.settings.google_map_settings.marker_icon_path;
      }
    }

    // Add the marker to the map.
    /** @type {GoogleMarker} */
    var currentMarker = new google.maps.Marker(markerSettings);

    if (skipInfoWindow !== true) {

      // Set the info popup text.
      var currentInfoWindow = new google.maps.InfoWindow({
        content: markerSettings.infoWindowContent,
        maxWidth: 200,
        disableAutoPan: map.settings.google_map_settings.disableAutoPan
      });

      currentMarker.addListener('click', function () {
        if (markerSettings.infoWindowSolitary) {
          if (typeof map.infoWindow !== 'undefined') {
            map.infoWindow.close();
          }
          map.infoWindow = currentInfoWindow;
        }
        currentInfoWindow.open(map.googleMap, currentMarker);
      });

      if (map.settings.google_map_settings.info_auto_display) {
        google.maps.event.addListenerOnce(map.googleMap, 'tilesloaded', function () {
          google.maps.event.trigger(currentMarker, 'click');
        });
      }
    }

    map.mapMarkers.push(currentMarker);

    return currentMarker;
  };

  /**
   * Remove marker(s) from map.
   *
   * @param {GeolocationMap} map - The settings object that contains all of the necessary metadata for this map.
   */
  Drupal.geolocation.removeMapMarker = function (map) {
    $.each(
      map.mapMarkers,

      /**
       * @param {integer} index - Current index.
       * @param {GoogleMarker} item - Current marker.
       */
      function (index, item) {
        item.setMap();
      }
    );
  };

  /**
   * Draw a circle indicating accuracy and slowly fade it out.
   *
   * @param {GoogleMapLatLng} location - A location (latLng) object from Google Maps API.
   * @param {int} accuracy - Accuracy in meter.
   * @param {GoogleMap} map - Map to draw on.
   */
  Drupal.geolocation.drawAccuracyIndicator = function (location, accuracy, map) {

    // Draw a circle representing the accuracy radius of HTML5 geolocation.
    var circle = new google.maps.Circle({
      center: location,
      radius: accuracy,
      map: map,
      fillColor: '#4285F4',
      fillOpacity: 0.5,
      strokeColor: '#4285F4',
      strokeOpacity: 1,
      clickable: false
    });

    // Set the zoom level to the accuracy circle's size.
    map.fitBounds(circle.getBounds());

    // Fade circle away.
    setInterval(fadeCityCircles, 100);

    function fadeCityCircles() {
      var fillOpacity = circle.get('fillOpacity');
      fillOpacity -= 0.02;

      var strokeOpacity = circle.get('strokeOpacity');
      strokeOpacity -= 0.04;

      if (
        strokeOpacity > 0
        && fillOpacity > 0
      ) {
        circle.setOptions({fillOpacity: fillOpacity, strokeOpacity: strokeOpacity});
      }
      else {
        circle.setMap(null);
      }
    }
  };

})(jQuery, _, Drupal, drupalSettings);
;
/**
 * @file
 *   Javascript for the Google geocoder widget.
 */

/**
 * @name GeocoderWidgetSettings
 * @property {String} addressFieldTarget
 * @property {String} addressFieldExpliciteActions
 * @property {String} autoClientLocation
 * @property {String} autoClientLocationMarker
 * @property {String} locationSet
 */

/**
 * @param {GeocoderWidgetSettings[]} drupalSettings.geolocation.widgetSettings
 * @param {GeolocationMap[]} drupalSettings.geolocation.widgetMaps
 */

/**
 * Callback for location found or set by widget.
 *
 * @callback geolocationGoogleGeocoderLocationCallback
 * @param {GoogleMapLatLng} location - Google address.
 */

/**
 * Callback for location unset by widget.
 *
 * @callback geolocationGoogleGeocoderClearCallback
 */

(function ($, Drupal, drupalSettings) {
  'use strict';

  /* global google */

  /**
   * @namespace
   */
  Drupal.geolocation = Drupal.geolocation || {};
  Drupal.geolocation.geocoderWidget = Drupal.geolocation.geocoderWidget || {};

  Drupal.geolocation.geocoderWidget.locationCallbacks = Drupal.geolocation.geocoderWidget.locationCallbacks || [];
  Drupal.geolocation.geocoderWidget.clearCallbacks = Drupal.geolocation.geocoderWidget.clearCallbacks || [];

  /**
   * Attach geocoder functionality.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches geocoder functionality to relevant elements.
   */
  Drupal.behaviors.geolocationGeocoderWidget = {
    attach: function (context, drupalSettings) {
      // Ensure itterables.
      drupalSettings.geolocation = drupalSettings.geolocation || {widgetMaps: [], widgetSettings: []};
      // Make sure the lazy loader is available.
      if (typeof Drupal.geolocation.loadGoogle === 'function') {
        // First load the library from google.
        Drupal.geolocation.loadGoogle(function () {
          // This won't fire until window load.
          initialize(drupalSettings.geolocation.widgetMaps, context);
        });
      }
    }
  };

  /**
   * Runs after the Google Maps API is available
   *
   * @param {GeolocationMap[]} maps - The Google Maps object.
   * @param {object} context - The html context.
   */
  function initialize(maps, context) {

    Drupal.geolocation.geocoderWidget.geocoder = new google.maps.Geocoder();

    // Process drupalSettings for every Google map present on the current page.
    $.each(
      maps,

      /**
       * @param {string} mapId - map ID
       * @param {GeolocationMap} map - Geolocation map
       * @param {jQuery} map.controls - Controls
       */
      function (mapId, map) {
        if (typeof (drupalSettings.geolocation.widgetSettings[mapId]) === 'undefined') {
          drupalSettings.geolocation.widgetSettings[mapId] = [];
        }

        map.id = mapId;

        // Get the container object.
        map.container = $('#' + mapId, context).first();

        if ($(map.container).length >= 1
          && !$(map.container).hasClass('geolocation-processed')
          && typeof google !== 'undefined'
          && typeof google.maps !== 'undefined'
        ) {

          /**
           *
           * Custom event listener setup.
           *
           */

          // Execute when a location is defined by the widget.
          Drupal.geolocation.geocoderWidget.addLocationCallback(function (location) {
            Drupal.geolocation.geocoderWidget.setHiddenInputFields(location, map);
            map.controls.children('button.clear').removeClass('disabled');
            Drupal.geolocation.removeMapMarker(map);
            Drupal.geolocation.setMapMarker(map, {
              position: location,
              map: map.googleMap,
              title: location.lat() + ', ' + location.lng(),
              infoWindowContent: Drupal.t('Latitude') + ': ' + location.lat() + ' ' + Drupal.t('Longitude') + ': ' + location.lng()
            });
          }, mapId);

          // Execute when a location is unset by the widget.
          Drupal.geolocation.geocoderWidget.addClearCallback(function () {
            Drupal.geolocation.geocoderWidget.clearHiddenInputFields(map);
            map.controls.children('button.clear').addClass('disabled');
            // Clear the map point.
            Drupal.geolocation.removeMapMarker(map);
          }, mapId);

          /**
           *
           * Settings setup.
           *
           */

          // Add any missing settings.
          map.settings = $.extend(Drupal.geolocation.defaultSettings(), map.settings);

          /**
           *
           * Initialize map.
           *
           */

          // Map lat and lng are always set to user defined values or 0 initially.

          // If field values already set, use only those and set marker.
          var fieldValues = {
            lat: $('.canvas-' + mapId + ' .geolocation-hidden-lat').attr('value'),
            lng: $('.canvas-' + mapId + ' .geolocation-hidden-lng').attr('value')
          };

          if (
            typeof fieldValues.lat == 'undefined'
            && typeof fieldValues.lng == 'undefined'
          ) {
            fieldValues.lat = '';
            fieldValues.lng = '';
          }

          var setInitialMarker = false;
          var setInitialLocation = false;

          // Override map center with field values.
          if (
            !isNaN(parseFloat(fieldValues.lat))
            && !isNaN(parseFloat(fieldValues.lng))
          ) {
            map.lat = fieldValues.lat;
            map.lng = fieldValues.lng;
            setInitialMarker = true;
          }
          // If requested in settings, try to override map center by user location.
          else if (typeof (drupalSettings.geolocation.widgetSettings[mapId].autoClientLocation) != 'undefined') {
            if (
              drupalSettings.geolocation.widgetSettings[mapId].autoClientLocation
              && navigator.geolocation
              && !drupalSettings.geolocation.widgetSettings[mapId].locationSet
            ) {
              navigator.geolocation.getCurrentPosition(function (position) {
                map.lat = position.coords.latitude;
                map.lng = position.coords.longitude;

                var location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

                Drupal.geolocation.drawAccuracyIndicator(
                  location,
                  position.coords.accuracy,
                  map.googleMap
                );

                // If requested, also use location as value.
                if (typeof (drupalSettings.geolocation.widgetSettings[mapId].autoClientLocationMarker) != 'undefined') {
                  if (drupalSettings.geolocation.widgetSettings[mapId].autoClientLocationMarker) {

                    // Map most likely already initialized.
                    if (typeof map.googleMap !== 'undefined') {
                      Drupal.geolocation.geocoderWidget.locationCallback(location, mapId);
                      if (!drupalSettings.geolocation.widgetSettings[map.id].addressFieldExpliciteActions) {
                        Drupal.geolocation.geocoderWidget.setHiddenAddressFieldByReverseLocation(location, map);
                      }
                    }
                    else {
                      setInitialLocation = true;
                    }
                  }
                }
              });
            }
          }

          // Add the map by ID with settings.
          Drupal.geolocation.addMap(map);

          var initialLocation = new google.maps.LatLng(map.lat, map.lng);
          if (setInitialLocation) {
            Drupal.geolocation.geocoderWidget.locationCallback(initialLocation, mapId);
            if (!drupalSettings.geolocation.widgetSettings[map.id].addressFieldExpliciteActions) {
              Drupal.geolocation.geocoderWidget.setHiddenAddressFieldByReverseLocation(initialLocation, map);
            }
          }
          // We know that fields are already correctly set, so just place the marker.
          else if (setInitialMarker) {
            Drupal.geolocation.setMapMarker(map, {
              position: initialLocation,
              map: map.googleMap,
              title: initialLocation.lat() + ', ' + initialLocation.lng(),
              infoWindowContent: Drupal.t('Latitude') + ': ' + initialLocation.lat() + ' ' + Drupal.t('Longitude') + ': ' + initialLocation.lng()
            });
            $('#geocoder-controls-wrapper-' + mapId + 'button.clear', context).removeClass('disabled');
          }

          /**
           *
           * Map controls.
           *
           */

          // Add the geocoder to the map.
          map.controls = $('#geocoder-controls-wrapper-' + mapId, context);

          map.googleMap.controls[google.maps.ControlPosition.TOP_LEFT].push(map.controls.get(0));

          map.controls.children('input.location').first().autocomplete({
            autoFocus: true,
            source: function (request, response) {
              var autocompleteResults = [];
              Drupal.geolocation.geocoderWidget.geocoder.geocode(
                  {address: request.term},

                  /**
                   * Google Geocoding API geocode.
                   *
                   * @param {GoogleAddress[]} results - Returned results
                   * @param {String} status - Whether geocoding was successful
                   */
                  function (results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                      $.each(results, function (index, result) {
                        autocompleteResults.push({
                          value: result.formatted_address,
                          address: result
                        });
                      });
                    }
                    response(autocompleteResults);
                  }
              );
            },

            /**
             * Add the click listener.
             *
             * @param {object} event - Triggered event
             * @param {object} ui - Element from autoselect field.
             * @param {GoogleAddress} ui.item.address - Googleaddress bound to autoselect result.
             */
            select: function (event, ui) {
              // Set the map viewport.
              map.googleMap.fitBounds(ui.item.address.geometry.viewport);
              Drupal.geolocation.geocoderWidget.locationCallback(ui.item.address.geometry.location, mapId);
              if (!drupalSettings.geolocation.widgetSettings[map.id].addressFieldExpliciteActions) {
                Drupal.geolocation.geocoderWidget.setHiddenAddressField(ui.item.address, map);
              }
            }
          });

          map.controls.submit(function (e) {
            e.preventDefault();
            Drupal.geolocation.geocoderWidget.geocoder.geocode(
              {address: map.controls.children('input.location').first().val()},

              /**
               * Google Geocoding API geocode.
               *
               * @param {GoogleAddress[]} results - Returned results
               * @param {String} status - Whether geocoding was successful
               */
              function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                  map.googleMap.fitBounds(results[0].geometry.viewport);

                  Drupal.geolocation.geocoderWidget.locationCallback(results[0].geometry.location, mapId);
                  if (!drupalSettings.geolocation.widgetSettings[map.id].addressFieldExpliciteActions) {
                    Drupal.geolocation.geocoderWidget.setHiddenAddressField(results[0], map);
                  }
                }
              }
            );
          });

          google.maps.event.addDomListener(map.controls.children('button.search')[0], 'click', function (e) {
            e.preventDefault();
            Drupal.geolocation.geocoderWidget.geocoder.geocode(
              {address: map.controls.children('input.location').first().val()},

              /**
               * Google Geocoding API geocode.
               *
               * @param {GoogleAddress[]} results - Returned results
               * @param {String} status - Whether geocoding was successful
               */
              function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                  map.googleMap.fitBounds(results[0].geometry.viewport);

                  Drupal.geolocation.geocoderWidget.locationCallback(results[0].geometry.location, mapId);
                  if (!drupalSettings.geolocation.widgetSettings[map.id].addressFieldExpliciteActions) {
                    Drupal.geolocation.geocoderWidget.setHiddenAddressField(results[0], map);
                  }
                }
              }
            );
          });

          google.maps.event.addDomListener(map.controls.children('button.clear')[0], 'click', function (e) {
            // Stop all that bubbling and form submitting.
            e.preventDefault();
            // Clear the input text.
            map.controls.children('input.location').val('');

            Drupal.geolocation.geocoderWidget.clearCallback(mapId);
          });

          // If the browser supports W3C Geolocation API.
          if (navigator.geolocation) {
            map.controls.children('button.locate').show();

            google.maps.event.addDomListener(map.controls.children('button.locate')[0], 'click', function (e) {
              // Stop all that bubbling and form submitting.
              e.preventDefault();

              // Get the geolocation from the browser.
              navigator.geolocation.getCurrentPosition(function (position) {
                var newLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

                Drupal.geolocation.drawAccuracyIndicator(
                  newLocation,
                  position.coords.accuracy,
                  map.googleMap
                );

                map.googleMap.setCenter(newLocation);

                Drupal.geolocation.geocoderWidget.locationCallback(newLocation, mapId);
                if (!drupalSettings.geolocation.widgetSettings[map.id].addressFieldExpliciteActions) {
                  Drupal.geolocation.geocoderWidget.setHiddenAddressFieldByReverseLocation(newLocation, map);
                }
              });
            });
          }

          if (drupalSettings.geolocation.widgetSettings[map.id].addressFieldExpliciteActions) {
            if (map.controls.children('button.address-button-locate').length) {
              google.maps.event.addDomListener(map.controls.children('button.address-button-locate')[0], 'click', function (e) {
                // Stop all that bubbling and form submitting.
                e.preventDefault();

                var targetField = drupalSettings.geolocation.widgetSettings[map.id].addressFieldTarget;
                var addressField = $('.field--type-address.field--widget-address-default.field--name-' + targetField.replace(/_/g, '-'));
                if (addressField.length < 1) {
                  return;
                }
                var addressDetails = addressField.find('.details-wrapper').first();
                if (addressDetails.length < 1) {
                  return;
                }

                var addressData = {};

                addressData.organization = addressDetails.find('.organization').val();
                addressData.addressLine1 = addressDetails.find('.address-line1').val();
                addressData.addressLine2 = addressDetails.find('.address-line2').val();
                addressData.locality = addressDetails.find('.locality').val();
                addressData.administrativeArea = addressDetails.find('.administrative-area').val();
                addressData.postalCode = addressDetails.find('.postal-code').val();

                var search = {};
                search.address = '';
                search.componentRestrictions = {};

                $.each(addressData, function (componentId, componentValue) {
                  if (componentValue) {
                    search.address += componentValue + ', ';
                  }
                });

                if (addressField.find('.country.form-select').length) {
                  search.componentRestrictions.country = addressField.find('.country.form-select').val();
                }

                Drupal.geolocation.geocoderWidget.geocoder.geocode(
                  search,

                  /**
                   * Google Geocoding API geocode.
                   *
                   * @param {GoogleAddress[]} results - Returned results
                   * @param {String} status - Whether geocoding was successful
                   */
                  function (results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                      map.googleMap.fitBounds(results[0].geometry.viewport);
                      Drupal.geolocation.geocoderWidget.locationCallback(results[0].geometry.location, mapId);
                    }
                  }
                );
              });
            }

            if (map.controls.children('button.address-button-push').length) {
              google.maps.event.addDomListener(map.controls.children('button.address-button-push')[0], 'click', function (e) {
                // Stop all that bubbling and form submitting.
                e.preventDefault();
                Drupal.geolocation.geocoderWidget.setHiddenAddressFieldByReverseLocation(map.googleMap.getCenter(), map);
              });
            }
          }

          /**
           *
           * Final setup.
           *
           */

          // Add the click responders for setting the value.
          Drupal.geolocation.geocoderWidget.addClickListener(map);

          // Set the already processed flag.
          $(map.container).addClass('geolocation-processed');
        }
      }
    );
  }

  /**
   * Adds the click listeners to the map.
   *
   * @param {GeolocationMap} map - The current map object.
   */
  Drupal.geolocation.geocoderWidget.addClickListener = function (map) {
    // Used for a single click timeout.
    var singleClick;

    /**
     * Add the click listener.
     *
     * @param {GoogleMapLatLng} e.latLng
     */
    google.maps.event.addListener(map.googleMap, 'click', function (e) {
      // Create 500ms timeout to wait for double click.
      singleClick = setTimeout(function () {
        Drupal.geolocation.geocoderWidget.locationCallback(e.latLng, map.id);
        if (!drupalSettings.geolocation.widgetSettings[map.id].addressFieldExpliciteActions) {
          Drupal.geolocation.geocoderWidget.setHiddenAddressFieldByReverseLocation(e.latLng, map);
        }
      }, 500);
    });

    // Add a doubleclick listener.
    google.maps.event.addListener(map.googleMap, 'dblclick', function (e) {
      clearTimeout(singleClick);
    });
  };

  /**
   * Provides the callback that is called when geocoderwidget defines a location.
   *
   * @param {GoogleMapLatLng} location - first returned address
   * @param {string} elementId - Source ID.
   */
  Drupal.geolocation.geocoderWidget.locationCallback = function (location, elementId) {
    // Ensure callbacks array;
    Drupal.geolocation.geocoderWidget.locationCallbacks = Drupal.geolocation.geocoderWidget.locationCallbacks || [];
    $.each(Drupal.geolocation.geocoderWidget.locationCallbacks, function (index, callbackContainer) {
      if (callbackContainer.elementId === elementId) {
        callbackContainer.callback(location);
      }
    });
  };

  /**
   * Adds a callback that will be called when a location is set.
   *
   * @param {geolocationGoogleGeocoderLocationCallback} callback - The callback
   * @param {string} elementId - Identify source of result by its element ID.
   */
  Drupal.geolocation.geocoderWidget.addLocationCallback = function (callback, elementId) {
    if (typeof elementId === 'undefined') {
      return;
    }
    Drupal.geolocation.geocoderWidget.locationCallbacks.push({callback: callback, elementId: elementId});
  };

  /**
   * Remove a callback that will be called when a location is set.
   *
   * @param {string} elementId - Identify the source
   */
  Drupal.geolocation.geocoderWidget.removeLocationCallback = function (elementId) {
    $.each(Drupal.geolocation.geocoderWidget.locationCallbacks, function (index, callback) {
      if (callback.elementId === elementId) {
        Drupal.geolocation.geocoderWidget.locationCallbacks.splice(index, 1);
      }
    });
  };

  /**
   * Provides the callback that is called when geocoderwidget unset the locations.
   *
   * @param {string} elementId - Source ID.
   */
  Drupal.geolocation.geocoderWidget.clearCallback = function (elementId) {
    // Ensure callbacks array;
    $.each(Drupal.geolocation.geocoderWidget.clearCallbacks, function (index, callbackContainer) {
      if (callbackContainer.elementId === elementId) {
        callbackContainer.callback(location);
      }
    });
  };

  /**
   * Adds a callback that will be called when a location is unset.
   *
   * @param {geolocationGoogleGeocoderClearCallback} callback - The callback
   * @param {string} elementId - Identify source of result by its element ID.
   */
  Drupal.geolocation.geocoderWidget.addClearCallback = function (callback, elementId) {
    if (typeof elementId === 'undefined') {
      return;
    }
    Drupal.geolocation.geocoderWidget.clearCallbacks.push({callback: callback, elementId: elementId});
  };

  /**
   * Remove a callback that will be called when a location is unset.
   *
   * @param {string} elementId - Identify the source
   */
  Drupal.geolocation.geocoderWidget.removeClearCallback = function (elementId) {
    $.each(Drupal.geolocation.geocoderWidget.clearCallbacks, function (index, callback) {
      if (callback.elementId === elementId) {
        Drupal.geolocation.geocoderWidget.clearCallbacks.splice(index, 1);
      }
    });
  };

  /**
   * Set the latitude and longitude values to the input fields
   *
   * @param {GoogleMapLatLng} latLng - A location (latLng) object from Google Maps API.
   * @param {GeolocationMap} map - The settings object that contains all of the necessary metadata for this map.
   */
  Drupal.geolocation.geocoderWidget.setHiddenInputFields = function (latLng, map) {
    // Update the lat and lng input fields.
    $('.canvas-' + map.id + ' .geolocation-hidden-lat').attr('value', latLng.lat());
    $('.canvas-' + map.id + ' .geolocation-hidden-lng').attr('value', latLng.lng());
  };

  /**
   * Set the latitude and longitude values to the input fields
   *
   * @param {GeolocationMap} map - The settings object that contains all of the necessary metadata for this map.
   */
  Drupal.geolocation.geocoderWidget.clearHiddenInputFields = function (map) {
    // Update the lat and lng input fields.
    $('.canvas-' + map.id + ' .geolocation-hidden-lat').attr('value', '');
    $('.canvas-' + map.id + ' .geolocation-hidden-lng').attr('value', '');
  };

  /**
   * Fill address field.
   *
   * @param {GoogleAddress} address - Google retrieved address object.
   * @param {GeolocationMap} map - The settings object that contains all of the necessary metadata for this map.
   */
  Drupal.geolocation.geocoderWidget.setHiddenAddressField = function (address, map) {
    if (typeof drupalSettings.geolocation.widgetSettings[map.id].addressFieldTarget === 'undefined') {
      return;
    }

    var targetField = drupalSettings.geolocation.widgetSettings[map.id].addressFieldTarget;
    var addressField = $('.field--type-address.field--widget-address-default.field--name-' + targetField.replace(/_/g, '-'));

    if (addressField.length < 1) {
      return;
    }

    var addressDetails = addressField.find('.details-wrapper').first();

    var addressLine1 = '';
    var addressLine2 = '';
    var postalTown = '';
    var countryCode = null;
    var postalCode = null;
    var streetNumber = null;
    var neighborhood = null;
    var premise = null;
    var route = null;
    var locality = null;
    var administrativeArea = null;
    var political = null;

    $.each(address.address_components, function (key, value) {
      var component = address.address_components[key];
      var types = component.types;

      switch (types[0]) {
        case 'country':
          countryCode = component.short_name;
          break;
        case 'postal_town':
          postalTown = component.long_name;
          break;
        case 'postal_code':
          postalCode = component.long_name;
          break;
        case 'street_number':
          streetNumber = component.long_name;
          break;
        case 'neighborhood':
          neighborhood = component.long_name;
          break;
        case 'premise':
          premise = component.long_name;
          break;
        case 'political':
          political = component.long_name;
          break;
        case 'route':
          route = component.long_name;
          break;
        case 'locality':
          locality = component.long_name;
          break;
        case 'administrative_area_level_1':
          administrativeArea = component.short_name;
          break;
      }
    });

    // See https://github.com/commerceguys/addressing/issues/73 for reason.

    if (streetNumber) {
      if (countryCode === 'DE') {
        addressLine1 = route + ' ' + streetNumber;
      }
      else {
        addressLine1 = streetNumber + ' ' + route;
      }
    }
    else if (route) {
      addressLine1 = route;
    }
    else if (premise) {
      addressLine1 = premise;
    }

    if (locality && postalTown && locality !== postalTown) {
      addressLine2 = locality;
    }
    else if (!locality && neighborhood) {
      addressLine2 = neighborhood;
    }

    if (postalTown) {
      locality = postalTown;
    }

    if (!locality && political) {
      // NYC. Americans are weired.
      locality = political;
    }

    if (addressField.find('.country.form-select').length) {
      // Set the country.
      addressField.find('.country.form-select').val(countryCode).trigger('change');

      $(document).ajaxComplete(function (event, xhr, settings) {
        // Update after AJAX replacement.
        addressDetails = addressField.find('.details-wrapper').first();

        if (addressDetails.length < 1) {
          return;
        }

        if (settings.extraData._drupal_ajax && settings.extraData._triggering_element_name === targetField + '[0][country_code]') {
          // Populate the address fields, once they have been added to the DOM.
          addressDetails.find('.organization').val(premise);
          addressDetails.find('.address-line1').val(addressLine1);
          addressDetails.find('.address-line2').val(addressLine2);
          addressDetails.find('.locality').val(locality);

          var administrativeAreaInput = addressDetails.find('.administrative-area');
          if (administrativeAreaInput) {
            if (administrativeAreaInput.prop('tagName') === 'INPUT') {
              administrativeAreaInput.val(countryCode + '-' + administrativeArea);
            }
            else if (administrativeAreaInput.prop('tagName') === 'SELECT') {
              administrativeAreaInput.val(administrativeArea);
            }
          }
          addressDetails.find('.postal-code').val(postalCode);
        }
      });
    }
    else {
      if (addressDetails.length < 1) {
        return;
      }

      // Populate the address fields, once they have been added to the DOM.
      addressDetails.find('.organization').val(premise);
      addressDetails.find('.address-line1').val(addressLine1);
      addressDetails.find('.address-line2').val(addressLine2);
      addressDetails.find('.locality').val(locality);

      var administrativeAreaInput = addressDetails.find('.administrative-area');
      if (administrativeAreaInput) {
        if (administrativeAreaInput.prop('tagName') === 'INPUT') {
          administrativeAreaInput.val(countryCode + '-' + administrativeArea);
        }
        else if (administrativeAreaInput.prop('tagName') === 'SELECT') {
          administrativeAreaInput.val(administrativeArea);
        }
      }
      addressDetails.find('.postal-code').val(postalCode);
    }
  };

  /**
   * Fill address field by reverse geocoding.
   *
   * @param {GoogleMapLatLng} location - Google location.
   * @param {GeolocationMap} map - The settings object that contains all of the necessary metadata for this map.
   */
  Drupal.geolocation.geocoderWidget.setHiddenAddressFieldByReverseLocation = function (location, map) {
    if (typeof drupalSettings.geolocation.widgetSettings[map.id].addressFieldTarget === 'undefined') {
      return;
    }
    var targetField = drupalSettings.geolocation.widgetSettings[map.id].addressFieldTarget;
    var addressField = $('.field--type-address.field--widget-address-default.field--name-' + targetField.replace(/_/g, '-'));

    if (addressField.length < 1) {
      return;
    }

    if (typeof Drupal.geolocation.geocoderWidget.geocoder === 'undefined') {
      return;
    }

    Drupal.geolocation.geocoderWidget.geocoder.geocode(
      {location: location},

      /**
       * Google Geocoding API geocode.
       *
       * @param {GoogleAddress[]} results - Returned results
       * @param {String} status - Whether geocoding was successful
       */
      function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          Drupal.geolocation.geocoderWidget.setHiddenAddressField(results[0], map);
        }
      }
    );
  };

})(jQuery, Drupal, drupalSettings);
;
