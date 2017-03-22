$(function(){
	$('.menu-btn').bind('click',function(){
		$('.menu-more-item').toggle(300);
	});

	var btns=$(".pannel-btns a"),
        uli=$('.food-list>ul');
    btns.each(function(){
    	$(this).bind('click',function(){
            var myIndex=parseInt($(this).attr('index'));
            btns.eq(myIndex-1).addClass('on').siblings().removeClass('on');
            uli.eq(myIndex-1).show().siblings().hide();
        })
    })
});