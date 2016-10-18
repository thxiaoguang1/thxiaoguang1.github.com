"use strict"
window.onload=function() {


    var oHeader = document.getElementById('header_title');
    var aLi = oHeader.getElementsByTagName('li');
    var oHeaderp = document.getElementById('headerp');
    var iNow = 0;

    for (var i = 0; i < aLi.length; i++) {

        ;
        (function (index) {
            aLi[i].onmouseover = function () {
                move(oHeaderp, index * aLi[0].offsetWidth);
            };
            aLi[i].onmouseout = function () {
                move(oHeaderp, iNow * aLi[0].offsetWidth);

            }
            aLi[i].onclick = function () {
                iNow = index;
            }

        })(i);
    }

    function getStyle(obj, name) {
        return obj.currentStyle ? obj.currentStyle[name] : getComputedStyle(obj, false)[name];
    }

    function move1(obj, json, options) {
        clearInterval(obj.timer);
        options = options || {};
        options.duration = options.duration || 800;
        options.easing = options.easing || 'ease-out';

        var start = {};
        var dis = {};
        for (var name in json) {
            start[name] = parseFloat(getStyle(obj, name));
            dis[name] = json[name] - start[name];
        }
        var count = Math.floor(options.duration / 30);
        var n = 0;
        obj.timer = setInterval(function () {
            n++;
            for (name in json) {
                switch (options.easing) {
                    case 'linear':
                        var a = n / count;
                        var cur = dis[name] * n;
                        break;
                    case 'ease-in':
                        var a = n / count;
                        var cur = dis[name] * a * a * a;
                        break;
                    case 'ease-out':
                        var a = 1 - n / count;
                        var cur = dis[name] * (1 - a * a * a);
                        break;
                }
                if (name == 'opacity') {
                    obj.style.opacity = start[name] + cur;
                    obj.style.filter = 'alpha(opcity:' + cur * 100 + ')';
                } else {
                    obj.style[name] = start[name] + cur + 'px';
                }
            }
            if (n == count) {
                clearInterval(obj.timer);
            }
        }, 30);

    }

    var left = 0;
    var iSpeed = 0;

    function move(obj, iTarget) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            iSpeed += (iTarget - left) / 5;
            iSpeed *= 0.70;
            left += iSpeed;
            obj.style.left = left + 'px';
            if (Math.round(iSpeed) == 0 && Math.round(left) == iTarget) {
                clearInterval(obj.timer);
            }
        }, 30);
    }


}