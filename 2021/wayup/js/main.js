/* TABS */
$(".card").on("click", function () {
  let currTab = $(this).parent().index();

  $(".card").removeClass("card-active");
  $(this).addClass("card-active");

  $(".tab-content").removeClass("active");
  $(".tab-content").eq(currTab).addClass("active");
});

/* HAMBURGER */
$(".hamburger").on("click", function () {
  $(".head__menu").toggle();
});

$(".menu-close").on("click", function () {
  $(".head__menu").hide();
});

/* PARALLAX */
let scene = document.getElementById("scene");
let parallaxInstance = new Parallax(scene);

/* SLIDER */
const swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 50,
  slidesPerView: 3,
  stopOnLastSlide: false,
  autoplay: {
    delay: 2000,
  },
});

/* YANDEX MAP */
ymaps.ready(init);
function init() {
  //создание карты
  var myMap = new ymaps.Map("map", {
    //координаты центра карты.
    //порядок по умолчанию: "широта", "долота"
    //Чтобы не определять координаты центра карты вручную,
    //воспользуйтесь инструментом Определние координат.
    center: [55.76, 37.64],
    //уровень масштабирования. Допустимые значения:
    //от 0 (весь мир) до 19.
    zoom: 7,
    controls: ["zoomControl", "geolocationControl"],
  });
}

$.validator.addMethod(
  "regex",
  function (value, element, regexp) {
    let regExsp = new RegExp(regexp);
    return regExsp.test(value);
  },
  "Please check your input"
);

/* Валидация в форме */
$("form").validate({
  rules: {
    firstName: {
      required: true,
      regex: "[A-Za-z]{1,32}",
    },
    phoneNumber: {
      digits: true,
      required: true,
      minlength: 10,
      maxlength: 11,
      regex: "[0-9]+",
    },
  },
  messages: {
    firstName: "Введите имя правильно",
    phoneNumber: "Введите ваш номер",
  },
});
