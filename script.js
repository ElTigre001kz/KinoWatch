// var jsonData
(function() {
    window.addEventListener("load", function() {
        var jsonData = {
          "data1": ["https://st.kp.yandex.net/images/film_big/4664634.jpg", "Оппенгеймер (2023/BDRip)", " 8.5 / ", " 8.6", "История жизни американского физика Роберта Оппенгеймера, который стоял во главе первых разработок ядерного оружия.", "https://eltigre001kz.github.io/player.html?video=//8770197.svetacdn.in/VMbxNZKU6nyu/movie/67676&name=%D0%9E%D0%BF%D0%BF%D0%B5%D0%BD%D0%B3%D0%B5%D0%B9%D0%BC%D0%B5%D1%80&year=2023"],
          "data2": ["https://st.kp.yandex.net/images/film_big/1219177.jpg", "Человек-паук Паутина вселенных (2023/BDRip)", " 8.5 / ", " 8.7", "После воссоединения с Гвен Стейси дружелюбный сосед Человек-Паук попадает из Бруклина в Мультивселенную, где встречает команду Паучков, защищающих само её существование. Пытаясь справиться с новой угрозой, Майлз сталкивается с Пауками из других вселенных. Настаёт момент, когда ему необходимо решить, что значит быть героем, спасающим тех, кого любишь больше всего.", "https://eltigre001kz.github.io/player.html?video=//5075551.svetacdn.in/VMbxNZKU6nyu/movie/66529&name=%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%BF%D0%B0%D1%83%D0%BA:%20%D0%9F%D0%B0%D1%83%D1%82%D0%B8%D0%BD%D0%B0%20%D0%B2%D1%81%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D1%85&year=2023"],
          "data3": ["https://st.kp.yandex.net/images/film_big/1044280.jpg", "Стражи Галактики. Часть 3 (2023/BDRip)", " 8.2 / ", " 7.9", "Едва Стражи Галактики обосновываются на Забвении, на них нападает Адам Уорлок, обладающее сверхспособностями существо, созданное своей «матерью» и Верховной Жрицей суверенов Аишей. В бою Небуле удаётся победить Адама, но Ракета получает серьёзные травмы, а Стражи не могут его вылечить из-за встроенного чипа смерти, созданного компанией «Оргокорп». Они отправляются в главный штаб компании на поиски кода отмены.", "https://eltigre001kz.github.io/player.html?video=//587748.svetacdn.in/VMbxNZKU6nyu/movie/65963&name=%D0%A1%D1%82%D1%80%D0%B0%D0%B6%D0%B8%20%D0%93%D0%B0%D0%BB%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B8.%20%D0%A7%D0%B0%D1%81%D1%82%D1%8C%203&year=2023"],
	  "data4": ["https://st.kp.yandex.net/images/film_big/5264991.jpg", "Маша и Медведь: Скажите «Ой!» (2023/BDRip)", " 8.1 / ", " 4.9", "Впервые за много лет Медведь покидает свой уютный дом и оказывается в эпицентре светской жизни большого города. Сегодня он — свадебный фотограф, а Маша — его помощница. Прощайте, торжественные церемонии! Здравствуй, круговорот веселья, творческого беспорядка и праздника настоящей любви.", "https://eltigre001kz.github.io/player.html?video=//5337737.svetacdn.in/VMbxNZKU6nyu/movie/67568&name=%D0%9C%D0%B0%D1%88%D0%B0%20%D0%B8%20%D0%9C%D0%B5%D0%B4%D0%B2%D0%B5%D0%B4%D1%8C:%20%D0%A1%D0%BA%D0%B0%D0%B6%D0%B8%D1%82%D0%B5%20%C2%AB%D0%9E%D0%B9!%C2%BB&year=2023"],
	  "data5": ["https://st.kp.yandex.net/images/film_big/4632862.jpg", "Кунг-фу жеребец (2023/BDRip)", " 8.0 / ", " 6.3", "Знаменитый мастер боевых искусств и его верный скакун врываются в мир, где любая уличная драка заслуживает тиктока. Круто разделавшись с бандой коллекторов, они тотчас становятся супергероями в сети. Но вместе с любовью фанатов их находят и могущественные враги.", "https://eltigre001kz.github.io/player.html?video=//299771.svetacdn.in/VMbxNZKU6nyu/movie/66504&name=%D0%9A%D1%83%D0%BD%D0%B3-%D1%84%D1%83%20%D0%B6%D0%B5%D1%80%D0%B5%D0%B1%D0%B5%D1%86&year=2023"],
	  "data6": ["https://st.kp.yandex.net/images/film_big/5194326.jpg", "Яга и книга заклинаний (2023/BDRip)", " 7.8 / ", " 5.6", "Рыжеволосая ведьма Яга живет с котом-изобретателем и весёлыми домовыми в избушке на болотах Тридевятого царства и практикуется в магии. Чтобы научиться колдовать по-настоящему, ей не хватает Книги Заклинаний, похищенной у неё много лет назад злой колдуньей Белладонной. Внезапно судьба дает Яге шанс поквитаться с заклятой обидчицей, когда на пороге избушки появляется царевна Синеглазка. В чем сила истинного волшебства, и кто окажется настоящей злодейкой?", "https://eltigre001kz.github.io/player.html?video=//990332.svetacdn.in/VMbxNZKU6nyu/movie/66006&name=%D0%AF%D0%B3%D0%B0%20%D0%B8%20%D0%BA%D0%BD%D0%B8%D0%B3%D0%B0%20%D0%B7%D0%B0%D0%BA%D0%BB%D0%B8%D0%BD%D0%B0%D0%BD%D0%B8%D0%B9&year=2023"],
	  "data7": ["https://st.kp.yandex.net/images/film_big/4747499.jpg", "О чем говорят незнакомцы (2023/BDRip)", " 7.6 / ", " 6.6", "Три незнакомые семейные пары оказываются на групповом сеансе психотерапии. Но вместо встречи с психологом их ждет восемь конвертов с провокационными заданиями. Вечер забавных откровений о любви, ревности и сексе завершится неожиданно.", "https://eltigre001kz.github.io/player.html?video=//3051913.svetacdn.in/VMbxNZKU6nyu/movie/68479&name=%D0%9E%20%D1%87%D0%B5%D0%BC%20%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%D1%8F%D1%82%20%D0%BD%D0%B5%D0%B7%D0%BD%D0%B0%D0%BA%D0%BE%D0%BC%D1%86%D1%8B&year=2023"],
	  "data8": ["https://st.kp.yandex.net/images/film_big/1267348.jpg", "Джон Уик 4 (2023/BDRip)", " 7.6 / ", " 7.8", "Оставляя за собой горы трупов, Джон Уик продолжает скрываться от всевозможных наёмных убийц, и теперь охоту на него возглавляет молодой и честолюбивый член Правления по имени Маркиз. Два управляющих отелями «Континенталь» в Нью-Йорке и Осаке, решившие по старой дружбе помочь своенравному киллеру, уже жестоко за это поплатились, но внезапно Джон узнаёт способ выбраться из этой, казалось бы, безвыходной ситуации.", "https://eltigre001kz.github.io/player.html?video=//1257093.svetacdn.in/VMbxNZKU6nyu/movie/65155&name=%D0%94%D0%B6%D0%BE%D0%BD%20%D0%A3%D0%B8%D0%BA%204&year=2023"],
	  "data9": ["https://st.kp.yandex.net/images/film_big/4484927.jpg", "Праведник (2023/BDRip)", " 7.5 / ", " 6.4", "1942 год. Офицер Красной армии Николай Киселев получает приказ вывести с оккупированных белорусских земель за линию фронта свыше двухсот евреев — стариков, женщин и детей, чудом избежавших расправы. Этим измученным голодом людям, потерявшим родных и едва не сошедшим с ума от пережитого ужаса, предстоит пройти пешком по лесным тропам сотни километров, чтобы обрести надежду на спасение и веру в будущее.", "https://eltigre001kz.github.io/player.html?video=//4891937.svetacdn.in/VMbxNZKU6nyu/movie/64674&name=%D0%9F%D1%80%D0%B0%D0%B2%D0%B5%D0%B4%D0%BD%D0%B8%D0%BA&year=2022"],
	  "data10": ["https://st.kp.yandex.net/images/film_big/4448519.jpg", "Вызов (2023/BDRip)", " 7.5 / ", " 6.6", "Торакальный хирург Женя за месяц должна подготовиться к космическому полету, чтобы отправиться на МКС и спасти заболевшего космонавта. Ей придётся преодолеть неуверенность и страхи, а также провести сложнейшую операцию в условиях невесомости, от которой зависят шансы космонавта вернуться на Землю живым.", "https://eltigre001kz.github.io/player.html?video=//7642340.svetacdn.in/VMbxNZKU6nyu/movie/68451&name=%D0%92%D1%8B%D0%B7%D0%BE%D0%B2&year=2023"],
	  "data11": ["https://st.kp.yandex.net/images/film_big/762646.jpg", "Подземелья и драконы: Честь среди воров (2023/BDRip)", " 7.4 / ", " 7.3", "Бард и авантюрист Эдгин Дарвис вместе с боевой подругой Хольгой сбегает из тюрьмы и отправляется повидать дочку, которую последние годы опекал его бывший подельник Фордж. По прибытии выясняется, что тот при поддержке подозрительной колдуньи Софины не только сказочно разбогател и сделался губернатором, но и настроил дочь против отца, да и вообще — не против избавиться от Эдгина и Хольги. Умудрившись отбиться от палачей, отчаянная парочка планирует страшную месть, а для этого им придётся объединиться с рассеянным магом Саймоном, ловкой друидкой Дорик и отыскать считавшийся утерянным волшебный шлем.", "https://eltigre001kz.github.io/player.html?video=//1556721.svetacdn.in/VMbxNZKU6nyu/movie/65130&name=%D0%9F%D0%BE%D0%B4%D0%B7%D0%B5%D0%BC%D0%B5%D0%BB%D1%8C%D1%8F%20%D0%B8%20%D0%B4%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D1%8B:%20%D0%A7%D0%B5%D1%81%D1%82%D1%8C%20%D1%81%D1%80%D0%B5%D0%B4%D0%B8%20%D0%B2%D0%BE%D1%80%D0%BE%D0%B2&year=2023"],
	  "data12": ["https://st.kp.yandex.net/images/film_big/5096161.jpg", "Кто убил BlackBerry (2023/BDRip)", " 7.4 / ", " 7.4", "Ватерлоо, Канада, 1996 год. Основатели маленькой компании Research in Motion пытаются найти финансирование революционной разработки — пейджер, телефон и компьютер в одном устройстве — но стабильно проваливают все питчинги. Когда к ним присоединяется уволенный из большой компании, где они накануне делали презентацию, менеджер и устраивает эффективное управление, вынудив недисциплинированных программистов буквально за ночь из электронных игрушек и калькулятора смастерить рабочий прототип, тут же находится заинтересованный инвестор. Так рождается первый в мире смартфон BlackBerry, который стремительно завоёвывает рынок и делает своих создателей миллиардерами.", "https://eltigre001kz.github.io/player.html?video=//5445638.svetacdn.in/VMbxNZKU6nyu/movie/66321&name=%D0%9A%D1%82%D0%BE%20%D1%83%D0%B1%D0%B8%D0%BB%20BlackBerry&year=2023"],
	  "data13": ["https://st.kp.yandex.net/images/film_big/4856092.jpg", "За нас с вами (2023/BDRip)", " 7.3 / ", " ", "Москва, 1952 год, середина октября, только что закончился XIX съезд КПСС. Коммунальная квартира на Большой Пироговке. В одной из комнат живет семейство Петкевичей: Ариадна с мужем Борисом и ее родители — профессор философии Павел Казимирович и его жена Ангелина Федоровна. За те несколько месяцев, что остались до смерти Сталина, семья переживает череду драматических событий. Но на фоне страшного времени, антисемитских настроений, сфабрикованного «дела врачей», доносов и стукачей, остаются люди, проживающие свою жизнь, не потеряв чести и достоинства. Сложные повороты судьбы не смогут помешать нашей героине остаться чистым и искренним человеком и, в итоге, неожиданно, встретить любовь.", "https://eltigre001kz.github.io/player.html?video=//1306489.svetacdn.in/VMbxNZKU6nyu/movie/66428&name=%D0%97%D0%B0%20%D0%BD%D0%B0%D1%81%20%D1%81%20%D0%B2%D0%B0%D0%BC%D0%B8&year=2023"],
	  "data14": ["https://st.kp.yandex.net/images/film_big/4477067.jpg", "Уикенд с батей (2023/BDRip)", " 7.1 / ", " 5.7", "Себастьян планирует провести уикенд со своей очаровательной невестой Элли и ее семьей в их роскошном фамильном поместье, где есть собственное поле для гольфа, шикарная яхта и даже ручной павлин. Отличный план на длинные выходные, но Элли настаивает, чтобы Себастьян также пригласил своего отца Сальво, эксцентричного парикмахера родом из Италии. Культурный шок ждет всех. Но ведь родственников не выбирают?", "https://eltigre001kz.github.io/player.html?video=//2830924.svetacdn.in/VMbxNZKU6nyu/movie/66473&name=%D0%A3%D0%B8%D0%BA%D0%B5%D0%BD%D0%B4%20%D1%81%20%D0%B1%D0%B0%D1%82%D0%B5%D0%B9&year=2023"],
	  "data15": ["https://st.kp.yandex.net/images/film_big/4485219.jpg", "Снегирь (2023/BDRip)", " 7.1 / ", " 7.1", "Студенты мореходки Никита и Максим отправляются проходить практику на рыболовное судно «Снегирь». Суровые моряки совсем не рады, что теперь им придётся не только учить двух подростков, но и следить, как бы те не испортили снаряжение и не свалились за борт в холодные волны Баренцева моря. Пока новенькие с переменным успехом притираются к команде и новым условиям, улов оставляет желать лучшего, и капитан решает ненадолго заплыть в территориальные воды Норвегии.", "https://eltigre001kz.github.io/player.html?video=//7395261.svetacdn.in/VMbxNZKU6nyu/movie/66838&name=%D0%A1%D0%BD%D0%B5%D0%B3%D0%B8%D1%80%D1%8C&year=2023"],
          "data16": ["https://st.kp.yandex.net/images/film_big/4771048.jpg", "Гром: Трудное детство (2023/BDRip)", " 7.1 / ", " ", "Юный Игорь Гром ищет варианты срочно заработать большую сумму и ввязывается в сомнительную авантюру на пару с другом Игнатом. Тем временем его отец вместе с будущим начальником петербургской полиции Фёдором Прокопенко охотится за боссом криминального мира по прозвищу Анубис.", "https://eltigre001kz.github.io/player.html?video=//359184.svetacdn.in/VMbxNZKU6nyu/movie/63548&name=%D0%93%D1%80%D0%BE%D0%BC:%20%D0%A2%D1%80%D1%83%D0%B4%D0%BD%D0%BE%D0%B5%20%D0%B4%D0%B5%D1%82%D1%81%D1%82%D0%B2%D0%BE&year=2023"],
	  "data17": ["https://st.kp.yandex.net/images/film_big/5051069.jpg", "Неизменный: Майкл Дж. Фокс (2023/BDRip)", " 8.4 / ", " 8.1", "Рассказ об актёре Майкле Дж. Фоксе и его борьбе с болезнью Паркинсона.", "https://eltigre001kz.github.io/player.html?video=//8344014.svetacdn.in/VMbxNZKU6nyu/movie/66329&name=%D0%9D%D0%B5%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9:%20%D0%9C%D0%B0%D0%B9%D0%BA%D0%BB%20%D0%94%D0%B6.%20%D0%A4%D0%BE%D0%BA%D1%81&year=2023"],
	  "data18": ["https://st.kp.yandex.net/images/film_big/4510158.jpg", "Комната чудес (2023/BDRip)", " 7.9 / ", " 6.5", "У Тельмы есть все — успешная карьера, семья, любимый сын. Но однажды мальчика случайно сбивает грузовик, и он оказывается в коме. Чувствуя, что есть шанс пробудить сына к жизни, Тельма решает исполнять все его мечты, записывая это на камеру. Теперь ей предстоит перейти с закрытыми глазами перекресток в Токио, сыграть в футбол с его любимой командой и даже потрогать грудь математички… Увидит ли он это все своими собственными глазами?", "https://eltigre001kz.github.io/player.html?video=//6452777.svetacdn.in/VMbxNZKU6nyu/movie/67549&name=%D0%9A%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0%20%D1%87%D1%83%D0%B4%D0%B5%D1%81&year=2023"],
	  "data19": ["https://st.kp.yandex.net/images/film_big/4987235.jpg", "Принц пустыни (2023/BDRip)", " 8.0 / ", " 6.4", "12-летний Зоди живет в пустыне со своим племенем, дружит с ветеринаром Джулией и не очень любит ходить в школу. Жизнь мальчика переворачивается с ног на голову, когда он обнаруживает осиротевшего верблюжонка. Так зарождается удивительная дружба, которая быстро оказывается под угрозой: местный браконьер Тарек жаждет заработать на молодом верблюде, ведь тот оказался исключительным бегуном и может выиграть не одно соревнование. Чтобы уберечь четвероногого друга, Зоди отправляется в опасное путешествие через всю Сахару. Их ждет множество опасностей — стычки с бандитами, песчаные бури и соленое море — и большая цель на горизонте: стать участниками легендарной верблюжьей гонки в Абу-Даби.", "https://eltigre001kz.github.io/player.html?video=//191357.svetacdn.in/VMbxNZKU6nyu/movie/64457&name=%D0%9F%D1%80%D0%B8%D0%BD%D1%86%20%D0%BF%D1%83%D1%81%D1%82%D1%8B%D0%BD%D0%B8&year=2023"],
	 "data20": ["https://st.kp.yandex.net/images/film_big/5117298.jpg", "Трио в перьях 2 (2023/BDRip)", " 8.0 / ", " 5.2", "Наслаждаясь зимовкой на Большом озере в Северной Африке, Ричард узнает, что в этот раз ему не доверят такую почетную и ответственную миссию, как возглавить перелет стаи аистов домой, на север. Не желая с этим мириться, он убегает в самостоятельное путешествие, полное опасностей и приключений. По пути Ричарду предстоит встретить попавшую в беду стаю воробьев, угодившую в плен злобных птиц марабу под предводительством жадного павлина Замано. Для обретения свободы пернатым придется объединиться в дружную команду, проявить смелость, изобретательность и смекалку, чтобы разгадать ребус и найти таинственный клад с драгоценностями.", "https://eltigre001kz.github.io/player.html?video=//4976694.svetacdn.in/VMbxNZKU6nyu/movie/67925&name=%D0%A2%D1%80%D0%B8%D0%BE%20%D0%B2%20%D0%BF%D0%B5%D1%80%D1%8C%D1%8F%D1%85%202&year=2023"],
        };

        function insertDataWithCSSSelectorsAndLoop() {

            for (var i = 1; i <= 20; i++) {
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
    }
 }
 }
        insertDataWithCSSSelectorsAndLoop();
    });
})();


