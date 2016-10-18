"use strict"
window.onload=function() {


    var oHeader = document.getElementById('header_title');
    var aLi = oHeader.getElementsByTagName('li');
    var oHeaderp = document.getElementById('headerp');
    var iNow = 0;

    for (var i = 0; i < aLi.length; i++) {

        ;(function (index) {
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
}

var left = 0;
var iSpeed = 0;
function move(obj,iTarget){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        iSpeed+=(iTarget-left)/5;
        iSpeed*=0.70;
        left+=iSpeed;
        obj.style.left = left+'px';
        if(Math.round(iSpeed)==0&&Math.round(left)==iTarget){
            clearInterval(obj.timer);
        }
    },30);
}