webpackJsonp(["app/js/courseset-manage/cover-crop/index"],{"067c1684df47aff0c9f1":function(e,t,n){var r=n("067c1684df47aff0c9fc");"string"==typeof r&&(r=[[e.id,r,""]]);n("1d9fc83dc6f84a3e61f9")(r,{insertAt:"top"});r.locals&&(e.exports=r.locals)},"067c1684df47aff0c9fc":function(e,t,n){t=e.exports=n("14d7efba48ff1f866553")(),t.push([e.id,".jcrop-holder{direction:ltr;text-align:left;-ms-touch-action:none}.jcrop-hline,.jcrop-vline{background:#fff url("+n("299d9c8084d833ef5055")+");font-size:0;position:absolute}.jcrop-vline{height:100%;width:1px!important}.jcrop-vline.right{right:0}.jcrop-hline{height:1px!important;width:100%}.jcrop-hline.bottom{bottom:0}.jcrop-tracker{height:100%;width:100%;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none}.jcrop-handle{background-color:#333;border:1px solid #eee;width:7px;height:7px;font-size:1px}.jcrop-handle.ord-n{left:50%;margin-left:-4px;margin-top:-4px;top:0}.jcrop-handle.ord-s{bottom:0;left:50%;margin-bottom:-4px;margin-left:-4px}.jcrop-handle.ord-e{margin-right:-4px;margin-top:-4px;right:0;top:50%}.jcrop-handle.ord-w{left:0;margin-left:-4px;margin-top:-4px;top:50%}.jcrop-handle.ord-nw{left:0;margin-left:-4px;margin-top:-4px;top:0}.jcrop-handle.ord-ne{margin-right:-4px;margin-top:-4px;right:0;top:0}.jcrop-handle.ord-se{bottom:0;margin-bottom:-4px;margin-right:-4px;right:0}.jcrop-handle.ord-sw{bottom:0;left:0;margin-bottom:-4px;margin-left:-4px}.jcrop-dragbar.ord-n,.jcrop-dragbar.ord-s{height:7px;width:100%}.jcrop-dragbar.ord-e,.jcrop-dragbar.ord-w{height:100%;width:7px}.jcrop-dragbar.ord-n{margin-top:-4px}.jcrop-dragbar.ord-s{bottom:0;margin-bottom:-4px}.jcrop-dragbar.ord-e{margin-right:-4px;right:0}.jcrop-dragbar.ord-w{margin-left:-4px}.jcrop-light .jcrop-hline,.jcrop-light .jcrop-vline{background:#fff;filter:alpha(opacity=70)!important;opacity:.7!important}.jcrop-light .jcrop-handle{-moz-border-radius:3px;-webkit-border-radius:3px;background-color:#000;border-color:#fff;border-radius:3px}.jcrop-dark .jcrop-hline,.jcrop-dark .jcrop-vline{background:#000;filter:alpha(opacity=70)!important;opacity:.7!important}.jcrop-dark .jcrop-handle{-moz-border-radius:3px;-webkit-border-radius:3px;background-color:#fff;border-color:#000;border-radius:3px}.solid-line .jcrop-hline,.solid-line .jcrop-vline{background:#fff}.jcrop-holder img,img.jcrop-preview{max-width:none}",""])},"299d9c8084d833ef5055":function(e,t){e.exports="data:image/gif;base64,R0lGODlhCAAIAJEAAKqqqv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAACAAIAAACDZQFCadrzVRMB9FZ5SwAIfkECQoAAAAsAAAAAAgACAAAAg+ELqCYaudeW9ChyOyltQAAIfkECQoAAAAsAAAAAAgACAAAAg8EhGKXm+rQYtC0WGl9oAAAIfkECQoAAAAsAAAAAAgACAAAAg+EhWKQernaYmjCWLF7qAAAIfkECQoAAAAsAAAAAAgACAAAAg2EISmna81UTAfRWeUsACH5BAkKAAAALAAAAAAIAAgAAAIPFA6imGrnXlvQocjspbUAACH5BAkKAAAALAAAAAAIAAgAAAIPlIBgl5vq0GLQtFhpfaIAACH5BAUKAAAALAAAAAAIAAgAAAIPlIFgknq52mJowlixe6gAADs="},"8798ea2be92f40833ba3":function(e,t){!function(e){e.Jcrop=function(t,n){function r(e){return Math.round(e)+"px"}function o(e){return P.baseClass+"-"+e}function i(){return e.fx.step.hasOwnProperty("backgroundColor")}function a(t){var n=e(t).offset();return[n.left,n.top]}function c(e){return[e.pageX-B[0],e.pageY-B[1]]}function s(t){"object"!=typeof t&&(t={}),P=e.extend(P,t),e.each(["onChange","onSelect","onRelease","onDblClick"],function(e,t){"function"!=typeof P[t]&&(P[t]=function(){})})}function u(e,t,n){if(B=a($),he.setCursor("move"===e?e:e+"-resize"),"move"===e)return he.activateHandlers(l(t),b,n);var r=le.getFixed(),o=f(e),i=le.getCorner(f(o));le.setPressed(le.getCorner(o)),le.setCurrent(i),he.activateHandlers(d(e,r),b,n)}function d(e,t){return function(n){if(P.aspectRatio)switch(e){case"e":n[1]=t.y+1;break;case"w":n[1]=t.y+1;break;case"n":n[0]=t.x+1;break;case"s":n[0]=t.x+1}else switch(e){case"e":n[1]=t.y2;break;case"w":n[1]=t.y2;break;case"n":n[0]=t.x2;break;case"s":n[0]=t.x2}le.setCurrent(n),pe.update()}}function l(e){var t=e;return ge.watchKeys(),function(e){le.moveOffset([e[0]-t[0],e[1]-t[1]]),t=e,pe.update()}}function f(e){switch(e){case"n":return"sw";case"s":return"nw";case"e":return"nw";case"w":return"ne";case"ne":return"sw";case"nw":return"se";case"se":return"nw";case"sw":return"ne"}}function p(e){return function(t){return!P.disabled&&(!("move"===e&&!P.allowMove)&&(B=a($),re=!0,u(e,c(t)),t.stopPropagation(),t.preventDefault(),!1))}}function h(e,t,n){var r=e.width(),o=e.height();r>t&&t>0&&(r=t,o=t/e.width()*e.height()),o>n&&n>0&&(o=n,r=n/e.height()*e.width()),te=e.width()/r,ne=e.height()/o,e.width(r).height(o)}function g(e){return{x:e.x*te,y:e.y*ne,x2:e.x2*te,y2:e.y2*ne,w:e.w*te,h:e.h*ne}}function b(e){var t=le.getFixed();t.w>P.minSelect[0]&&t.h>P.minSelect[1]?(pe.enableHandles(),pe.done()):pe.release(),he.setCursor(P.allowSelect?"crosshair":"default")}function A(e){if(!P.disabled&&P.allowSelect){re=!0,B=a($),pe.disableHandles(),he.setCursor("crosshair");var t=c(e);return le.setPressed(t),pe.update(),he.activateHandlers(w,b,"touch"===e.type.substring(0,5)),ge.watchKeys(),e.stopPropagation(),e.preventDefault(),!1}}function w(e){le.setCurrent(e),pe.update()}function m(){var t=e("<div></div>").addClass(o("tracker"));return E&&t.css({opacity:0,backgroundColor:"white"}),t}function v(e){G.removeClass().addClass(o("holder")).addClass(e)}function y(e,t){function n(){window.setTimeout(w,l)}var r=e[0]/te,o=e[1]/ne,i=e[2]/te,a=e[3]/ne;if(!oe){var c=le.flipCoords(r,o,i,a),s=le.getFixed(),u=[s.x,s.y,s.x2,s.y2],d=u,l=P.animationDelay,f=c[0]-u[0],p=c[1]-u[1],h=c[2]-u[2],g=c[3]-u[3],b=0,A=P.swingSpeed;r=d[0],o=d[1],i=d[2],a=d[3],pe.animMode(!0);var w=function(){return function(){b+=(100-b)/A,d[0]=Math.round(r+b/100*f),d[1]=Math.round(o+b/100*p),d[2]=Math.round(i+b/100*h),d[3]=Math.round(a+b/100*g),b>=99.8&&(b=100),b<100?(C(d),n()):(pe.done(),pe.animMode(!1),"function"==typeof t&&t.call(be))}}();n()}}function x(e){C([e[0]/te,e[1]/ne,e[2]/te,e[3]/ne]),P.onSelect.call(be,g(le.getFixed())),pe.enableHandles()}function C(e){le.setPressed([e[0],e[1]]),le.setCurrent([e[2],e[3]]),pe.update()}function k(){return g(le.getFixed())}function j(){return le.getFixed()}function S(e){s(e),D()}function z(){P.disabled=!0,pe.disableHandles(),pe.setCursor("default"),he.setCursor("default")}function O(){P.disabled=!1,D()}function I(){pe.done(),he.activateHandlers(null,null)}function M(){G.remove(),Q.show(),Q.css("visibility","visible"),e(t).removeData("Jcrop")}function F(e,t){pe.release(),z();var n=new Image;n.onload=function(){var r=n.width,o=n.height,i=P.boxWidth,a=P.boxHeight;$.width(r).height(o),$.attr("src",e),Y.attr("src",e),h($,i,a),q=$.width(),L=$.height(),Y.width(q).height(L),ce.width(q+2*ae).height(L+2*ae),G.width(q).height(L),fe.resize(q,L),O(),"function"==typeof t&&t.call(be)},n.src=e}function H(e,t,n){var r=t||P.bgColor;P.bgFade&&i()&&P.fadeTime&&!n?e.animate({backgroundColor:r},{queue:!1,duration:P.fadeTime}):e.css("backgroundColor",r)}function D(e){P.allowResize?e?pe.enableOnly():pe.enableHandles():pe.disableHandles(),he.setCursor(P.allowSelect?"crosshair":"default"),pe.setCursor(P.allowMove?"move":"default"),P.hasOwnProperty("trueSize")&&(te=P.trueSize[0]/q,ne=P.trueSize[1]/L),P.hasOwnProperty("setSelect")&&(x(P.setSelect),pe.done(),delete P.setSelect),fe.refresh(),P.bgColor!=se&&(H(P.shade?fe.getShades():G,P.shade?P.shadeColor||P.bgColor:P.bgColor),se=P.bgColor),ue!=P.bgOpacity&&(ue=P.bgOpacity,P.shade?fe.refresh():pe.setBgOpacity(ue)),N=P.maxSize[0]||0,_=P.maxSize[1]||0,Z=P.minSize[0]||0,ee=P.minSize[1]||0,P.hasOwnProperty("outerImage")&&($.attr("src",P.outerImage),delete P.outerImage),pe.refresh()}var B,P=e.extend({},e.Jcrop.defaults),J=navigator.userAgent.toLowerCase(),E=/msie/.test(J),R=/msie [1-6]\./.test(J);"object"!=typeof t&&(t=e(t)[0]),"object"!=typeof n&&(n={}),s(n);var T={border:"none",visibility:"visible",margin:0,padding:0,position:"absolute",top:0,left:0},Q=e(t),K=!0;if("IMG"==t.tagName){if(0!=Q[0].width&&0!=Q[0].height)Q.width(Q[0].width),Q.height(Q[0].height);else{var W=new Image;W.src=Q[0].src,Q.width(W.width),Q.height(W.height)}var $=Q.clone().removeAttr("id").css(T).show();$.width(Q.width()),$.height(Q.height()),Q.after($).hide()}else $=Q.css(T).show(),K=!1,null===P.shade&&(P.shade=!0);h($,P.boxWidth,P.boxHeight);var q=$.width(),L=$.height(),G=e("<div />").width(q).height(L).addClass(o("holder")).css({position:"relative",backgroundColor:P.bgColor}).insertAfter(Q).append($);P.addClass&&G.addClass(P.addClass);var Y=e("<div />"),U=e("<div />").width("100%").height("100%").css({zIndex:310,position:"absolute",overflow:"hidden"}),V=e("<div />").width("100%").height("100%").css("zIndex",320),X=e("<div />").css({position:"absolute",zIndex:600}).dblclick(function(){var e=le.getFixed();P.onDblClick.call(be,e)}).insertBefore($).append(U,V);K&&(Y=e("<img />").attr("src",$.attr("src")).css(T).width(q).height(L),U.append(Y)),R&&X.css({overflowY:"hidden"});var N,_,Z,ee,te,ne,re,oe,ie,ae=P.boundary,ce=m().width(q+2*ae).height(L+2*ae).css({position:"absolute",top:r(-ae),left:r(-ae),zIndex:290}).mousedown(A),se=P.bgColor,ue=P.bgOpacity;B=a($);var de=function(){function e(){var e,t={},n=["touchstart","touchmove","touchend"],r=document.createElement("div");try{for(e=0;e<n.length;e++){var o=n[e];o="on"+o;var i=o in r;i||(r.setAttribute(o,"return;"),i="function"==typeof r[o]),t[n[e]]=i}return t.touchstart&&t.touchend&&t.touchmove}catch(e){return!1}}function t(){return P.touchSupport===!0||P.touchSupport===!1?P.touchSupport:e()}return{createDragger:function(e){return function(t){return!P.disabled&&(!("move"===e&&!P.allowMove)&&(B=a($),re=!0,u(e,c(de.cfilter(t)),!0),t.stopPropagation(),t.preventDefault(),!1))}},newSelection:function(e){return A(de.cfilter(e))},cfilter:function(e){return e.pageX=e.originalEvent.changedTouches[0].pageX,e.pageY=e.originalEvent.changedTouches[0].pageY,e},isSupported:e,support:t()}}(),le=function(){function e(e){e=a(e),h=f=e[0],g=p=e[1]}function t(e){e=a(e),d=e[0]-h,l=e[1]-g,h=e[0],g=e[1]}function n(){return[d,l]}function r(e){var t=e[0],n=e[1];0>f+t&&(t-=t+f),0>p+n&&(n-=n+p),L<g+n&&(n+=L-(g+n)),q<h+t&&(t+=q-(h+t)),f+=t,h+=t,p+=n,g+=n}function o(e){var t=i();switch(e){case"ne":return[t.x2,t.y];case"nw":return[t.x,t.y];case"se":return[t.x2,t.y2];case"sw":return[t.x,t.y2]}}function i(){if(!P.aspectRatio)return s();var e,t,n,r,o=P.aspectRatio,i=P.minSize[0]/te,a=P.maxSize[0]/te,d=P.maxSize[1]/ne,l=h-f,b=g-p,A=Math.abs(l),w=Math.abs(b),m=A/w;return 0===a&&(a=10*q),0===d&&(d=10*L),m<o?(t=g,n=w*o,e=l<0?f-n:n+f,e<0?(e=0,r=Math.abs((e-f)/o),t=b<0?p-r:r+p):e>q&&(e=q,r=Math.abs((e-f)/o),t=b<0?p-r:r+p)):(e=h,r=A/o,t=b<0?p-r:p+r,t<0?(t=0,n=Math.abs((t-p)*o),e=l<0?f-n:n+f):t>L&&(t=L,n=Math.abs(t-p)*o,e=l<0?f-n:n+f)),e>f?(e-f<i?e=f+i:e-f>a&&(e=f+a),t=t>p?p+(e-f)/o:p-(e-f)/o):e<f&&(f-e<i?e=f-i:f-e>a&&(e=f-a),t=t>p?p+(f-e)/o:p-(f-e)/o),e<0?(f-=e,e=0):e>q&&(f-=e-q,e=q),t<0?(p-=t,t=0):t>L&&(p-=t-L,t=L),u(c(f,p,e,t))}function a(e){return e[0]<0&&(e[0]=0),e[1]<0&&(e[1]=0),e[0]>q&&(e[0]=q),e[1]>L&&(e[1]=L),[Math.round(e[0]),Math.round(e[1])]}function c(e,t,n,r){var o=e,i=n,a=t,c=r;return n<e&&(o=n,i=e),r<t&&(a=r,c=t),[o,a,i,c]}function s(){var e,t=h-f,n=g-p;return N&&Math.abs(t)>N&&(h=t>0?f+N:f-N),_&&Math.abs(n)>_&&(g=n>0?p+_:p-_),ee/ne&&Math.abs(n)<ee/ne&&(g=n>0?p+ee/ne:p-ee/ne),Z/te&&Math.abs(t)<Z/te&&(h=t>0?f+Z/te:f-Z/te),f<0&&(h-=f,f-=f),p<0&&(g-=p,p-=p),h<0&&(f-=h,h-=h),g<0&&(p-=g,g-=g),h>q&&(e=h-q,f-=e,h-=e),g>L&&(e=g-L,p-=e,g-=e),f>q&&(e=f-L,g-=e,p-=e),p>L&&(e=p-L,g-=e,p-=e),u(c(f,p,h,g))}function u(e){return{x:e[0],y:e[1],x2:e[2],y2:e[3],w:e[2]-e[0],h:e[3]-e[1]}}var d,l,f=0,p=0,h=0,g=0;return{flipCoords:c,setPressed:e,setCurrent:t,getOffset:n,moveOffset:r,getCorner:o,getFixed:i}}(),fe=function(){function t(e,t){h.left.css({height:r(t)}),h.right.css({height:r(t)})}function n(){return o(le.getFixed())}function o(e){h.top.css({left:r(e.x),width:r(e.w),height:r(e.y)}),h.bottom.css({top:r(e.y2),left:r(e.x),width:r(e.w),height:r(L-e.y2)}),h.right.css({left:r(e.x2),width:r(q-e.x2)}),h.left.css({width:r(e.x)})}function i(){return e("<div />").css({position:"absolute",backgroundColor:P.shadeColor||P.bgColor}).appendTo(p)}function a(){f||(f=!0,p.insertBefore($),n(),pe.setBgOpacity(1,0,1),Y.hide(),c(P.shadeColor||P.bgColor,1),pe.isAwake()?u(P.bgOpacity,1):u(1,1))}function c(e,t){H(l(),e,t)}function s(){f&&(p.remove(),Y.show(),f=!1,pe.isAwake()?pe.setBgOpacity(P.bgOpacity,1,1):(pe.setBgOpacity(1,1,1),pe.disableHandles()),H(G,0,1))}function u(e,t){f&&(P.bgFade&&!t?p.animate({opacity:1-e},{queue:!1,duration:P.fadeTime}):p.css({opacity:1-e}))}function d(){P.shade?a():s(),pe.isAwake()&&u(P.bgOpacity)}function l(){return p.children()}var f=!1,p=e("<div />").css({position:"absolute",zIndex:240,opacity:0}),h={top:i(),left:i().height(L),right:i().height(L),bottom:i()};return{update:n,updateRaw:o,getShades:l,setBgColor:c,enable:a,disable:s,resize:t,refresh:d,opacity:u}}(),pe=function(){function t(t){var n=e("<div />").css({position:"absolute",opacity:P.borderOpacity}).addClass(o(t));return U.append(n),n}function n(t,n){var r=e("<div />").mousedown(p(t)).css({cursor:t+"-resize",position:"absolute",zIndex:n}).addClass("ord-"+t);return de.support&&r.bind("touchstart.jcrop",de.createDragger(t)),V.append(r),r}function i(e){var t=P.handleSize,r=n(e,z++).css({opacity:P.handleOpacity}).addClass(o("handle"));return t&&r.width(t).height(t),r}function a(e){return n(e,z++).addClass("jcrop-dragbar")}function c(e){var t;for(t=0;t<e.length;t++)M[e[t]]=a(e[t])}function s(e){var n,r;for(r=0;r<e.length;r++){switch(e[r]){case"n":n="hline";break;case"s":n="hline bottom";break;case"e":n="vline right";break;case"w":n="vline"}O[e[r]]=t(n)}}function u(e){var t;for(t=0;t<e.length;t++)I[e[t]]=i(e[t])}function d(e,t){P.shade||Y.css({top:r(-t),left:r(-e)}),X.css({top:r(t),left:r(e)})}function l(e,t){X.width(Math.round(e)).height(Math.round(t))}function f(){var e=le.getFixed();le.setPressed([e.x,e.y]),le.setCurrent([e.x2,e.y2]),h()}function h(e){if(S)return b(e)}function b(e){var t=le.getFixed();l(t.w,t.h),d(t.x,t.y),P.shade&&fe.updateRaw(t),S||w(),e?P.onSelect.call(be,g(t)):P.onChange.call(be,g(t))}function A(e,t,n){(S||t)&&(P.bgFade&&!n?$.animate({opacity:e},{queue:!1,duration:P.fadeTime}):$.css("opacity",e))}function w(){X.show(),P.shade?fe.opacity(ue):A(ue,!0),S=!0}function v(){C(),X.hide(),P.shade?fe.opacity(1):A(1),S=!1,P.onRelease.call(be)}function y(){F&&V.show()}function x(){if(F=!0,P.allowResize)return V.show(),!0}function C(){F=!1,V.hide()}function k(e){e?(oe=!0,C()):(oe=!1,x())}function j(){k(!1),f()}var S,z=370,O={},I={},M={},F=!1;P.dragEdges&&e.isArray(P.createDragbars)&&c(P.createDragbars),e.isArray(P.createHandles)&&u(P.createHandles),P.drawBorders&&e.isArray(P.createBorders)&&s(P.createBorders),e(document).bind("touchstart.jcrop-ios",function(t){e(t.currentTarget).hasClass("jcrop-tracker")&&t.stopPropagation()});var H=m().mousedown(p("move")).css({cursor:"move",position:"absolute",zIndex:360});return de.support&&H.bind("touchstart.jcrop",de.createDragger("move")),U.append(H),C(),{updateVisible:h,update:b,release:v,refresh:f,isAwake:function(){return S},setCursor:function(e){H.css("cursor",e)},enableHandles:x,enableOnly:function(){F=!0},showHandles:y,disableHandles:C,animMode:k,setBgOpacity:A,done:j}}(),he=function(){function t(t){ce.css({zIndex:450}),t?e(document).bind("touchmove.jcrop",a).bind("touchend.jcrop",s):f&&e(document).bind("mousemove.jcrop",r).bind("mouseup.jcrop",o)}function n(){ce.css({zIndex:290}),e(document).unbind(".jcrop")}function r(e){return d(c(e)),!1}function o(e){return e.preventDefault(),e.stopPropagation(),re&&(re=!1,l(c(e)),pe.isAwake()&&P.onSelect.call(be,g(le.getFixed())),n(),d=function(){},l=function(){}),!1}function i(e,n,r){return re=!0,d=e,l=n,t(r),!1}function a(e){return d(c(de.cfilter(e))),!1}function s(e){return o(de.cfilter(e))}function u(e){ce.css("cursor",e)}var d=function(){},l=function(){},f=P.trackDocument;return f||ce.mousemove(r).mouseup(o).mouseout(o),$.before(ce),{activateHandlers:i,setCursor:u}}(),ge=function(){function t(){P.keySupport&&(i.show(),i.focus())}function n(e){i.hide()}function r(e,t,n){P.allowMove&&(le.moveOffset([t,n]),pe.updateVisible(!0)),e.preventDefault(),e.stopPropagation()}function o(e){if(e.ctrlKey||e.metaKey)return!0;ie=!!e.shiftKey;var t=ie?10:1;switch(e.keyCode){case 37:r(e,-t,0);break;case 39:r(e,t,0);break;case 38:r(e,0,-t);break;case 40:r(e,0,t);break;case 27:P.allowSelect&&pe.release();break;case 9:return!0}return!1}var i=e('<input type="radio" />').css({position:"fixed",left:"-120px",width:"12px"}).addClass("jcrop-keymgr"),a=e("<div />").css({position:"absolute",overflow:"hidden"}).append(i);return P.keySupport&&(i.keydown(o).blur(n),R||!P.fixedSupport?(i.css({position:"absolute",left:"-20px"}),a.append(i).insertBefore($)):i.insertBefore($)),{watchKeys:t}}();de.support&&ce.bind("touchstart.jcrop",de.newSelection),V.hide(),D(!0);var be={setImage:F,animateTo:y,setSelect:x,setOptions:S,tellSelect:k,tellScaled:j,setClass:v,disable:z,enable:O,cancel:I,release:pe.release,destroy:M,focus:ge.watchKeys,getBounds:function(){return[q*te,L*ne]},getWidgetSize:function(){return[q,L]},getScaleFactor:function(){return[te,ne]},getOptions:function(){return P},ui:{holder:G,selection:X}};return E&&G.bind("selectstart",function(){return!1}),Q.data("Jcrop",be),be},e.fn.Jcrop=function(t,n){var r;return this.each(function(){if(e(this).data("Jcrop")){if("api"===t)return e(this).data("Jcrop");e(this).data("Jcrop").setOptions(t)}else"IMG"==this.tagName?e.Jcrop.Loader(this,function(){e(this).css({display:"block",visibility:"hidden"}),r=e.Jcrop(this,t),e.isFunction(n)&&n.call(r)}):(e(this).css({display:"block",visibility:"hidden"}),r=e.Jcrop(this,t),e.isFunction(n)&&n.call(r))}),this},e.Jcrop.Loader=function(t,n,r){function o(){a.complete?(i.unbind(".jcloader"),e.isFunction(n)&&n.call(a)):window.setTimeout(o,50)}var i=e(t),a=i[0];i.bind("load.jcloader",o).bind("error.jcloader",function(t){i.unbind(".jcloader"),e.isFunction(r)&&r.call(a)}),a.complete&&e.isFunction(n)&&(i.unbind(".jcloader"),n.call(a))},e.Jcrop.defaults={allowSelect:!0,allowMove:!0,allowResize:!0,trackDocument:!0,baseClass:"jcrop",addClass:null,bgColor:"black",bgOpacity:.6,bgFade:!1,borderOpacity:.4,handleOpacity:.5,handleSize:null,aspectRatio:0,keySupport:!0,createHandles:["n","s","e","w","nw","ne","se","sw"],createDragbars:["n","s","e","w"],createBorders:["n","s","e","w"],drawBorders:!0,dragEdges:!0,fixedSupport:!0,touchSupport:null,shade:null,boxWidth:0,boxHeight:0,boundary:2,fadeTime:400,animationDelay:20,swingSpeed:3,minSelect:[0,0],maxSize:[0,0],minSize:[0,0],onChange:function(){},onSelect:function(){},onDblClick:function(){},onRelease:function(){}}}(jQuery)},0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n("12695715cd021610570e"),c=r(a),s=function(){function e(){o(this,e),this.init()}return i(e,[{key:"init",value:function(){var e=new c.default({element:"#courseset-picture-crop",cropedWidth:480,cropedHeight:270});e.afterCrop=function(e){var t=$("#upload-picture-btn").data("url");$.post(t,{images:JSON.stringify(e)},function(){document.location.href=$("#upload-picture-btn").data("gotoUrl")})},$("#upload-picture-btn").click(function(t){t.stopPropagation(),$(t.currentTarget).button("loading"),e.crop({imgs:{large:[480,270],middle:[304,171],small:[96,54]}})}),$(".go-back").click(function(){history.go(-1)})}}]),e}();new s},"12695715cd021610570e":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n("8798ea2be92f40833ba3"),n("067c1684df47aff0c9f1");var i=function(){function e(t){r(this,e);var n=this;this.config=$.extend({element:null,group:"default"},t),this.element=$(this.config.element);var o=this.element,i=o.attr("width"),a=o.attr("height"),c=o.data("naturalWidth"),s=o.data("naturalHeight"),u=this.config.cropedWidth,d=this.config.cropedHeight,l=u/d,f=u*(c/i),p=d*(s/a);this.img=$.Jcrop(o,{trueSize:[c,s],setSelect:[0,0,f,p],aspectRatio:l,keySupport:!1,allowSelect:!1,onSelect:function(e){n.onSelect(e)}})}return o(e,[{key:"crop",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this,n=app.imgCropUrl,r=$.extend(this.img.tellScaled(),e,{width:this.element.width(),height:this.element.height(),group:t.config.group});r.x=r.x>0?r.x:0,r.y=r.y>0?r.y:0,$.post(n,r,function(e){t.afterCrop(e)})}},{key:"onSelect",value:function(e){}},{key:"afterCrop",value:function(e){}}]),e}();t.default=i}});