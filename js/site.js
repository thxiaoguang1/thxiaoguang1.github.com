"use strict"
window.onload=function() {


    var oHeader = document.getElementById('header_title');
    var aLi = oHeader.getElementsByTagName('li');
    var oHeaderp = document.getElementById('headerp');
    var iNow = 0;
    //导航条的弹性运动
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
    //获取非行间样式
    function getStyle(obj, name) {
        return obj.currentStyle ? obj.currentStyle[name] : getComputedStyle(obj, false)[name];
    }
    //运动模块
    function move1(obj, json, options) {

        options = options || {};
        options.duration = options.duration || 800;
        options.easing = options.easing || 'ease-out';
        clearInterval(obj.timer);

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
                options.complete && options.complete();
            }
        }, 30);

    }
    var left = 0;
    var iSpeed = 0;
    //弹性运动
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
    //滚轮事件
    (
        function Scroll() {
            var oH = document.getElementById('header_title');
            var aA = oH.getElementsByTagName('a');
            var oBox=document.getElementById('header');
            function scroll_title(){
                clearInterval(window.timer);
                var scroll=document.documentElement.scrollTop||document.body.scrollTop;
                var start = scroll;
                var dis = oBox.offsetHeight*this.index-start;
                var count=Math.floor(2000/30);
                var n=0;
                clearInterval(window.timer);
                window.timer=setInterval( function () {
                    n++;
                    var a=1-n/count;
                    var cur=start+dis*(1-a*a*a);
                    document.documentElement.scrollTop=document.body.scrollTop=cur;
                    if(n==count){
                        clearInterval(timer);
                    }

                },30)
            }
            for (var i = 0; i < aA.length; i++) {
                aA[i].index=i;
                    //事件绑定，防止与弹性的点击事件冲突
                if (aA[i].addEventListener) {
                    aA[i].addEventListener('click',scroll_title,false);
                } else {
                    aA[i].attachEvent('onclick',scroll_title);
                }
            }
        }
    )()
    ;(function(){

   window.onscroll=function(){
                var x=document.documentElement.scrollTop||document.body.scrollTop;
       var oBox=document.getElementById('back_to_top');
       var n= 0;
                if(x>300){

                    oBox.style.display='block';

                }else{
                    oBox.style.display='none';
                }
       var lock=false;
                   oBox.onclick=function(){
                       if(lock)return;
                       lock=true;
                       clearInterval( oBox.timer)
                       var start=x;
                       var dis=0-start;
                       var count=Math.floor(2000/30)
                       oBox.timer=setInterval(function(){
                          n++;
                           document.documentElement.scrollTop=document.body.scrollTop=start+dis*n/count;
                           if(n==count){
                               clearInterval(oBox.timer);
                           }
                       },30)
                   }


            }

    })()
	//logo拖拽
    ;(function(){
        function random(n,m){
            return parseInt(Math.random()*(m-n))+n;
        }

          


        var oL=document.getElementById('logo');
        var oU=document.getElementById('header_ul');
        oL.onmousedown=function(ev){

            var oEvent=ev||event;
            var disX=oEvent.clientX-oL.offsetLeft;
            document.onmousemove=function(ev){

                var oEvent=ev||event;
                var x=oEvent.clientX-disX;

                if(x<0)
                    x=0;

                if (x>oU.offsetLeft-oL.offsetWidth)
                    x=oU.offsetLeft-oL.offsetWidth;

                oL.style.left=x+'px';
                
                document.onmouseup=function(){
                    document.onmousemove=null;
                    document.onmousemove=null;
                    oL.releaseCapture&&oL.releaseCapture()
                }
                oL.setCapture&&oL.setCapture()
                return false;
            }
        }

    })()
    //背景音乐
    ;(
        function(){
            var aU=document.getElementById('audio');
            aU.src='../music/久石譲 - “天空の城ラピュタ”~君をのせて.mp3';
            aU.play();

        })();
        ;(function(){
            var iNow=false;
            var mU=document.getElementById('music_switch');
            var aU=document.getElementById('audio');
            
            mU.onclick=function(){
                if(!iNow){
                    aU.pause();
                
                mU.style.background='url(../imags/music.png) no-repeat 0 -60px'
               // console.log(mU.style.backgroundPosition)
                iNow=true;
               }else{
                    aU.play();
                    mU.style.background='url(../imags/music.png) no-repeat 0 0'
                    iNow=false;               
                }
            }
        })()
        //首页页面爆炸效果
        ;(function(){
            function rnd(n,m){
                return Math.floor(Math.random()*(m-n)+n);
            }

               var oBox=document.querySelector('.header');
               var  C=10;
               var R=8; 
               for(var i=0;i<C;i++){
                for(var j=0;j<R;j++){
                    var oS=document.createElement('span');
                    oS.style.width=oBox.offsetWidth/C+'px';
                    oS.style.height=oBox.offsetHeight/R+'px';
                    oBox.appendChild(oS);
                    oS.style.left=i*oS.offsetWidth+'px';
                    oS.style.top=j*oS.offsetHeight+'px';
                    oS.style.backgroundPosition='-'+i*oS.offsetWidth+'px -'+j*oS.offsetHeight+'px';
                   

                }
               }
               var aS=oBox.children;
               var bOk=false;
               var iNow=0;
               oBox.onclick=function(){

                if(bOk)return;
                bOk=true;
                iNow++;
                for(var i=0;i<aS.length;i++){
                    aS[i].style.WebkitTransition='0.8s all ease';
                    var x=aS[i].offsetLeft+aS[i].offsetWidth/2-oBox.offsetWidth/2;
                    var y=aS[i].offsetTop+aS[i].offsetHeight/2-oBox.offsetHeight/2;

                    aS[i].style.WebkitTransform = 'perspective(800px) translate('+x+'px,'+y+'px) rotateY('+rnd(-360,360)+'deg) rotateX('+rnd(-360,360)+'deg)';

                    aS[i].style.opacity=0;
            


                }
                    //让爆破的碎片再回去，
                function tranEnd(){
                    aS[aS.length-1].removeEventListener('transitionend',tranEnd,false);
                    for(var i=0;i<aS.length;i++){
                        aS[i].style.WebkitTransition='none';

                        aS[i].style.backgroundImage = 'url(../imags/'+(iNow%5+1)+'.jpg)';
                oBox.style.backgroundImage = 'url(../imags/'+((iNow+1)%5+1)+'.jpg)';
                
                
                aS[i].style.WebkitTransform = ' perspective(800px) translate(0,0) rotateY(0) rotateX(0)';
                aS[i].style.opacity = 1;
                    }
                bOk=false;
            }
                    aS[aS.length-1].addEventListener('transitionend',tranEnd,false);
                }
        })()
    //分页运动
    ;(function(){
        var oNa=document.getElementById('nav_site');
        var oA=oNa.getElementsByTagName('a')[0];
        var aLi=oNa.getElementsByTagName('li');
        var arr=[];
        var timer=0;
        for(var i=0;i<aLi.length;i++){
            arr.push({left:aLi[i].offsetLeft,top:aLi[i].offsetTop});
        }
        for(var i=0;i<aLi.length;i++){
            aLi[i].style.position='absolute';
            aLi[i].style.left=arr[i].left+'px';
            aLi[i].style.top=arr[i].top+'px';
            aLi[i].style.margin=0;
        }
        var bOk=false;
        oA.onclick=function(){
            if(bOk)return;
            bOk=true;
            var i=0;
            timer=setInterval(function(){
            (function(index){
                    move1(aLi[i],{top:50,left:100,width:0,height:0,opacity:0},{complete:function(){
                                if(index==aLi.length-1){
                                    var i=aLi.length-1;
                                    timer=setInterval(function(){
                                        move1(aLi[i],{left:arr[i].left,top:arr[i].top,width:150,height:150,opacity:1});
                                        i--;
                                        if(i==-1){
                                            clearInterval(timer);
                                            bOk=false;
                                        }
                                    },200)
                                }
                    }});
            })(i);
                i++;
                if(i==aLi.length){
                    clearInterval(timer);
                }
            },200)
        }
    })();
    //js页面中的鱼，让其运动
    ;(function(){
        var oLi=document.getElementById('nav2_li1');
        var oLi2=document.getElementById('nav2_li2');
        var oBox=document.getElementById('nav_js');

        var x=0;
        var y=0;
        var c=0;
        var timer=0;
        
       
        var iSpeedX=0;
        var iSpeedY=0;
       
            function fish(){
                 iSpeedX=20;
                 iSpeedY=40;
            clearInterval(timer);
           
        timer=setInterval(function(){
            
          iSpeedX+=2;
          iSpeedY+=4;
           console.log(iSpeedX,iSpeedY)        
          // console.log(iSpeedX)
          if(iSpeedY>=350){
             iSpeedX=20;
             iSpeedY=40;
             oLi.style.opacity=1;
             move1(oLi,{bottom:iSpeedY,left:iSpeedX,opacity:1},{duration:50})
          }else{
           
            move1(oLi,{bottom:iSpeedY,left:iSpeedX,opacity:1})
          }
          
        
      },50)
    }
        fish();
       
         function fish1(){
        var iSpeedX=40;
        var iSpeedY=500;

            clearInterval(timer);
        timer=setInterval(function(){
            
          iSpeedX+=2;//
          iSpeedY-=4;        
          // console.log(iSpeedX)
          if(iSpeedY<=50){
             iSpeedX=40;
             iSpeedY=500;
             oLi2.style.opacity=1;
             console.log(iSpeedY)
             move1(oLi2,{bottom:iSpeedY,left:iSpeedX,opacity:1},{duration:50})
          }else{
           
            move1(oLi2,{bottom:iSpeedY,left:iSpeedX,opacity:1})
          }
          
        
      },50)
        }
        //fish1();
        
       

    })()

};