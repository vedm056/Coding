$(function () {
  $("#tabs").tabs();
});

$(function () {
  $("#tabs2").tabs();
});

$(function () {
  $("#tabs3").tabs();
});

$(function () {
  $("#tabs4").tabs();
});

const lastScrollTop = 0;
const navbarHeight = $('.site-header').outerHeight();
const header = $('.site-header');

$(window).scroll(function () {
  const st = $(this).scrollTop();
  header.toggleClass('hidden', st > lastScrollTop && st > navbarHeight);
});

const lastScrollTop2 = 0;
const navbarHeight2 = $('.site-header2').outerHeight();
const header2 = $('.site-header2');

$(window).scroll(function () {
  const st2 = $(this).scrollTop();
  header.toggleClass('hidden', st > lastScrollTop2 && st > navbarHeight2);
});