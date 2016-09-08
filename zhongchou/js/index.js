
$(document).ready(function(){
	var k=!0;

	$(".loginmask").css("opacity",0.8);
	
	if($.browser.version <= 6){
		$('#reg_setp,.loginmask').height($(document).height());
	}
	
	$(".thirdlogin ul li:odd").css({marginRight:0});	
	
	$(".openlogin").click(function(){
		k&&"0px"!=$("#loginalert").css("top")&& ($("#loginalert").show(),$(".loginmask").fadeIn(500),$("#loginalert").animate({top:0},400,"easeOutQuart"))
	});
	
	$(".loginmask,.closealert").click(function(){
		k&&(k=!1,$("#loginalert").animate({top:-600},400,"easeOutQuart",function(){$("#loginalert").hide();k=!0}),$(".loginmask").fadeOut(500))
	});
	
	
	$("#sigup_now,.reg a").click(function(){
		$("#reg_setp,#setp_quicklogin").show();
		$("#reg_setp").animate({left:0},500,"easeOutQuart")
	});																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																								
	
	$(".back_setp").click(function(){
		"block"==$("#setp_quicklogin").css("display")&&$("#reg_setp").animate({left:"100%"},500,"easeOutQuart",function(){$("#reg_setp,#setp_quicklogin").hide()})
	});
	
	
	for(var i=0; i<$('.zxsx .picList  li').length*2; i++){
		var num=Math.floor(parseInt($('.zxsx .picList li').eq(i).find('.procss').children('span').eq(0).find('b').text())*274/100);
		$('.zxsx .picList li').eq(i).find('.jdt').children('a').animate({width:num});
		}
	for(var i=0; i<$('.li_con ul  li').length; i++){
		var num=Math.floor(parseInt($('.li_con ul li').eq(i).find('.procss').children('span').eq(0).find('b').text())*274/100);
		$('.li_con ul li').eq(i).find('.jdt').children('a').animate({width:num});
		}
	
	
	var str1=$('.detail .mode2 .p2').text();
	var num1=parseInt(str1.substring(1));
	var str2=$('.detail .mode2 .p3').children('.s2').text();
	var num2=parseInt(str2.substring(1));
	$('.detail .mode2 .p4').find('a').animate({width:Math.floor(num2/num1*308)})
	

	
	
	
}); 
