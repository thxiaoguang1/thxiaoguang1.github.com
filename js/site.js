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
    //随机数函数
    function random(n,m){
            return parseInt(Math.random()*(m-n))+n;
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
            var aLi=oH.getElementsByTagName('li');
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
            for (var i = 0; i < aLi.length; i++) {
                aLi[i].index=i;
                    //事件绑定，防止与弹性的点击事件冲突
                if (aLi[i].addEventListener) {
                    aLi[i].addEventListener('click',scroll_title,false);
                } else {
                    aLi[i].attachEvent('onclick',scroll_title);
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
               var C=10;
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
               
               //首页定时器
                function beader_timer(){
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
              
               oBox.timer2= setInterval(function(){
                     beader_timer();
                },1500)
            
                 oBox.onmouseover=function(){
                    
                    clearInterval(oBox.timer2)
               
                }
                oBox.onmouseout=function(){

                    oBox.timer2= setInterval(function(){
                        beader_timer();
                    },1500)
                }
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
        var oUl=oNa.getElementsByTagName('ul')[0];
        var oOl=oNa.getElementsByTagName('ol')[0];
        var aoLi=oOl.getElementsByTagName('li');

        var aLi=oUl.getElementsByTagName('li');
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
        var b=true;
       oA.addEventListener('click',function(){
        
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

            
       


       },false)
    //html板块中的文字旋转
    oA.addEventListener('click',function(){
        if(b){
            for (var i=0;i < aoLi.length;i++) {

                aoLi[i].style.WebkitTransform=' rotateY(-180deg)';
            };
            b=false;

        }else{
            for (var i=0;i < aoLi.length;i++) {

                aoLi[i].style.WebkitTransform=' rotateY(0deg)';
            };
            b=true;
        }
    
            
        },false)
    })();
   
//3D环
    (function(){
        var oV=document.querySelector('#nav_js');
        var oA=oV.querySelector('a');
        var oUl=oV.querySelector('ul');
        var aLi=oUl.children;
        var N=11;
        //改变rotate值形成环形
            function tab(){
                for(var i=0;i<N;i++){
                aLi[i].style.WebkitTransition='1s all ease '+(N-i)*100+'ms';
                aLi[i].style.WebkitTransform='rotateY('+360/N*i+'deg) translateZ(360px)'
                }
                 //获取不到transform的值，用数字模拟
    var x = 0;          //x轴角度
    var y = 0;          //y轴角度
    var iSpeedX = 0;
    var iSpeedY = 0;
    var lastX = 0;
    var lastY = 0;
    oUl.onmousedown=function(ev){
        var  disX=ev.pageX-y;
        var disY=ev.pageY-x;
        document.onmousemove=function(ev){
            x=ev.pageY-disY;
            y=ev.pageX-disX;
            oUl.style.WebkitTransform='perspective(800px) rotateY('+y/5+'deg) rotateX('+-x/5+'deg)';
            iSpeedX=ev.pageX-lastX;
             iSpeedY=ev.pageY-lastY;
             lastX=ev.pageX;
             lastY=ev.pageY;

        }
        document.onmouseup=function(){
            document.onmousemove = null;
            document.onmouseup = null;
            clearInterval(oUl.timer);
            oUl.timer=setInterval(function(){
                x+=iSpeedY;
                y+=iSpeedX;
                oUl.style.WebkitTransform='perspective(800px) rotateY('+y/5+'deg) rotateX('+-x/5+'deg)';
                iSpeedX*=0.95;
                iSpeedY*=0.95;
               
                if(Math.abs(iSpeedX)<1)iSpeedX=0;
                if(Math.abs(iSpeedY)<1)iSpeedY=0;
                if(iSpeedX==0&&iSpeedY==0){
                    clearInterval(oUl.timer);
                }

            },30)
        }
        return false;

    }
            }
            //回到原始位置
            function tab2(){
                for(var i=0;i<N;i++){
                aLi[i].style.WebkitTransition='1s all ease '+(N-i)*100+'ms';
                aLi[i].style.WebkitTransform='rotateY(0deg) translateZ(0px)'
                }
                 //获取不到transform的值，用数字模拟
            var x = 0;          //x轴角度
            var y = 0;          //y轴角度
            var iSpeedX = 0;
            var iSpeedY = 0;
            var lastX = 0;
            var lastY = 0;
            oUl.onmousedown=function(ev){
                var  disX=ev.pageX-y;
                var disY=ev.pageY-x;
                document.onmousemove=function(ev){
                    x=ev.pageY-disY;
                    y=ev.pageX-disX;
                    oUl.style.WebkitTransform='perspective(800px) rotateY('+y/5+'deg) rotateX('+-x/5+'deg)';
                    iSpeedX=ev.pageX-lastX;
                     iSpeedY=ev.pageY-lastY;
                     lastX=ev.pageX;
                     lastY=ev.pageY;

                }
                document.onmouseup=function(){
                    document.onmousemove = null;
                    document.onmouseup = null;
                    clearInterval(oUl.timer);
                    oUl.timer=setInterval(function(){
                        x+=iSpeedY;
                        y+=iSpeedX;
                        oUl.style.WebkitTransform='perspective(800px) rotateY('+y/5+'deg) rotateX('+-x/5+'deg)';
                        iSpeedX*=0.95;
                        iSpeedY*=0.95;               
                        if(Math.abs(iSpeedX)<1)iSpeedX=0;
                        if(Math.abs(iSpeedY)<1)iSpeedY=0;
                        if(iSpeedX==0&&iSpeedY==0){
                            clearInterval(oUl.timer);
                        }

                    },30)
                }
        return false;

    }
            }
            var bOk=true;
            oA.onclick=function(){

                if(bOk){
                    tab();
                    bOk=false;
                }else{
                     tab2();
                    bOk=true;
                }
                
            }

    })();
    //穿墙
    ;(function(){
        var oUl=document.getElementById('nav_site')
        var oN=oUl.getElementsByTagName('ul')[0];
        var aLi=oN.getElementsByTagName('li');


        function hoverDir(ev,obj){
            var a = ev.clientX-obj.offsetLeft-obj.offsetWidth/2;
            var b = obj.offsetTop+obj.offsetHeight/2-ev.clientY;
            
            return Math.round((a2d(Math.atan2(b,a))+180)/90)%4;
        }
        function a2d(n){
            return n*180/Math.PI;
        }
        function tab(obj){
            var oS=obj.children[1];
            obj.onmouseenter = function(ev){

                var oEvent=ev||event;
                var dir=hoverDir(oEvent,obj);
                switch(dir){
                case 0:
                    //左
                    oS.style.left = '-200px';
                    oS.style.top = 0;
                    break;
                case 1:
                    //下
                    oS.style.left = 0;
                    oS.style.top = '200px';
                    break;
                case 2:
                    //右
                    oS.style.left = '200px';
                    oS.style.top = 0;
                    break;
                case 3:
                    //上
                    oS.style.left = 0;
                    oS.style.top = '-200px';
                    break;
                }
            move1(oS,{left:0,top:0})
        };
            obj.onmouseleave=function(ev){
                
                var oEvent = ev||event;
            var dir = hoverDir(oEvent,obj);
                switch(dir){
                    case 0:
                        move1(oS,{left:-200,top:0});
                        break;
                    case 1:
                        move1(oS,{left:0,top:200});
                        break;
                    case 2:
                        move1(oS,{left:200,top:0});
                        break;
                    case 3:
                        move1(oS,{left:0,top:-200});
                        break;
                }
            }
        }
           
        for(var i=0;i<aLi.length;i++){
            tab(aLi[i])
        }
     })()
     
     //页面遮罩层
     ;(function(){
        var oLi=document.querySelector('.header_boss');
         var oLi1=oLi.querySelector('.header_boss_li1');
          var oLi2=oLi.querySelector('.header_boss_li2');

        var oP1=oLi1.querySelector('p');
        var oP2=oLi2.querySelector('p');
        
                oP1.onclick=function(){
          
                    oLi1.style.width=0;
                    oLi2.style.width=0;
                    document.documentElement.style.overflow='auto';
                    document.body.style.overflow='auto';
                    
                }
                 oP2.onclick=function(){
          
                    oLi1.style.width=0;
                    oLi2.style.width=0;
                    document.documentElement.style.overflow='auto';
                    document.body.style.overflow='auto';
                      
        
                }
            
     })()
     //html板块中的雪花旋转
     ;(
        function(){
            var oN=document.getElementById('nav_site');
            var oOl=document.getElementById('nav_site_ol');
            
            var aImg=oOl.querySelectorAll('li img');
            var a=20;
            for(var i=0;i<aImg.length;i++){
                
                 (function(index){

                    setInterval(function(){
                        a+=10;
                        if(a==800){
                            a=20;
                        }
                    aImg[index].style.WebkitTransform='perspective(800px) rotate('+a+'deg)';
                },30) 
                 })(i)
               
            }
                         
        })()
        //nav3模块
        ;(function(){
            var oN=document.getElementById('nav3');
            var oEm=oN.getElementsByTagName('em')[0];
            var oP=oN.getElementsByTagName('p')[0];
            var oI=oN.getElementsByTagName('i')[0];
            var oUl=oN.getElementsByTagName('ul')[0];
            var aLi=oN.getElementsByTagName('li');
            var a=oN.offsetWidth;
            oUl.style.height='100%';
            for(var i=0;i<aLi.length;i++){
                //console.log(aLi.length)
                aLi[i].style.top=random(80,430)+'px';
                aLi[i].style.left=random(0,a-230)+'px';
                aLi[i].style.WebkitTransform='perspective(800px) rotate('+random(0,180)+'deg)'
                aLi[i].setAttribute('drag','sdfsd');
                (function(index){
                    aLi[index].onclick=function(){

                        aLi[index].style.WebkitTransform='perspective(800px) rotateZ('+random(-80,80)+'deg)'
                         aLi[index].style.WebkitTransform='perspective(800px) rotateX('+random(-80,80)+'deg) rotateY('+random(0,360)+'deg)'
                    }
                })(i)

            };

            oN.onmousedown=function(ev){
                
                var oEvent = ev || event;
                var oSrc_p = oEvent.srcElement || oEvent.target;
                var oSrc=oSrc_p.parentNode;
                for(var i=0;i<aLi.length;i++){
                         aLi[i].style.WebkitTransition='';
                        }
                if(oSrc.getAttribute('drag')){
                    
                    var disX = oEvent.clientX-oSrc.offsetLeft;
                    var disY = oEvent.clientY-oSrc.offsetTop;
                    document.onmousemove=function(ev){
                        
                        var oEvent =ev || event;
                        oSrc.style.left=oEvent.clientX-disX+'px';
                        oSrc.style.top=oEvent.clientY-disY+'px';
                    };
                    document.onmouseup=function(){
                        document.onmousemove=null;
                        document.onmouseup=null

                    };
                   
                    return false;
                }
            };
             oP.onclick=function(){
                for(var i=0;i<aLi.length;i++){
                //console.log(aLi.length)
                aLi[i].style.top=random(80,430)+'px';
                aLi[i].style.left=random(0,a-230)+'px';
                aLi[i].style.WebkitTransform='perspective(800px) rotateZ(0deg)'
                aLi[i].style.WebkitTransform='perspective(800px) rotateX(0deg) rotateY(0deg)'

                }
            }
             oI.onclick=function(){
                for(var i=0;i<aLi.length;i++){
                //console.log(aLi.length)
                /*aLi[0].style.top=100+'px';
                aLi[0].style.left=200+'px';
                aLi[0].style.WebkitTransform='perspective(800px) rotateZ(0deg)'
                aLi[0].style.WebkitTransform='perspective(800px) rotateX(0deg) rotateY(0deg)'*/
                /*aLi[i].style.top=(oN.offsetHeight-aLi[0].offsetHeight)+'px';               
                aLi[i].style.left=(oN.offsetWidth-aLi[0].offsetWidth)+'px';
                aLi[i].style.WebkitTransform='perspective(800px) rotateZ(0deg)'
                aLi[i].style.WebkitTransform='perspective(800px) rotateX(0deg) rotateY(0deg)'*/
                aLi[i].style.top=(100+i*15)+'px';
                aLi[i].style.left=(200+i*20)+'px';
                aLi[i].style.WebkitTransform='perspective(800px) rotateZ(0deg)'
                aLi[i].style.WebkitTransform='perspective(800px) rotateX(0deg) rotateY(0deg)'
                }
            }
            oEm.onclick=function(){
                for(var i=0;i<aLi.length;i++){
                aLi[i].style.top=(oN.offsetHeight-aLi[0].offsetHeight)+'px';               
                aLi[i].style.left=(oN.offsetWidth-aLi[0].offsetWidth)+'px';
                aLi[i].style.WebkitTransform='perspective(800px) rotateZ(0deg)';
                aLi[i].style.WebkitTransform='perspective(800px) rotateX(0deg) rotateY(0deg)';
                aLi[i].style.display='none'
                }
                 for(var i=0;i<aLi.length;i++){

                    aLi[i].style.display='block';
                    (function(index){
                        setTimeout(function(){
                        move1(aLi[index],{left:200+index*20,top:100+index*15});
                         //console.log(index) 
                    },500*i)
                    })(i)
                  }
            }
        })();
        ;(function(){
            var oN=document.getElementById('nav_js');
            var oBox=document.getElementById('nav2_boss');
            var oEm=oBox.getElementsByTagName('em')[0];
            var oS=oN.getElementsByTagName('span')[0];
             oS.onclick=function(){

                oBox.style.WebkitTransform='rotateY(180deg)'
             }
             oEm.onclick=function(){
                
                oBox.style.WebkitTransform='rotateY(0deg)'
             }

        })()
     
}