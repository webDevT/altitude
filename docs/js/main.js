$(function(){

$('.menu-btn').click(function(){
    $(this).toggleClass('active');
    $('.menu').toggleClass('active');
})

$('.menu__link').click(function(){
    $('.menu').removeClass('active');
    $('.menu-btn').removeClass('active');
})
$(".menu, .footer-menu").on("click","a", function (event) {

    //отменяем стандартную обработку нажатия по ссылке

    event.preventDefault();



    //забираем идентификатор бока с атрибута href

    var id  = $(this).attr('href'),



    //узнаем высоту от начала страницы до блока на который ссылается якорь

    top = $(id).offset().top;



    //анимируем переход на расстояние - top за 1500 мс

    $('body,html').animate({scrollTop: top}, 1500);

});
});