// (function() {
//     window.addEventListener("load", function() {
//         function loadGoogleScriptData() {
//       var url = 'https://script.google.com/macros/s/AKfycbwALH5nSRNeazsRm4MF_kAYtRAHvZWUXY8siFkbqArjrrv610ttIzC7E1GhVQ4Lbp9GgA/exec'; // Замените на URL вашего сервиса скриптов
//       fetch(url)
//         .then(response => response.json())
//         .then(data => {
//           var jsonData = JSON.stringify(data, null, 2);
//           // document.getElementById('data').textContent = jsonData;
// 	 console.log("Данные получены: " + jsonData);
// 		// insertDataWithCSSSelectorsAndLoop(jsonData);
//         })
//         .catch(error => {
//           console.error("Ошибка загрузки данных: " + error);
//         });
//     }

     // Вызываем функцию при загрузке страницы
    // window.onload = loadGoogleScriptData;
//         loadGoogleScriptData();
//     });
// })();



    // Функция для загрузки данных из Google Apps Script
  //   function loadGoogleScriptData() {
  //     var url = 'https://script.google.com/macros/s/AKfycbwALH5nSRNeazsRm4MF_kAYtRAHvZWUXY8siFkbqArjrrv610ttIzC7E1GhVQ4Lbp9GgA/exec'; // Замените на URL вашего сервиса скриптов
  //     fetch(url)
  //       .then(response => response.json())
  //       .then(data => {
  //         var jsonData = JSON.stringify(data, null, 2);
  //         // document.getElementById('data').textContent = jsonData;
	 // console.log("Данные получены: " + jsonData);
		// insertDataWithCSSSelectorsAndLoop(jsonData);
  //       })
  //       .catch(error => {
  //         console.error("Ошибка загрузки данных: " + error);
  //       });
  //   }

     
  //   window.onload = loadGoogleScriptData;
	    

