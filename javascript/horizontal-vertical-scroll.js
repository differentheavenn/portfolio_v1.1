$(function(){var t=$(window).scrollTop(),a=window.innerHeight,e=window.innerWidth,r="scene--active",n="scene--ended";function i(t){var e=t.data("elDom").getBoundingClientRect();e.top>a?(t.find(".scene").removeClass(r),t.find(".scene").removeClass(n)):e.bottom<0?(t.find(".scene").addClass(n),t.find(".scene").removeClass(r)):(e.top<=0&&t.find(".scene").addClass(r),e.top>0&&t.find(".scene").removeClass(r),e.bottom<=a&&t.find(".scene").addClass(n),e.bottom>a&&t.find(".scene").removeClass(n))}$(window).on("resize",function(){a=window.innerHeight,e=window.innerWidth});var o=$(".horizontal-scroll-section"),s=o.find(".trigger");o.each(function(t,a){var r=$(this);$(this).data("elDom",$(this).get(0)),function(t){var a=t.attr("class"),r=t.find("."+a+"__content-wrapper"),n=r.get(0);t.data("contentWrapper",r),t.data("contentWrapperDom",n);var i=t.data("contentWrapperDom").scrollWidth;t.data("contentWrapperScrollWidth",i);var o=-(t.data("contentWrapperScrollWidth")-e);t.data("rightMax",Number(o)),t.data("initalized",!1),t.css("height",t.data("contentWrapperScrollWidth")),t.data("outerHeight",t.outerHeight()),t.data("offsetTop",t.offset().top),t.data("initalized",!0),t.data("transformX","0"),t.addClass(t.attr("class")+"--init")}($(this)),i($(this)),$(window).on("resize",function(){var t,a;a=(t=r).data("contentWrapperDom").scrollWidth,t.data("contentWrapperScrollWidth",a),rightMax=t.data("contentWrapperScrollWidth")-e,rightMaxMinus=-rightMax,t.data("rightMax",Number(rightMaxMinus)),t.css("height",t.data("contentWrapperScrollWidth")),t.data("outerHeight",t.outerHeight()),t.data("offsetTop",t.offset().top),t.data("transformX")<=t.data("rightMax")&&t.data("contentWrapper").css({transform:"translate3d("+t.data("rightMax")+"px, 0, 0)"}),i(r)})}),s.each(function(t,a){var e,r,n,i;e=$(this),r=$(this).closest(".horizontal-scroll-section"),n=-e.parent().position().left,i=(i=e.data("triggerOffset"))?i=i:.5,e.data("triggerOffset",i),e.data("triggerPositionLeft",n),e.data("triggerSection",r)}),$(window).on("scroll",function(){t=$(window).scrollTop(),o.each(function(r,n){var o,s;o=$(this),s=-(t-o.data("offsetTop"))/(o.data("outerHeight")-(a-e))*o.data("contentWrapperScrollWidth"),s=Math.min(0,s),s=Math.max(s,o.data("rightMax")),o.data("transformX",Number(s)),1==o.data("initalized")&&o.data("contentWrapper").css({transform:"translate3d("+o.data("transformX")+"px, 0, 0)"}),i($(this))}),s.each(function(t,a){var e;(e=$(this)).data("triggerSection").data("transformX")<=e.data("triggerPositionLeft")*e.data("triggerOffset")?e.data("triggerSection").addClass(e.data("class")):!1!==e.data("remove-class")&&e.data("triggerSection").removeClass(e.data("class"))})})});