(function(){(function(a,b){if(typeof define==="function"&&define.amd){return define(["jquery","waypoints"],b)}else{return b(a.jQuery)}})(this,function(b){var c,a;c={wrapper:'<div class="sticky-wrapper" />',stuckClass:"stuck"};a=function(e,d){e.wrap(d.wrapper);e.each(function(){var f;f=b(this);f.parent().height(f.outerHeight());return true});return e.parent()};return b.waypoints("extendFn","sticky",function(f){var e,d;f=b.extend({},b.fn.waypoint.defaults,c,f);e=a(this,f);d=f.handler;f.handler=function(i){var g,h;g=b(this).children(":first");h=i==="down"||i==="right";g.toggleClass(f.stuckClass,h);if(d!=null){return d.call(this,i)}};e.waypoint(f);return this})})}).call(this);