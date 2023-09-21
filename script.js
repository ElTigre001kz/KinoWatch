(function() {
    // Заменяем обработчик события DOMContentLoaded
    window.addEventListener("load", function() {
        // Ваш скрипт начинается здесь
        var jsonData = {
          "data1": ["https://st.kp.yandex.net/images/film_big/4664634.jpg", "Оппенгеймер (2023/BDRip)", " 8.5 / ", " 8.6", "История жизни американского физика Роберта Оппенгеймера, который стоял во главе первых разработок ядерного оружия.", "https://eltigre001kz.github.io/player.html?video=//8770197.svetacdn.in/VMbxNZKU6nyu/movie/67676&name=%D0%9E%D0%BF%D0%BF%D0%B5%D0%BD%D0%B3%D0%B5%D0%B9%D0%BC%D0%B5%D1%80&year=2023"],
          "data2": ["https://st.kp.yandex.net/images/film_big/1219177.jpg", "Человек-паук Паутина вселенных (2023/BDRip)", " 8.5 / ", " 8.7", "После воссоединения с Гвен Стейси дружелюбный сосед Человек-Паук попадает из Бруклина в Мультивселенную, где встречает команду Паучков, защищающих само её существование. Пытаясь справиться с новой угрозой, Майлз сталкивается с Пауками из других вселенных. Настаёт момент, когда ему необходимо решить, что значит быть героем, спасающим тех, кого любишь больше всего.", "https://eltigre001kz.github.io/player.html?video=//5075551.svetacdn.in/VMbxNZKU6nyu/movie/66529&name=%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%BF%D0%B0%D1%83%D0%BA:%20%D0%9F%D0%B0%D1%83%D1%82%D0%B8%D0%BD%D0%B0%20%D0%B2%D1%81%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D1%85&year=2023"],
          "data3": ["https://st.kp.yandex.net/images/film_big/.jpg", "Стражи Галактики. Часть 3 (2023/BDRip", " 8.2 / ", " 7.9", "Едва Стражи Галактики обосновываются на Забвении, на них нападает Адам Уорлок, обладающее сверхспособностями существо, созданное своей «матерью» и Верховной Жрицей суверенов Аишей. В бою Небуле удаётся победить Адама, но Ракета получает серьёзные травмы, а Стражи не могут его вылечить из-за встроенного чипа смерти, созданного компанией «Оргокорп». Они отправляются в главный штаб компании на поиски кода отмены.", "https://eltigre001kz.github.io/player.html?video=//587748.svetacdn.in/VMbxNZKU6nyu/movie/65963&name=%D0%A1%D1%82%D1%80%D0%B0%D0%B6%D0%B8%20%D0%93%D0%B0%D0%BB%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B8.%20%D0%A7%D0%B0%D1%81%D1%82%D1%8C%203&year=2023"],
		      "data4": ["https://st.kp.yandex.net/images/film_big/.jpg", " (2023/BDRip", "1 / ", "2", "гонки4", "https://eltigre001kz.github.io/player.html?video=//5337737.svetacdn.in/VMbxNZKU6nyu/movie/67568&name=%D0%9C%D0%B0%D1%88%D0%B0%20%D0%B8%20%D0%9C%D0%B5%D0%B4%D0%B2%D0%B5%D0%B4%D1%8C:%20%D0%A1%D0%BA%D0%B0%D0%B6%D0%B8%D1%82%D0%B5%20%C2%AB%D0%9E%D0%B9!%C2%BB&year=2023"],
	       	"data5": ["https://st.kp.yandex.net/images/film_big/.jpg", " (2023/BDRip", "6 / ", "5", "гонки5", "https://eltigre001kz.github.io/player.html?video=//299771.svetacdn.in/VMbxNZKU6nyu/movie/66504&name=%D0%9A%D1%83%D0%BD%D0%B3-%D1%84%D1%83%20%D0%B6%D0%B5%D1%80%D0%B5%D0%B1%D0%B5%D1%86&year=2023"],
		      "data6": ["https://st.kp.yandex.net/images/film_big/.jpg", " (2023/BDRip", "6 / ", "5", "гонки6", "https://eltigre001kz.github.io/player.html?video=//990332.svetacdn.in/VMbxNZKU6nyu/movie/66006&name=%D0%AF%D0%B3%D0%B0%20%D0%B8%20%D0%BA%D0%BD%D0%B8%D0%B3%D0%B0%20%D0%B7%D0%B0%D0%BA%D0%BB%D0%B8%D0%BD%D0%B0%D0%BD%D0%B8%D0%B9&year=2023"],
					"data7": ["https://st.kp.yandex.net/images/film_big/.jpg", " (2023/BDRip", "6 / ", "5", "гонки6", "https://eltigre001kz.github.io/player.html?video=//3051913.svetacdn.in/VMbxNZKU6nyu/movie/68479&name=%D0%9E%20%D1%87%D0%B5%D0%BC%20%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%D1%8F%D1%82%20%D0%BD%D0%B5%D0%B7%D0%BD%D0%B0%D0%BA%D0%BE%D0%BC%D1%86%D1%8B&year=2023"],
					"data8": ["https://st.kp.yandex.net/images/film_big/.jpg", " (2023/BDRip", "6 / ", "5", "гонки6", "https://eltigre001kz.github.io/player.html?video=//1257093.svetacdn.in/VMbxNZKU6nyu/movie/65155&name=%D0%94%D0%B6%D0%BE%D0%BD%20%D0%A3%D0%B8%D0%BA%204&year=2023"],
					"data9": ["https://st.kp.yandex.net/images/film_big/.jpg", " (2023/BDRip", "6 / ", "5", "гонки6", "https://eltigre001kz.github.io/player.html?video=//4891937.svetacdn.in/VMbxNZKU6nyu/movie/64674&name=%D0%9F%D1%80%D0%B0%D0%B2%D0%B5%D0%B4%D0%BD%D0%B8%D0%BA&year=2022"],
					"data10": ["https://st.kp.yandex.net/images/film_big/.jpg", " (2023/BDRip", "6 / ", "5", "гонки6", "https://eltigre001kz.github.io/player.html?video=//7642340.svetacdn.in/VMbxNZKU6nyu/movie/68451&name=%D0%92%D1%8B%D0%B7%D0%BE%D0%B2&year=2023"],
					"data11": ["https://st.kp.yandex.net/images/film_big/.jpg", " (2023/BDRip", "6 / ", "5", "гонки6", "https://eltigre001kz.github.io/player.html?video=//1556721.svetacdn.in/VMbxNZKU6nyu/movie/65130&name=%D0%9F%D0%BE%D0%B4%D0%B7%D0%B5%D0%BC%D0%B5%D0%BB%D1%8C%D1%8F%20%D0%B8%20%D0%B4%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D1%8B:%20%D0%A7%D0%B5%D1%81%D1%82%D1%8C%20%D1%81%D1%80%D0%B5%D0%B4%D0%B8%20%D0%B2%D0%BE%D1%80%D0%BE%D0%B2&year=2023"],
					"data12": ["https://st.kp.yandex.net/images/film_big/.jpg", " (2023/BDRip", "6 / ", "5", "гонки6", "https://eltigre001kz.github.io/player.html?video=//5445638.svetacdn.in/VMbxNZKU6nyu/movie/66321&name=%D0%9A%D1%82%D0%BE%20%D1%83%D0%B1%D0%B8%D0%BB%20BlackBerry&year=2023"],
					"data13": ["https://st.kp.yandex.net/images/film_big/.jpg", " (2023/BDRip", "6 / ", "5", "гонки6", "https://eltigre001kz.github.io/player.html?video=//1306489.svetacdn.in/VMbxNZKU6nyu/movie/66428&name=%D0%97%D0%B0%20%D0%BD%D0%B0%D1%81%20%D1%81%20%D0%B2%D0%B0%D0%BC%D0%B8&year=2023"],
					"data14": ["https://st.kp.yandex.net/images/film_big/.jpg", " (2023/BDRip", "6 / ", "5", "гонки6", "https://eltigre001kz.github.io/player.html?video=//2830924.svetacdn.in/VMbxNZKU6nyu/movie/66473&name=%D0%A3%D0%B8%D0%BA%D0%B5%D0%BD%D0%B4%20%D1%81%20%D0%B1%D0%B0%D1%82%D0%B5%D0%B9&year=2023"],
					"data15": ["https://st.kp.yandex.net/images/film_big/.jpg", " (2023/BDRip", "6 / ", "5", "гонки6", "https://eltigre001kz.github.io/player.html?video=//7395261.svetacdn.in/VMbxNZKU6nyu/movie/66838&name=%D0%A1%D0%BD%D0%B5%D0%B3%D0%B8%D1%80%D1%8C&year=2023"],
					"data16": ["hhttps://st.kp.yandex.net/images/film_big/.jpg", " (2023/BDRip", "6 / ", "5", "гонки6", "https://eltigre001kz.github.io/player.html?video=//359184.svetacdn.in/VMbxNZKU6nyu/movie/63548&name=%D0%93%D1%80%D0%BE%D0%BC:%20%D0%A2%D1%80%D1%83%D0%B4%D0%BD%D0%BE%D0%B5%20%D0%B4%D0%B5%D1%82%D1%81%D1%82%D0%B2%D0%BE&year=2023"],
					"data17": ["https://st.kp.yandex.net/images/film_big/.jpg", " (2023/BDRip", "6 / ", "5", "гонки6", "https://eltigre001kz.github.io/player.html?video=//8344014.svetacdn.in/VMbxNZKU6nyu/movie/66329&name=%D0%9D%D0%B5%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9:%20%D0%9C%D0%B0%D0%B9%D0%BA%D0%BB%20%D0%94%D0%B6.%20%D0%A4%D0%BE%D0%BA%D1%81&year=2023"],
					"data18": ["https://st.kp.yandex.net/images/film_big/.jpg", " (2023/BDRip", "6 / ", "5", "гонки6", "https://eltigre001kz.github.io/player.html?video=//6452777.svetacdn.in/VMbxNZKU6nyu/movie/67549&name=%D0%9A%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0%20%D1%87%D1%83%D0%B4%D0%B5%D1%81&year=2023"],
					"data19": ["https://st.kp.yandex.net/images/film_big/.jpg", " (2023/BDRip", "6 / ", "5", "гонки6", "https://eltigre001kz.github.io/player.html?video=//191357.svetacdn.in/VMbxNZKU6nyu/movie/64457&name=%D0%9F%D1%80%D0%B8%D0%BD%D1%86%20%D0%BF%D1%83%D1%81%D1%82%D1%8B%D0%BD%D0%B8&year=2023"],
					"data20": ["https://st.kp.yandex.net/images/film_big/.jpg", " (2023/BDRip", "6 / ", "5", "гонки6", "https://eltigre001kz.github.io/player.html?video=//4976694.svetacdn.in/VMbxNZKU6nyu/movie/67925&name=%D0%A2%D1%80%D0%B8%D0%BE%20%D0%B2%20%D0%BF%D0%B5%D1%80%D1%8C%D1%8F%D1%85%202&year=2023"],
        };

        function insertDataWithCSSSelectorsAndLoop() {
            // Ваш код вставки данных с использованием CSS селекторов и цикла здесь

            for (var i = 1; i <= 20; i++) {
	 // Ваш код для выполнения, если номер цикла меньше или равен 3
                var cssImg = "#img-" + i + "";
                var cssName = "#name-" + i + "";
                var cssKP = "#kp-rating-" + i + "";
                var cssImdb = "#imdb-rating-" + i + "";
                var cssOpis = "#opis-" + i + "";
                var cssUrl = "#url-" + i + "";;
                var dataKey = "data" + i;
                var data = jsonData[dataKey];

                if (data) {
                    var [img, name, rkp, rimdb, opis, url] = data;

                    function insertData(selector, data) {
                        var element = document.querySelector(selector);
                        if (element) {
                            element.textContent = data;
                        }
                    }

                    var imgElement = document.querySelector(cssImg);

                    if (imgElement) {
                        imgElement.addEventListener("load", function() {
                            imgElement.setAttribute("src", img);
                        });

                        imgElement.setAttribute("src", img);
                    }

                    var linkElement = document.querySelector(cssUrl);
                    if (linkElement) {
                        linkElement.setAttribute("href", url);
                    }

                    insertData(cssName, name);
                    insertData(cssKP, rkp);
                    insertData(cssImdb, rimdb);
                    insertData(cssOpis, opis);
        console.log("Цикл выполняется для номера " + i);
			console.log("Переменная" + number);
			number += 1;
    }
 }
 }
 // Вызываем функцию для вставки данных с использованием CSS селекторов и цикла
        insertDataWithCSSSelectorsAndLoop();
        // Ваш скрипт заканчивается здесь
    });
})();
