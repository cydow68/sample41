'use strict';

//課題1
//onsubmit
const whatDay = document.getElementById('what-day');

whatDay.onsubmit = function (e) {
  e.preventDefault();

  //入力情報の取得
  const yyyy = whatDay.year.value;
  const mm = whatDay.month.value;
  const dd = whatDay.date.value;

  //曜日を求める
  const day = new Date(yyyy, mm - 1, dd).getDay();
  const dayList = ['日', '月', '火', '水', '木', '金', '土'];

  //結果表示
  document.getElementById('A-01').textContent = `${yyyy}年${mm}月${dd}日`;
  document.getElementById('A-02').textContent = `${dayList[day]}曜日`;

};

//課題2
const whatBMI = document.getElementById('what-bmi');

whatBMI.onsubmit = function (e) {
  e.preventDefault();

  //入力情報の取得
  const Ncm = parseFloat(whatBMI.cm.value);
  const Nm = Ncm / 100;
  const Nkg = parseFloat(whatBMI.kg.value);

  //BMIの計算
  const bmi = Math.round(Nkg / (Nm * Nm) * 10) / 10;

  //結果表示
  let bmiMes = '';
  if (bmi >= 25) {
    bmiMes = '肥満気味';
  } else if (bmi >= 18.5) {
    bmiMes = '標準';
  } else {
    bmiMes = '痩せすぎ';
  }

  document.getElementById('A-03').textContent = bmi;
  document.getElementById('A-04').textContent = bmiMes;
};

//課題3
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  slidesPerView: 5,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


// const swiper = new Swiper('.swiper', {
//   slidesPerView: 5,
//   spaceBetween: 30,
//   centeredSlides: true,
//   loop: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

//隠れ課題　ハンバーガーボタンの設定
document.getElementById('menu-btn').onclick = function(e) {
  e.preventDefault();
  //クラス名の付け外し
  document.getElementById('gnavi').classList.toggle('open');

  //クリックイベントが設定されているところに.closeをつけたり外したりする
  //e.currentTarget.classList.toggle('close');
  this.classList.toggle('close');
};


//隠れ課題　スクロールしたらページトップボタンを出す
window.onscroll = function(e) {
  const position = document.documentElement.scrollTop || document.body.scrollTop;

  if (position >= 300) {
    document.getElementById('page-top').classList.add('open');
  } else {
    document.getElementById('page-top').classList.remove('open');
  }
};