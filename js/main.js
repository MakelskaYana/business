$(document).ready((function(){$(".burger").click((function(i){$(".burger,nav ul").toggleClass("active"),$("body").toggleClass("lock")})),$(".controller a").click((function(i){$(".controller a").toggleClass("active")}))}));let isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}},body=document.querySelector("body");function ibg(){$.each($(".ibg"),(function(i,t){$(this).find("img").length>0&&$(this).css("background-image",'url("'+$(this).find("img").attr("src")+'")')}))}isMobile.any()?body.classList.add("touch"):body.classList.add("mouse"),ibg(),$("body").on("click",".tab__navitem",(function(i){var t=$(this).index();if($(this).hasClass("parent"))t=$(this).parent().index();$(this).hasClass("active")||($(this).closest(".tabs").find(".tab__navitem").removeClass("active"),$(this).addClass("active"),$(this).closest(".tabs").find(".tab__item").removeClass("active").eq(t).addClass("active"),$(this).closest(".tabs").find(".slick-slider").length>0&&$(this).closest(".tabs").find(".slick-slider").slick("setPosition"))}));