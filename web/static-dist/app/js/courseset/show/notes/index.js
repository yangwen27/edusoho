webpackJsonp(["app/js/courseset/show/notes/index"],{"8b60dd4a66f0e5efac4b":function(t,e,o){"use strict";$(".js-like").on("click",function(t){var e=$(t.currentTarget),o=e.find(".js-like-num"),s=parseInt(o.text()),i=void 0,n=e.hasClass("color-primary");i=n?e.data("cancelLikeUrl"):e.data("likeUrl"),$.post(i).done(function(t){n?(e.removeClass("color-primary"),o.text(s-1)):(e.addClass("color-primary"),o.text(s+1))})}),$("#note-list .content").each(function(){$(this).find(".editor-text").height()>90&&$(this).next().show()}),$("#note-list").on("click",".js-more-show",function(){$(this).prev().toggleClass("active")})}},["8b60dd4a66f0e5efac4b"]);