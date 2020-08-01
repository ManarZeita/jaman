
$('.open').click(function(){
$('#option-nav').show();    
})
$('.close').click(function(){
 $('#option-nav').hide();
})






let abotOF=$(".about").offset().top;
$(window).scroll(function(){
let wscreen=$(window).scrollTop();
if (wscreen > abotOF)
    {
    console.log(wscreen);
    $(".navbar").addClass("bg-white");
    $("#up").fadeIn(400);
    }
else
    {
    $(".navbar").removeClass("bg-white");
    $("#up").fadeOut(400);
    }
})
$('#up').click(function(){
$('body,html').animate({
    scrollTop:0}, 800)    
})

$(".down-icon").click(function() {
    $('html,body').animate({                                                         
        scrollTop: $(".about").offset().top},
        'slow');
});


$('.header').click(function()
{
 $('body,html').animate({scrollTop:$('.home').offset().top},1000)
})
$('.aboutme').click(function()
{
 $('body,html').animate({scrollTop:$('.about').offset().top},1000)
})
$('.contact-us').click(function()
{
 $('body,html').animate({scrollTop:$('.contact').offset().top},1000)
})
$('.blogour').click(function()
{
 $('body,html').animate({scrollTop:$('.blog').offset().top},1000)
})
$('.ser').click(function()
{
 $('body,html').animate({scrollTop:$('.services').offset().top},1000)
})
$('.edu').click(function()
{
 $('body,html').animate({scrollTop:$('.education').offset().top},1000)
})
$('.work').click(function()
{
 $('body,html').animate({scrollTop:$('.Portfolio ').offset().top},1000)
})
$('.clients').click(function()
{
 $('body,html').animate({scrollTop:$('.client').offset().top},1000)
})
