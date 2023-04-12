
$(function(){
	
	$(".ssubNav").click(function(){
		if($("#mobileNav").css("display")=="none")
		{
			$("#navline_1").addClass("navline1");
			$("#navline_2").addClass("navline2");
			$("#navline_3").addClass("navline3");
		}else{
			$("#navline_1").removeClass("navline1");
			$("#navline_2").removeClass("navline2");
			$("#navline_3").removeClass("navline3");
		}
		$("#mobileNav").toggle(300);
	});
	$(".header .nav #nav li").hover(function(){
		$(this).children("ul").slideDown(200);
		$(this).addClass('on').siblings().removeClass('on')
		},
		function(){
			$(this).children("ul").slideUp(200);
			$(this).removeClass('on')
		}
	);
	/*$(".header .logo a.sub_logo").hover(function(){
		$(this).children("img").attr("src","img/gse-logo-grey.png");
		},
		function(){
			$(this).children("img").attr("src","img/gse-logo.png");
		}
	);
	$(".header .logo1 a.sub_logo").hover(function(){
		$(this).children("img").attr("src","../img/gse-logo-grey.png");
		},
		function(){
			$(this).children("img").attr("src","../img/gse-logo.png");
		}
	);
	$(".header .logo2 a.sub_logo").hover(function(){
		$(this).children("img").attr("src","../../img/gse-logo-grey.png");
		},
		function(){
			$(this).children("img").attr("src","../../img/gse-logo.png");
		}
	);
	$(".header .logo3 a.sub_logo").hover(function(){
		$(this).children("img").attr("src","../../../img/gse-logo-grey.png");
		},
		function(){
			$(this).children("img").attr("src","../../../img/gse-logo.png");
		}
	);
	$(".header .logo a:first-child").hover(function(){
			$(this).children("img").attr("src","img/pkulogo_red_ac.png");
			},
			function(){
				$(this).children("img").attr("src","img/pkulogo_red.png");
			}
		);

	$(".header .logo1 a:first-child").hover(function(){
		$(this).children("img").attr("src","../img/pkulogo_red_ac.png");
		},
		function(){
			$(this).children("img").attr("src","../img/pkulogo_red.png");
		}
	);

	$(".header .logo2 a:first-child").hover(function(){
		$(this).children("img").attr("src","../../img/pkulogo_red_ac.png");
		},
		function(){
			$(this).children("img").attr("src","../../img/pkulogo_red.png");
		}
	);
	$(".header .logo3 a:first-child").hover(function(){
		$(this).children("img").attr("src","../../../img/pkulogo_red_ac.png");
		},
		function(){
			$(this).children("img").attr("src","../../../img/pkulogo_red.png");
		}
	);*/
	//鍔犺浇灏鹃儴
/*	$.get("./seg/footer.seg",function(data){
		$("footer").html(data);
	},"html");	*/
	
	//鍔犺浇鍙抽儴
	//$.get("./seg/right.seg",function(data){
	//	$("#right_col").html(data);
	//},"html");
	autoHideMobileNav();
	gotoTop();
});

function gotoTop(min_height){
    //棰勫畾涔夎繑鍥為《閮ㄧ殑html浠ｇ爜锛屽畠鐨刢ss鏍峰紡榛樿涓轰笉鏄剧ず
    var gotoTop_html = '<div id="gotoTop"><i class="fa fa-angle-up fa-2x"></i></div>';
    //灏嗚繑鍥為《閮ㄧ殑html浠ｇ爜鎻掑叆椤甸潰灏鹃儴鍏冪礌鍓� 
    $(gotoTop_html).insertBefore(".footer");
    $("#gotoTop").click(//瀹氫箟杩斿洖椤堕儴鐐瑰嚮鍚戜笂婊氬姩鐨勫姩鐢�
        function(){$('html,body').animate({scrollTop:0},700);
    }).hover(//涓鸿繑鍥為《閮ㄥ鍔犻紶鏍囪繘鍏ョ殑鍙嶉鏁堟灉锛岀敤娣诲姞鍒犻櫎css绫诲疄鐜�
        function(){$(this).addClass("hover");},
        function(){$(this).removeClass("hover");
    });
    //鑾峰彇椤甸潰鐨勬渶灏忛珮搴︼紝鏃犱紶鍏ュ€煎垯榛樿涓�600鍍忕礌
    min_height ? min_height = min_height : min_height = 600;
    //涓虹獥鍙ｇ殑scroll浜嬩欢缁戝畾澶勭悊鍑芥暟
    $(window).scroll(function(){
        //鑾峰彇绐楀彛鐨勬粴鍔ㄦ潯鐨勫瀭鐩翠綅缃�
        var s = $(window).scrollTop();
        //褰撶獥鍙ｇ殑婊氬姩鏉＄殑鍨傜洿浣嶇疆澶т簬椤甸潰鐨勬渶灏忛珮搴︽椂锛岃杩斿洖椤堕儴鍏冪礌娓愮幇锛屽惁鍒欐笎闅�
        if( s > min_height){
            $("#gotoTop").fadeIn(100);
        }else{
            $("#gotoTop").fadeOut(200);
        };
    });
}
function autoHideMobileNav(){
	$(window).resize(function() {
		var win_width = $(window).width();
		if (win_width >= 800)
		{
			$("#mobileNav").slideUp(0);
		}
	});
}

