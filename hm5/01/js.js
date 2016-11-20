
var tabs = {
  tab1: {
    px: 100,
    span: document.getElementById("span1"),
    str : document.getElementById("str1"),
    content : document.getElementById("content1"),
    caption : document.getElementById("caption1"),
    off: true,
 },    
  tab2: {
    px: 100,
    span: document.getElementById("span2"),   
    str : document.getElementById("str2"),
    content : document.getElementById("content2"),
    caption : document.getElementById("caption2"),
    off: false,
  },
  tab3: {
    px: 100,
    span: document.getElementById("span3"),
    str : document.getElementById("str3"),
    content : document.getElementById("content3"),
    caption : document.getElementById("caption3"),
    off: true,
  },
  tab4: {
    px: 140,
    span: document.getElementById("span4"),
    str : document.getElementById("str4"),
    content : document.getElementById("content4"),
    caption : document.getElementById("caption4"),
    off: true,
  },
  tab5: {
    px: 100,
    span: document.getElementById("span5"),
    str : document.getElementById("str5"),
    content : document.getElementById("content5"),
    caption : document.getElementById("caption5"),
    off: true,
  }
}

function openAndClose (tab) {

    if(tab.off == true) {
    /*Закрываем остальные открытые вкладки*/
    for (var key in tabs) {
       if (tabs[key].off !== true) {
          close(tabs[key]);
        }
    }
    /*Открываем вкладку*/
    open(tab);
  }  
    else {
    close(tab);
  }
}

function open(tab) {
/*Данный if проверяем высоту блока c контентом и производим анимацию открытия*/
       if (tab.px == 100) {
       var timerId = setInterval (function() {var p = tab.content.style.height; p = p.slice(0, -2); p = +p + 1; p = p + "px"; tab.content.style.height = p; }, 10);
       setTimeout(function() {clearInterval(timerId);}, 1000);
      }
      else {
       var timerId = setInterval (function() {var p = tab.content.style.height; p = p.slice(0, -2); p = +p + 1; p = p + "px"; tab.content.style.height = p; }, 7);
       setTimeout(function() {clearInterval(timerId);}, 1000);
   }
/* меняем у caption цвет, стрелку и  меняем свойство off на противоположное*/
tab.caption.setAttribute('class', "caption caption_action");
tab.str.setAttribute('class', "strup");
tab.off = false;
}

function close(tab) {
       if (tab.px == 100) {
       var timerId = setInterval (function() {var p = tab.content.style.height; p = p.slice(0, -2); p = +p - 1; p = p + "px"; tab.content.style.height = p; }, 10);
       setTimeout(function() {clearInterval(timerId);}, 1000);
      }
      else {
       var timerId = setInterval (function() {var p = tab.content.style.height; p = p.slice(0, -2); p = +p - 1; p = p + "px"; tab.content.style.height = p; }, 7);
       setTimeout(function() {clearInterval(timerId);}, 1000);
   }
/* меняем у caption цвет */
tab.caption.setAttribute('class', "caption captionn");
tab.str.setAttribute('class', "strdown");
tab.off = true;
}