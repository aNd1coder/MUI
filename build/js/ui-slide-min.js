(function(a){a.fn.slide=function(b){a.fn.slide.defaults={trigger:".ui-slide-trigger",container:".ui-slide-container",current:"current",event:"mouseover",selectedIndex:0,auto:true,interval:2000,fadeOut:1000,fadeIn:1000,lazyload:true};var b=a.extend({},a.fn.slide.defaults,b);this.each(function(){var e=a(b.trigger+" > .item"),j=a(b.container+" > .item"),i=b.current,g=b.fadeOut,d=b.fadeIn,c=b.selectedIndex;e.eq(c).addClass(i);j.eq(c).addClass(i);e.each(function(k){a(this).bind(b.event,function(){var l=a(b.container+" > a:visible"),m=l.prevAll().length;if(k!=m){c=k;l.stop().fadeOut(function(){j.removeClass(i);j.eq(k).addClass(i).fadeIn()});a(this).addClass(i).siblings("a").removeClass(i)}})});if(b.auto&&b.interval){var f=b.interval,h=e.length;setInterval(function(){e.eq(c).trigger(b.event);c++;if(c==h){c=0}},f)}})}})(jQuery);