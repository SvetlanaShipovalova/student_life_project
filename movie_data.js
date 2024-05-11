const movie = [
  {
    name: "Улыбка Моно Лизы",
    image: "img/movies/Mona_Lisa_smile.png",
    description:
      "США, 1953, времена Холодной Войны. 30-летняя незамужняя Кэтрин Энн Уотсон приезжает из солнечной Калифорнии в колледж Уэллсли — престижный женский колледж в Массачусетсе, где начинает свою работу в качестве преподавателя истории искусства. После изучения правил школы Кэтрин понимает, что цель колледжа состоит в том, чтобы подготовить студенток к брачной жизни и, таким образом, стать идеальными женами и матерями, преданными семье: в полном противоречии с ее принципами. Преподавательница решает предложить девочкам новые взгляды с помощью искусства, тем самым начав вражду с преподавательским составов.",
  },
  {
    name: "Учитель года",
    image: "img/movies/Teacher_of_year.jpeg",
    description:
      "Мэтт Уорнер преподает биологию в средней школе. Самая большая его мечта — повторить великие достижения отца, который, прежде чем уйти из жизни в связи с сердечным приступом, был избран студентами как лучший учитель в течение 44 лет подряд. Однако все не так-то просто. Фильм, рассказывающий о трудностях профессиональных преподавателей на пути к успеху, напоминающий о том, что все возможно, если приложить усилия.",
  },
  {
    name: "Перед классом",
    image: "img/movies/in_front_of_class.jpg",
    description:
      "Брэд Коэн страдает синдромом Туретта, который мешает ему, что бы он ни делал. Но благодаря помощи матери и учителей ему удается с годами стать ценным учителем, даже если сперва его не принимают. История Брэда с его трудностями и непониманием со стороны окружающих помогает нам понять, насколько мы сильны и богаты духовно, и что все зависит от нас и от того, как мы сами будем распоряжаться своей судьбой.",
  },
  {
    name: "Хокинг",
    image: "img/movies/Hawking.jpg",
    description:
      "Фильм 2004 года режиссера Филиппа Мартина и продюсера BBC. Основан на реальных событиях из жизни британского астрофизика и космолога Стивена Хокинга, в частности, фильм повествует о начале его карьеры в Кембриджском университете. Несмотря на диагноз бокового амиотрофического склероза в возрасте всего 21 года, он поразил научный мир своей новаторской работой по природе Вселенной. Прекрасный пример того, что нам мешает только лень.",
  },
  {
    name: "Дом Гучи",
    image: "img/movies/Guchi_house.jpg",
    description:
      "Сюжет этого биографического фильма сосредоточен на подробном документировании неравного брака и долгой истории одной из самых знаковых модных компаний. Патриция, амбициозная девушка из бедной семьи, увлекается богатым Маурицио Гуччи, наследником семейного бизнеса. Отец молодого человека выступает против брака, но сын женится на своей возлюбленной, несмотря на противодействие родителей. Новая кровь приносит интриги, скандал и, в конце концов, потерю влияния в бизнесе",
  },
  {
    name: "Тесла",
    image: "img/movies/Tesla.jpg",
    description:
      "Имя Николы Теслы на слуху у всех, даже у тех, кто далек от науки. Однако о его непростой жизни, финансовых трудностях и могущественных противниках известно не так много. После увольнения из компании Томаса Эдисона главный герой больше не может смотреть свысока на самую грязную работу. Все меняется, когда он встречает Энн Морган. Никола открывает свою собственную компанию, и война между переменным и постоянным током приобретает новое измерение.",
  },
  {
    name: "Война токов",
    image: "img/movies/war_of_currents.jpg",
    description:
      "Основанный на подлинной истории противостояния Томаса Эдисона и Николы Теслы, этот драматический фильм объединяет эпизоды из биографий двух знаменитостей. В конце XIX века люди и предприятия все больше требовали новейшего изобретения - электричества, но между учеными и изобретателями не было единства. Эдисон считал, что за дорогим, но безопасным постоянным током будущее. Джордж Вестингауз и Никола Тесла, напротив, выступали за более опасный, но дешевый переменный ток. Победитель в этой научной битве должен был определиться на Всемирной выставке в Чикаго.",
  },
  {
    name: "Время первых",
    image: "img/movies/time_of_first.jpg",
    description:
      "Российский исторический фильм рассказывает об опасном и героическом полете советского экипажа в космос, который был не менее опасен, чем полет Гагарина. Соревнование между СССР и США продолжает охватывать пространство, которое никому не принадлежит. Советский Союз отправил корабль 'Восход-2' с экипажем в 1965 году, опередив новаторскую американскую миссию на Луну, задачей которой было оставить на борту. Миссия Павла Беляева и Алексея Леонова была выполнена, и Леонов стал первым человеком в космосе! Но какой ценой это было достигнуто, пресса молчала, но этот биографический художественный фильм рассказывает историю с участием самого Леонова.",
  },
  {
    name: "7 дней и ночей Моны",
    image: "img/movies/Mona_7_Days_and_Nights.jpg",
    description:
      "Основанная на автобиографической книге Колина Кларка 'Принц, танцовщица и я', трогательная драма о его встрече с легендарной белокурой актрисой Мэрилин Монро. Колин, которого высоко оценили за его режиссуру, был в восторге, когда ему предложили место третьего помощника режиссера в студии великого Лоуренса Оливье. Колин выполнял поручения самого сэра Оливье и прекрасной Мэрилин, которая приехала в Лондон на съемки. Воспоминания Кларка помогут - все ли мечты мужчины были счастливыми, какие боли были утоплены наркотиками и алкоголем?",
  },
  {
    name: "Области тьмы",
    image: "img/movies/Areas_of_Darkness.jpg",
    description:
      "Фильм про привычки успешных людей. Представьте, что ваш мозг работает со сверхвысокой скоростью и выдает всю информацию, которую вы когда-либо читали, видели, или слышали. Мозг Эдди Морра, главного героя фильма способен на такое. Картину можно воспринимать, как пошаговое руководство от успешного человека. Ведь в фильме показывается, как и что нужно делать, чтобы стать гением. Будь опрятным, занимайся спортом, постоянно развивайся и многое другое.",
  },
  {
    name: "Шоу Трумана",
    image: "img/movies/Truman_Show.jpg",
    description:
      "Психологическая притча о преодолении тех установок, которыми мы напичканы с девства. Характер и воля родителей, общественная мораль, окружающий уклад и масса других вещей. По сюжету главный герой фильма понимает, что всю жизнь жил в рамках отдельного шоу, в кругу ненастоящих людей. Он изо всех сил пытается убежать из этого мира, который полностью диктует его судьбу. В итоге оказывается, что Труман – это самый счастливый человек в этой картине. В отличие от остальных, он все это время жил своей жизнью. Это, скорее, продукт для интеллектуалов. Но он занимает достойное место среди лучших фильмов прошлого века.",
  },
];

export default movie;