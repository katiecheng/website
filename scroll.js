// Generated by LiveScript 1.5.0
(function(){
  $(document).ready(function(){
    var i$, ref$, len$;
    for (i$ = 0, len$ = (ref$ = $('.hlink')).length; i$ < len$; ++i$) {
      (fn$.call(this, ref$[i$]));
    }
    function fn$(x){
      var target, targetbase;
      target = $(x).attr('href');
      if (target.indexOf('#') !== 0) {
        return;
      }
      targetbase = target.slice(1);
      $(x).click(function(evt){
        var targetloc;
        evt.preventDefault();
        evt.stopPropagation();
        targetloc = $('a[name="' + targetbase + '"]').offset().top;
        if (targetbase === 'top') {
          targetloc = 40;
        }
        console.log(targetloc);
        return $('html, body').animate({
          scrollTop: targetloc - 40
        });
      });
    }
  });
}).call(this);