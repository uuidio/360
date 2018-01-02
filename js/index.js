// JavaScript Document

$(function(){
	//加工染色模块
	var snum=0;
	var colors=['#119ac7','#2dab5f','#ce8114','#19ad93','#0f98c5','#2dab5f']
	var timer=null;
	var ps=$('.content>div').length-1;
	
	$('.content>div').eq(snum).removeClass('out').siblings().addClass('out');    //添加类和删除类
	$('.content>div').each(function(index, element) {
		$(element).css('background', colors[index])
	});


	//鼠标滚动模块
	$(document).mousewheel(function(e,d){
		clearTimeout(timer)
		timer=setTimeout(fn,300)
		
		//向下滚动D是-1；向上是+1；
		function fn(){
			snum-=d//创造数据
			if(snum > ps){ snum=ps }
			if(snum < 0){ snum=0 }
			
			
			$('.content').stop().animate({top: -snum*100+'%' },1000)//屏幕的工作
			$('.gps li').eq(snum).addClass('current').siblings().removeClass();    //角标的工作
			
			$('.content>div').eq(snum).removeClass('out').siblings().addClass('out');    //添加类和删除类
			
			if(snum == 5){
				$('.page6>h1').css({marginLeft:-1240}).stop().animate({marginLeft:-124},2000,'easeOutElastic')
			}else{
				$('.page6>h1').stop().animate({marginLeft:-1240},2000,'easeOutElastic')
			}
		}
	})


	//导航角标的单击模块

	$('.gps li').click(function(e) {
        var index=$(this).index();
		$(this).addClass('current').siblings().removeClass();//角标的工作
		$('.content').stop().animate({top: -index*100+'%' },1000)//屏幕的工作
		snum=index;//同步工作
		$('.content>div').eq(snum).removeClass('out').siblings().addClass('out');    //添加类和删除类
			
			
			
						if(snum == 5){
				$('.page6>h1').css({marginLeft:-1240}).stop().animate({marginLeft:-124},2000,'easeOutElastic')
			}else{
				$('.page6>h1').stop().animate({marginLeft:-1240},2000,'easeOutElastic')
			}

    });







})








































