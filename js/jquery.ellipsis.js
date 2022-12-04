var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function($) {
        $.fn.ellipsis = function()
        {
                return this.each(function()
                {
                        var el = $(this);

                        if(el.css("overflow") == "hidden")
                        {
                                var text = el.html();
                                var multiline = el.hasClass('multiline');
                                var t = $(this.cloneNode(true))
                                        .hide()
                                        .css('position', 'absolute')
                                        .css('overflow', 'visible')
                                        .width(multiline ? el.width() : 'auto')
                                        .height(multiline ? 'auto' : el.height())
                                        ;

                                el.after(t);

                                function height() { return t.height() > el.height(); };
                                function width() { return t.width() > el.width(); };

                                var func = multiline ? height : width;

                                while (text.length > 0 && func())
                                {
                                        text = text.substr(0, text.length - 1);
                                        t.html(text + "...");
                                }

                                el.html(t.html());
                                t.remove();
                        }
                });
        };
})(jQuery);

}
