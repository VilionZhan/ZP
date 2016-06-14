

$(function(){

	/*导航显示事件*/
	$('.nav').css(
	    {
			'list-style':'none',
			'display':'none',
			'margin':'0',
			'paddding':'0',
			'text-align':'center',
			'text-decoration-line':'none', 

		}) ;
	$('.nav').parent().hover(function(){
		$(this).find('.nav').slideDown('normal');
	},function(){
		$(this).find('.nav').stop().slideUp('normal');
	});

           /*第一页*/
	   $('.left').css({
         	'display':'none',
			'margin':'120px 0 30px 50px',
			'paddding':'0'});
   $('.right').css({
         	'display':'none',
			'margin':'60px 0 30px 50px',
			'paddding':'0'});
   $('.left').parent().hover(function(){
		$(this).find('.left').slideDown('normal');
	});
   $('.right').parent().hover(function(){
		$(this).find('.right').slideDown('normal');
	});


   /*第二页*/

$('.left1').css({
         	'display':'none',
			'margin':'60px 0 30px 30px',
			'paddding':'0'});
   $('.right1').css({
         	'display':'none',
			'margin':'160px 0 30px 50px',
			'paddding':'0'});
   $('.left1').parent().hover(function(){
		$(this).find('.left1').slideDown('normal');
	});
   $('.right1').parent().hover(function(){
		$(this).find('.right1').slideDown('normal');
});



   /*第三页*/

      $('.left2').css({
         	'display':'none',
			'margin':'60px 0 30px 30px',
			'paddding':'0'});
   $('.right2').css({
         	'display':'none',
			'margin':'160px 0 30px 50px',
			'paddding':'0'});
   $('.left2').parent().hover(function(){
		$(this).find('.left2').slideDown('normal');
	});
   $('.right2').parent().hover(function(){
		$(this).find('.right2').slideDown('normal');
	});


   /*第四页*/
$('.left3').css({
         	'display':'none',
			'margin':'60px 0 30px 30px',
			'paddding':'0'});
   $('.right3').css({
         	'display':'none',
			'margin':'160px 0 30px 50px',
			'paddding':'0'});
   $('.left3').parent().hover(function(){
		$(this).find('.left3').slideDown('normal');
	});
   $('.right3').parent().hover(function(){
		$(this).find('.right3').slideDown('normal');
});



   /*第五页*/

   
   $('.right4').css({
         	'display':'none',
			'margin':'50px 0 30px 50px',
			'paddding':'0'});
  
   $('.right4').parent().hover(function(){
		$(this).find('.right4').slideDown('normal');
});

});

