if (document.querySelector("#map")) {
  var points = [["", "51.536145", "46.000848"]];
  var myMap;
  var oldCenter;
  var myCollection;
  var arrayBalloons = [];
  ymaps.ready(function () {
    myCollection = new ymaps.GeoObjectCollection();
    if (document.getElementById("map")) {
      // Помещаем карту в элемент DIV с id, равным «map»
      myMap = new ymaps.Map("map", {
        center: [51.536543, 46.000866], // Начальные значения центра карты
        zoom: 17, // Начальное значение зума карты
        // controls: ['zoomControl'],
      });
      if (window.innerWidth < 1024) {
        myMap.behaviors.disable("scrollZoom");
        // myMap.behaviors.disable('drag');
      }
      // Перебираем в цикле точки, которые надо добавить на карту
      for (i = 0; i < points.length; i++) {
        var myPlacemark = new ymaps.Placemark(
          [points[i][1], points[i][2]],
          {
            hintContent: points[i][0],
            balloonContent: points[i][0],
          },
          {
            // Необходимо указать данный тип макета.
            iconLayout: "default#image",
            // Своё изображение иконки метки.
            iconImageHref: "./img/pin.svg",
            hideIconOnBalloonOpen: false,
            iconImageSize: [40, 60],

            // iconImageOffset: [-120, -140],
          },
        );
        myMap.behaviors.disable("scrollZoom");

        myCollection.add(myPlacemark);
        myMap.geoObjects.add(myPlacemark);
      }
      // Добавляем точки на карту
      myMap.geoObjects.add(myCollection);
    }
  });
}

function setCenter(x, y) {
  ymaps.ready(function () {
    myMap.setCenter([x, y], 10, {
      checkZoomRange: false,
    });
  });
}

function setCenterPos(x, y, i) {
  ymaps.ready(function () {
    myMap.setCenter([x, y], 10, {
      checkZoomRange: false,
    });
    oldCenter = myMap.getCenter();
  });
  // $("body, html").animate(function () {
  //     scrollTo: $(".map-footer").offset().top
  // });
  // arrayBalloons[i].balloon.open();
  return false;
}

function overCenter(x, y) {
  ymaps.ready(function () {
    oldCenter = myMap.getCenter();
    setCenter(x, y);
  });
}
function oldPos() {
  ymaps.ready(function () {
    myMap.setCenter(oldCenter);
  });
}
