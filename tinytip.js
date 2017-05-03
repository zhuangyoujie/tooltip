;(function () {
    var toolTip = function () {
        this.cfg = {
            title: '标题',
            content: '可自定义标题可',
            position:"bottom"
        };
    };
    toolTip.prototype = {
        addConfirm:function (cfg) {
            var CFG = $.extend(this.cfg, cfg);
            var win = $('<div class="jui-wrap"></div>'),
                content = $('<div class="jui-con">'+CFG.content+'</div>'),
                arrow = $('<span class="jui-'+CFG.position+' jui-arrow"></span>');
            win.append(arrow);
            win.append(content);
            $('body').append(win);
        }
    };
    window.toolTip =new toolTip();
})()
