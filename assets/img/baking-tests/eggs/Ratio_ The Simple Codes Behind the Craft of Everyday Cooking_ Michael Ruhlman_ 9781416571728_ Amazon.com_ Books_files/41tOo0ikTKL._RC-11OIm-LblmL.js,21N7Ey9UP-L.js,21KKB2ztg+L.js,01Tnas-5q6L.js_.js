(function(f,w,da){f.guardFatal(function(){f.when("A","jQuery","atf").execute(function(g,a,b){if(a("#bookDescription_feature_div").length){var c=a("#outer_postBodyPS").height();a("#postBodyPS").height()>c+30?(a("#outer_postBodyPS").show(),a("#outer_postBodyPS").css("height",c),a("#psPlaceHolder").show(),a("#expandPS").show(),a("#collapsePS").hide()):(a("#outer_postBodyPS").css("height","auto"),a("#psPlaceHolder").hide());a("#bookDescription_feature_div .a-link-expander").click(function(){a("#bdSeeAllPrompt").is(":hidden")?
(a("#outer_postBodyPS").animate({height:c},500),a("#bdSeeAllPrompt").show(),a("#bdSeeLessPrompt").hide()):(a("#outer_postBodyPS").animate({height:a("#postBodyPS").height()},500),a("#bdSeeAllPrompt").hide(),a("#bdSeeLessPrompt").show());a("#bdExpanderIcon").toggleClass("rotate");return!1})}});f.when("A","jQuery","DynamicIframe","bookDescriptionIframe").execute(function(g,a,b,c){if(a("#bookDescription_feature_div").length){var d=function(){var b=a("#"+f).contentDocument;if(c.staticHeight&&b&&b.defaultView)var d=
parseInt(c.numLines,10),g=b.find("#iframeContent"),b=b.defaultView.getComputedStyle(g,null).getPropertyValue("line-height"),b=parseFloat(b),b=Math.round(b*d);else d=document.getElementById(c.featureDiv).offsetTop,b=document.getElementById(c.imageBlockDiv).offsetTop,g=document.getElementById(c.imageBlockDiv).offsetHeight,b=b+g-d-30,112>b&&(b=112);d=document.getElementById(c.postBodyId).offsetHeight;d>b+30?a("#"+c.seeLessPromptId).hasClass("a-hidden")?(a("#"+c.outerBodyId).height(b),a("#"+c.placeHolderId).removeClass("a-hidden"),
a("#"+c.seeAllPromptId).removeClass("a-hidden")):a("#"+c.outerBodyId).height(d):(a("#"+c.outerBodyId).height(d),a("#"+c.placeHolderId).addClass("a-hidden"),a("#"+c.seeAllPromptId).removeClass("a-hidden"),a("#"+c.seeLessPromptId).addClass("a-hidden"),a("#"+c.expanderIconId).removeClass("rotate"));b=a("#"+c.outerBodyId).height();0==h&&(h=b);b=h;d>b+30&&a("#"+c.seeLessPromptId).is(":hidden")?(a("#"+c.outerBodyId).show(),a("#"+c.outerBodyId).css("height",b),a("#"+c.placeHolderId).show(),a("#expandPS").removeClass("a-hidden"),
a("#collapsePS").addClass("a-hidden")):a("#"+c.outerBodyId).css("height","auto")};var m=null;g=c.encodedDescription;var h=0,e={},f=c.iFrameId;e.iframeId=f;e.iframeWrapperId="bookDesc_iframe_wrapper";e.overriddenCSSId="bookDesc_override_CSS";e.encodedIframeContent=g;e.initialResizeCallback=d;m=new b(e);m.createIframe();"undefined"!==typeof m&&m instanceof b&&(a(w).resize(function(){m.resizeIframe(d)}),a(w).bind("imageResize",function(){m.resizeIframe(d)}));a("#"+c.featureDiv+" .a-link-expander").click(function(){var b=
"#"+c.outerBodyId,d="#"+c.seeAllPromptId,g="#"+c.seeLessPromptId,m="#"+c.expanderIconId,e="#"+c.postBodyId;a(d).hasClass("a-hidden")?(e=h,a(b).animate({height:e},500),a(d).removeClass("a-hidden"),a(g).addClass("a-hidden"),a(m).removeClass("rotate")):(a(b).animate({height:a(e).height()},500),a(d).addClass("a-hidden"),a(g).removeClass("a-hidden"),a(m).addClass("rotate"));return!1})}});f.when("A","jQuery","ImageBlockATF","AudibleAudioPlayer","cf").execute(function(g,a,b,c){function d(a){if("undefined"!==
typeof a){var b=w.ue;if(b&&b.count){var c=b.count(a)||0;b.count(a,c+1)}}}function m(){var a=w.innerWidth||document.body.offsetWidth;if(!(0>=a))if(a>b.windowWidthThreshold&&D.width()<=b.configWidths[0]){var a=b.configWidths[1],c=a/b.holderRatio,d=b.frontImageWidth,q=b.frontImageHeight;h(a,c,d,q)}else a<b.windowWidthThreshold&&D.width()>b.configWidths[0]&&(a=b.configWidths[0],c=a/b.holderRatio,b.frontImageAspectRatio>b.holderRatio?(d=a,q=d/b.frontImageAspectRatio):(q=c,d=q*b.frontImageAspectRatio),
h(a,c,d,q))}function h(c,d,q,g){if(0<c&&0<d&&0<q&&0<g){Y.css("margin-left",c+b.centerColMargin).removeClass("centerColumn");W.css("width",c);var m=d+b.containerMargin+b.flipLinkMinHeight;D.css("width",c).css("height",m);e(q,g);A.css("height",d-(d-l.outerHeight())/2);c=(A.outerWidth()-l.outerWidth())/2;d=A.outerHeight()-l.outerHeight();t.css("top",d).css("left",c);k.css("top",d+ca).css("left",c+q-k.width());a(this).trigger("imageResize");n&&n.hide()}}function e(a,b){l.css("width",a).css("height",b);
var c=l.width(),d=l.height();t.css("width",c).css("height",d);"undefined"!==typeof p&&0<p.length&&(p.css("width",c).css("height",d),r.css("height",d),q&&V&&(d=r.width(),I=(c-d)/2-2,r.removeClass("ieTransition").css("left",(c-d)/2),"front"==F?r.css("transform","perspective(3000px) rotateY(-65deg) translateZ("+I+"px)"):r.css("transform","perspective(3000px) rotateY(90deg) translateZ("+I+"px)"),g.delay(function(){r.addClass("ieTransition")},10)))}function Z(){var a=v.find(".audioSamplePopover");f.when("jQuery",
"a-popover","ready").execute(function(b,c){n=c.create(X,{activate:"onclick",position:"triggerRight",inlineContent:a})});M.click(y)}function y(){n&&n.show()}function aa(a){a.bind("audioEnded",function(){S.hide();Q.hide();M.show();C=0;n&&n.hide()});a.bind("audioPlaying",function(){S.hide();M.hide();Q.show();C=1;y()});a.bind("audioPaused",function(){Q.hide();M.hide();S.show();C=0;n&&n.hide()})}function O(){C?x.pause():x.play()}function P(a){if("undefined"!=typeof SitbReader)if("back"==F&&SitbReader.currentBook&&
SitbReader.currentBook.bookmarks){a=SitbReader.currentBook.bookmarks.getFirstAndLastPageNumberByName("Back Cover").first;var c=SitbReader.currentBook.bookmarks.getFirstAndLastPageNumberByName("Back Flap").first;a?SitbReader.LightboxActions.openReaderToPage(a):c?SitbReader.LightboxActions.openReaderToPage(c):SitbReader.LightboxActions.openReader(b.litbData.litbReftag)}else SitbReader.LightboxActions.openReader(b.litbData.litbReftag)}function G(a){V?"click"==a.type?"front"==F?(F="back",l.removeClass("frontUnrotated frontUnrotatedHover").addClass("frontRotated"),
p.removeClass("backUnrotated backUnrotatedHover").addClass("backRotated"),r.css("transform","perspective(3000px) rotateY(90deg) translateZ("+I+"px)"),T.addClass("a-hidden"),U.removeClass("a-hidden"),J.addClass("flipToBackImgRotate"),d("booksImageFlipToBackCount")):(F="front",l.removeClass("frontRotated frontRotatedHover").addClass("frontUnrotated"),p.removeClass("backRotated backRotatedHover").addClass("backUnrotated"),r.css("transform","perspective(3000px) rotateY(-65deg) translateZ("+I+"px)"),U.addClass("a-hidden"),
T.removeClass("a-hidden"),J.removeClass("flipToBackImgRotate"),d("booksImageFlipToFrontCount")):"mouseenter"==a.type?"front"==F?(l.removeClass("frontUnrotated").addClass("frontUnrotatedHover"),p.removeClass("backUnrotated").addClass("backUnrotatedHover"),r.css("transform","perspective(3000px) rotateY(-55deg) translateZ("+I+"px)")):(l.removeClass("frontRotated").addClass("frontRotatedHover"),p.removeClass("backRotated").addClass("backRotatedHover"),r.css("transform","perspective(3000px) rotateY(80deg) translateZ("+
I+"px)")):"front"==F?(l.removeClass("frontUnrotatedHover").addClass("frontUnrotated"),p.removeClass("backUnrotatedHover").addClass("backUnrotated"),r.css("transform","perspective(3000px) rotateY(-65deg) translateZ("+I+"px)")):(l.removeClass("frontRotatedHover").addClass("frontRotated"),p.removeClass("backRotatedHover").addClass("backRotated"),r.css("transform","perspective(3000px) rotateY(90deg) translateZ("+I+"px)")):"click"==a.type?"front"==F?(t.removeClass("bookCanvasTransformHover").addClass("rotated"),
T.addClass("a-hidden"),U.removeClass("a-hidden"),J.addClass("flipToBackImgRotate"),F="back",d("booksImageFlipToBackCount")):(t.removeClass("rotated rotatedHover"),U.addClass("a-hidden"),T.removeClass("a-hidden"),J.removeClass("flipToBackImgRotate"),F="front",d("booksImageFlipToFrontCount")):"mouseenter"==a.type?"front"==F?t.addClass("bookCanvasTransformHover"):t.removeClass("rotated").addClass("rotatedHover"):"front"==F?t.removeClass("bookCanvasTransformHover"):t.removeClass("rotatedHover").addClass("rotated")}
function E(){B.addClass("parentImage");r.addClass("bookSpine").removeClass("a-hidden");t.addClass("bookCanvasTransition");l.addClass("bookFrontTransition");g.delay(function(){t.addClass("bookCanvasTransformHover");g.delay(function(){t.removeClass("bookCanvasTransformHover")},1500)},50)}function L(){var a=r.outerWidth(),b=l.outerWidth();I=(b-a)/2-2;r.css("left",(b-a)/2).css("transform","perspective(3000px) rotateY(-90deg) translateZ("+I+"px)");l.addClass("ieTransition ieBookShadow").css("transform-origin",
"50% 50% -"+a/2+"px");p.addClass("ieTransition backLanding ieBookShadow").removeClass("a-hidden").css("transform-origin","50% 50% -"+a/2+"px");r.addClass("ieTransition ieBookShadow").removeClass("a-hidden").css("transform-origin","50% 50% -"+a/2+"px");g.delay(function(){p.removeClass("backLanding").addClass("backUnrotated");l.addClass("frontUnrotated");r.css("transform","perspective(3000px) rotateY(-65deg) translateZ("+I+"px)")},50);l.mouseenter(function(){r.css("transform","perspective(3000px) rotateY(-75deg) translateZ("+
I+"px)")});l.mouseleave(function(){r.css("transform","perspective(3000px) rotateY(-65deg) translateZ("+I+"px)")});H.removeClass("a-hidden")}var D=a("#imageBlock"),B=D.find("#img-wrapper"),A=D.find("#imageBlockContainer"),t=D.find("#img-canvas"),p=t.find(".backImage"),r=t.find(".sideImage"),l=t.find(".frontImage"),k=a("#imageBlockOuter").find("#sitbLogo"),H=D.find(".flipImageToBack"),v=D.find(".sampleBookAudio"),z=0,F="front",q=0,C=0,M=v.find(".audioListenText"),Q=v.find(".audioPlayingText"),S=v.find(".audioPausedText"),
N=v.find(".audioText"),X=v.find(".audioPopoverTrigger"),x,T=H.find(".flipToBackText"),U=H.find(".flipToFrontText"),J=H.find(".flipToBackImg"),V=a.browser.msie||!!navigator.userAgent.match(/Trident/),n,W=a("#leftCol"),Y=a("#centerCol"),I=0,ba=a("#imageBlockOuter").find("#sitbLogoImg"),ca=parseInt(D.css("margin-top"));(function(){w.ue&&w.ue.count&&ue.count("booksImageFlipToBackCount",0);w.ue&&w.ue.count&&ue.count("booksImageFlipToFrontCount",0);var d=B.offset(),e=l.offset();if(e){var n=e.top-d.top,
d=e.left-d.left,e=l.outerWidth(),h=l.outerHeight(),C=B.outerHeight()-(B.outerHeight()-l.outerHeight())/2,f=r.outerWidth();B.css("position","relative");k.css("top",n+ca).css("left",d+e-k.width());t.css("position","absolute").css("top",n).css("left",d).css("width",e).css("height",h);l.css("position","absolute").css("top","0").css("left","0");p.css("position","absolute").css("top","0").css("left","0");r.css("position","absolute").css("top","0").css("left","-"+f+"px");A.css("height",C)}b.audibleData&&
b.audibleData.audioSampleSrc&&(x=new c,n={},n.audioSrc=b.audibleData.audioSampleSrc,n.audioId="img-blk-audio-sample",n.audioControllerId=v,n.flashPlayerUrl=b.audibleData.flashPlayerUrl,n.bindEventsCallback=aa,x.init(n));e=1;n=["Perspective","TransformStyle","TransformOrigin","BackfaceVisibility","Transition"];for(d=0;d<n.length;d++)if(e){for(var e=n[d],h=["Webkit","Moz","O","ms"],C=document.createElement("div"),f=!1,y=0;y<h.length;y++)h[y]+e in C.style&&(f=f||!0);"Perspective"===e&&"WebkitPerspective"in
C.style&&(f=!1,C.id="test3d",document.body.appendChild(C),3===C.offsetHeight&&(f=!0),C.parentNode.removeChild(C));e=f}z=e;n="undefined"!==typeof p&&0<p.length;(q=z&&n)?(n=l.width(),d=l.height(),0<n&&0<d&&(t.addClass("image-3d"),p.css("width",n).css("height",d),r.css("height",d),V?L():(E(),p.addClass("bookBack").removeClass("a-hidden"),H.removeClass("a-hidden")),g.declarative("flip-action",["click","mouseenter","mouseleave"],G)),x&&x.isPlayerAvailable?H.addClass("a-span6"):H.addClass("a-span12")):
t.addClass("image-2d");b&&b.litbData&&b.litbData.hasLitb&&b.litbData.litbReftag&&(ba.removeClass("a-hidden"),ba.click(P),t.click(P));x&&x.isPlayerAvailable&&(q?v.addClass("a-span6"):v.addClass("a-span12"),Q.hide(),S.hide(),v.removeClass("a-hidden"),N.children().click(O),n=parseInt,d=M.outerWidth(),e=Q.outerWidth(),h=S.outerWidth(),C=0,0<d&&0<e&&0<h&&(C=Math.max(d,e,h)+5),(n=n(C))&&0<n&&N.css("width",n),Z());b.disableResize||a(w).resize(m)})()});f.when("A","jQuery","ImageBlockATF","ImageGalleryMarkup").execute(function(g,
a,b){function c(){var a=b.imageGalleryData;if(a&&0<a.length){k={};H=a.length;for(var c=0;c<a.length;c++)k["ig-thumb-"+c]=a[c]}}function d(){l=E.height();0<L.length&&(l-=L.height());if(a.browser.msie&&7==a.browser.version){var b=D.outerHeight()-D.height();b&&0<b&&(l-=b)}if(l&&0<l){D.css("height",l);var b=p.height(),c=p.width();B.css("height",b).css("width",c).data("height",b).data("width",c)}}function m(){if(0<E.length){d();e();if(0<H)for(var b=0;b<H;b++){var c="ig-thumb-"+b,c=a('<div class="ig-thumb-image"><img class="ig-thumb-inner '+
(c==z?"selected":"")+'" id="'+c+'" src="'+k[c].thumbUrl+'"></div>');t.append(c)}zoomOptions=y();v.setImageData(zoomOptions);v.attachZoomEvents()}}function h(){var a=k[z].dimensions[0],b=k[z].dimensions[1];A.css("max-width",a).css("max-height",b).removeClass("image-stretch-horizontal image-stretch-vertical");A.addClass(f(a,b))}function e(){k[z]&&(h(),A.attr("src",k[z].mainUrl))}function f(a,b){var c=B.data("width")/B.data("height"),d="image-stretch-vertical";a/b>c&&(d="image-stretch-horizontal");return d}
function y(){var a={};k[z]&&(a.containerId="igInner",a.imageId="igImage",a.imageWidth=k[z].dimensions[0],a.imageHeight=k[z].dimensions[1]);return a}function w(){k&&t.find(".ig-thumb-inner").click(function(){var b=this.id,c=a(this),d=k[b];!c.hasClass("selected")&&d&&(z=b,t.find(".selected").removeClass("selected"),c.addClass("selected"),v.detachEvents(),A.addClass("a-hidden"),r.show(),document.getElementById("igImage").onload=F,e(),b=y(),v.setImageData(b))})}function O(){var a=g.viewport();G.closest(".a-popover-modal").css("width",
.75*a.width).css("height",.75*a.height);d();v.detachEvents();h();a=y();v.setImageData(a);v.attachZoomEvents()}function P(){g.capabilities.orientation&&(g.on("orientationchange",function(){O()}),g.on("a:popover:afterHide:imageGallery",function(){g.off("a:popover:afterHide:imageGallery");g.on("a:popover:beforeShow:imageGallery",function(){O()})}))}var G=a("#imgGalleryContent"),E=G.closest(".a-popover-wrapper"),L=E.find(".a-popover-header"),D=E.find(".a-popover-inner"),B=G.find("#igInner"),A=B.find("#igImage"),
t=G.find(".ig-thumbs"),p=G.find(".ig-main-image"),r=G.find(".loading-bar"),l=0,k=null,H=0,v=new function(){function b(){f.bind("touchstart.ig touchmove.ig",function(a){c(a);f.unbind("touchstart.ig touchmove.ig");f.bind("touchmove.ig",function(a){c(a)});f.bind("touchend.ig",function(a){d.zoomOut();f.unbind("touchstart.ig touchmove.ig touchend.ig");b()})})}function c(a){t&&a.preventDefault();var b,e={},g=h.width(),f=h.height();b=a.pageX-h.offset().left;a=a.pageY-h.offset().top;e.x=p?b*m/g-b:0;e.y=r?
a*l/f-a:0;d.zoomIn(e)}var d={},e=null,k=null,m=0,l=0,h=null,f=null,p=!1,r=!1,t=g.capabilities.touch;d.setImageData=function(b){e=b.containerId;k=b.imageId;m=b.imageWidth;l=b.imageHeight;h=a("#"+e);f=a("#"+k);p=0<m&&0<h.length&&m>h.width();r=0<l&&0<h.length&&l>h.height()};d.attachZoomEvents=function(){if(p||r)h.addClass("zoomable"),t?b():f.click(function(a){h.hasClass("zoomed-in")?(d.zoomOut(),f.unbind("mousemove")):h.hasClass("zoomed-out")&&(c(a),f.mousemove(function(a){c(a)}))})};d.zoomIn=function(a){f.css("top",
-1*a.y);f.css("left",-1*a.x);h.removeClass("zoomed-out").addClass("zoomed-in")};d.zoomOut=function(){h.removeClass("zoomed-in").addClass("zoomed-out");f.css("top","auto").css("left","auto")};d.detachEvents=function(){d.zoomOut();f.unbind();h.removeClass("zoomable")};return d},z;0<G.length&&(z="ig-thumb-0",r.hide(),c(),m(),w(),P());var F=function(){r.hide();A.removeClass("a-hidden");v.attachZoomEvents()}});f.when("A","jQuery").execute(function(g,a){if(a("#imageBlockThumbs").length){var b=function(){var b=
a("#imgThumbs"),d=b.data("a-modal"),f=g.viewport();d.width=.75*f.width;d.height=.75*f.height;b.data("a-modal",d)};b();g.on("resize",b)}});f.when("A","jQuery","msxUtility","ready","atf").execute(function(g,a,b){function c(c){var d=a("<div></div>").html(c);b.digestPageStates(d);d=null;f.when("responsiveMediaTabsLoadComplete").execute(function(){h.eq(0).html(c);m.find(".olpLink").eq(0).addClass("tabHidden");m.find(".mediaMatrix").eq(0).removeClass("tabHidden");g.trigger("mediaMatrixLazyLoadComplete")})}
var d=g.state("media-matrix-variables");if(d){var d="/gp/mediatabs/mediamatrix?"+a.param({asin:d.currentAsin,isMediaMatrixAjaxCall:1,productGroupId:d.productGroupID}),m=a("#mediaTabsHeadings"),h=a("#mediaTab_content_all").find("#MediaMatrix"),e=a("#mediaTab_content_all").find("#MediaMatrixSlot");h&&0<h.length&&e&&0<e.length&&a.ajax({method:"GET",url:d,dataType:"text",success:function(a){a&&/\S/.test(a)?c(a):b.postMetric("mmt-media-matrix-ajax-call-fail")},error:function(a){b.postMetric("mmt-media-matrix-ajax-call-fail")}})}});
f.when("A","jQuery").register("msxUtility",function(g,a){return{digestPageStates:function(a){a.find("script[type='a-state']").each(function(a,b){var f,h,e=b.dataset;e&&e.aState&&(f=JSON.parse(e.aState).key,h=JSON.parse(b.innerText));f&&h&&g.state(f,h)})},postMetric:function(a){if("undefined"!==typeof a){var c=w.ue;if(c){var d=c.count(a)||0;c.count(a,d+1)}}}}})})()})(function(){var f=window.AmazonUIPageJS||window.P,w=f._namespace||f.attributeErrors;return w?w("MSXBooksDetailPageAsset"):
f}(),window);
/* ******** */
(function(u,z,O){u.execute(function(){u.when("A","jQuery","atf").execute(function(r,d,e){var l=d("#rbbContainer");l.find(".rbbHeaderLink").attr("href","javascript:void(0);");l.find(".rbbHeader .displayNone i.prime").hide();l.find(".rbbHeader .displayNone .primeBadge").hide();l.find(".rbbHeader .ubbPrimeBadge").hide();l.find(".rbbHeader .prime-plus-price").hide();l.find(".rbbHeader .displayNone").removeClass("displayNone");d("#rbbContainer .rbbSection.unselected .dp-accordion-inner").hide();var b=
d("#buyDealSection").length;d("#rbbContainer .rbbSection .rbbHeader").click(function(a){d(a.target);a=d(this);a=a.hasClass("rbbHeader")?a:a.parents(".rbbHeader");if(a.parents(".rbbSection").hasClass("selected"))return!1;l.find(".selected .a-icon-radio-active").removeClass("a-icon-radio-active").addClass("a-icon-radio-inactive");l.find(".selected .offer-price").removeClass("a-color-price a-size-medium").addClass("a-color-base a-size-base");l.find("i.a-icon.prime").hide();l.find(".primeBadge").hide();
l.find(".ubbPrimeBadge").hide();var c=l.find(".prime-plus-price-grid");c.hasClass("hidden")?c.removeClass("hidden").show():c.addClass("hidden").hide();l.find(".prime-plus-price").show();a.parents(".rbbSection").removeClass("unselected").addClass("selected");a.parents(".rbbSection").toggleClass("dp-accordion-active",500);a.find(".a-icon-radio-inactive").removeClass("a-icon-radio-inactive").addClass("a-icon-radio-active");a.find(".offer-price").removeClass("a-color-base a-size-base").addClass("a-color-price a-size-medium");
a.find("#priceBadgeValue").removeClass("a-size-medium").addClass("a-size-base");a.find("i.a-icon.prime").show();a.find(".primeBadge").show();a.find(".prime-plus-price").hide();d("#rbbContainer .rbbSection .rbbContent").find(".offer-price").removeClass("a-color-base").addClass("a-color-price");a.find(".ubbPrimeBadge").show();var e=d(this).attr("id"),h,g;l.find(".rbbSection").each(function(a,b){d(b).find(".rbbHeader")[0].id==e?h=d(b):d(b).hasClass("selected")&&(g=d(b))});g.find(".rbbContent").slideUp(500,
function(){g.removeClass("selected").addClass("unselected");g.toggleClass("dp-accordion-active",500)});h.find(".rbbContent").slideDown(500);d.browser.msie&&7==parseInt(d.browser.version,10)&&(h.find(".rbbContent").css("display","inline"),setTimeout(function(){h.find(".rbbContent").css("display","block")},505));if(b&&"undefined"!=typeof UDPDealView)if(d("#gbld_header_message").show(),"buyDealSection"==e)UDPDealView.prototype.onSelectLDBuybox();else UDPDealView.prototype.onSelectRegularBuybox();return!0})});
u.when("A","jQuery").execute(function(r,d){d("#one-click-button-ubb, #usedbuyBox #add-to-cart-button-ubb").click(function(){var e=d("#addToCart"),l=e.attr("action").replace("ref=dp_start-bbf_1_glance","ref=dp_start-ubbf_1_glance");e.attr("action",l);return!0});u.when("a-popover").execute(function(e){var l=d("#usedItemConditionInfoLink"),b=e.create(l,{width:250,position:"triggerBottom",activate:r.capabilities.touch?"onmousemove":"onclick",closeButton:!1,popoverLabel:"Used condition details",name:"usedItemConditionDetailsPopover",
dataStrategy:"preload"});l.mouseleave(function(){b.hide()})})})})})(function(){var u=window.AmazonUIPageJS||window.P,z=u._namespace||u.attributeErrors;return z?z("OffersBooksDetailPageAsset"):u}(),window);
/* ******** */
(function(u,z,O){u.execute(function(){u.when("A","jQuery","atf").execute(function(r,d,e){var l,b=0;u.when("DPClientLogger").execute(function(){"undefined"!=typeof z.DPClientLogger&&(l=new z.DPClientLogger.ImpressionLogger("dpbxapps","bxapps-atfMarker",!0,!0))});d("#bookDetails_feature_div .hero-more").click(function(a){a.preventDefault();a=d(this).attr("data-popupID");var c=d("#"+a),e=d(this).offset().left+d(this).width()/2,h=d("#popupContent").offset().left,e=(e-h)/d("#popupContent").width()*100;
d("#"+a+" .pointer").css({left:e+"%"});d("#popupContent .details-popup").filter(":visible").length?d("#popupContent .details-popup").filter(":visible").attr("id")!==a?(d("#popupContent .details-popup").filter(":visible").slideToggle(300),c.slideToggle(300)):c.slideUp(300):(c.slideDown(300),d(this).hasClass("hero-more")&&d("html,body").animate({scrollTop:d("#bookDetails_feature_div").offset().top-50},600));l&&!b&&(l.logImpression("ma-books-br-details"),b=1)});d("#bookDetails_feature_div .moreNarratorLink").click(function(){if(location.pathname.replace(/^\//,
"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var a=d(this.hash),a=a.length?a:d("[name="+this.hash.slice(1)+"]");a.length&&d("html,body").animate({scrollTop:a.offset().top},1E3);return!1}});d("#bookDetails_feature_div .details-popup button").click(function(a){d(this).parent().slideUp(300)})});u.when("A","jQuery","atf").execute(function(r,d,e){function l(){var b=parseInt(d("#byline").width()),a=0;d("#byline .author").each(function(){d(this).is(".notFaded")&&(a+=d(this).outerWidth())});
a+=d("#byline .more").outerWidth();if(a>b){var c=d("#byline .author.notFaded").length;d(d("#byline .author.notFaded").get().reverse()).each(function(e){a>b&&e<c-1&&(e=d(this).width(),d(this).removeClass("notFaded"),d(this).fadeOut(10,function(){d(this).hide()}),a-=e,d("#byline .moreCount").html(d("#byline .author").length-d("#byline .author.notFaded").length),d("#byline .more").addClass("notFaded").fadeIn(10))})}else if(a<b&&d("#byline .author.notFaded").length<d("#byline .author").length){var e=
b-a;d("#byline .author").each(function(){if(!d(this).hasClass("notFaded")){var a=d(this).outerWidth();a<=e?(e-=a,d(this).addClass("notFaded").fadeIn(10),a=d("#byline .author").length-d("#byline .author.notFaded").length,0===a?d("#byline .more").removeClass("notFaded").fadeOut(10):(d("#byline .moreCount").html(a),d("#byline .more").addClass("notFaded").fadeIn(10))):e=0}})}}d("#byline .showMoreLink").click(function(){d("#byline .author").each(function(){d(this).hasClass("notFaded")||d(this).addClass("notFaded").fadeIn(0);
d("#byline .more").removeClass("notFaded").fadeOut(0)});return!1});d("#byline .contributorNameID").mouseenter(function(){var b=d(this).attr("data-asin"),a={},c="isAjaxComplete_"+b,e="isAjaxInProgress_"+b,h=r.state("popoverImage-state");a.entityID=b;"1"!==h[c]&&"1"!==h[e]&&(d.ajax({url:"/gp/product/utility/by-line/book-contributor-details/ajax/author-image.html",data:a,dataType:"html",timeout:1E3,success:function(a){d("#contributorImageContainer"+b).get(0).innerHTML=a;h[c]="1";r.state("popoverImage-state",
h)},error:function(){h[e]="0";r.state("popoverImage-state",h)}}),h[e]="1",r.state("popoverImage-state",h))});(function(b){var a=parseInt(b.width()),c=parseInt(b.find(".more").outerWidth()),e=0;d("#byline .author").each(function(){d(this).is(".notFaded")&&(e+=d(this).outerWidth())});d("#byline .more").attr("data-width",c);var h=a-c;if(h>e)b.find(".author").each(function(){var a=d(this).index();3<=parseInt(a)?(a=d(this).outerWidth(),d(this).attr("data-width",a),a<h?(h-=a,d(this).addClass("notFaded"),
d(this).fadeIn("slow")):(h=0,d(this).fadeOut("slow"))):(a=d(this).outerWidth(),d(this).attr("data-width",a),h-=a)});else{var g=d("#byline .author.notFaded").length;d(d("#byline .author.notFaded").get().reverse()).each(function(a){h<e&&a<g-1&&(a=d(this).outerWidth(),e-=a,d(this).fadeOut("slow").removeClass("notFaded"))})}a=b.find(".author").length-b.find(".author.notFaded").length;0<a&&(b.find(".moreCount").html(a),b.find(".more").fadeIn("slow"),b.find(".more").addClass("notFaded"))})(r.$("#byline"));
d(z).resize(function(){l()})});u.when("A","jQuery","DynamicIframe","ProductDescriptionData","cf").execute(function(r,d,e,l){function b(){q=0;var a=Math.min(m,k.length);c(0,a)}function a(){0<t.length&&0<z.length&&(D="collapsed",t.removeClass("a-hidden"),t.click(function(){"collapsed"===D?(u?z.animate({height:"show"}):(z.removeClass("extraReviews"),c(q,k.length),u=1),t.removeClass("collapsed").addClass("expanded"),D="expanded"):(z.animate({height:"hide"}),t.removeClass("expanded").addClass("collapsed"),
D="collapsed")}))}function c(a,b){var c;for(c=a;c<b;c++){var h={};h.iframeId="er_iframe_"+c;h.iframeWrapperId="er_iframe_wrapper_"+c;h.iframeContainerId="er_container_"+c;h.iframeExpanderId="er_expander_"+c;h.iframeColumnId="er_column_"+c;var l=h,m=k[c],t="<h3 class='erSource'>"+m.source+"</h3><div class='erContent'>"+m.content+"</div>";m.footnote&&(t=t+"<em class='erFootnote'>"+m.footnote+"</em>");l.encodedIframeContent=t;h.initialResizeCallback=f;l=h;m={};m.id=d("#"+l.iframeId);m.column=d("#"+l.iframeColumnId);
m.wrapper=d("#"+l.iframeWrapperId);m.container=d("#"+l.iframeContainerId);m.expander=d("#"+l.iframeExpanderId);m.iframeObj=new e(l);m.state="full";l=m;p[h.iframeId]=l;l.column.removeClass("extraReviews");l&&"undefined"!=typeof l.iframeObj&&"function"==typeof l.iframeObj.createIframe&&l.iframeObj.createIframe();g(l);q++}}function f(a){(a=p[a])&&170<a.wrapper.outerHeight()&&(a.container.css("height",140),a.expander.removeClass("a-hidden expanded").addClass("collapsed"),a.state="partial")}function h(a){(a=
p[a])&&"full"===a.state&&a.container.css("height",a.wrapper.outerHeight())}function g(a){if(a&&"undefined"!=typeof a.iframeObj&&"function"==typeof a.iframeObj.resizeIframe)r.on("resize",function(){a.iframeObj.resizeIframe(h)});a&&a.expander&&a.expander.click(function(){"partial"===a.state?(a.container.animate({height:a.wrapper.outerHeight()}),a.expander.removeClass("collapsed").addClass("expanded"),a.state="full"):(a.container.animate({height:140}),a.expander.removeClass("expanded").addClass("collapsed"),
d("html, body").animate({scrollTop:a.container.offset().top-20}),a.state="partial")})}var k=l.encodedReviews,m=parseInt(l.reviewsPerRow),q=0,u=0;l=d("#productDescription-multiColumn");var p={},t,z,D;0<l.length&&k&&0<k.length&&m&&(t=l.find(".reviewsExpander"),z=l.find(".seeMoreProductReviews"),b(),a())})})})(function(){var u=window.AmazonUIPageJS||window.P,z=u._namespace||u.attributeErrors;return z?z("PInfoBooksDetailPageAsset"):u}(),window);
/* ******** */
(function(u,z,O){u.execute(function(){u.when("A","jQuery","atf").execute(function(r,d){r.on.ready(function(){function e(a,b,c,e,f){d(a).slideToggle(300);d(b).slideToggle(300);d(c).toggleClass("tmmShowPrompt tmmHidePrompt");d(e).toggleClass("tmmShowPrompt tmmHidePrompt");d(f).toggleClass("rotate")}function l(a){a.position();a.width();d(".swatchElement");a.find(".swatchElement").each(function(){d(this).attr("data-width",d(this).width());p+=d(this).width()});d("#formats").find(".a-row").removeClass("nonJSFormats")}
function b(){var b=d("#formats"),e=b.width()-40,f=0,g=0;b.find(".swatchElement").each(function(){d(this).is(":visible")?f+=d(this).width():g++});var h=d(b.find(".swatchElement").get().length),k=b.find(".swatchElement .audibleTitle").length;if(D&&0<h.length&&4<=h[0]&&k){var l=a(f,e),f=f-l;y.count("mediaMatrixUIOptimization",1)}!t&&k&&(d.post("/hz/audible/wl",{audible_weblabs:"ADBL_TWISTER_RESIZE_116490"}),t=1);f>e?d(b.find(".swatchElement:visible").get().reverse()).each(function(){var a=0,b=!1;d(this).find(".format").hasClass("a-button-selected")?
(a=d(this).prev(".swatchElement").width(),b=d(this).prev(".swatchElement").is(":hidden"),d(this).prev(".swatchElement").hide()):(a=d(this).width(),b=d(this).is(":hidden"),d(this).hide());g++;b||(f-=a);return f>e}):f<e&&b.find(".swatchElement").each(function(){if(d(this).is(":hidden")){var a=d(this).width();a<=e-f&&(d(this).show(),f+=a,g--)}});0==g&&c(f,e,h,p);m||(h=d("#audibleTwisterWeblabs"),null!=h&&h.length&&null!=h.data("weblabs")&&(h=h.data("weblabs"),b=b.find(".swatchElement:visible .audibleTitle").length,
h.length&&b&&d.post("/hz/audible/wl",{audible_weblabs:h},function(a){m=!0})))}function a(a,b){var c=d("#formats"),e=0;d(c.find(".swatchElement").get().reverse()).each(function(){var c=f(d(this)),g=d(this).width(),g=g>c?g-c:0;if(a>b&&0<g||d(this).is(":hidden"))h(d(this),c),e+=g,a-=g});return e}function c(a,b,c,e){var g=Math.round(0<c.length?(b-a)/c[0]:0)-10,g=0<g?g:0;0<g&&d("#formats").find(".swatchElement").each(function(){var a=parseInt(d(this).attr("data-width")),c=f(d(this))+(0<g?g:0),a=e<b?a+
1:Math.min(c,a);h(d(this),a)});return g}function f(a){var b=a.find("#kuBadge").length;a=a.find(".a-icon-kindle-unlimited").length;return 0<b||0<a?150:117}function h(a,b){a.addClass("resizedSwatchElement");a.css({width:b+"px"})}var g=0,k=0,m=!1,q,y=z.ue,p=0,t=0,G=d("#twisterResizeWeblab"),D=G?G.data("weblabs"):null,v=function(a){"undefined"!=typeof a&&(q=new a.ImpressionLogger("dpbxapps","bxapps-atfMarker",!0,!0))};"undefined"!=typeof amznJQ?amznJQ.available("DPClientLogger",function(){v(z.DPClientLogger)}):
u.when("DPClientLogger").execute(v);r.declarative("tmm-see-more-editions-click",["click"],function(a){var b=a.data,c=b.metabindingUrl;if(a.$target.hasClass("a-link-expander")||a.$target.parent().hasClass("a-link-expander")){var b=b.metabindingPlaceHolder,f="#metabinding_row_top_"+b,g="#metabinding_row_bottom_"+b,h="#editionsSeePrompt_"+b,k="#editionsHidePrompt_"+b,l="#editionsIcon_"+b,m="isAjaxComplete_"+b,p="isAjaxInProgress_"+b;a="#tmmSpinnerDiv_"+b;var q=r.state("mediamatrix-state"),b=q["url_"+
b].replace(/&amp;/g,"&");d("#formats .tmmErrorClass").hide();"1"===q[m]||"1"===q[p]?e(f,g,h,k,l):(r.ajax(b,{method:"get",success:function(){q[m]="1";r.state("mediamatrix-state",q);e(f,g,h,k,l)},indicator:d(a),error:function(){d($tmmErrorDiv).show();q[p]="0";r.state("mediamatrix-state",q)}}),q[p]="1",r.state("mediamatrix-state",q))}else"#"!==c&&(z.location=c)});0<d("#formats > .a-link-expander").length&&y&&y.count&&y.count("mediaMatrixExpanderPresent",1);d("#formats > .a-link-expander").click(function(){e("#tmmSwatches",
"#twister","#showMoreFormatsPrompt","#hideMoreFormatsPrompt","#formatsIcon");k||(y&&y.count&&y.count("mediaMatrixExpanderClicked",1),k=1);q&&d("#twister").is(":visible")&&!g&&(q.logImpression("tmm-show-more-formats-viewed"),g=1)});d("#formats.responsive").each(function(){l(d(this))});var G=r.state("mediamatrixState"),C="false";"undefined"!==typeof G&&"undefined"!==typeof G.swatchWrap&&(C=G.swatchWrap);"true"!=C&&(b(),r.on("resize",b));d("#formats .unselected .format").mouseenter(function(){d(this).find(".a-color-secondary").addClass("a-color-price").removeClass("a-color-secondary")}).mouseleave(function(){d(this).find(".a-color-price").addClass("a-color-secondary").removeClass("a-color-price")});
d("#landingItemRentalLink").attr("href","javascript:document.getElementById('rentBuySection').click();")})})})})(function(){var u=window.AmazonUIPageJS||window.P,z=u._namespace||u.attributeErrors;return z?z("TwisterBooksDetailPageAsset"):u}(),window);
/* ******** */
(function(e){var d=window.AmazonUIPageJS||window.P,f=d._namespace||d.attributeErrors,b=f?f("DetailPageBookProductDescriptionAssets"):d;b.guardFatal?b.guardFatal(e)(b,window):b.execute(function(){e(b,window)})})(function(e,d,f){});
/* ******** */
