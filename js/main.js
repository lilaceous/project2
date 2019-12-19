$(function(){

  var n=0;
	var t=0;
	var pos=0;
	var h;
	var firstMoving=false;

	setTimeout(function(){
		$("html").animate({scrollTop:t}, 800, function(){
			if(n == 0){
				$("section").removeClass("active");
				$("#header").addClass("active");
				$(".fixed_gnb").removeClass("show");
			}
			else{
				$("section").removeClass("active");
				$("section").eq(n).addClass("active");
				$(".fixed_gnb").addClass("show");
			}
			$(".navi li").removeClass("on");
			$(".navi li").eq(n).addClass("on");
			firstMoving=true;
		});
	}, 150);

	$(window).scroll(function(){
		if(firstMoving == false) return;

		t=$(window).scrollTop();

		if(t < $("#membership").offset().top-300){
			n=0;
		}
		else if(t < $("#film_video").offset().top-300){
			n=1;
		}
		else if(t < $("#exhibition").offset().top-300){
			n=2;
		}
		else if(t < $("#collection").offset().top-300){
			n=3;
		}
		else if(t < $("#contact").offset().top-300){
			n=4;
		}
		else{
			n=5;
		}

		if(n == 0){
			$("#header").addClass("active");
			$(".fixed_gnb").removeClass("show");
		}
		else{
			$("section").eq(n).addClass("active");
			$(".fixed_gnb").addClass("show");
			$(".fixed_gnb li").removeClass("on");
			$(".fixed_gnb li").eq(n-1).addClass("on");
		}
		$(".navi li").removeClass("on");
		$(".navi li").eq(n).addClass("on");
	});

	$(".navi li").click(function(e){
		// if($("html").is(":animated")) return;
		e.preventDefault();

		n=$(this).index();
		pos=$("section").eq(n).offset().top;
		$("html").animate({scrollTop:pos}, 800);
		$(".fixed_gnb li").removeClass("on");
		$(".fixed_gnb li").eq(n-1).addClass("on");
	});
	$(".gnb li, .fixed_gnb li").click(function(e){
		e.preventDefault();

		n=($(this).index() + 1);
		pos=$("section").eq(n).offset().top;
		$("html").animate({scrollTop:pos}, 800);
		$(".navi li").removeClass("on");
		$(".navi li").eq(n).addClass("on");
	});
});
