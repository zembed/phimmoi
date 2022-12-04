var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var _titleSllipsis=null;
var _loadFbSDk=null;

window.fbAsyncInit = function() {
    FB.init({
      appId            : '',
      autoLogAppEvents : true,
      xfbml            : false,
      version          : 'v2.12'
    });
    FB.XFBML.parse();
	eval('console.log("parse FB XFBML 2");');
};

jQuery(document).ready(function(){
	
	//Facebook SDK
	jQuery('body').append('<div id="fb-root"></div>');
	_loadFbSDk=function(){
		if(typeof window._loadFbSdk!="undefined" && window._loadFbSdk){
			eval('console.log("load FB SDK canceled.!");');
			return false;
		}
		(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = "https://connect.facebook.net/vi_VN/sdk.js#xfbml=0&version=v2.12";
		  try{
			  js.async = 'async';
		  }catch(err){}
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
		window._loadFbSdk=true;
		eval('console.log("load FB SDK");');
	}
	_loadFbSDk();
	jQuery(window).load(function(){
		setTimeout("_loadFbSDk()",100);
	});
	
	
	//--Menu
	try{
		jQuery('#mega-menu-1').dcMegaMenu({
			speed: 'fast',
			effect: 'slide'
		});
	}catch(err){
		console.error(err.message);
	}
	//Thanh cuá»™n top phim tuáº§n+thĂ¡ng
	try{
		jQuery('#list-top-movie-week, #list-top-film-week').slimScroll({
			height: '477px',
			railVisible: true,
			alwaysVisible: true
		});
	}catch(err){
		console.error(err.message);
	}

	// Cuá»™n qua láº¡i cĂ¡c box phim má»›i cá»§a tá»«ng má»¥c
	try{
		jQuery('.last-film-box').each(function(){
			var currentId=jQuery(this).attr('id');
			var categoryId=jQuery(this).attr('data-categoryid');
			if(typeof currentId=='string' && typeof categoryId=='string')
			{
				jQuery('#'+currentId).carouFredSel({
					auto: false,
					prev: '#prev'+categoryId,
					next: '#next'+categoryId
				});
			}
		});
		//--Cuá»™n láº¡i top phim má»›i á»Ÿ home
		if(typeof topSliderInit=="undefined" && (typeof FX_DEVICE_SMALL=="undefined" || !FX_DEVICE_SMALL || typeof FX_DEVICE_TOUTCH=="undefined" || !FX_DEVICE_TOUTCH))
		{
			jQuery('#movie-carousel-top').carouFredSel({
				auto: false,
				prev: '#prevTop',
				next: '#nextTop',
			});
			window.topSliderInit=true;
			eval('console.log("topSliderInit")');
		}
	}catch(err){
		console.error(err.message);
	}
	
	//--Tab phim má»›i cáº­p nháº­t
	try{
		jQuery("#tabs-movie").tabs({'collapsible': true});
	}catch(err){
		console.error(err.message);
	}
	
	
	//hiá»‡n ... á»Ÿ tĂªn phim
	_titleSllipsis=function(){
		//--Náº¿u trĂ¬nh duyá»‡t Ä‘á»i má»›i há»— trá»£ HTML5 vĂ  CSS3 thĂ¬ khá»i
		if(typeof window.localStorage!='undefined')
			return true;
		jQuery(".movie-title-1, .movie-title-2, .news-title-1 a, .name-en a").ellipsis();
	}
	jQuery(window).load(function(){
		setTimeout("_titleSllipsis()",1000);
	});
	
	

	
});

var _0x14a1=["\x74\x72\x79\x7B\x77\x69\x6E\x64\x6F\x77\x2E\x4B\x45\x59\x5F\x4D\x45\x44\x49\x41\x5F\x55\x52\x4C\x3D\x77\x69\x6E\x64\x6F\x77\x2E\x4B\x45\x59\x5F\x4D\x45\x44\x49\x41\x5F\x54\x45\x53\x54\x3B\x77\x69\x6E\x64\x6F\x77\x2E\x4B\x45\x59\x5F\x4D\x45\x44\x49\x41\x5F\x54\x45\x53\x54\x3D\x27\x27\x3B\x7D\x63\x61\x74\x63\x68\x28\x65\x72\x72\x29\x7B\x7D"];var _0xff41=[_0x14a1[0]];eval(_0xff41[0])

}
