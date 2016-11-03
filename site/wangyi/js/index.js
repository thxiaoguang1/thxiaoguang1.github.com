window.onload=function(){
	//菜单箭头方向切换 start
	var oMenu=document.getElementById('menu');
	var oLi=oMenu.getElementsByTagName('li');
	var oEm=oMenu.getElementsByTagName('em');
	var oList=oMenu.getElementsByTagName('div');
	function menu(vEs,showHide,cName,color){
		for(var i=0;i<oLi.length;i++){
			oLi[i].index=i;
			oLi[i][vEs]=function(){
				if(this.className=='login fl' || this.className=='no-div fl' ){
					oEm[this.index].className='';
					this.className=='login fl'?this.style.background='#cc121d':this.style.background='#333';
					this.className=='login fl'?oList[this.index].className=showHide:oList[this.index].className='';
				}else{
					oEm[this.index].className!=''?oEm[this.index].className=cName:oEm[this.index].className='';
					this.style.background=color;
					oList[this.index].className=showHide;
				}
					
			}		
		}
	}
	menu('onmouseover','show','on','#000');
	menu('onmouseout','hide','n-on','#333');
	
	//获取class start 
	function findInArr(item,arr){
        for(var i=0;i<arr.length;i++){
            if(arr[i]==item){
                return true;
            }
        }
        return false;
    }
	function getByClass(sClass,oParent){
       var aEle = oParent.getElementsByTagName('*');
       var arr=[];
       for(var i =0;i<aEle.length;i++){
           var tmp=aEle[i].className.split(' ');
           if(findInArr(sClass,tmp)){
               arr.push(aEle[i]);
           }
       }
       return arr;
   }
   //获取class start 

	//选项卡方法 start
	
	function tab(oDiv,oLi,vEs,nameClass1,nameClass2,nameClass3,nameClass4){
		for(var i=0;i<oLi.length;i++){	
			oLi[i].index=i;
			oLi[i][vEs]=function(){
				for(var i=0;i<oLi.length;i++){
					oDiv[i].className=nameClass4;
					oLi[i].className=nameClass3;
				}
				this.className=nameClass1;
				oDiv[this.index].className=nameClass2;
			}
		}	
	}
	//选项卡方法 end
	var sport=document.getElementById('sport');
	var sportLi=sport.getElementsByTagName('li');
	var Picture=document.getElementById('picture');
	var onePic=getByClass('one-pic',Picture);
	tab(onePic,sportLi,'onmouseover','edu2 active','one-pic show','edu2','one-pic');




	var sport2=document.getElementById('sport2');
	var sport2Li=sport2.getElementsByTagName('li');
	var Easy=document.getElementById('easy');
	var easyList=getByClass('easy-on',Easy);
	tab(easyList, sport2Li,'onmouseover','edu2 active','army-on show','edu2','easy-on');


	var sport3=document.getElementById('sport3');
	var sport3Li=sport3.getElementsByTagName('li');
	var army=document.getElementById('army');
	var armyList=getByClass('army-on',army);
	tab(armyList,sport3Li,'onmouseover','edu2 active','army-on show','edu2','army-on');

	var subject=document.getElementById('subject');
	var subjectLi=subject.getElementsByTagName('li');
	var video=document.getElementById('video');
	var video1List=getByClass('video-1', video);
	tab(video1List,subjectLi,'onmouseover','sub on','video-1 show','sub','video-1');

	var subject2=document.getElementById('subject2');
	var subject2Li=subject2.getElementsByTagName('li');
	var video2=document.getElementById('video2');
	var video2List=getByClass('video-1', video2);
	tab(video2List,subject2Li,'onmouseover','sub on','video-1 show','sub','video-1');

	// var subject3=document.getElementById('subject3');
	// var subject3Li=subject.getElementsByTagName('li');
	// var shop=document.getElementById('shop');
	// var video3List=getByClass('video-1', shop);
	// tab(video3List,subject3Li,'onmouseover','sub on','video-1 show','sub','video-1');
	// 
	var subject4=document.getElementById('subject4');
	var subject4Li=subject4.getElementsByTagName('li');
	var comMain=document.getElementById('com-main');
	var comMainList=getByClass('comerce', comMain);
	tab(comMainList,subject4Li,'onmouseover','sub on','comerce show','sub','comerce');


	var subject5=document.getElementById('subject5');
	var subject5Li=subject5.getElementsByTagName('li');
	var comMain2=document.getElementById('com-main2');
	var comMain2List=getByClass('comerce', comMain2);
	tab(comMain2List,subject5Li,'onmouseover','sub on','comerce show','sub','comerce');

	var subject6=document.getElementById('subject6');
	var subject6Li=subject6.getElementsByTagName('li');
	var comMain3=document.getElementById('com-main3');
	var comMain3List=getByClass('comerce', comMain3);
	tab(comMain3List,subject6Li,'onmouseover','sub on','comerce show','sub','comerce');

	var subject7=document.getElementById('subject7');
	var subject7Li=subject7.getElementsByTagName('li');
	var comMain4=document.getElementById('com-main4');
	var comMain4List=getByClass('comerce', comMain4);
	tab(comMain4List,subject7Li,'onmouseover','sub on','comerce show','sub','comerce');

	var subject8=document.getElementById('subject8');
	var subject8Li=subject8.getElementsByTagName('li');
	var comMain5=document.getElementById('com-main5');
	var comMain5List=getByClass('comerce', comMain5);
	tab(comMain5List,subject8Li,'onmouseover','sub on','comerce show','sub','comerce');

	var subject9=document.getElementById('subject9');
	var subject9Li=subject9.getElementsByTagName('li');
	var comMain6=document.getElementById('com-main6');
	var comMain6List=getByClass('comerce', comMain6);
	tab(comMain6List,subject9Li,'onmouseover','sub on','comerce show','sub','comerce');

	var subject10=document.getElementById('subject10');
	var subject10Li=subject10.getElementsByTagName('li');
	var comMain7=document.getElementById('com-main7');
	var comMain7List=getByClass('comerce', comMain7);
	tab(comMain7List,subject10Li,'onmouseover','sub on','comerce show','sub','comerce');


	var subject11=document.getElementById('subject11');
	var subject11Li=subject11.getElementsByTagName('li');
	var comMain8=document.getElementById('com-main8');
	var comMain8List=getByClass('comerce', comMain8);
	tab(comMain8List,subject11Li,'onmouseover','sub on','comerce show','sub','comerce');


	var subject12=document.getElementById('subject12');
	var subject12Li=subject12.getElementsByTagName('li');
	var comMain9=document.getElementById('com-main9');
	var comMain9List=getByClass('comerce',comMain9);
	tab(comMain9List,subject12Li,'onmouseover','sub on','comerce show','sub','comerce');

	var subject13=document.getElementById('subject13');
	var subject13Li=subject13.getElementsByTagName('li');
	var comMain10=document.getElementById('com-main10');
	var comMain10List=getByClass('comerce',comMain10);
	tab(comMain10List,subject13Li,'onmouseover','sub on','comerce show','sub','comerce');

	var subject14=document.getElementById('subject14');
	var subject14Li=subject14.getElementsByTagName('li');
	var comMain11=document.getElementById('com-main11');
	var comMain11List=getByClass('comerce', comMain11);
	tab(comMain11List,subject14Li,'onmouseover','sub on','comerce show','sub','comerce');

	var subject15=document.getElementById('subject15');
	var subject15Li=subject15.getElementsByTagName('li');
	var comMain12=document.getElementById('com-main12');
	var comMain12List=getByClass('comerce', comMain12);
	tab(comMain12List,subject15Li,'onmouseover','sub on','comerce show','sub','comerce');

	var subject16=document.getElementById('subject16');
	var subject16Li=subject16.getElementsByTagName('li');
	var comMain13=document.getElementById('com-main13');
	var comMain13List=getByClass('comerce', comMain13);
	tab(comMain13List,subject16Li,'onmouseover','sub on','comerce show','sub','comerce');

	var subject17=document.getElementById('subject17');
	var subject17Li=subject17.getElementsByTagName('li');
	var comMain14=document.getElementById('com-main14');
	var comMain14List=getByClass('comerce', comMain14);
	tab(comMain14List,subject17Li,'onmouseover','sub on','comerce show','sub','comerce');

	var subject18=document.getElementById('subject18');
	var subject18Li=subject18.getElementsByTagName('li');
	var comMain15=document.getElementById('com-main15');
	var comMain15List=getByClass('comerce', comMain15);
	tab(comMain15List,subject18Li,'onmouseover','sub on','comerce show','sub','comerce');

	var subject19=document.getElementById('subject19');
	var subject19Li=subject19.getElementsByTagName('li');
	var comMain16=document.getElementById('com-main16');
	var comMain16List=getByClass('comerce', comMain16);
	tab(comMain16List,subject19Li,'onmouseover','sub on','comerce show','sub','comerce');

	var subject20=document.getElementById('subject20');
	var subject20Li=subject20.getElementsByTagName('li');
	var comMain17=document.getElementById('com-main17');
	var comMain17List=getByClass('comerce', comMain17);
	tab(comMain17List,subject20Li,'onmouseover','sub on','comerce show','sub','comerce');

	var subject21=document.getElementById('subject21');
	var subject21Li=subject21.getElementsByTagName('li');
	var comMain18=document.getElementById('com-main18');
	var comMain18List=getByClass('comerce', comMain18);
	tab(comMain18List,subject21Li,'onmouseover','sub on','comerce show','sub','comerce');

	var subject22=document.getElementById('subject22');
	var subject22Li=subject22.getElementsByTagName('li');
	var comMain19=document.getElementById('com-main19');
	var comMain19List=getByClass('comerce', comMain19);
	tab(comMain19List,subject22Li,'onmouseover','sub on','comerce show','sub','comerce');

	var subject23=document.getElementById('subject23');
	var subject23Li=subject23.getElementsByTagName('li');
	var comMain20=document.getElementById('com-main20');
	var comMain20List=getByClass('comerce', comMain20);
	tab(comMain20List,subject23Li,'onmouseover','sub on','comerce show','sub','comerce');

	var subject25=document.getElementById('subject25');
	var subject25Li=subject25.getElementsByTagName('li');
	var friend=document.getElementById('friend1');
	var friendList=getByClass('friend',friend);
	tab(friendList,subject25Li,'onmouseover','sub on','friend show','sub','friend');

	var life=document.getElementById('life');
	var lifeList=life.getElementsByTagName('li');
	var lifeB=document.getElementById('life-b');
	var lifeBlist=lifeB.getElementsByTagName('li');
	tab(lifeBlist,lifeList,'onmouseover','on','life-b show','','life-b');

}