// function insertDataWithCSSSelectorsAndLoop(jsonData) {

//             for (var i = 1; i <= 20; i++) {
//                 var cssImg = "#img-" + i + "";
//                 var cssName = "#name-" + i + "";
//                 var cssKP = "#kp-rating-" + i + "";
//                 var cssImdb = "#imdb-rating-" + i + "";
//                 var cssOpis = "#opis-" + i + "";
//                 var cssUrl = "#url-" + i + "";;
//                 var dataKey = "data" + i;
//                 var data = jsonData[dataKey];

//                 if (data) {
//                     var [img, name, rkp, rimdb, opis, url] = data;

//                     function insertData(selector, data) {
//                         var element = document.querySelector(selector);
//                         if (element) {
//                             element.textContent = data;
//                         }
//                     }

//                     var imgElement = document.querySelector(cssImg);

//                     if (imgElement) {
//                         imgElement.addEventListener("load", function() {
//                             imgElement.setAttribute("src", img);
//                         });

//                         imgElement.setAttribute("src", img);
//                     }

//                     var linkElement = document.querySelector(cssUrl);
//                     if (linkElement) {
//                         linkElement.setAttribute("href", url);
//                     }

//                     insertData(cssName, name);
//                     insertData(cssKP, rkp);
//                     insertData(cssImdb, rimdb);
//                     insertData(cssOpis, opis);
//         console.log("Цикл выполняется для номера " + i);
//     }
//  }
//  }

