
// window.onload=function(){

// 	var timer=null;
// 	function starMove(speed,iTarget){
// 		var oCar=document.getElementsByClassName('car-menu')[0];

// 		clearInterval(timer);
// 		timer=setInterval(function(){
// 			if(oCar.offsetTop==iTarget){
// 				clearInterval(timer);
// 			}
// 			else{
// 				oCar.style.top=oCar.offsetTop+speed+'px';
// 			}
// 		},30);
// 	}

// 	$('.topbar .topbar-cart').mouseenter(function(){
// 		$(this).css({'background':'#fff'});
// 		$('.topbar .topbar-cart .color').css({'color':'#ff6700'});
// 		starMove(3,-100);
// 	});

// }


$(function(){

//顶部功能区鼠标滑动效果
	$('.topbar .topbar-nav a,.topbar .topbar-info a').hover(function(){
		$(this).css('color', '#fff');
	},function(){
			$(this).css ('color','#b0b0b0');
	});

//购物车的鼠标效果
	$('.topbar .topbar-cart').mouseenter(function(){
		$(this).css({'background':'#fff'});
		$('.topbar .topbar-cart .color').css({'color':'#ff6700'});
		$('.topbar .topbar-cart .car-menu').stop().css({
			'display':'block',
			'box-shadow':"0 3px 5px rgba(0,0,0,0.15)"
		});
		$('.topbar .topbar-cart .car-menu').stop().animate({
			height:"100px"
		},200);
		$('.topbar .topbar-cart .car-menu .loader').html("购物车中还没有商品，赶紧选购吧！");
	});

	$('.topbar .topbar-cart').mouseleave(function(){
		setTimeout(function(){
			$('.topbar .topbar-cart .car-menu').stop().css({
			'display':'none',
			});
			$('.topbar .topbar-cart .car-menu').stop().animate({
				height:"0"
			},200);

			$('.topbar .topbar-cart .car-menu .loader').html("");
			$('.topbar .topbar-cart .color').css({'color':'#b0b0b0'});
			$('.topbar .topbar-cart').css({'background':'#424242'});
		},200)	
	});

//头部导航区搜索框效果
	 (function(){
		 search=function(){
			$('.header-search,.header-search .search-btn,.header-search .search-text,.header-search .search-hot-words').hover(function(){
			$(".header-search .search-btn").css({'border-color':'#b0b0b0','transition':'all 0.5s'});
			$(".header-search .search-text").css({'border-color':'#b0b0b0','transition':'all 0.5s'});	
		},function(){
			$(".header-search .search-btn").css({'border-color':'#e0e0e0','transition':'all 0.5s'});
			$(".header-search .search-text").css({'border-color':'#e0e0e0','transition':'all 0.5s'});
			});
		}
		search();


	//头部导航区按钮背景效果
		$('.header-search .search-btn').hover(function(){
			$(".header-search .search-btn").css({'border':'1px solid #ff6700'});
			$(".header-search .search-btn").css({'background':'#ff6700','transition':'all 0.5s'});	
			$(".header-search .search-btn").css({'color':'#fff','transition':'all 0.5s'});
		},function(){
			$(".header-search .search-btn").css({'background':'#fff','transition':'all 0.5s'});
			$(".header-search .search-btn").css({'border':'1px solid #e0e0e0','transition':'all 0.5s'});
			$(".header-search .search-btn").css({'color':'#616161','transition':'all 0.5s'});
			});

		//输入框获取焦点
		$('.headercontent .search-text').focus(function(){
			$('.header-search .search-btn,.header-search .search-text').css({'border-color':'#ff6700'});
			$('.header-search .hot-product').css({'zIndex':'5'}).show();
			$('.header-search .search-hot-words').hide();

			$('.header-search,.header-search .search-btn,.header-search .search-text,.header-search .search-hot-words').mouseenter(function(){
			$(".header-search .search-btn").css({'border-color':'#ff6700'});
			$(".header-search .search-text").css({'border-color':'#ff6700'});
		})
			$('.header-search,.header-search .search-btn,.header-search .search-text,.header-search .search-hot-words').mouseleave(function(){
			$(".header-search .search-btn").css({'border-color':'#ff6700'});
			$(".header-search .search-text").css({'border-color':'#ff6700'});	
		})

		});
		$('.headercontent .search-text').blur(function(){
			$('.header-search .search-btn,.header-search .search-text').css({'border-color':'#e0e0e0'});
			$('.header-search .hot-product').hide();
			$('.header-search .search-hot-words').show();

			$('.header-search,.header-search .search-btn,.header-search .search-text,.header-search .search-hot-words').mouseenter(function(){
			$(".header-search .search-btn").css({'border-color':'#e0e0e0'});
			$(".header-search .search-text").css({'border-color':'#e0e0e0'});
		})
			$('.header-search,.header-search .search-btn,.header-search .search-text,.header-search .search-hot-words').mouseleave(function(){
			$(".header-search .search-btn").css({'border-color':'#e0e0e0'});
			$(".header-search .search-text").css({'border-color':'#e0e0e0'});	
		})
		});
	})();

//头部导航区鼠标滑动出现下拉页效果
	var navslider=function(){
	$('.headercontent .container .header-nav ul li').mouseenter(function(){
			var idli=$(this).index();
			// $(document).attr("title",idli)
			$('.headercontent .container .header-nav li a').eq(idli).stop().css({'color':'#ff6700'});
			$('.headercontent-nav').eq(idli).css({'borderTop':'1px solid #e0e0e0','display':'block'});

			$('.headercontent-nav').eq(idli).stop().animate({
					height: '230px',
					zIndex:'100',
				},300);
		});

		$('.headercontent .container .header-nav ul li').mouseleave(function(){
			var idli=$(this).index();
			$('.headercontent .container .header-nav li a').eq(idli).stop().css({'color':'#333'});
			$('.headercontent-nav').stop().hide();
		});

		$('.headercontent-nav').mouseenter(function(){
			$(this).css({'display':'block'});
		})
		$('.headercontent-nav').mouseleave(function(){
			$(this).slideUp(300);
		})
	}
	navslider();

//轮播图效果
(function(){
	var timer=null;
	var index=0;

	//右下角指示灯
	$(".btnList li").click(function(){
		index =$(this).index();//获取当前li的索引值
		$(this).addClass("active").siblings().removeClass();
		$(".pic li").eq(index).fadeIn().siblings().fadeOut();
	});
	//下一页切换
	$(".next").click(function(){
		index++;
		if(index>4){
			index = 0;
		}
			$(".btnList li").eq(index).addClass("active").siblings().removeClass();
			$(".pic li").eq(index).fadeIn().siblings().fadeOut();
	}); 
	//上一页切换
	$(".prev").click(function(){
		index--;
		if(index<0){
			index = 4;
		}
			$(".btnList li").eq(index).addClass("active").siblings().removeClass();
			$(".pic li").eq(index).fadeIn().siblings().fadeOut();
	}); 

	//banner动画开始
	function auto(){
		timer = setInterval(function(){
			index++;
				if(index>4){
					index = 0
				};
			$(".btnList li").eq(index).addClass("active").siblings().removeClass();
			$(".pic li").eq(index).fadeIn().siblings().fadeOut();
		},4000);
	}
	auto();
		
//鼠标划入banner区域动画停止
	$("#banner").mouseenter(function(){
		$(this).css({'cursor':'pointer'});
		clearInterval(timer);
	});

//鼠标划入banner区域动画继续
	$("#banner").mouseleave(function(){
		auto();
	});

	})();

//小米明星单品动画效果
	(function(){

			var uls=$('.miStar-product .star-products .star-list').length-1;
			var star=0;
			//下一页切换
			$(".miStar-product .control-next").click(function(){
				star++;
				if(star>uls){
					star = uls;
				}
				 $(".miStar-product .star-list").animate({marginLeft:-1226*star},300);
			}); 

			//上一页切换
			$(".miStar-product .control-prev").click(function(){
				star--;
				if(star<0){
					star = 0;
				}
				$(".miStar-product .star-list").animate({marginLeft:-1226*star},300);
			});

			function automatic(){
				timer = setInterval(function(){
					star++;
					if(star>uls){
						star = 0
					};
					$(".miStar-product .star-list").animate({marginLeft:-1226*star},300);
				},8000);

			}
			automatic();
	})();

//家电区效果
	$('.product-category .householdElectrical .elect-header .elect-nav .elect-nav-list li').first().addClass('active');
	$('.product-category .all-elect .elect-right').first().show();
	$('.product-category .householdElectrical .elect-header .elect-nav .elect-nav-list li').mouseover(function() {
		var indexli=$(this).index();
		$(this).addClass('active').stop().siblings().removeClass('active');
		$('.product-category .all-elect .elect-right').eq(indexli).show().stop().siblings().hide();
	});

//智能区
	$('.product-category .intelligentProduct .intel-header .intel-nav .intel-nav-list li').first().addClass('active');
	$('.product-category .all-intel .intel-right').first().show();
	$('.product-category .intelligentProduct .intel-header .intel-nav .intel-nav-list li').mouseover(function() {
		var indexli=$(this).index();
		$(this).addClass('active').stop().siblings().removeClass('active');
		$('.product-category .all-intel .intel-right').eq(indexli).show().stop().siblings().hide();
	});

//搭配区效果
	$('.product-category .collocation .coll-header .coll-nav .coll-nav-list li').first().addClass('active');
	$('.product-category .all-coll .coll-right').first().show();
	$('.product-category .collocation .coll-header .coll-nav .coll-nav-list li').mouseover(function() {
		var indexli=$(this).index();
		$(this).addClass('active').stop().siblings().removeClass('active');
		$('.product-category .all-coll .coll-right').eq(indexli).show().stop().siblings().hide();
	});

//配件区效果
	$('.product-category .accessories .acce-header .acce-nav .acce-nav-list li').first().addClass('active');
	$('.product-category .all-acce .acce-right').first().show();
	$('.product-category .accessories .acce-header .acce-nav .acce-nav-list li').mouseover(function() {
		var indexli=$(this).index();
		$(this).addClass('active').stop().siblings().removeClass('active');
		$('.product-category .all-acce .acce-right').eq(indexli).show().stop().siblings().hide();
	});

//周边区效果
	$('.product-category .life .life-header .life-nav .life-nav-list li').first().addClass('active');
	$('.product-category .all-life .life-right').first().show();
	$('.product-category .life .life-header .life-nav .life-nav-list li').mouseover(function() {
		var indexli=$(this).index();
		$(this).addClass('active').stop().siblings().removeClass('active');
		$('.product-category .all-life .life-right').eq(indexli).show().stop().siblings().hide();
	});

//为你推荐区效果
	(function(){

			var uls=$('.recommendedProducts .recom-products .recom-list').length-1;
			var a=0;
			//下一页切换
			$(".recommendedProducts .control-next").click(function(){
				a++;
				if(a>uls){
					a = uls;
				}
				 $(".recommendedProducts .recom-list").animate({marginLeft:-1226*a},300);
			}); 

			//上一页切换
			$(".recommendedProducts .control-prev").click(function(){
				a--;
				if(a<0){
					a = 0;
				}
				$(".recommendedProducts .recom-list").animate({marginLeft:-1226*a},300);
			});
	})();



//内容-图书
	(function(){
			//获取该块中li的个数-1
			var lis=$('.book .book-list1 .list-item').length-1;
			var index=0;
			//指示灯
			$(".book-list1 .book-pages .page-list li").click(function(){
				var index =$(this).index();	//获取当前li的索引值
				$(this).addClass("page-active").siblings().removeClass("page-active");
				$(".book-list1 .list-more .list-first li").eq(index).show().siblings().hide();
			});

			//下一页切换
			$(".book-list1 .list-more .next-page").click(function(){
				index++;
				if(index>lis){
					index = lis;
				}
				$(".book-list1 .list-more .book-pages .page-list li").eq(index).addClass("page-active").siblings().removeClass("page-active");
				$(".book-list1 .list-more .list-first li").eq(index).show().siblings().hide();
			}); 

			//上一页切换
			$(".book-list1 .list-more .prev-page").click(function(){
				index--;
				if(index<0){
					index = 0;
				}
				$(".book-list1 .list-more .book-pages .page-list li").eq(index).addClass("page-active").siblings().removeClass("page-active");
				$(".book-list1 .list-more .list-first li").eq(index).show().siblings().hide();
			});
	})();

//内容-MIUI主题
	(function(){
		//获取该块中li的个数-1
		var lis=$('.book .book-list2 .list-item').length-1;
		var index=0;
		//指示灯
		$(".book-list2 .book-pages .page-list li").click(function(){
			var index =$(this).index();	//获取当前li的索引值
			$(this).addClass("page-active").siblings().removeClass("page-active");
			$(".book-list2 .list-more .list-first li").eq(index).show().siblings().hide();
		});

		//下一页切换
		$(".book-list2 .list-more .next-page").click(function(){
			index++;
			if(index>lis){
				index = lis;
			}
			$(".book-list2 .list-more .book-pages .page-list li").eq(index).addClass("page-active").siblings().removeClass("page-active");
			$(".book-list2 .list-more .list-first li").eq(index).show().siblings().hide();
		}); 

		//上一页切换
		$(".book-list2 .list-more .prev-page").click(function(){
			index--;
			if(index<0){
				index = 0;
			}
			$(".book-list2 .list-more .book-pages .page-list li").eq(index).addClass("page-active").siblings().removeClass("page-active");
			$(".book-list2 .list-more .list-first li").eq(index).show().siblings().hide();
		});
	})();

//内容-游戏
	(function(){
		//获取该块中li的个数-1
		var lis=$('.book .book-list3 .list-item').length-1;
		var index=0;
		//指示灯
		$(".book-list3 .book-pages .page-list li").click(function(){
			var index =$(this).index();	//获取当前li的索引值
			$(this).addClass("page-active").siblings().removeClass("page-active");
			$(".book-list3 .list-more .list-first li").eq(index).show().siblings().hide();
		});

		//下一页切换
		$(".book-list3 .list-more .next-page").click(function(){
			index++;
			if(index>lis){
				index = lis;
			}
			$(".book-list3 .list-more .book-pages .page-list li").eq(index).addClass("page-active").siblings().removeClass("page-active");
			$(".book-list3 .list-more .list-first li").eq(index).show().siblings().hide();
		}); 

		//上一页切换
		$(".book-list3 .list-more .prev-page").click(function(){
			index--;
			if(index<0){
				index = 0;
			}
			$(".book-list3 .list-more .book-pages .page-list li").eq(index).addClass("page-active").siblings().removeClass("page-active");
			$(".book-list3 .list-more .list-first li").eq(index).show().siblings().hide();
		});
	})();

// 内容-应用
	(function(){
		//获取该块中li的个数-1
		var lis=$('.book .book-list4 .list-item').length-1;
		var index=0;
		//指示灯
		$(".book-list4 .book-pages .page-list li").click(function(){
			var index =$(this).index();	//获取当前li的索引值
			$(this).addClass("page-active").siblings().removeClass("page-active");
			$(".book-list4 .list-more .list-first li").eq(index).show().siblings().hide();
		});

		//下一页切换
		$(".book-list4 .list-more .next-page").click(function(){
			index++;
			if(index>4){
				index = 4;
			}
			$(".book-list4 .list-more .book-pages .page-list li").eq(index).addClass("page-active").siblings().removeClass("page-active");
			$(".book-list4 .list-more .list-first li").eq(index).show().siblings().hide();
		}); 

		//上一页切换
		$(".book-list4 .list-more .prev-page").click(function(){
			index--;
			if(index<0){
				index = 0;
			}
			$(".book-list4 .list-more .book-pages .page-list li").eq(index).addClass("page-active").siblings().removeClass("page-active");
			$(".book-list4 .list-more .list-first li").eq(index).show().siblings().hide();
		});
	})();

		
})