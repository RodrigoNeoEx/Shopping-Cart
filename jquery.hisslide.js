!function(a){
  var b=function(b,c){
  function d(){
    j.each(function(b,c){var d=i[b];
    a(c).css("zIndex",d.$zIndex).finish().animate(d,h.speed).find("img").css("opacity",d.$opacity)})}
    function e(){
      i.unshift(i.pop()),d()}function f(){k=setInterval(e,h.interval)}var g=a(b),h={speed:1e3,interval:2e3};
      a.extend(!0,h,c);
      var i=[
         {$zIndex:1,width:120,height:150,top:99,left:134,$opacity:.2}
        ,{$zIndex:2,width:430,height:170,top:89,left:130,$opacity:.4}
        ,{$zIndex:3,width:470,height:218,top:65,left:230,$opacity:.7}
        ,{$zIndex:4,width:524,height:288,top:30,left:390,$opacity:1}
        ,{$zIndex:3,width:470,height:218,top:65,left:630,$opacity:.7}
        ,{$zIndex:2,width:530,height:170,top:89,left:680,$opacity:.4}
        ,{$zIndex:1,width:420,height:150,top:99,left:630,$opacity:.2}
      ]
  ,j=g.find("li")
  ,k=null;g.find(".hi-next").on("click",function(){e()})
  ,g.find(".hi-prev").on("click",function(){i.push(i.shift()),d()})
  ,g.on("mouseenter",function(){clearInterval(k),k=null}).on("mouseleave",function(){f()})
  ,d(),f()};a.fn.hiSlide=function(c){return a(this).each(function(a,d){b(d,c)}),this}}(jQuery);