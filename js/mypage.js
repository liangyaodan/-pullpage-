/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-09-21 15:07:10
 * @version $Id$
 */

$(function(){
	var k = $(window).height();  //当前屏幕的高度
    var flag = false;  //控制动画
	//点击 next.png 滚动到下一页
	$(".next").click(function(){
		 $.fn.fullpage.moveSectionDown();
	})
    $('#fullpage').fullpage({
    	navigation: true,
		navigationPosition: 'right',//导航小圆点的位置

        //afterLoad回调函数，滚动到某一屏后的回调函数，接收anchorLink和index两个参数，
        //anchorLink 是锚链接的名称，index 是序号，从1开始计算
		afterLoad:function(anchorLink,index){
			if(index == 2){
				$(".next").fadeOut();
				//当动画显示到第二帧时，.search显示出来，然后慢慢移动到computer中央，
				//.search-words(沙发2字)显示出来，然后.search隐藏,.search-02-1缩小
				//并移动到右上角，同时.goods-02慢慢变大（速度要求一样），且上方的字体也
				//由黑色的慢慢过渡到白色
				$(".search").show().animate({"right":380},1500,"easeOutBack",function(){
					//沙发2字 显示出来
				    $(".search-words").animate({"opacity":1},500,function(){
				    	//隐藏最开始的搜索框，载显示屏幕中间的
				    	$(".search").hide();
				    	//搜索框移动到右上角
				        $(".search-02-1").show().animate({"height": 30, "right": 250, 
				        	"bottom": 452},1000);
				        //沙发图片
				        $(".goods-02").show().animate({"height": 218},1000);
				        $(".words-02").animate({"opacity":1},600,function(){
							$(".next").fadeIn();
						});
				    });
				    
			    });

			}
		},

		//onLeave滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数
		//index 是离开的“页面”的序号，从1开始计算；
        //nextIndex 是滚动到的“页面”的序号，从1开始计算；
        //direction 判断往上滚动还是往下滚动，值是 up 或 down。
        onLeave:function(index,nextIndex,direction){
        	//第二屏幕到第三屏幕的效果
			$(".next").fadeOut();
        	if(index == 2 && nextIndex == 3){
        		$(".shirt-02").show().animate({"bottom":-(k-230),"left":260,"width":207},
        			2000,function(){
        				$(".img-01-a").animate({"opacity":1},500,function(){
        					$(".btn-01-a").animate({"opacity":1},500);
        				})
        			});
        	    $(".cover").show();
				$(".next").fadeIn();
        	};
        	//第三屏幕到第四屏幕的效果
        	if(index == 3 && nextIndex == 4){
        		$(".shirt-02").hide();
        		$(".t1f").show().animate({"bottom":-((k-230)+50),"left":260},
        			1000,function(){
        				$(this).hide();
        				$(".car-img").show(); 
        				//小车和沙发一起移动
        				$(".car").animate({"left":2000},4000,"easeInElastic",function(){
        					$(".note").show();
        					$(".note-img, .words-04-a").animate({"opacity":1},1000,function(){
								$(".next").fadeIn();
							});
        				});
        		});
        	}

        	//第四屏幕到第五屏幕的效果
        	if(index == 4 && nextIndex == 5){
        		$(".hand-05").animate({"bottom": 0}, 2000, function() {
                        // 鼠标显示
                        $(".mouse-05-a").animate({"opacity": 1});
                        // 沙发从 800 到  70
                        $(".t1f-05").show().animate({"bottom": 70}, 1000, function(){
                            // 单子上走 走完之后， 我们的文字翻转
                            $(".order-05").animate({"bottom": 390},function(){
                            	$(".words-05").addClass("words-05-a");
								$(".next").fadeIn();
                            });
                        })
                });
        		
        	}
            //第五屏幕到第六屏幕的效果
        	if(index == 5 && nextIndex == 6){
        		$(".t1f-05").animate({"bottom":-(k-500),"left":"38%","width":65},1000,function(){
        			    $(".t1f-05").hide();
        		});
        		$(".box-06").animate({"left":"36%"},1500,function(){
        			$(".box-06").animate({"bottom":20},1000,function(){
        				$(this).hide();
        				//让背景图片移动
        				$(".section6").animate({"backgroundPositionX":"100%"},4000,function(){
        					$(".boy").animate({"height":305,"bottom":116},1000,function(){
        						$(this).animate({"right":500},500,function(){
        							$(".door").animate({"opacity":1},200,function(){
        								$(".girl").show().animate({"height":306,"right":350},1000,function(){
        									$(".pop-07").show();
        								})
        							})
        						});
        					})
        				});
        				$(".pop-06").show();
        				//光的速度。。。这段话显示出来
        				$(".words-06-a").show().animate({"left":"30%"},1000);
						$(".next").fadeIn();
        			});
        		});
                      
        	}

        	//第六屏到第七屏的效果
        	if(index == 6 && nextIndex == 7){
        		setTimeout(function(){
        			$(".star").animate({"width":120},1000,function(){
        				$(".good-07").show();
						$(".next").fadeIn();
        			})
        		},1000);
        		
        	}
			
			//第八屏动画效果
			// $(".beginShoping").mouseenter(function(event) {
			//     $(".btn-08-a").show();
			// }).mouseleave(function(event) {
			//    $(".btn-08-a").hide();
			// });  
			//这两种方法效果是一样的，如果是鼠标进入显示，离开隐藏，则可以使用hover和toggle
			$(".beginShoping").hover(function(){
				$(".btn-08-a").toggle(); //toggle，表示显示和隐藏切换
			});
			//手跟随着鼠标移动而移动
			$(document).mousemove(function(event){
				// var x = event.pageX - $(".btn-08-a").width()/2;
				var x = event.pageX;
				var y = event.pageY + 10;
				//当top值小于 屏幕高度-小手高度时 ，top值就为 屏幕高度-小手高度，大于的话就为鼠标的坐标
				var minY = k - 449;
				// if(y < minY){
				// 	$(".hand-08").css({"left":x,"top":minY});
				// }else{
				// 	$(".hand-08").css({"left":x,"top":y});
				// }
				
				if(y < minY){
					y = minY;
				}
				$(".hand-08").css({"left":x,"top":y});
			});
			// 当我们点击 再来一次的 时候， 分两步进行
			$(".again").click(function(event) {
			  // 1. 返回第1屏幕 
			    $.fn.fullpage.moveTo(1);
			     // 2. 所有的动画都复原 就是原来没有看过的样子 
			     // 核心原理就是  让我们的图片（做动画的元素 清除 行内样式就可以）
			     // 所有带有动画的div 盒子 添加 move 类名
			    $("img, .move").attr("style", "");
			});
			
        },

    });
  
});

