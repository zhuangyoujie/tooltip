;(function () {
    var toolTip = function () {
        this.cfg = {
            content: '可自定义标题',
            position: "right",
            event: null
        };
    };
    toolTip.prototype = {
        close:function(win){
            win.remove();
        },
        setEvent:function (cfg,win) {
            var self =this;
            var CFG = $.extend(this.cfg, cfg);
            if(CFG.event.type==='mouseover'){
                $(CFG.event.target).on("mouseleave",function () {
                    self.close(win);
                })
            }else if(CFG.event.type==='click'){
                $(CFG.event.target).on("click",function (e) {
                    e.stopPropagation();
                })
            }
        },
        setPosition: function (cfg, win) {
            var CFG = $.extend(this.cfg, cfg);
            var pos = {x: $(CFG.event.target).offset().left, y: $(CFG.event.target).offset().top};
            var wh = {w: $(CFG.event.target).outerWidth(), h: $(CFG.event.target).outerHeight()};
            switch (CFG.position) {
                case 'top':
                    setPos = {
                        x: pos.x - (win.outerWidth()-wh.w)/2,
                        y: pos.y- win.outerHeight() - 10
                    };
                    break;
                case 'left':
                    setPos = {
                        x: pos.x - win.outerHeight() - 24,
                        y: pos.y - (win.outerHeight() - wh.h) / 2
                    };
                    break;
                case 'bottom':
                    setPos = {
                        x: pos.x - (win.outerWidth()-wh.w)/2,
                        y: pos.y + wh.h + 10
                    };
                    break;
                case 'right':
                    setPos = {
                        x: pos.x + wh.w + 10,
                        y: pos.y - (win.outerHeight() - wh.h) / 2
                    };
                    break;
            }
            win.css({"left": setPos.x + "px", "top": setPos.y + "px"})
        },
        addConfirm: function (cfg) {
            var CFG = $.extend(this.cfg, cfg);
            var win = $('<div class="jui-wrap animate-fade-in"></div>'),
                content = $('<div class="jui-con">' + CFG.content + '</div>'),
                arrow = $('<span class="jui-' + CFG.position + ' jui-arrow"></span>');
            win.append(arrow);
            win.append(content);
            $('body').append(win);
            this.setPosition(cfg, win);
            this.setEvent(cfg,win);

        }
    };
    window.toolTip = new toolTip();
})();
