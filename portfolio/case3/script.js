const rawProducts = [
  { name: "Чоколайт Шоколадный чизкейк", weight: "55 г", price: 255, stock: 18 },
  { name: "Чоколайт Ваниль", weight: "55 г", price: 255, stock: 18 },
  { name: "Зефир в шоколаде Пломбир", weight: "40 г", price: 145, stock: 20 },
  { name: "Зефир в шоколаде Кекс с маком", weight: "40 г", price: 145, stock: 20 },
  { name: "Зефир в шоколаде Кленовый сироп", weight: "40 г", price: 145, stock: 20 },
  { name: "Зефир в шоколаде Брауни", weight: "40 г", price: 145, stock: 20 },
  { name: "Зефир в шоколаде Фисташка", weight: "40 г", price: 145, stock: 20 },
  { name: "Зефир в шоколаде Голубая матча", weight: "40 г", price: 145, stock: 20 },
  { name: "Зефир в шоколаде Тирамису", weight: "40 г", price: 145, stock: 20 },
  { name: "Зефир в шоколаде Кокос", weight: "40 г", price: 145, stock: 20 },
  { name: "Зефир в шоколаде Земляника", weight: "40 г", price: 145, stock: 20 },
  { name: "Зефир в шоколаде Лимон", weight: "40 г", price: 145, stock: 20 },
  {
    name: "Зефир в шоколаде Ваниль в белой глазури",
    weight: "40 г",
    price: 145,
    stock: 20,
  },
  {
    name: "Зефир в шоколаде Крем-Брюле в белой глазури",
    weight: "40 г",
    price: 145,
    stock: 20,
  },
  { name: "Торт-пирожное Шоколадный с фундуком", weight: "100 г", price: 290, stock: 18 },
  { name: "Торт-пирожное Фисташково-малиновый", weight: "100 г", price: 290, stock: 18 },
  { name: "Торт-пирожное Шоколадный бархат", weight: "120 г", price: 290, stock: 18 },
  { name: "Торт-пирожное Чизкейк", weight: "100 г", price: 290, stock: 18 },
  { name: "Торт-пирожное Трюфель", weight: "100 г", price: 290, stock: 18 },
  { name: "Торт-пирожное Тирамису", weight: "100 г", price: 290, stock: 18 },
  { name: "Торт-пирожное Прага", weight: "120 г", price: 290, stock: 18 },
  { name: "Торт-пирожное Медок", weight: "100 г", price: 290, stock: 18 },
  { name: "Торт-пирожное Малиновый бархат", weight: "120 г", price: 290, stock: 18 },
  { name: "Торт-пирожное Крокембуш", weight: "100 г", price: 290, stock: 18 },
  { name: "Торт-пирожное Киевский", weight: "120 г", price: 290, stock: 18 },
  { name: "Торт-пирожное Добош", weight: "120 г", price: 290, stock: 18 },
  { name: "Торт-пирожное Брауни", weight: "100 г", price: 290, stock: 18 },
  { name: "Торт-пирожное Наполеон", weight: "80 г", price: 290, stock: 18 },
  { name: "Торт-пирожное Песочные полоски", weight: "90 г", price: 290, stock: 18 },
  { name: "Торт-пирожное Ленинградское", weight: "90 г", price: 290, stock: 18 },
  { name: "Торт-пирожное Венское", weight: "90 г", price: 290, stock: 18 },
  { name: "Торт-пирожное Картошка", weight: "80 г", price: 250, stock: 18 },
  { name: "Пирожное без сахара Брауни в шоколаде", weight: "100 г", price: 295, stock: 8 },
  {
    name: "Пирожное без сахара Тирамису в белой глазури",
    weight: "70 г",
    price: 295,
    stock: 4,
  },
  {
    name: "Пирожное без сахара Шоколадное с фундуком в шоколаде",
    weight: "70 г",
    price: 295,
    stock: 4,
  },
  {
    name: "Пирожное Корзиночка с малиной в шоколаде",
    weight: "50 г",
    price: 210,
    stock: 18,
  },
  {
    name: "Пирожное Корзиночка с клубникой в белой глазури",
    weight: "50 г",
    price: 210,
    stock: 18,
  },
];

const categoryMeta = {
  chokolight: {
    label: "Чоколит",
    tone: "aqua",
    image: "./изображения/ifoods-social-cheesecake-square.jpg",
    filterId: "chokolight",
  },
  zefir: {
    label: "Зефир в шоколаде",
    tone: "blush",
    image: "./изображения/ifoods-pack-zefir-brownie-chocolate-glaze-front.jpg",
    filterId: "zefir",
  },
  cakes: {
    label: "Торт-пирожные",
    tone: "vanilla",
    image: "./изображения/ifoods-social-chocolate-velvet-square.jpg",
    filterId: "cakes",
  },
  baskets: {
    label: "Корзиночки",
    tone: "peach",
    image: "./изображения/ifoods-social-berry-layer-cake-square.jpg",
    filterId: "baskets",
  },
};

const curatedHits = new Set([
  "Торт-пирожное Фисташково-малиновый",
  "Торт-пирожное Малиновый бархат",
  "Торт-пирожное Тирамису",
  "Торт-пирожное Прага",
  "Пирожное Корзиночка с малиной в шоколаде",
  "Зефир в шоколаде Брауни",
  "Торт-пирожное Шоколадный бархат",
]);

const curatedNew = new Set([
  "Зефир в шоколаде Голубая матча",
  "Пирожное Корзиночка с клубникой в белой глазури",
  "Торт-пирожное Крокембуш",
]);

const bundleLineup = [
  "Зефир в шоколаде Брауни",
  "Торт-пирожное Фисташково-малиновый",
  "Торт-пирожное Тирамису",
];

const imageByRule = [
  [/(Фисташково-малиновый)/i, "./изображения/ifoods-social-berry-roll-square.jpg"],
  [/(Шоколадный с фундуком)/i, "./изображения/ifoods-social-chocolate-roll-square.jpg"],
  [/(Шоколадный бархат)/i, "./изображения/ifoods-social-chocolate-velvet-square.jpg"],
  [/(Малиновый бархат)/i, "./изображения/ifoods-social-raspberry-velvet-square.jpg"],
  [/(Тирамису)/i, "./изображения/ifoods-social-tiramisu-square.jpg"],
  [/(Чизкейк)/i, "./изображения/ifoods-social-cheesecake-square.jpg"],
  [/(Наполеон)/i, "./изображения/ifoods-social-napoleon-square.jpg"],
  [/(Прага)/i, "./изображения/ifoods-social-prague-cake-square.jpg"],
  [/(Крокембуш)/i, "./изображения/ifoods-social-croquembouche-square.jpg"],
  [/(Картошка)/i, "./изображения/ifoods-social-kartoshka-square.jpg"],
  [/(Трюфель)/i, "./изображения/ifoods-social-truffle-cake-square.jpg"],
  [/(Добош)/i, "./изображения/ifoods-social-layer-cake-chocolate-drizzle-square.jpg"],
  [/(Медок)/i, "./изображения/ifoods-social-crumb-layer-cake-square.jpg"],
  [/(Песочные полоски)/i, "./изображения/ifoods-social-pesochnoe-pirozhnoe-square.jpg"],
  [/(Ленинградское)/i, "./изображения/ifoods-pack-leningrad-cake-front.jpg"],
  [/(Венское)/i, "./изображения/ifoods-pack-viennese-pastry-front.jpg"],
  [/(Шоколадное с фундуком в шоколаде)/i, "./изображения/ifoods-social-chocolate-cake-square.jpg"],
  [/(Брауни в шоколаде)/i, "./изображения/ifoods-social-chocolate-cake-square.jpg"],
  [/(Брауни)/i, "./изображения/ifoods-pack-zefir-brownie-chocolate-glaze-front.jpg"],
  [/(Зефир)/i, "./изображения/ifoods-pack-zefir-vanilla-white-glaze-front.jpg"],
  [/(Корзиночка с малиной)/i, "./изображения/ifoods-social-berry-layer-cake-square.jpg"],
  [/(Корзиночка с клубникой)/i, "./изображения/ifoods-social-berry-layer-cake-square.jpg"],
  [/(Чоколайт Ваниль)/i, "./изображения/ifoods-social-orange-cream-cake-square.jpg"],
];

const cardMediaTuningByName = {
  "Торт-пирожное Шоколадный бархат": {
    x: "-3%",
    y: "0%",
    scale: "1.1",
    hoverScale: "1.14",
  },
  "Торт-пирожное Чизкейк": {
    x: "-2%",
    y: "1%",
    scale: "1.08",
    hoverScale: "1.12",
  },
  "Торт-пирожное Трюфель": {
    x: "-2%",
    y: "2%",
    scale: "1.08",
    hoverScale: "1.12",
  },
  "Торт-пирожное Тирамису": {
    x: "-4%",
    y: "1%",
    scale: "1.08",
    hoverScale: "1.12",
  },
  "Торт-пирожное Прага": {
    x: "-4%",
    y: "5%",
    scale: "1.09",
    hoverScale: "1.13",
  },
  "Торт-пирожное Медок": {
    x: "-6%",
    y: "2%",
    scale: "1.08",
    hoverScale: "1.12",
  },
  "Торт-пирожное Малиновый бархат": {
    x: "0%",
    y: "-7%",
    scale: "1.11",
    hoverScale: "1.15",
  },
  "Торт-пирожное Крокембуш": {
    x: "-3%",
    y: "3%",
    scale: "1.08",
    hoverScale: "1.12",
  },
};

const featuredStartName = "Торт-пирожное Фисташково-малиновый";
const ADMIN_STORAGE_KEY = "ifoods-admin-catalog-v1";
const CATALOG_API = "./api/catalog.php";
const UPLOAD_API = "./api/upload.php";
const priceFormatter = new Intl.NumberFormat("ru-RU");
const heroVideoIntro = {
  label: "I-FOODS",
  title: "Десерты, которые хочется выбрать сразу",
  summary: "Знакомые вкусы, аккуратная подача и десерты для себя, дома и в подарок.",
};
const heroNarratives = {
  chokolight: "Небольшой десерт с мягкой текстурой и знакомым вкусом.",
  zefir: "Нежный порционный формат, который легко взять к чаю или добавить в набор.",
  cakes: "Слоистый десерт с насыщенным вкусом и аккуратной подачей.",
  baskets: "Небольшой ягодный десерт для подарка, набора или спонтанной покупки.",
};
const featuredLeadBadge = {
  chokolight: "Чоколит",
  zefir: "Зефир",
  cakes: "Пирожное",
  baskets: "Корзиночка",
};

const deliveryConfig = {
  methods: {
    courier: {
      id: "courier",
      label: "Курьер",
      summary: "Привезём заказ домой, в офис или к удобному времени.",
      note: "Работаем ежедневно. Интервал выбирается при оформлении.",
      intervals: ["10:00–13:00", "13:00–16:00", "16:00–20:00"],
      zones: {
        city: {
          id: "city",
          label: "По городу",
          fee: 350,
          freeFrom: 2500,
          minOrder: 1200,
          eta: "сегодня или на следующий день",
        },
        suburb: {
          id: "suburb",
          label: "Ближайший пригород",
          fee: 550,
          freeFrom: 3500,
          minOrder: 2000,
          eta: "на следующий день после подтверждения",
        },
      },
      paymentMethods: ["online", "courier_card"],
    },
    pickup: {
      id: "pickup",
      label: "Самовывоз",
      summary: "Заберите заказ самостоятельно после подтверждения.",
      note: "Собираем заказ после звонка менеджера. Готовность обычно занимает до 2 часов.",
      pickupDetails: "Точку выдачи и окно получения подтверждаем вместе с заказом.",
      paymentMethods: ["online", "pickup_on_site"],
    },
  },
  paymentMethods: {
    online: {
      id: "online",
      label: "Онлайн картой",
      note: "Подходит для курьера и самовывоза. Ссылку на оплату отправим после подтверждения заказа.",
    },
    courier_card: {
      id: "courier_card",
      label: "Картой курьеру",
      note: "Подтвердим доступность терминала вместе с заказом.",
    },
    pickup_on_site: {
      id: "pickup_on_site",
      label: "При получении",
      note: "Картой или наличными в точке выдачи.",
    },
  },
  confirmation: {
    lead: "После заказа свяжемся в течение 15 минут и подтвердим состав, стоимость и способ получения.",
    shelfLife: "Если десерт чувствителен ко времени хранения, менеджер напомнит рекомендации при подтверждении.",
  },
};

function createAddressFields() {
  return {
    city: "",
    street: "",
    house: "",
    entrance: "",
    floor: "",
    apartment: "",
  };
}

function formatAddressLabel(address) {
  const parts = [];

  if (address.city) parts.push(address.city.trim());
  if (address.street) parts.push(address.street.trim());
  if (address.house) parts.push(`дом ${address.house.trim()}`);
  if (address.entrance) parts.push(`подъезд ${address.entrance.trim()}`);
  if (address.floor) parts.push(`этаж ${address.floor.trim()}`);
  if (address.apartment) parts.push(`кв. ${address.apartment.trim()}`);

  return parts.join(", ");
}

function createCheckoutState() {
  return {
    isOpen: false,
    customerName: "",
    phone: "",
    deliveryMethod: "courier",
    deliveryZone: "city",
    deliveryInterval: deliveryConfig.methods.courier.intervals[2],
    address: createAddressFields(),
    paymentMethod: "online",
    comment: "",
    consent: false,
    errors: {},
    order: null,
  };
}

const currentPage = document.body?.dataset?.page ?? "storefront";

function sanitizeAdminProductRecord(record = {}, index = 0) {
  const categoryKey = typeof record.categoryKey === "string" && categoryMeta[record.categoryKey]
    ? record.categoryKey
    : "cakes";
  const price = Number(record.price);
  const stock = Number(record.stock);
  const image = typeof record.image === "string" && record.image.trim()
    ? record.image.trim()
    : categoryMeta[categoryKey].image;

  return {
    id: typeof record.id === "string" && record.id.trim()
      ? record.id.trim()
      : `custom-${Date.now()}-${index + 1}`,
    name: typeof record.name === "string" && record.name.trim()
      ? record.name.trim()
      : "Новый десерт",
    weight: typeof record.weight === "string" && record.weight.trim()
      ? record.weight.trim()
      : "100 г",
    price: Number.isFinite(price) ? Math.max(0, Math.round(price)) : 290,
    stock: Number.isFinite(stock) ? Math.max(0, Math.round(stock)) : 12,
    categoryKey,
    image,
    mediaMode: record.mediaMode === "pack" ? "pack" : getMediaMode(image),
    summary: typeof record.summary === "string" ? record.summary : "",
    details: typeof record.details === "string" ? record.details : "",
    statusText: typeof record.statusText === "string" ? record.statusText : "",
    isHit: Boolean(record.isHit),
    isNew: Boolean(record.isNew),
    isBundle: Boolean(record.isBundle),
    isLineup: Boolean(record.isLineup ?? record.isInLineup),
    isPublished: record.isPublished !== false,
    mediaTuning: {
      x: typeof record.mediaTuning?.x === "string" ? record.mediaTuning.x : "0%",
      y: typeof record.mediaTuning?.y === "string" ? record.mediaTuning.y : "0%",
      scale: typeof record.mediaTuning?.scale === "string" ? record.mediaTuning.scale : "1.08",
      hoverScale: typeof record.mediaTuning?.hoverScale === "string" ? record.mediaTuning.hoverScale : "1.12",
    },
  };
}

function createDefaultCategories() {
  return Object.entries(categoryMeta).map(([id, meta], index) => ({
    id,
    label: meta.label,
    description: heroNarratives[id] ?? "",
    image: meta.image,
    order: index + 1,
    isVisible: true,
    tone: meta.tone,
    filterId: meta.filterId,
  }));
}

const defaultBundleSecondaryImage = "./изображения/ifoods-pack-leningrad-cake-front.jpg";

function createDefaultBundles() {
  return [{
    id: "bundle-1",
    name: "Соберите свой набор",
    description: "Выберите зефир, добавьте пирожное или чоколит и соберите коробку для себя, к чаю или в подарок.",
    image: "./изображения/ifoods-pack-viennese-pastry-front.jpg",
    imageSecondary: defaultBundleSecondaryImage,
    productIds: [],
    isVisible: false,
  }];
}

function createDefaultHero() {
  return {
    topTitle: "Десерты нового поколения",
    topSubtitle: "Зефир, пирожные и наборы для дома, к чаю и в подарок",
    topText: "Зефир, пирожные, чоколит и наборы для дома, к чаю и в подарок.",
    stageLabel: heroVideoIntro.label,
    stageTitle: heroVideoIntro.title,
    stageSubtitle: heroVideoIntro.summary,
    videoUrl: "./Видео/IMG_8089.mp4",
  };
}

const storyMomentPlacementLabels = {
  "after-lineup": "После «Линейка»",
  "after-highlights": "После «Хиты продаж»",
  "before-about": "Перед «О бренде»",
};
const dualStoryMomentIds = new Set(["moment-lineup", "moment-hits", "moment-gift"]);

function createDefaultStoryMoments() {
  return [
    {
      id: "moment-hits",
      placement: "after-highlights",
      isVisible: true,
      isReverse: true,
      stageLabel: "К чаю",
      stageTitle: "Десерты, которые хочется поставить на стол",
      stageSubtitle: "Аккуратная подача и привычные вкусы — удобно дома, в офисе и в гостях.",
      noteLabel: "Популярный выбор",
      noteText: "Выше — позиции, с которых чаще всего начинают заказ.",
      linkHref: "#catalog",
      linkLabel: "Весь каталог",
      videoUrl: "./uploads/videos/serving.mp4",
      sideTextFirst: "Эти позиции чаще всего выбирают первыми: они хорошо подходят к чаю и легко сочетаются между собой в одном заказе.",
      sideTextSecond: "Если хотите начать без долгого выбора, ориентируйтесь на этот блок — это проверенная база для домашнего стола и офиса.",
      companionLabel: heroVideoIntro.label,
      companionTitle: heroVideoIntro.title,
      companionSubtitle: heroVideoIntro.summary,
      companionNoteLabel: "Первое знакомство",
      companionNoteText: "Ниже уже ждут зефир, пирожные и чоколайт.",
      companionVideoUrl: "./Видео/IMG_8089.mp4",
    },
    {
      id: "moment-gift",
      placement: "before-about",
      isVisible: true,
      isReverse: false,
      stageLabel: "Наборы",
      stageTitle: "Собрать к чаю или в подарок за пару кликов",
      stageSubtitle: "Готовые сочетания вкусов — когда хочется порадовать без долгого выбора.",
      noteLabel: "Подарок",
      noteText: "Наборы удобно заказать вместе с отдельными десертами из каталога.",
      linkHref: "#collections",
      linkLabel: "Смотреть наборы",
      videoUrl: "./uploads/videos/gift-box.mp4",
      sideTextFirst: "Наборы удобно собирать, когда нужен аккуратный подарок: вкусы уже сбалансированы, а подача сразу выглядит завершенной.",
      sideTextSecond: "Такой формат экономит время и помогает быстро выбрать вариант для гостей, семьи или небольшого знака внимания.",
      companionLabel: heroVideoIntro.label,
      companionTitle: heroVideoIntro.title,
      companionSubtitle: heroVideoIntro.summary,
      companionNoteLabel: "Первое знакомство",
      companionNoteText: "Ниже уже ждут зефир, пирожные и чоколайт.",
      companionVideoUrl: "./Видео/IMG_8089.mp4",
    },
  ];
}

function sanitizeStoryMomentRecord(record = {}, index = 0) {
  const defaults = createDefaultStoryMoments()[index] ?? createDefaultStoryMoments()[0];
  const placement = typeof record.placement === "string" && storyMomentPlacementLabels[record.placement]
    ? record.placement
    : defaults.placement;

  return {
    id: typeof record.id === "string" && record.id.trim() ? record.id.trim() : (defaults.id ?? `moment-${index + 1}`),
    placement,
    isVisible: record.isVisible !== false,
    isReverse: Boolean(record.isReverse),
    stageLabel: typeof record.stageLabel === "string" && record.stageLabel.trim()
      ? record.stageLabel.trim()
      : defaults.stageLabel,
    stageTitle: typeof record.stageTitle === "string" && record.stageTitle.trim()
      ? record.stageTitle.trim()
      : defaults.stageTitle,
    stageSubtitle: typeof record.stageSubtitle === "string"
      ? record.stageSubtitle
      : defaults.stageSubtitle,
    noteLabel: typeof record.noteLabel === "string" && record.noteLabel.trim()
      ? record.noteLabel.trim()
      : defaults.noteLabel,
    noteText: typeof record.noteText === "string" ? record.noteText : defaults.noteText,
    linkHref: typeof record.linkHref === "string" ? record.linkHref.trim() : defaults.linkHref,
    linkLabel: typeof record.linkLabel === "string" ? record.linkLabel.trim() : defaults.linkLabel,
    videoUrl: typeof record.videoUrl === "string" ? record.videoUrl.trim() : defaults.videoUrl,
    sideTextFirst: typeof record.sideTextFirst === "string" ? record.sideTextFirst : defaults.sideTextFirst,
    sideTextSecond: typeof record.sideTextSecond === "string" ? record.sideTextSecond : defaults.sideTextSecond,
    companionLabel: typeof record.companionLabel === "string" && record.companionLabel.trim()
      ? record.companionLabel.trim()
      : defaults.companionLabel,
    companionTitle: typeof record.companionTitle === "string" && record.companionTitle.trim()
      ? record.companionTitle.trim()
      : defaults.companionTitle,
    companionSubtitle: typeof record.companionSubtitle === "string"
      ? record.companionSubtitle
      : defaults.companionSubtitle,
    companionNoteLabel: typeof record.companionNoteLabel === "string" && record.companionNoteLabel.trim()
      ? record.companionNoteLabel.trim()
      : defaults.companionNoteLabel,
    companionNoteText: typeof record.companionNoteText === "string"
      ? record.companionNoteText
      : defaults.companionNoteText,
    companionVideoUrl: typeof record.companionVideoUrl === "string"
      ? record.companionVideoUrl.trim()
      : defaults.companionVideoUrl,
  };
}

function sanitizeStoryMoments(records) {
  const source = Array.isArray(records) && records.length > 0 ? records : createDefaultStoryMoments();
  return source.map((record, index) => sanitizeStoryMomentRecord(record, index));
}

function sanitizeCategoryRecord(record = {}, index = 0) {
  const id = typeof record.id === "string" && record.id.trim()
    ? record.id.trim()
    : `category-${index + 1}`;
  const fallback = categoryMeta[id] ?? {};

  return {
    id,
    label: typeof record.label === "string" && record.label.trim()
      ? record.label.trim()
      : (fallback.label ?? "Категория"),
    description: typeof record.description === "string" ? record.description : "",
    image: typeof record.image === "string" && record.image.trim()
      ? record.image.trim()
      : (fallback.image ?? ""),
    order: Number.isFinite(Number(record.order)) ? Math.max(0, Math.round(Number(record.order))) : index + 1,
    isVisible: record.isVisible !== false,
    tone: typeof record.tone === "string" ? record.tone : (fallback.tone ?? "aqua"),
    filterId: typeof record.filterId === "string" ? record.filterId : (fallback.filterId ?? id),
  };
}

function sanitizeBundleRecord(record = {}, index = 0) {
  const id = typeof record.id === "string" && record.id.trim()
    ? record.id.trim()
    : `bundle-${index + 1}`;

  const image = typeof record.image === "string" ? record.image.trim() : "";
  const imageSecondary = typeof record.imageSecondary === "string" && record.imageSecondary.trim()
    ? record.imageSecondary.trim()
    : (image || defaultBundleSecondaryImage);

  return {
    id,
    name: typeof record.name === "string" && record.name.trim() ? record.name.trim() : "Набор",
    description: typeof record.description === "string" ? record.description : "",
    image,
    imageSecondary,
    productIds: Array.isArray(record.productIds)
      ? record.productIds.filter((productId) => typeof productId === "string" && productId.trim())
      : [],
    isVisible: record.isVisible !== false,
  };
}

const aboutImageKeys = ["main", "secondary", "tertiary"];

const aboutImageLabels = {
  main: "Большое фото (сверху)",
  secondary: "Среднее фото",
  tertiary: "Малое фото (внизу)",
};

function createDefaultAbout() {
  return {
    kicker: "Почему I-FOODS",
    title: "Десерты нового поколения, которые выглядят по-настоящему аппетитно",
    lead: "I-FOODS — это не про ограничения, а про удовольствие: знакомые вкусы, аккуратная подача и коллекция, в которой легко найти десерт для себя или в подарок.",
    principles: [
      { title: "Красиво с первого взгляда", text: "Их хочется рассмотреть ещё до первого укуса." },
      { title: "Легко выбрать", text: "Зефир, пирожные, чоколит и наборы сразу разделены по понятным коллекциям." },
      { title: "Честно и по делу", text: "Мы говорим о вкусе, весе и формате без лишних обещаний." },
      { title: "Удобно заказать", text: "Нужный десерт легко найти, добавить в корзину и собрать в набор." },
    ],
    images: {
      main: {
        src: "./изображения/ifoods-social-raspberry-velvet-square.jpg",
        alt: "Малиновый бархат",
      },
      secondary: {
        src: "./изображения/ifoods-pack-zefir-brownie-chocolate-glaze-front.jpg",
        alt: "Зефир в шоколаде",
      },
      tertiary: {
        src: "./изображения/ifoods-social-chocolate-velvet-square.jpg",
        alt: "Шоколадный бархат",
      },
    },
  };
}

function sanitizeAboutImage(record = {}, fallback = { src: "", alt: "" }) {
  return {
    src: typeof record.src === "string" && record.src.trim() ? record.src.trim() : fallback.src,
    alt: typeof record.alt === "string" ? record.alt.trim() : fallback.alt,
  };
}

function sanitizeAboutRecord(record = {}) {
  const defaults = createDefaultAbout();
  const principles = Array.isArray(record.principles)
    ? record.principles.slice(0, 4).map((item, index) => {
      const fallback = defaults.principles[index] ?? { title: "", text: "" };
      return {
        title: typeof item?.title === "string" && item.title.trim() ? item.title.trim() : fallback.title,
        text: typeof item?.text === "string" ? item.text.trim() : fallback.text,
      };
    })
    : [];

  while (principles.length < 4) {
    principles.push({ ...defaults.principles[principles.length] });
  }

  const images = { ...defaults.images };
  if (record.images && typeof record.images === "object") {
    aboutImageKeys.forEach((key) => {
      images[key] = sanitizeAboutImage(record.images[key], defaults.images[key]);
    });
  }

  return {
    kicker: typeof record.kicker === "string" && record.kicker.trim() ? record.kicker.trim() : defaults.kicker,
    title: typeof record.title === "string" && record.title.trim() ? record.title.trim() : defaults.title,
    lead: typeof record.lead === "string" ? record.lead.trim() : defaults.lead,
    principles,
    images,
  };
}

function sanitizeHeroRecord(record = {}) {
  const defaults = createDefaultHero();

  return {
    topTitle: typeof record.topTitle === "string" && record.topTitle.trim()
      ? record.topTitle.trim()
      : defaults.topTitle,
    topSubtitle: typeof record.topSubtitle === "string" ? record.topSubtitle : defaults.topSubtitle,
    topText: typeof record.topText === "string" ? record.topText : defaults.topText,
    stageLabel: typeof record.stageLabel === "string" && record.stageLabel.trim()
      ? record.stageLabel.trim()
      : defaults.stageLabel,
    stageTitle: typeof record.stageTitle === "string" && record.stageTitle.trim()
      ? record.stageTitle.trim()
      : defaults.stageTitle,
    stageSubtitle: typeof record.stageSubtitle === "string"
      ? record.stageSubtitle
      : defaults.stageSubtitle,
    videoUrl: typeof record.videoUrl === "string" && record.videoUrl.trim()
      ? record.videoUrl.trim()
      : defaults.videoUrl,
  };
}

function createAdminStore() {
  return {
    overrides: {},
    customProducts: [],
    featuredProductId: "",
    categories: createDefaultCategories(),
    bundles: createDefaultBundles(),
    hero: createDefaultHero(),
    about: createDefaultAbout(),
    storyMoments: createDefaultStoryMoments(),
  };
}

function sanitizeAdminStore(rawStore) {
  const store = createAdminStore();
  const source = rawStore && typeof rawStore === "object" ? rawStore : {};

  if (source.overrides && typeof source.overrides === "object") {
    store.overrides = Object.fromEntries(
      Object.entries(source.overrides)
        .filter(([productId]) => typeof productId === "string" && productId.trim())
        .map(([productId, value]) => [productId, sanitizeAdminProductRecord({ ...value, id: productId })]),
    );
  }

  store.customProducts = Array.isArray(source.customProducts)
    ? source.customProducts.map((product, index) => sanitizeAdminProductRecord(product, index))
    : [];

  store.featuredProductId = typeof source.featuredProductId === "string" ? source.featuredProductId : "";

  if (Array.isArray(source.categories) && source.categories.length > 0) {
    store.categories = source.categories.map((category, index) => sanitizeCategoryRecord(category, index));
  }

  if (Array.isArray(source.bundles) && source.bundles.length > 0) {
    store.bundles = source.bundles.map((bundle, index) => sanitizeBundleRecord(bundle, index));
  }

  if (source.hero && typeof source.hero === "object") {
    store.hero = sanitizeHeroRecord(source.hero);
  }

  if (source.about && typeof source.about === "object") {
    store.about = sanitizeAboutRecord(source.about);
  }

  if (Array.isArray(source.moments) && source.moments.length > 0) {
  store.storyMoments = sanitizeStoryMoments(source.moments);
} else if (Array.isArray(source.storyMoments) && source.storyMoments.length > 0) {
  store.storyMoments = sanitizeStoryMoments(source.storyMoments);
}

  return store;
}

function loadAdminStoreLocal() {
  try {
    return sanitizeAdminStore(JSON.parse(localStorage.getItem(ADMIN_STORAGE_KEY) || "null"));
  } catch {
    return createAdminStore();
  }
}

function isAdminStoreEmpty(store) {
  return !store.featuredProductId
    && !Object.keys(store.overrides).length
    && !store.customProducts.length;
}

async function fetchAdminStoreFromServer() {
  const response = await fetch(CATALOG_API, {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("catalog-fetch-failed");
  }

  const payload = await response.json();
  return sanitizeAdminStore(payload);
}

async function hydrateAdminStore() {
  try {
    const remoteStore = await fetchAdminStoreFromServer();
    const localStore = loadAdminStoreLocal();

    if (isAdminStoreEmpty(remoteStore) && !isAdminStoreEmpty(localStore) && isAdminAuthenticated()) {
      state.admin.store = localStore;
      const migrated = await saveAdminStore();
      return migrated ? state.admin.store : remoteStore;
    }

    return remoteStore;
  } catch {
    return loadAdminStoreLocal();
  }
}

function isAdminAuthenticated() {
  return window.ifoodsAuth?.isAuthenticated?.() === true;
}

function createAdminState() {
  return {
    isEnabled: currentPage === "admin" && isAdminAuthenticated(),
    activeTab: "products",
    selectedProductId: "",
    draft: null,
    status: "Изменения сохраняются на сервере для всех посетителей.",
    store: createAdminStore(),
  };
}

const HOME_PREVIEW_PRODUCT_COUNT = 4;

const state = {
  selectedFilter: "all",
  visibleCount: 8,
  selectedProductId: null,
  featuredQuantity: 1,
  cart: loadCart(),
  featuredTab: "description",
  checkout: createCheckoutState(),
  admin: createAdminState(),
};

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem("ifoods-cart") || "{}");
  } catch {
    return {};
  }
}

function saveCart() {
  localStorage.setItem("ifoods-cart", JSON.stringify(state.cart));
}

function formatPrice(value) {
  return `${priceFormatter.format(value)} ₽`;
}

function slugify(text) {
  const translit = {
    а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "e", ж: "zh", з: "z",
    и: "i", й: "y", к: "k", л: "l", м: "m", н: "n", о: "o", п: "p", р: "r",
    с: "s", т: "t", у: "u", ф: "f", х: "h", ц: "ts", ч: "ch", ш: "sh",
    щ: "sch", ъ: "", ы: "y", ь: "", э: "e", ю: "yu", я: "ya",
  };

  return text
    .toLowerCase()
    .split("")
    .map((char) => translit[char] ?? char)
    .join("")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function resolveCategoryKey(categoryKey, name) {
  if (typeof categoryKey === "string" && categoryMeta[categoryKey]) {
    return categoryKey;
  }

  const inferred = getCategoryKey(name);
  return categoryMeta[inferred] ? inferred : "cakes";
}

function getCategoryKey(name) {
  if (name.startsWith("Чоколит") || name.startsWith("Чоколайт")) return "chokolight";
  if (name.startsWith("Зефир в шоколаде")) return "zefir";
  if (name.startsWith("Торт-пирожное")) return "cakes";
  if (name.startsWith("Пирожное без сахара")) return "cakes";
  if (name.includes("Корзиночка")) return "baskets";
  return "cakes";
}

function getVariant(name, categoryKey) {
  const prefixes = {
    chokolight: "Чоколит ",
    zefir: "Зефир в шоколаде ",
    cakes: "Торт-пирожное ",
    baskets: "Пирожное ",
  };

  const prefix = prefixes[categoryKey] ?? "";
  return name.startsWith(prefix) ? name.slice(prefix.length).trim() : name.trim();
}

function getImage(name, categoryKey) {
  const rule = imageByRule.find(([regex]) => regex.test(name));
  return rule ? rule[1] : categoryMeta[categoryKey].image;
}

function getMediaMode(image) {
  if (image.includes("ifoods-pack-")) return "pack";
  return "social";
}

function buildCollections(product) {
  const list = [];
  if (curatedHits.has(product.name)) list.push("hits");
  if (curatedNew.has(product.name)) list.push("new");
  if (product.stock <= 4) list.push("low");
  return list;
}

function buildSummary(product) {
  const intro = {
    chokolight: "Небольшой десерт с мягкой текстурой и знакомым вкусом.",
    zefir: "Нежный зефир в глазури для чая, кофе или небольшого подарка.",
    cakes: "Многослойный десерт с насыщенным вкусом и красивой подачей.",
    baskets: "Небольшое пирожное с ягодным акцентом и аккуратной подачей.",
  };

  return `${intro[product.categoryKey]} Вкус — ${product.variant}. Вес ${product.weight}.`;
}

function buildStatusText(product) {
  if (product.stock <= 4) {
    return `Сейчас в наличии ${product.stock} шт. Если позиция нравится, лучше не откладывать.`;
  }
  return `Сейчас в наличии ${product.stock} шт. Этого хватит и для первого заказа, и для набора.`;
}

function buildDetailsText(product) {
  return `${product.category}. Вес ${product.weight}. Цена — ${formatPrice(product.price)}.`;
}

function normalizePercentValue(value, fallback = 0) {
  const numeric = Number.parseFloat(String(value ?? "").replace("%", ""));
  const safeValue = Number.isFinite(numeric) ? Math.min(30, Math.max(-30, numeric)) : fallback;
  return `${safeValue}%`;
}

function normalizeScaleValue(value, fallback = 1.08) {
  const numeric = Number.parseFloat(String(value ?? ""));
  const safeValue = Number.isFinite(numeric) ? Math.min(1.6, Math.max(0.75, numeric)) : fallback;
  return safeValue.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
}

function normalizeMediaTuning(mediaTuning, mediaMode) {
  if (mediaMode !== "social") return null;

  const source = mediaTuning && typeof mediaTuning === "object" ? mediaTuning : {};
  return {
    x: normalizePercentValue(source.x, 0),
    y: normalizePercentValue(source.y, 0),
    scale: normalizeScaleValue(source.scale, 1.08),
    hoverScale: normalizeScaleValue(source.hoverScale, 1.12),
  };
}

function buildCardMediaStyle(product) {
  if (product.mediaMode !== "social" || !product.mediaTuning) return "";

  const style = [
    `--card-media-shift-x:${product.mediaTuning.x}`,
    `--card-media-shift-y:${product.mediaTuning.y}`,
    `--card-media-scale:${product.mediaTuning.scale}`,
    `--card-media-scale-hover:${product.mediaTuning.hoverScale}`,
  ].join(";");

  return ` style="${style}"`;
}

function normalizeProductRecord(record) {
  const safeName = typeof record.name === "string" && record.name.trim()
    ? record.name.trim()
    : "Новый десерт";
  const categoryKey = resolveCategoryKey(record.categoryKey, safeName);
  const safeWeight = typeof record.weight === "string" && record.weight.trim()
    ? record.weight.trim()
    : "100 г";
  const numericPrice = Number(record.price);
  const numericStock = Number(record.stock);
  const price = Number.isFinite(numericPrice) ? Math.max(0, Math.round(numericPrice)) : 290;
  const stock = Number.isFinite(numericStock) ? Math.max(0, Math.round(numericStock)) : 12;
  const category = categoryMeta[categoryKey].label;
  const variant = getVariant(safeName, categoryKey);
  const image = typeof record.image === "string" && record.image.trim()
    ? record.image.trim()
    : getImage(safeName, categoryKey);
  const mediaMode = record.mediaMode === "pack" ? "pack" : getMediaMode(image);
  const isHit = Boolean(record.isHit);
  const isNew = Boolean(record.isNew);
  const isBundle = Boolean(record.isBundle);
  const isLineup = Boolean(record.isLineup ?? record.isInLineup);
  const isLow = stock <= 4;
  const collections = [];

  if (isHit) collections.push("hits");
  if (isNew) collections.push("new");
  if (isLow) collections.push("low");

  return {
    id: String(record.id),
    source: record.source === "custom" ? "custom" : "base",
    name: safeName,
    slug: slugify(safeName),
    weight: safeWeight,
    price,
    stock,
    categoryKey,
    category,
    variant,
    image,
    mediaMode,
    summary: typeof record.summary === "string" && record.summary.trim()
      ? record.summary.trim()
      : buildSummary({ ...record, name: safeName, categoryKey, variant, weight: safeWeight }),
    details: typeof record.details === "string" && record.details.trim()
      ? record.details.trim()
      : buildDetailsText({ category, weight: safeWeight, price }),
    statusText: typeof record.statusText === "string" && record.statusText.trim()
      ? record.statusText.trim()
      : buildStatusText({ stock }),
    collections,
    isHit,
    isNew,
    isBundle,
    isLineup,
    isPublished: record.isPublished !== false,
    isLow,
    mediaTuning: {
      x: "0%",
      y: "0%",
      scale: "1.0",
      hoverScale: "1.0",
    },
  };
}

function createBaseProduct(item, index) {
  const categoryKey = getCategoryKey(item.name);
  const collections = buildCollections(item);

  return normalizeProductRecord({
    ...item,
    id: `product-${index + 1}`,
    source: "base",
    categoryKey,
    image: getImage(item.name, categoryKey),
    mediaMode: getMediaMode(getImage(item.name, categoryKey)),
    isHit: collections.includes("hits"),
    isNew: collections.includes("new"),
    isBundle: bundleLineup.includes(item.name),
    isPublished: item.isPublished !== false && !String(item.name).startsWith("Торт-рулет"),
    mediaTuning: cardMediaTuningByName[item.name] ?? null,
  });
}

function extractAdminSnapshot(product) {
  return {
    id: product.id,
    name: product.name,
    weight: product.weight,
    price: product.price,
    stock: product.stock,
    categoryKey: product.categoryKey,
    image: product.image,
    mediaMode: product.mediaMode,
    summary: product.summary,
    details: product.details,
    statusText: product.statusText,
    isHit: product.isHit,
    isNew: product.isNew,
    isBundle: product.isBundle,
    isLineup: product.isLineup,
    isPublished: product.isPublished,
    mediaTuning: product.mediaTuning ?? {
      x: "0%",
      y: "0%",
      scale: "1.08",
      hoverScale: "1.12",
    },
  };
}

function createAdminDraftFromProduct(product) {
  if (!product) return null;

  return createAdminDraftTextState({
    ...extractAdminSnapshot(product),
    source: product.source,
    isFeatured: state.admin.store.featuredProductId === product.id,
  });
}

function createEmptyAdminDraft() {
  const baseProduct = normalizeProductRecord({
    id: `custom-${Date.now()}`,
    source: "custom",
    name: "Новый десерт",
    weight: "100 г",
    price: 290,
    stock: 12,
    categoryKey: "cakes",
    image: categoryMeta.cakes.image,
    mediaMode: "social",
    summary: "Короткий текст для карточки.",
    details: "",
    statusText: "",
    isHit: false,
    isNew: true,
    isBundle: false,
    isPublished: true,
    mediaTuning: { x: "0%", y: "0%", scale: "1.08", hoverScale: "1.12" },
  });

  return createAdminDraftTextState({
    ...extractAdminSnapshot(baseProduct),
    source: "custom",
    isFeatured: false,
  });
}

function findProductById(productId) {
  return allProducts.find((product) => product.id === productId) ?? null;
}

function findPublishedProductById(productId) {
  return products.find((product) => product.id === productId) ?? null;
}

function resolveFeaturedProduct(list = products) {
  return list.find((product) => product.id === state.admin.store.featuredProductId)
    ?? list.find((product) => product.name === featuredStartName)
    ?? list[0]
    ?? null;
}

async function saveAdminStore() {
  const payload = state.admin.store;

  try {
    localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // Локальный кэш не обязателен, если сервер принял изменения.
  }

  if (!isAdminAuthenticated()) {
    state.admin.status = "Изменения сохранены только в этом браузере.";
    return true;
  }

  const token = window.ifoodsAuth?.getAdminToken?.();
  if (!token) {
    state.admin.status = "Нет доступа для сохранения на сервер.";
    return false;
  }

  try {
    const response = await fetch(CATALOG_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Admin-Token": token,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("catalog-save-failed");
    }

    state.admin.status = "Изменения сохранены. Они видны всем посетителям сайта.";
    return true;
  } catch {
    state.admin.status = "Не удалось сохранить на сервер. Проверьте PHP и папки data/uploads.";
    showToast("Сервер не принял изменения. Убедитесь, что на хостинге включён PHP.");
    return false;
  }
}

let allProducts = [];
let products = [];
let categoryCards = [];

const filters = [
  { id: "all", label: "Вся витрина", predicate: () => true },
  { id: "hits", label: "Хиты", predicate: (product) => product.isHit },
  { id: "cakes", label: "Торт-пирожные", predicate: (product) => product.categoryKey === "cakes" },
  { id: "zefir", label: "Зефир в шоколаде", predicate: (product) => product.categoryKey === "zefir" },
  { id: "baskets", label: "Корзиночки", predicate: (product) => product.categoryKey === "baskets" },
  { id: "chokolight", label: "Чоколит", predicate: (product) => product.categoryKey === "chokolight" },
];

function rebuildCatalogData() {
  const baseProducts = rawProducts.map((item, index) => {
    const baseProduct = createBaseProduct(item, index);
    const override = state.admin.store.overrides[baseProduct.id];
    if (!override) return baseProduct;

    return normalizeProductRecord({
      ...baseProduct,
      ...override,
      id: baseProduct.id,
      source: "base",
      mediaTuning: override.mediaTuning ?? baseProduct.mediaTuning,
    });
  });

  const customProducts = state.admin.store.customProducts.map((product, index) => normalizeProductRecord({
    ...sanitizeAdminProductRecord(product, index),
    source: "custom",
  }));

  allProducts = [...baseProducts, ...customProducts];
  products = allProducts.filter((product) => product.isPublished);

  const categoryCounts = products.reduce((acc, product) => {
    acc[product.categoryKey] = (acc[product.categoryKey] || 0) + 1;
    return acc;
  }, {});

  const categories = getStoreCategories()
    .filter((category) => category.isVisible !== false)
    .sort((left, right) => left.order - right.order);

  categoryCards = categories.map((category) => ({
    key: category.id,
    label: category.label,
    description: category.description,
    tone: category.tone || categoryMeta[category.id]?.tone || "aqua",
    image: category.image || categoryMeta[category.id]?.image || "",
    filterId: category.filterId || category.id,
    count: categoryCounts[category.id] || 0,
    mediaMode: getMediaMode(category.image || categoryMeta[category.id]?.image || ""),
  }));

  const featuredProduct = resolveFeaturedProduct(products);
  if (!products.some((product) => product.id === state.selectedProductId)) {
    state.selectedProductId = featuredProduct?.id ?? null;
    state.featuredQuantity = 1;
  }

  if (!allProducts.some((product) => product.id === state.admin.selectedProductId)) {
    state.admin.selectedProductId = allProducts[0]?.id ?? "";
    state.admin.draft = state.admin.selectedProductId
      ? createAdminDraftFromProduct(findProductById(state.admin.selectedProductId))
      : null;
  }

  state.lineupProducts = sortLineupProducts(
    products.filter((product) => product.isLineup),
  ).slice(0, HOME_PREVIEW_PRODUCT_COUNT);
}

const featuredTabs = [
  { id: "description", label: "О десерте" },
  { id: "details", label: "Вес и цена" },
  { id: "status", label: "Наличие" },
];

function getStoreCategories() {
  return state.admin.store.categories?.length
    ? state.admin.store.categories
    : createDefaultCategories();
}

function getStoreBundles() {
  return state.admin.store.bundles?.length
    ? state.admin.store.bundles
    : createDefaultBundles();
}

function getStoreHero() {
  return sanitizeHeroRecord(state.admin.store.hero ?? createDefaultHero());
}

function getStoreAbout() {
  return sanitizeAboutRecord(state.admin.store.about ?? createDefaultAbout());
}

function getStoreStoryMoments() {
  return sanitizeStoryMoments(state.admin.store.storyMoments ?? createDefaultStoryMoments());
}

function getVisibleBundles() {
  return getStoreBundles().filter((bundle) => bundle.isVisible !== false);
}

function getPrimaryBundle() {
  return getVisibleBundles()[0] ?? null;
}

function resolveBundleProducts(bundle) {
  if (!bundle) return [];

  const selected = bundle.productIds
    .map((productId) => findPublishedProductById(productId))
    .filter(Boolean);

  if (selected.length > 0) {
    return selected.slice(0, 8);
  }

  return products.filter((product) => product.isBundle).slice(0, 4);
}

function bindAdminDom() {
  if (currentPage !== "admin") return;
  dom.adminToggle = document.getElementById("adminToggle");
  dom.adminSection = document.getElementById("admin");
  dom.adminStatus = document.getElementById("adminStatus");
  dom.adminTabs = document.getElementById("adminTabs");
  dom.adminProductsPanel = document.getElementById("adminProductsPanel");
  dom.adminCategoriesPanel = document.getElementById("adminCategoriesPanel");
  dom.adminBundlesPanel = document.getElementById("adminBundlesPanel");
  dom.adminHeroPanel = document.getElementById("adminHeroPanel");
  dom.adminMomentsPanel = document.getElementById("adminMomentsPanel");
  dom.adminAboutPanel = document.getElementById("adminAboutPanel");
  dom.adminRoot = dom.adminProductsPanel;
}

const dom = {
  categoriesGrid: document.getElementById("categoriesGrid"),
  hitsGrid: document.getElementById("hitsGrid"),
  productsGrid: document.getElementById("productsGrid"),
  cartSection: document.getElementById("cart"),
  cartList: document.getElementById("cartList"),
  cartMeta: document.getElementById("cartMeta"),
  cartSubtotal: document.getElementById("cartSubtotal"),
  cartDelivery: document.getElementById("cartDelivery"),
  cartDeliveryLabel: document.getElementById("cartDeliveryLabel"),
  cartTotal: document.getElementById("cartTotal"),
  cartSummaryNote: document.getElementById("cartSummaryNote"),
  checkoutButton: document.getElementById("checkoutButton"),
  checkoutSection: document.getElementById("checkout"),
  checkoutRoot: document.getElementById("checkoutRoot"),
  checkoutStatus: document.getElementById("checkoutStatus"),
  clearCartButton: document.getElementById("clearCartButton"),
  featuredPanel: document.getElementById("featuredPanel"),
  bundlesRoot: document.getElementById("bundlesRoot"),
  filterBar: document.getElementById("filterBar"),
  catalogMeta: document.getElementById("catalogMeta"),
  loadMoreButton: document.getElementById("loadMoreButton"),
  cartCount: document.getElementById("cartCount"),
  cartPill: document.getElementById("cartPill"),
  toast: document.getElementById("toast"),
  totalProducts: document.getElementById("totalProducts"),
  totalCategories: document.getElementById("totalCategories"),
  showHitsInCatalog: document.getElementById("showHitsInCatalog"),
  heroStage: document.getElementById("heroStage"),
  heroMedia: document.getElementById("heroMedia"),
  heroVideo: document.getElementById("heroVideo"),
  heroStageLabel: document.getElementById("heroStageLabel"),
  heroStageTitle: document.getElementById("heroStageTitle"),
  heroStageSummary: document.getElementById("heroStageSummary"),
  heroTopTitle: document.getElementById("heroTopTitle"),
  heroTopSubtitle: document.getElementById("heroTopSubtitle"),
  heroTopText: document.getElementById("heroTopText"),
  lineupGrid: document.getElementById("lineupGrid"),
  deliveryRoot: document.getElementById("deliveryRoot"),
  aboutKicker: document.getElementById("aboutKicker"),
  aboutTitle: document.getElementById("aboutTitle"),
  aboutLead: document.getElementById("aboutLead"),
  aboutPrinciplesGrid: document.getElementById("aboutPrinciplesGrid"),
  aboutImageMain: document.getElementById("aboutImageMain"),
  aboutImageSecondary: document.getElementById("aboutImageSecondary"),
  aboutImageTertiary: document.getElementById("aboutImageTertiary"),
  adminToggle: document.getElementById("adminToggle"),
  adminSection: document.getElementById("admin"),
  adminRoot: null,
  adminStatus: document.getElementById("adminStatus"),
  adminTabs: null,
  adminProductsPanel: null,
  adminCategoriesPanel: null,
  adminBundlesPanel: null,
  adminHeroPanel: null,
  adminMomentsPanel: null,
  adminAboutPanel: null,
};

function pluralize(value, forms) {
  const mod10 = value % 10;
  const mod100 = value % 100;
  if (mod10 === 1 && mod100 !== 11) return forms[0];
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return forms[1];
  return forms[2];
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getPhoneDigits(value) {
  return String(value || "").replace(/\D/g, "");
}

function formatOrderDate(value) {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(value);
}

function getSelectedProduct() {
  return findPublishedProductById(state.selectedProductId) ?? resolveFeaturedProduct(products);
}

function getFilteredProducts() {
  const activeFilter = filters.find((filter) => filter.id === state.selectedFilter) ?? filters[0];
  return products.filter(activeFilter.predicate);
}

function getCartCount() {
  return getCartItems().reduce((sum, item) => sum + item.quantity, 0);
}

function getCartItems() {
  return Object.entries(state.cart)
    .map(([productId, rawQuantity]) => {
      const product = findProductById(productId);
      const quantity = Number(rawQuantity) || 0;
      if (!product || quantity <= 0) return null;

      return {
        product,
        quantity,
        lineTotal: product.price * quantity,
      };
    })
    .filter(Boolean);
}

function getCartSubtotal() {
  return getCartItems().reduce((sum, item) => sum + item.lineTotal, 0);
}

function getPaymentOptions(deliveryMethod = state.checkout.deliveryMethod) {
  const method = deliveryConfig.methods[deliveryMethod] ?? deliveryConfig.methods.courier;
  return method.paymentMethods
    .map((paymentId) => deliveryConfig.paymentMethods[paymentId])
    .filter(Boolean);
}

function ensureCheckoutPaymentMethod() {
  const paymentOptions = getPaymentOptions();
  if (!paymentOptions.some((option) => option.id === state.checkout.paymentMethod)) {
    state.checkout.paymentMethod = paymentOptions[0]?.id ?? "";
  }
}

function getDeliveryQuote(subtotal = getCartSubtotal()) {
  if (!state.checkout.isOpen && !state.checkout.order) {
    return {
      known: false,
      available: true,
      fee: 0,
      total: subtotal,
      label: "Доставка",
      note: "Выберите способ получения на следующем шаге.",
    };
  }

  if (state.checkout.deliveryMethod === "pickup") {
    return {
      known: true,
      available: true,
      fee: 0,
      total: subtotal,
      label: deliveryConfig.methods.pickup.label,
      note: deliveryConfig.methods.pickup.pickupDetails,
      eta: "Готовность обычно занимает до 2 часов после подтверждения.",
    };
  }

  const courier = deliveryConfig.methods.courier;
  const zone = courier.zones[state.checkout.deliveryZone] ?? courier.zones.city;

  if (subtotal < zone.minOrder) {
    const shortfall = zone.minOrder - subtotal;
    return {
      known: true,
      available: false,
      fee: zone.fee,
      total: subtotal,
      label: `${courier.label}, ${zone.label}`,
      note: `Минимальная сумма для этой зоны — ${formatPrice(zone.minOrder)}. Добавьте ещё на ${formatPrice(shortfall)} или выберите самовывоз.`,
      eta: zone.eta,
      zone,
      shortfall,
    };
  }

  const isFree = subtotal >= zone.freeFrom;
  const fee = isFree ? 0 : zone.fee;

  return {
    known: true,
    available: true,
    fee,
    total: subtotal + fee,
    label: `${courier.label}, ${zone.label}`,
    note: isFree
      ? "Для текущей суммы доставка в этой зоне бесплатна."
      : `${formatPrice(zone.fee)} или бесплатно от ${formatPrice(zone.freeFrom)}.`,
    eta: zone.eta,
    zone,
    isFree,
  };
}

function getCartSummaryNote(itemsCount, quote) {
  if (itemsCount === 0) {
    if (state.checkout.order) {
      return "Заказ уже принят. Корзина очищена, можно собрать новую подборку.";
    }
    return "Доставку и способ оплаты выберете на следующем шаге.";
  }

  if (!state.checkout.isOpen) {
    return "На следующем шаге вы выберете способ получения, увидите стоимость доставки и подтвердите заказ.";
  }

  if (!quote.available) {
    return quote.note;
  }

  if (state.checkout.deliveryMethod === "pickup") {
    return `${deliveryConfig.methods.pickup.label} без доплаты. ${deliveryConfig.methods.pickup.pickupDetails}`;
  }

  if (quote.fee === 0) {
    return `${quote.label}. Для текущего заказа доставка бесплатна. Интервал: ${state.checkout.deliveryInterval}.`;
  }

  return `${quote.label}. Стоимость доставки — ${formatPrice(quote.fee)}. Интервал: ${state.checkout.deliveryInterval}.`;
}

function getDeliveryContextHint(subtotal = getCartSubtotal()) {
  const cityZone = deliveryConfig.methods.courier.zones.city;

  if (subtotal <= 0) {
    return `Курьер по городу — ${formatPrice(cityZone.fee)}, бесплатно от ${formatPrice(cityZone.freeFrom)}. Самовывоз всегда без доплаты.`;
  }

  if (subtotal < cityZone.minOrder) {
    return `Для курьерской доставки по городу минимальная сумма — ${formatPrice(cityZone.minOrder)}. До минимума не хватает ${formatPrice(cityZone.minOrder - subtotal)}.`;
  }

  if (subtotal < cityZone.freeFrom) {
    return `Для текущего заказа доставка по городу будет стоить ${formatPrice(cityZone.fee)}. До бесплатной доставки не хватает ${formatPrice(cityZone.freeFrom - subtotal)}.`;
  }

  return "Для текущей корзины доставка по городу уже будет бесплатной.";
}

function renderHeroStage() {
  const hero = getStoreHero();

  if (dom.heroTopTitle) {
    dom.heroTopTitle.textContent = hero.topTitle;
  }
  if (dom.heroTopSubtitle) {
    dom.heroTopSubtitle.textContent = hero.topSubtitle;
  }
  if (dom.heroTopText) {
    dom.heroTopText.textContent = hero.topText;
  }

  if (
    !dom.heroMedia ||
    !dom.heroVideo ||
    !dom.heroStageLabel ||
    !dom.heroStageTitle ||
    !dom.heroStageSummary
  ) {
    return;
  }

  dom.heroStageLabel.textContent = hero.stageLabel;
  dom.heroStageTitle.textContent = hero.stageTitle;
  dom.heroStageSummary.textContent = hero.stageSubtitle;
  dom.heroMedia.className = "hero-media is-video";

  const source = dom.heroVideo.querySelector("source");
  if (source && hero.videoUrl && source.getAttribute("src") !== hero.videoUrl) {
    source.setAttribute("src", hero.videoUrl);
    dom.heroVideo.load();
  }

  dom.heroVideo.play().catch(() => {});
}

function createStoryMomentMarkup(moment) {
  const linkMarkup = moment.linkHref && moment.linkLabel
    ? `<a class="story-moment-link" href="${escapeHtml(moment.linkHref)}">${escapeHtml(moment.linkLabel)}</a>`
    : "";
  const isTextCardMoment = dualStoryMomentIds.has(moment.id);
  const reverseClass = !isTextCardMoment && moment.isReverse ? " is-reverse" : "";
  const companionMarkup = isTextCardMoment
    ? `
      <article class="hero-stage story-moment-companion" data-reveal>
        <div class="hero-stage-copy">
          <span class="hero-stage-label">${escapeHtml(moment.companionLabel)}</span>
          <strong>${escapeHtml(moment.companionTitle)}</strong>
          <span>${escapeHtml(moment.companionSubtitle)}</span>
        </div>
        <div class="hero-media is-video">
          <video autoplay muted loop playsinline preload="metadata" aria-label="${escapeHtml(moment.companionTitle)}">
            <source src="${escapeHtml(moment.companionVideoUrl)}" type="video/mp4" />
          </video>
        </div>
        <div class="hero-stage-note">
          <span>${escapeHtml(moment.companionNoteLabel)}</span>
          <p>${escapeHtml(moment.companionNoteText)}</p>
        </div>
      </article>
    `
    : "";
  const stageClass = isTextCardMoment ? ` story-moment-stage--hero` : "";
  const dualWrapOpen = isTextCardMoment ? `<div class="story-moment-dual">` : "";
  const dualWrapClose = isTextCardMoment ? `</div>` : "";
  const mediaMarkup = isTextCardMoment
    ? `
      <div class="story-moment-text-fill" aria-label="Описание блока ${escapeHtml(moment.stageLabel)}">
        <p>
          ${escapeHtml(moment.sideTextFirst)}
        </p>
        <p>
          ${escapeHtml(moment.sideTextSecond)}
        </p>
      </div>
      `
    : `
          <div class="hero-media is-video">
            <video autoplay muted loop playsinline preload="metadata" aria-label="${escapeHtml(moment.stageTitle)}">
              <source src="${escapeHtml(moment.videoUrl)}" type="video/mp4" />
            </video>
          </div>
      `;

  return `
    <section class="section story-moment-section" data-reveal>
      ${dualWrapOpen}
        ${companionMarkup}
        <div class="hero-stage story-moment-stage${reverseClass}${stageClass}" data-story-moment="${escapeHtml(moment.id)}">
          <div class="hero-stage-copy">
            <span class="hero-stage-label">${escapeHtml(moment.stageLabel)}</span>
            <strong>${escapeHtml(moment.stageTitle)}</strong>
            <span>${escapeHtml(moment.stageSubtitle)}</span>
          </div>
          ${mediaMarkup}
          <div class="hero-stage-note">
            <span>${escapeHtml(moment.noteLabel)}</span>
            <p>${escapeHtml(moment.noteText)}</p>
            ${linkMarkup}
          </div>
        </div>
      ${dualWrapClose}
    </section>
  `;
}

function renderStoryMoments() {
  const slots = document.querySelectorAll("[data-story-slot]");
  if (!slots.length) return;

  const moments = getStoreStoryMoments().filter(
    (moment) => {
      if (!moment.isVisible || moment.id === "moment-lineup") return false;
      if (dualStoryMomentIds.has(moment.id)) return true;
      return Boolean(moment.videoUrl);
    }
  );

  slots.forEach((slot) => {
    slot.innerHTML = "";
    slot.hidden = true;
  });

  moments.forEach((moment) => {
    const slot = document.querySelector(`[data-story-slot="${moment.placement}"]`);
    if (!slot) return;

    slot.hidden = false;
    slot.innerHTML = createStoryMomentMarkup(moment);
  });

  document.querySelectorAll(".story-moment-stage video").forEach((video) => {
    video.play().catch(() => {});
  });

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll("[data-story-slot] [data-reveal]").forEach((element) => {
    if (reducedMotion) {
      element.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });
    observer.observe(element);
  });

  setupStageMotion();
}

function renderAboutSection() {
  const about = getStoreAbout();

  if (dom.aboutKicker) dom.aboutKicker.textContent = about.kicker;
  if (dom.aboutTitle) dom.aboutTitle.textContent = about.title;
  if (dom.aboutLead) dom.aboutLead.textContent = about.lead;

  if (dom.aboutPrinciplesGrid) {
    dom.aboutPrinciplesGrid.innerHTML = about.principles.map((principle) => `
      <article>
        <strong>${escapeHtml(principle.title)}</strong>
        <span>${escapeHtml(principle.text)}</span>
      </article>
    `).join("");
  }

  const imageDomMap = {
    main: dom.aboutImageMain,
    secondary: dom.aboutImageSecondary,
    tertiary: dom.aboutImageTertiary,
  };

  aboutImageKeys.forEach((key) => {
    const imageNode = imageDomMap[key];
    const image = about.images[key];
    if (!imageNode || !image) return;
    if (imageNode.getAttribute("src") !== image.src) {
      imageNode.setAttribute("src", image.src);
    }
    imageNode.setAttribute("alt", image.alt);
  });
}

function showToast(message) {
  if (!dom.toast) return;

  dom.toast.textContent = message;
  dom.toast.classList.add("is-visible");
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => {
    dom.toast.classList.remove("is-visible");
  }, 2200);
}

function createCartItemMarkup({ product, quantity, lineTotal }) {
  return `
    <article class="cart-item" data-cart-item="${product.id}">
      <div class="cart-item-media is-${product.mediaMode}">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div class="cart-item-copy">
        <strong>${product.name}</strong>
        <span>${product.weight} · ${product.category}</span>
      </div>
      <div class="cart-item-stat">
        <span class="cart-item-label">Количество</span>
        <div class="quantity-stepper cart-quantity-stepper" aria-label="Количество товара в корзине">
          <button type="button" data-cart-qty="decrease" data-cart-product="${product.id}">−</button>
          <span>${quantity}</span>
          <button type="button" data-cart-qty="increase" data-cart-product="${product.id}">+</button>
        </div>
      </div>
      <div class="cart-item-stat">
        <span class="cart-item-label">Сумма</span>
        <strong>${formatPrice(lineTotal)}</strong>
        <button class="mini-link cart-remove" type="button" data-cart-remove="${product.id}">
          Удалить
        </button>
      </div>
    </article>
  `;
}

function renderCart() {
  if (
    !dom.cartList ||
    !dom.cartMeta ||
    !dom.cartSubtotal ||
    !dom.cartDelivery ||
    !dom.cartDeliveryLabel ||
    !dom.cartTotal ||
    !dom.cartSummaryNote ||
    !dom.checkoutButton ||
    !dom.clearCartButton
  ) {
    return;
  }

  const items = getCartItems();
  const subtotal = getCartSubtotal();
  const quote = getDeliveryQuote(subtotal);
  const total = quote.known && quote.available ? quote.total : subtotal;

  dom.cartMeta.textContent = `${items.length} ${pluralize(items.length, ["позиция", "позиции", "позиций"])}`;
  dom.cartSubtotal.textContent = formatPrice(subtotal);
  dom.cartDeliveryLabel.textContent = quote.known ? quote.label : "Доставка";
  dom.cartDelivery.textContent = !quote.known
    ? "Выберите способ получения"
    : !quote.available
      ? "Недоступно"
      : quote.fee === 0
        ? "Бесплатно"
        : formatPrice(quote.fee);
  dom.cartTotal.textContent = formatPrice(total);
  dom.cartSummaryNote.textContent = getCartSummaryNote(items.length, quote);
  dom.checkoutButton.disabled = items.length === 0;
  dom.clearCartButton.disabled = items.length === 0;
  dom.checkoutButton.textContent = state.checkout.isOpen ? "Продолжить оформление" : "Оформить заказ";

  if (items.length === 0) {
    dom.cartList.innerHTML = `
      <div class="cart-empty">
        <strong>Корзина пока пустая</strong>
        <p>Добавьте десерты из каталога, и здесь появятся состав заказа, доставка и итоговая сумма.</p>
        <button class="button button-secondary" type="button" data-scroll-to="#catalog">Перейти в каталог</button>
      </div>
    `;
    return;
  }

  dom.cartList.innerHTML = items.map(createCartItemMarkup).join("");
}

function createChoiceCardMarkup({ name, value, title, note, meta, price, checked }) {
  return `
    <label class="choice-card ${checked ? "is-active" : ""}">
      <input type="radio" name="${name}" value="${value}" ${checked ? "checked" : ""} />
      <strong>${escapeHtml(title)}</strong>
      <p class="choice-card-note">${escapeHtml(note)}</p>
      ${meta ? `<span class="choice-card-meta">${escapeHtml(meta)}</span>` : ""}
      ${price ? `<span class="choice-card-price">${escapeHtml(price)}</span>` : ""}
    </label>
  `;
}

function createSummaryItemMarkup({ product, quantity, lineTotal }) {
  return `
    <div class="summary-item">
      <div class="summary-item-media is-${product.mediaMode}">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div class="summary-item-copy">
        <strong>${product.variant}</strong>
        <span>${quantity} × ${formatPrice(product.price)}</span>
      </div>
      <div class="summary-item-total">${formatPrice(lineTotal)}</div>
    </div>
  `;
}

function createCheckoutIntroMarkup() {
  return `
    <div class="checkout-empty">
      <strong>Оформление займёт пару минут</strong>
      <p>Выберите способ получения, проверьте доставку и оставьте имя с телефоном. Остальное уточним при подтверждении заказа.</p>
      <div class="checkout-actions">
        <button class="button button-primary" type="button" data-open-checkout>Перейти к оформлению</button>
        <a class="button button-secondary" href="#delivery">Посмотреть доставку</a>
      </div>
    </div>
  `;
}

function createCheckoutFormMarkup() {
  const checkout = state.checkout;
  const errors = checkout.errors;
  const subtotal = getCartSubtotal();
  const items = getCartItems();
  const quote = getDeliveryQuote(subtotal);
  const paymentOptions = getPaymentOptions(checkout.deliveryMethod);
  const extraItemsCount = Math.max(items.length - 4, 0);

  const deliveryMethodCards = [
    createChoiceCardMarkup({
      name: "deliveryMethod",
      value: "courier",
      title: deliveryConfig.methods.courier.label,
      note: deliveryConfig.methods.courier.summary,
      meta: `По городу — ${formatPrice(deliveryConfig.methods.courier.zones.city.fee)}, бесплатно от ${formatPrice(deliveryConfig.methods.courier.zones.city.freeFrom)}`,
      price: "Ежедневно, 10:00–20:00",
      checked: checkout.deliveryMethod === "courier",
    }),
    createChoiceCardMarkup({
      name: "deliveryMethod",
      value: "pickup",
      title: deliveryConfig.methods.pickup.label,
      note: deliveryConfig.methods.pickup.summary,
      meta: deliveryConfig.methods.pickup.pickupDetails,
      price: "Без доплаты за получение",
      checked: checkout.deliveryMethod === "pickup",
    }),
  ].join("");

  const zoneCards = Object.values(deliveryConfig.methods.courier.zones)
    .map((zone) => createChoiceCardMarkup({
      name: "deliveryZone",
      value: zone.id,
      title: zone.label,
      note: `Минимум ${formatPrice(zone.minOrder)} · ${zone.eta}.`,
      meta: `Бесплатно от ${formatPrice(zone.freeFrom)}`,
      price: `${formatPrice(zone.fee)}`,
      checked: checkout.deliveryZone === zone.id,
    }))
    .join("");

  const paymentCards = paymentOptions
    .map((paymentOption) => createChoiceCardMarkup({
      name: "paymentMethod",
      value: paymentOption.id,
      title: paymentOption.label,
      note: paymentOption.note,
      checked: checkout.paymentMethod === paymentOption.id,
    }))
    .join("");

  const summaryItems = items.slice(0, 4).map(createSummaryItemMarkup).join("");

  return `
    <div class="checkout-layout">
      <form class="checkout-form" id="checkoutForm" novalidate>
        <section class="checkout-card">
          <div class="checkout-card-head">
            <p class="section-kicker">1. Контакты</p>
            <h3>Кому подтвердить заказ</h3>
            <p>Для оформления заказа достаточно имени и телефона. Остальные детали уточним при подтверждении.</p>
          </div>
          <div class="form-grid">
            <label class="field ${errors.customerName ? "has-error" : ""}">
              <span class="field-label">Имя получателя</span>
              <input
                name="customerName"
                type="text"
                autocomplete="name"
                value="${escapeHtml(checkout.customerName)}"
                placeholder="Например, Анна"
              />
              <p class="${errors.customerName ? "field-error" : "field-note"}">${escapeHtml(errors.customerName ?? "Имя используем только для подтверждения и выдачи заказа.")}</p>
            </label>
            <label class="field ${errors.phone ? "has-error" : ""}">
              <span class="field-label">Телефон</span>
              <input
                name="phone"
                type="tel"
                autocomplete="tel"
                inputmode="tel"
                value="${escapeHtml(checkout.phone)}"
                placeholder="+7 999 000 00 00"
              />
              <p class="${errors.phone ? "field-error" : "field-note"}">${escapeHtml(errors.phone ?? "Нужен для звонка или сообщения перед подтверждением заказа.")}</p>
            </label>
          </div>
        </section>

        <section class="checkout-card">
          <div class="checkout-card-head">
            <p class="section-kicker">2. Получение</p>
            <h3>Выберите удобный способ</h3>
            <p>Сумма заказа пересчитывается сразу, чтобы вы видели итог до подтверждения.</p>
          </div>

          <div class="choice-group ${errors.deliveryMethod ? "has-error" : ""}">
            <div class="choice-grid">${deliveryMethodCards}</div>
            <p class="${errors.deliveryMethod ? "field-error" : "field-note"}">${escapeHtml(errors.deliveryMethod ?? "Курьер подойдёт, если нужен точный адрес. Самовывоз — если удобнее забрать заказ самому.")}</p>
          </div>

          ${checkout.deliveryMethod === "courier" ? `
            <div class="choice-group ${errors.deliveryZone ? "has-error" : ""}">
              <div class="choice-grid">${zoneCards}</div>
              <p class="${errors.deliveryZone ? "field-error" : "field-note"}">${escapeHtml(errors.deliveryZone ?? quote.note)}</p>
            </div>

            <div class="form-grid">
              <label class="field field-full ${errors.addressCity ? "has-error" : ""}">
                <span class="field-label">Город</span>
                <input
                  name="addressCity"
                  type="text"
                  autocomplete="address-level2"
                  value="${escapeHtml(checkout.address.city)}"
                  placeholder="Например, Москва"
                />
                <p class="${errors.addressCity ? "field-error" : "field-note"}">${escapeHtml(errors.addressCity ?? "Нужен город доставки, чтобы проверить зону и стоимость.")}</p>
              </label>
              <label class="field field-full ${errors.addressStreet ? "has-error" : ""}">
                <span class="field-label">Улица</span>
                <input
                  name="addressStreet"
                  type="text"
                  autocomplete="street-address"
                  value="${escapeHtml(checkout.address.street)}"
                  placeholder="Улица, проспект или переулок"
                />
                <p class="${errors.addressStreet ? "field-error" : "field-note"}">${escapeHtml(errors.addressStreet ?? "Укажите улицу без подъезда и квартиры.")}</p>
              </label>
              <label class="field ${errors.addressHouse ? "has-error" : ""}">
                <span class="field-label">Дом</span>
                <input
                  name="addressHouse"
                  type="text"
                  autocomplete="address-line1"
                  value="${escapeHtml(checkout.address.house)}"
                  placeholder="12А"
                />
                <p class="${errors.addressHouse ? "field-error" : "field-note"}">${escapeHtml(errors.addressHouse ?? "Обязательное поле.")}</p>
              </label>
              <label class="field">
                <span class="field-label">Подъезд</span>
                <input
                  name="addressEntrance"
                  type="text"
                  autocomplete="off"
                  value="${escapeHtml(checkout.address.entrance)}"
                  placeholder="Например, 3"
                />
                <p class="field-note">Если нужен для доставки.</p>
              </label>
              <label class="field">
                <span class="field-label">Этаж</span>
                <input
                  name="addressFloor"
                  type="text"
                  autocomplete="off"
                  value="${escapeHtml(checkout.address.floor)}"
                  placeholder="Например, 7"
                />
                <p class="field-note">Можно оставить пустым.</p>
              </label>
              <label class="field">
                <span class="field-label">Квартира или офис</span>
                <input
                  name="addressApartment"
                  type="text"
                  autocomplete="off"
                  value="${escapeHtml(checkout.address.apartment)}"
                  placeholder="Кв. 24"
                />
                <p class="field-note">Если доставка не на проходную.</p>
              </label>
              <p class="field-note field-full">Город, улицу и дом лучше заполнить сразу. Остальные поля добавьте только если они нужны курьеру.</p>
              <label class="field ${errors.deliveryInterval ? "has-error" : ""}">
                <span class="field-label">Интервал доставки</span>
                <select name="deliveryInterval">
                  ${deliveryConfig.methods.courier.intervals
                    .map((interval) => `<option value="${interval}" ${interval === checkout.deliveryInterval ? "selected" : ""}>${interval}</option>`)
                    .join("")}
                </select>
                <p class="${errors.deliveryInterval ? "field-error" : "field-note"}">${escapeHtml(errors.deliveryInterval ?? "Если нужен особый комментарий по времени, добавьте его ниже.")}</p>
              </label>
            </div>
          ` : `
            <div class="checkout-summary-card">
              <h3>Что нужно знать про самовывоз</h3>
              <p>${escapeHtml(deliveryConfig.methods.pickup.pickupDetails)}</p>
              <p>${escapeHtml(deliveryConfig.methods.pickup.note)}</p>
            </div>
          `}
        </section>

        <section class="checkout-card">
          <div class="checkout-card-head">
            <p class="section-kicker">3. Оплата</p>
            <h3>Подтвердите удобный способ</h3>
            <p>Показываем только те варианты, которые подходят выбранному способу получения.</p>
          </div>
          <div class="choice-group ${errors.paymentMethod ? "has-error" : ""}">
            <div class="choice-grid">${paymentCards}</div>
            <p class="${errors.paymentMethod ? "field-error" : "field-note"}">${escapeHtml(errors.paymentMethod ?? "Финальную инструкцию по оплате дублируем при подтверждении заказа.")}</p>
          </div>
        </section>

        <section class="checkout-card">
          <div class="checkout-card-head">
            <p class="section-kicker">4. Подтверждение</p>
            <h3>Последняя проверка перед отправкой</h3>
            <p>Добавьте комментарий, если нужно уточнить подъезд, звонок или детали выдачи.</p>
          </div>
          <div class="form-grid">
            <label class="field field-full">
              <span class="field-label">Комментарий к заказу</span>
              <textarea name="comment" autocomplete="off" placeholder="Например, позвонить за 10 минут до приезда">${escapeHtml(checkout.comment)}</textarea>
              <p class="field-note">Комментарий необязателен, но поможет ускорить подтверждение.</p>
            </label>
          </div>
          <label class="checkbox-row ${errors.consent ? "has-error" : ""}">
            <input name="consent" type="checkbox" ${checkout.consent ? "checked" : ""} />
            <span>Соглашаюсь на обработку данных и подтверждаю, что менеджер может связаться со мной для подтверждения состава, оплаты и способа получения.</span>
          </label>
          <p class="${errors.consent ? "field-error" : "field-note"}">${escapeHtml(errors.consent ?? "Без этого подтверждения не сможем обработать заказ.")}</p>
          <div class="checkout-actions">
            <button class="button button-primary" type="submit">Подтвердить заказ</button>
            <button class="button-tertiary" type="button" data-reset-checkout>Сбросить</button>
          </div>
        </section>
      </form>

      <aside class="checkout-sidebar">
        <div class="checkout-summary-card">
          <h3>Сводка заказа</h3>
          <p>${quote.available ? "Проверьте итоговую сумму и переходите к подтверждению." : "Для выбранных условий нужно скорректировать заказ или способ получения."}</p>
          <div class="summary-list">
            ${summaryItems}
          </div>
          ${extraItemsCount > 0 ? `<p class="field-note">И ещё ${extraItemsCount} ${pluralize(extraItemsCount, ["позиция", "позиции", "позиций"])} в составе заказа.</p>` : ""}
          <div class="summary-rows">
            <div class="summary-row">
              <span>Товары</span>
              <strong>${formatPrice(subtotal)}</strong>
            </div>
            <div class="summary-row">
              <span>${escapeHtml(quote.label)}</span>
              <strong>${!quote.available ? "Недоступно" : quote.fee === 0 ? "Бесплатно" : formatPrice(quote.fee)}</strong>
            </div>
            <div class="summary-row is-total">
              <span>Итого</span>
              <strong>${formatPrice(quote.available ? quote.total : subtotal)}</strong>
            </div>
          </div>
        </div>
        <div class="checkout-summary-card">
          <h3>Что будет дальше</h3>
          <ul class="checkout-meta-list">
            <li>${escapeHtml(deliveryConfig.confirmation.lead)}</li>
            <li>${escapeHtml(deliveryConfig.confirmation.shelfLife)}</li>
            <li>${escapeHtml(checkout.deliveryMethod === "pickup"
              ? deliveryConfig.methods.pickup.pickupDetails
              : `Интервал доставки: ${checkout.deliveryInterval}.`)}</li>
          </ul>
        </div>
      </aside>
    </div>
  `;
}

function createCheckoutSuccessMarkup(order) {
  return `
    <div class="checkout-success">
      <div class="checkout-success-copy">
        <span class="order-badge">Заказ ${escapeHtml(order.number)}</span>
        <h3>Заказ принят и ждёт подтверждения</h3>
        <p>Мы получили заявку на имя ${escapeHtml(order.customerName)}. ${escapeHtml(deliveryConfig.confirmation.lead)}</p>
        <div class="checkout-actions">
          <button class="button button-primary" type="button" data-scroll-to="#catalog">Вернуться в каталог</button>
          <button class="button-tertiary" type="button" data-reset-order>Собрать новый заказ</button>
        </div>
      </div>
      <div class="checkout-success-card">
        <div class="summary-row">
          <span>Получатель</span>
          <strong>${escapeHtml(order.customerName)}</strong>
        </div>
        <div class="summary-row">
          <span>Телефон</span>
          <strong>${escapeHtml(order.phone)}</strong>
        </div>
        <div class="summary-row">
          <span>Получение</span>
          <strong>${escapeHtml(order.deliveryLabel)}</strong>
        </div>
        <div class="summary-row">
          <span>Адрес или точка</span>
          <strong>${escapeHtml(order.receiveLabel)}</strong>
        </div>
        <div class="summary-row">
          <span>Оплата</span>
          <strong>${escapeHtml(order.paymentLabel)}</strong>
        </div>
        <div class="summary-row">
          <span>Интервал</span>
          <strong>${escapeHtml(order.intervalLabel)}</strong>
        </div>
        <div class="summary-row">
          <span>Создан</span>
          <strong>${escapeHtml(order.createdAt)}</strong>
        </div>
        <div class="summary-row is-total">
          <span>Итого</span>
          <strong>${formatPrice(order.total)}</strong>
        </div>
        ${order.comment ? `<p class="field-note">Комментарий: ${escapeHtml(order.comment)}</p>` : ""}
      </div>
    </div>
  `;
}

function createDeliveryCardMarkup({ title, note, meta, pills }) {
  return `
    <article class="delivery-card">
      <div>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(note)}</p>
      </div>
      <p>${escapeHtml(meta)}</p>
      <div class="delivery-card-meta">
        ${pills.map((pill) => `<span class="delivery-pill">${escapeHtml(pill)}</span>`).join("")}
      </div>
    </article>
  `;
}

function renderCheckout() {
  if (!dom.checkoutRoot || !dom.checkoutStatus) return;

  if (state.checkout.order) {
    dom.checkoutStatus.textContent = `Заказ ${state.checkout.order.number} принят.`;
    dom.checkoutRoot.innerHTML = createCheckoutSuccessMarkup(state.checkout.order);
    return;
  }

  if (getCartCount() === 0) {
    dom.checkoutStatus.textContent = "Добавьте десерты в корзину, чтобы перейти к оформлению.";
    dom.checkoutRoot.innerHTML = `
      <div class="checkout-empty">
        <strong>Сначала добавьте десерты в корзину</strong>
        <p>Когда корзина будет готова, здесь появится оформление с доставкой и оплатой.</p>
        <button class="button button-secondary" type="button" data-scroll-to="#catalog">Перейти в каталог</button>
      </div>
    `;
    return;
  }

  if (!state.checkout.isOpen) {
    dom.checkoutStatus.textContent = "Форма откроется после перехода к оформлению.";
    dom.checkoutRoot.innerHTML = createCheckoutIntroMarkup();
    return;
  }

  const quote = getDeliveryQuote();
  dom.checkoutStatus.textContent = quote.available
    ? "Проверьте данные и подтвердите заказ."
    : "Для выбранной доставки нужно скорректировать заказ или способ получения.";
  dom.checkoutRoot.innerHTML = createCheckoutFormMarkup();
}

function renderDeliverySection() {
  if (!dom.deliveryRoot) return;

  const courier = deliveryConfig.methods.courier;
  const cityZone = courier.zones.city;
  const suburbZone = courier.zones.suburb;

  const cardsMarkup = [
    createDeliveryCardMarkup({
      title: "Курьер по городу",
      note: "Подойдёт для дома, офиса или встречи сегодня и на следующий день.",
      meta: `Минимальная сумма — ${formatPrice(cityZone.minOrder)}. Бесплатно от ${formatPrice(cityZone.freeFrom)}.`,
      pills: [formatPrice(cityZone.fee), "10:00–20:00", "ежедневно"],
    }),
    createDeliveryCardMarkup({
      title: "Ближайший пригород",
      note: "Подойдёт для соседних районов и ближайшего пригорода после подтверждения.",
      meta: `Минимальная сумма — ${formatPrice(suburbZone.minOrder)}. Бесплатно от ${formatPrice(suburbZone.freeFrom)}.`,
      pills: [formatPrice(suburbZone.fee), "на следующий день", "после подтверждения"],
    }),
    createDeliveryCardMarkup({
      title: "Самовывоз",
      note: "Подойдёт, если удобнее забрать заказ самостоятельно и без доплаты за доставку.",
      meta: deliveryConfig.methods.pickup.pickupDetails,
      pills: ["бесплатно", "до 2 часов", "после звонка"],
    }),
  ].join("");

  const paymentPills = Object.values(deliveryConfig.paymentMethods)
    .map((paymentMethod) => `<span class="delivery-pill">${escapeHtml(paymentMethod.label)}</span>`)
    .join("");

  dom.deliveryRoot.innerHTML = `
    <div class="delivery-stack">
      <div class="delivery-grid">${cardsMarkup}</div>
      <div class="delivery-footer">
        <div>
          <p>${escapeHtml(getDeliveryContextHint())}</p>
          <div class="delivery-footer-meta">${paymentPills}</div>
        </div>
        <button class="button button-primary" type="button" data-open-checkout>Оформить заказ</button>
      </div>
    </div>
  `;
}

function createAdminBadgeMarkup(label, tone = "") {
  return `<span class="admin-badge ${tone}">${escapeHtml(label)}</span>`;
}

function createAdminFlagMarkup(product, isFeatured = false) {
  const flags = [];

  flags.push(createAdminBadgeMarkup(product.isPublished ? "На витрине" : "Скрыто с витрины", product.isPublished ? "is-accent" : "is-muted"));
  if (product.isHit) flags.push(createAdminBadgeMarkup("Популярное", "is-warning"));
  if (product.isNew) flags.push(createAdminBadgeMarkup("Новинка"));
  if (product.isBundle) flags.push(createAdminBadgeMarkup("В подборках"));
  if (product.isLineup) flags.push(createAdminBadgeMarkup("В линейке"));
  if (isFeatured) flags.push(createAdminBadgeMarkup("Наверху страницы", "is-accent"));
  if (product.source === "custom") flags.push(createAdminBadgeMarkup("Добавлено вручную"));

  return flags.join("");
}

function getAdminPreviewProduct() {
  if (!state.admin.draft) return null;
  return normalizeProductRecord({
    ...state.admin.draft,
    id: state.admin.draft.id,
    source: state.admin.draft.source,
  });
}

function createAdminListItemMarkup(product) {
  const isActive = product.id === state.admin.selectedProductId;
  const flagMarkup = createAdminFlagMarkup(product, state.admin.store.featuredProductId === product.id);

  return `
    <button class="admin-list-item ${isActive ? "is-active" : ""}" type="button" data-admin-select="${product.id}">
      <strong>${escapeHtml(product.name)}</strong>
      <div class="admin-list-meta">
        ${createAdminBadgeMarkup(product.category)}
        ${createAdminBadgeMarkup(formatPrice(product.price))}
        ${createAdminBadgeMarkup(`${product.stock} шт.`)}
      </div>
      <div class="admin-list-flags">${flagMarkup}</div>
      <span class="admin-list-note">${escapeHtml(product.weight)} · ${escapeHtml(product.variant)}</span>
    </button>
  `;
}

function createAdminToggleMarkup({ name, title, note, checked }) {
  return `
    <label class="admin-toggle">
      <input type="checkbox" name="${name}" ${checked ? "checked" : ""} />
      <span>
        <strong>${escapeHtml(title)}</strong>
        <span class="admin-list-note">${escapeHtml(note)}</span>
      </span>
    </label>
  `;
}

function createAdminPreviewStageMarkup(product) {
  return `
    <div class="admin-product-preview">${createProductCard(product)}</div>
  `;
}

function createAdminPreviewMetaMarkup(product) {
  const mediaNote = product.mediaMode === "social"
    ? `Положение по горизонтали ${product.mediaTuning?.x ?? "0%"} · по вертикали ${product.mediaTuning?.y ?? "0%"} · размер ${product.mediaTuning?.scale ?? "1.08"}`
    : "Для упаковки обычно ничего двигать не нужно.";

  return `
    <div>
      <h3>Превью карточки</h3>
      <p>Сразу видно, как товар будет выглядеть на витрине.</p>
    </div>
    <div class="admin-list-meta">
      ${createAdminBadgeMarkup(product.category)}
      ${createAdminBadgeMarkup(product.mediaMode === "pack" ? "Упаковка" : "Фото десерта")}
      ${createAdminBadgeMarkup(formatPrice(product.price))}
    </div>
    <div class="admin-list-flags">${createAdminFlagMarkup(product, Boolean(state.admin.draft?.isFeatured))}</div>
    <p class="admin-status-line">${escapeHtml(mediaNote)}</p>
  `;
}

function createAdminPreviewMarkup(draft = state.admin.draft) {
  const product = getAdminPreviewProduct();
  if (!product || !draft) {
    return `
      <div class="admin-empty">
        <h3>Карточка не выбрана</h3>
        <p>Выберите товар слева или добавьте новый.</p>
      </div>
    `;
  }

  return `
    <div class="admin-preview-grid">
      <div class="admin-preview-stage" data-admin-preview-stage>${createAdminPreviewStageMarkup(product)}</div>
      <div class="admin-preview-side">
        <div class="admin-preview-meta" data-admin-preview-meta>${createAdminPreviewMetaMarkup(product)}</div>
        ${createAdminImageToolsMarkup(draft)}
      </div>
    </div>
  `;
}

function getAdminImageToolsModeNote(draft) {
  return draft.mediaMode === "pack"
    ? "Для упаковки обычно достаточно просто заменить фото."
    : "Подвиньте фото и сразу посмотрите результат.";
}

function splitAdminTextIntoBlocks(value, count) {
  const source = String(value ?? "").trim();
  const blocks = source
    ? source
      .split(/(?:\.\s+|\n+)/)
      .map((part) => part.trim().replace(/\.+$/g, ""))
      .filter(Boolean)
    : [];

  return Array.from({ length: count }, (_, index) => blocks[index] ?? "");
}

function composeAdminTextFromValues(values) {
  const blocks = values
    .map((value) => String(value).trim().replace(/\.+$/g, ""))
    .filter(Boolean);

  return blocks.length > 0 ? `${blocks.join(". ")}.` : "";
}

function createAdminTextBlocksMarkup({ title, note, prefix, value, placeholders, blockLabels }) {
  const blocks = Array.isArray(value)
    ? Array.from({ length: placeholders.length }, (_, index) => value[index] ?? "")
    : splitAdminTextIntoBlocks(value, placeholders.length);
  const labels = Array.isArray(blockLabels) && blockLabels.length === placeholders.length
    ? blockLabels
    : Array.from({ length: placeholders.length }, (_, index) => `Блок ${index + 1}`);

  return `
    <div class="admin-structured-group">
      <div class="admin-structured-head">
        <strong>${escapeHtml(title)}</strong>
        <span class="admin-status-line">${escapeHtml(note)}</span>
      </div>
      <div class="admin-structured-grid">
        ${placeholders.map((placeholder, index) => `
          <label class="admin-text-block">
            <span class="admin-text-block-label">${escapeHtml(labels[index])}</span>
            <input
              type="text"
              name="${prefix}${index + 1}"
              value="${escapeHtml(blocks[index] ?? "")}"
              placeholder="${escapeHtml(placeholder)}"
            />
          </label>
        `).join("")}
      </div>
    </div>
  `;
}

function createAdminDraftTextState(draft) {
  return {
    ...draft,
    detailsBlocks: splitAdminTextIntoBlocks(draft.details, 3),
    statusBlocks: splitAdminTextIntoBlocks(draft.statusText, 3),
  };
}

function createAdminVideoToolsMarkup({
  title,
  description,
  urlInputName,
  fileInputName,
  previewAttr,
  videoUrl,
}) {
  const safeUrl = typeof videoUrl === "string" ? videoUrl.trim() : "";

  return `
    <div class="admin-image-tools admin-video-tools">
      <div class="admin-image-tools-head">
        <div>
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(description)}</p>
        </div>
      </div>

      <div class="admin-form-grid admin-form-grid-tight">
        <label class="field field-full">
          <span class="field-label">Адрес видео</span>
          <input type="text" name="${escapeHtml(urlInputName)}" value="${escapeHtml(safeUrl)}" placeholder="./uploads/ifoods-video-....mp4" />
          <span class="field-note">Можно вставить путь или выбрать файл ниже.</span>
        </label>
        <label class="field field-full admin-upload-row">
          <span class="field-label">Выбрать файл</span>
          <input type="file" name="${escapeHtml(fileInputName)}" accept="video/mp4,video/webm,video/quicktime,.mp4,.webm,.mov" />
          <span class="admin-upload-note">MP4, WebM или MOV, до 50 МБ. После выбора файл загрузится автоматически.</span>
        </label>
      </div>

      <div class="admin-hero-video-preview${safeUrl ? "" : " is-empty"}" ${previewAttr} ${safeUrl ? "" : "hidden"}>
        <span class="field-label">Превью</span>
        ${safeUrl
          ? `<video muted playsinline controls preload="metadata" src="${escapeHtml(safeUrl)}"></video>`
          : ""}
      </div>
    </div>
  `;
}

function createAdminHeroVideoToolsMarkup(hero) {
  return createAdminVideoToolsMarkup({
    title: "Видео на главной",
    description: "Замените ролик в блоке справа — так же просто, как фото в карточке товара.",
    urlInputName: "heroVideoUrl",
    fileInputName: "heroVideoFile",
    previewAttr: "data-admin-hero-video-preview",
    videoUrl: hero.videoUrl,
  });
}

function updateAdminStoryMomentVideoPreview(momentId, videoUrl, previewType = "story") {
  const attrName = previewType === "companion"
    ? "data-admin-story-companion-video-preview"
    : "data-admin-story-video-preview";
  const previewHost = dom.adminMomentsPanel?.querySelector(`[${attrName}="${momentId}"]`);
  if (!previewHost) return;

  const safeUrl = String(videoUrl || "").trim();
  if (!safeUrl) {
    previewHost.hidden = true;
    previewHost.classList.add("is-empty");
    previewHost.innerHTML = '<span class="field-label">Превью</span>';
    return;
  }

  previewHost.hidden = false;
  previewHost.classList.remove("is-empty");
  previewHost.innerHTML = `
    <span class="field-label">Превью</span>
    <video muted playsinline controls preload="metadata" src="${escapeHtml(safeUrl)}"></video>
  `;
}

function updateAdminHeroVideoPreview(videoUrl) {
  const previewHost = dom.adminHeroPanel?.querySelector("[data-admin-hero-video-preview]");
  if (!previewHost) return;

  const safeUrl = String(videoUrl || "").trim();
  if (!safeUrl) {
    previewHost.hidden = true;
    previewHost.classList.add("is-empty");
    previewHost.innerHTML = '<span class="field-label">Превью</span>';
    return;
  }

  previewHost.hidden = false;
  previewHost.classList.remove("is-empty");
  previewHost.innerHTML = `
    <span class="field-label">Превью</span>
    <video muted playsinline controls preload="metadata" src="${escapeHtml(safeUrl)}"></video>
  `;
}

function isVideoUploadFile(file) {
  if (!file) return false;
  if (file.type.startsWith("video/")) return true;
  return /\.(mp4|webm|mov)$/i.test(file.name);
}

function createAdminImageToolsMarkup(draft) {
  const modeNote = getAdminImageToolsModeNote(draft);

  return `
    <div class="admin-image-tools">
      <div class="admin-image-tools-head">
        <div>
          <h3>Фото и кадр</h3>
          <p>Замените фото и при необходимости поправьте кадр.</p>
        </div>
        <p class="admin-status-line" data-admin-image-mode-note>${escapeHtml(modeNote)}</p>
      </div>

      <div class="admin-form-grid admin-form-grid-tight">
        <label class="field field-full">
          <span class="field-label">Адрес картинки</span>
          <input type="text" name="adminImage" value="${escapeHtml(draft.image)}" placeholder="./изображения/..." />
          <span class="field-note">Можно вставить путь, ссылку или выбрать файл.</span>
        </label>
        <label class="field field-full admin-upload-row">
          <span class="field-label">Выбрать файл</span>
          <input type="file" name="adminImageFile" accept="image/*" />
          <span class="admin-upload-note">Файл сохранится только здесь. Если он слишком большой, места может не хватить.</span>
        </label>
      </div>

      <div class="admin-tuning-block">
        <div class="admin-tuning-head">
          <strong>Положение</strong>
          <span class="admin-status-line">Все настройки сразу видны в превью.</span>
        </div>
        <div class="admin-tuning-grid">
          <label class="field field-compact">
            <span class="field-label">Левее / правее</span>
            <input type="number" inputmode="numeric" min="-30" max="30" step="1" name="adminShiftX" value="${escapeHtml(String(draft.mediaTuning?.x ?? "0").replace("%", ""))}" />
          </label>
          <label class="field field-compact">
            <span class="field-label">Выше / ниже</span>
            <input type="number" inputmode="numeric" min="-30" max="30" step="1" name="adminShiftY" value="${escapeHtml(String(draft.mediaTuning?.y ?? "0").replace("%", ""))}" />
          </label>
          <label class="field field-compact">
            <span class="field-label">Размер</span>
            <input type="number" inputmode="decimal" min="0.75" max="1.6" step="0.01" name="adminScale" value="${escapeHtml(String(draft.mediaTuning?.scale ?? "1.08"))}" />
          </label>
          <label class="field field-compact">
            <span class="field-label">При наведении</span>
            <input type="number" inputmode="decimal" min="0.75" max="1.6" step="0.01" name="adminHoverScale" value="${escapeHtml(String(draft.mediaTuning?.hoverScale ?? "1.12"))}" />
          </label>
        </div>
      </div>
    </div>
  `;
}

function createAdminFormMarkup() {
  const draft = state.admin.draft;

  if (!draft) {
    return `
      <div class="admin-layout">
        <aside class="admin-sidebar">
          <div class="admin-panel">
            <div class="admin-toolbar">
              <div>
                <h3>Товары</h3>
                <p>Выберите товар из списка или добавьте новый.</p>
              </div>
              <button class="button button-secondary" type="button" data-admin-new>Добавить товар</button>
            </div>
          </div>
        </aside>
        <div class="admin-editor">
          <div class="admin-empty">
            <h3>Пока пусто</h3>
            <p>Добавьте товар или выберите уже существующий слева.</p>
          </div>
        </div>
      </div>
    `;
  }

  const productsMarkup = allProducts.length > 0
    ? allProducts.map(createAdminListItemMarkup).join("")
    : `
      <div class="admin-empty">
        <h3>Товаров пока нет</h3>
        <p>Добавьте первый товар и выберите, где его показывать.</p>
      </div>
    `;

  return `
    <div class="admin-layout">
      <aside class="admin-sidebar">
        <div class="admin-panel">
          <div class="admin-toolbar">
            <div>
              <h3>Товары</h3>
              <p>Откройте товар и правьте его сразу рядом.</p>
            </div>
            <button class="button button-secondary" type="button" data-admin-new>Добавить товар</button>
          </div>
          <div class="admin-list">${productsMarkup}</div>
        </div>
      </aside>

      <div class="admin-editor">
        <div class="admin-preview-card" data-admin-preview>${createAdminPreviewMarkup(draft)}</div>

        <form class="admin-panel admin-form" id="adminProductForm">
          <div class="checkout-card-head">
            <h3>${draft.source === "custom" ? "Новый товар" : "Карточка товара"}</h3>
            <p>Здесь меняются название, описание, фото и место показа.</p>
          </div>

          <fieldset class="admin-fieldset">
            <legend>Основные данные</legend>
            <div class="admin-form-grid">
              <label class="field field-full">
                <span class="field-label">Название товара</span>
                <input type="text" name="adminName" value="${escapeHtml(draft.name)}" placeholder="Например, Торт-пирожное Манго" />
              </label>
              <label class="field">
                <span class="field-label">Категория</span>
                <select name="adminCategoryKey">
                  ${Object.entries(categoryMeta).map(([key, meta]) => `
                    <option value="${key}" ${draft.categoryKey === key ? "selected" : ""}>${escapeHtml(meta.label)}</option>
                  `).join("")}
                </select>
              </label>
              <label class="field">
                <span class="field-label">Как показывать картинку</span>
                <select name="adminMediaMode">
                  <option value="social" ${draft.mediaMode !== "pack" ? "selected" : ""}>Фото десерта</option>
                  <option value="pack" ${draft.mediaMode === "pack" ? "selected" : ""}>Упаковка</option>
                </select>
              </label>
              <label class="field">
                <span class="field-label">Вес</span>
                <input type="text" name="adminWeight" value="${escapeHtml(draft.weight)}" placeholder="100 г" />
              </label>
              <label class="field">
                <span class="field-label">Цена, ₽</span>
                <input type="number" min="0" step="1" name="adminPrice" value="${escapeHtml(draft.price)}" />
              </label>
              <label class="field">
                <span class="field-label">Остаток, шт.</span>
                <input type="number" min="0" step="1" name="adminStock" value="${escapeHtml(draft.stock)}" />
              </label>
            </div>
          </fieldset>

          <fieldset class="admin-fieldset">
            <legend>Описание</legend>
            <div class="admin-form-grid">
              <label class="field field-full">
                <span class="field-label">Короткое описание карточки</span>
                <textarea name="adminSummary" placeholder="Короткий текст для каталога и вкладки «О десерте».">${escapeHtml(draft.summary)}</textarea>
              </label>
              <div class="field field-full">
                ${createAdminTextBlocksMarkup({
                  title: "Вкладка «Вес и цена»",
                  note: "На витрине всё соберётся в один короткий текст.",
                  prefix: "adminDetailsBlock",
                  value: draft.detailsBlocks,
                  blockLabels: ["Категория", "Вес или формат", "Цена или пометка"],
                  placeholders: [
                    "Категория или короткий акцент",
                    "Вес или формат порции",
                    "Цена или дополнительная пометка",
                  ],
                })}
              </div>
              <div class="field field-full">
                ${createAdminTextBlocksMarkup({
                  title: "Вкладка «Наличие»",
                  note: "Сначала статус, потом пояснение и при желании подсказка.",
                  prefix: "adminStatusBlock",
                  value: draft.statusBlocks,
                  blockLabels: ["Статус", "Пояснение", "Подсказка"],
                  placeholders: [
                    "Основной статус",
                    "Пояснение для покупателя",
                    "Дополнительная подсказка",
                  ],
                })}
              </div>
            </div>
          </fieldset>

          <fieldset class="admin-fieldset">
            <legend>Где показывать товар</legend>
            <div class="admin-toggle-grid">
              ${createAdminToggleMarkup({
                name: "adminIsPublished",
                title: "Показывать на витрине",
                note: "Если выключить, товар пропадёт с сайта, но останется здесь.",
                checked: draft.isPublished !== false,
              })}
              ${createAdminToggleMarkup({
                name: "adminIsHit",
                title: "Показывать в популярном",
                note: "До 4 товаров в блоке «Хиты продаж» на главной и в фильтре.",
                checked: Boolean(draft.isHit),
              })}
              ${createAdminToggleMarkup({
                name: "adminIsNew",
                title: "Показывать как новинку",
                note: "На карточке появится отметка «Новинка».",
                checked: Boolean(draft.isNew),
              })}
              ${createAdminToggleMarkup({
                name: "adminIsBundle",
                title: "Показывать в подборках",
                note: "Появится в блоке «Наборы» на главной (если выбран в наборе).",
                checked: Boolean(draft.isBundle),
              })}
              ${createAdminToggleMarkup({
                name: "adminIsLineup",
                title: "Показывать в линейке",
                note: "До 4 товаров в блоке «Линейка» на главной, сначала новые.",
                checked: Boolean(draft.isLineup),
              })}
              ${createAdminToggleMarkup({
                name: "adminIsFeatured",
                title: "Показывать наверху страницы",
                note: "Станет главным товаром в верхнем блоке.",
                checked: Boolean(draft.isFeatured),
              })}
            </div>
          </fieldset>

          <div class="admin-actions">
            <button class="button button-primary" type="submit">Сохранить изменения</button>
            ${draft.source === "base"
              ? '<button class="button button-secondary" type="button" data-admin-reset-product>Вернуть как было</button>'
              : '<button class="button button-secondary" type="button" data-admin-delete-product>Удалить товар</button>'}
          </div>
        </form>
      </div>
    </div>
  `;
}

const adminTabPanels = {
  products: () => dom.adminProductsPanel,
  categories: () => dom.adminCategoriesPanel,
  bundles: () => dom.adminBundlesPanel,
  hero: () => dom.adminHeroPanel,
  moments: () => dom.adminMomentsPanel,
  about: () => dom.adminAboutPanel,
};

function setAdminTab(tabId) {
  const allowed = new Set(["products", "categories", "bundles", "hero", "moments", "about"]);
  const nextTab = allowed.has(tabId) ? tabId : "products";
  state.admin.activeTab = nextTab;

  dom.adminTabs?.querySelectorAll("[data-admin-tab]").forEach((button) => {
    const isActive = button.dataset.adminTab === nextTab;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  Object.entries(adminTabPanels).forEach(([key, getPanel]) => {
    const panel = getPanel();
    if (!panel) return;
    const isActive = key === nextTab;
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;
  });

  renderAdminSection();
}

function createAdminCategoryCardMarkup(category, index) {
  return `
    <article class="admin-section-card" data-admin-category-card="${escapeHtml(category.id)}">
      <div class="admin-section-card-head">
        <h3>${escapeHtml(category.label || `Категория ${index + 1}`)}</h3>
        <span class="admin-status-line">ID: ${escapeHtml(category.id)}</span>
      </div>
      <div class="admin-form-grid">
        <label class="field">
          <span class="field-label">Название</span>
          <input type="text" name="categoryLabel" value="${escapeHtml(category.label)}" data-category-field="label" data-category-id="${escapeHtml(category.id)}" />
        </label>
        <label class="field">
          <span class="field-label">Порядок</span>
          <input type="number" min="0" step="1" name="categoryOrder" value="${escapeHtml(String(category.order))}" data-category-field="order" data-category-id="${escapeHtml(category.id)}" />
        </label>
        <label class="field field-full">
          <span class="field-label">Описание</span>
          <textarea name="categoryDescription" data-category-field="description" data-category-id="${escapeHtml(category.id)}">${escapeHtml(category.description)}</textarea>
        </label>
        <label class="field field-full">
          <span class="field-label">Фото (ссылка)</span>
          <input type="text" name="categoryImage" value="${escapeHtml(category.image)}" data-category-field="image" data-category-id="${escapeHtml(category.id)}" />
        </label>
        <label class="field field-full">
          <span class="field-label">Загрузить фото</span>
          <input type="file" accept="image/*" data-category-image-file="${escapeHtml(category.id)}" />
        </label>
        <label class="admin-toggle">
          <input
            type="checkbox"
            name="categoryVisible-${escapeHtml(category.id)}"
            data-category-field="isVisible"
            data-category-id="${escapeHtml(category.id)}"
            ${category.isVisible !== false ? "checked" : ""}
          />
          <span>
            <strong>Показывать</strong>
            <span class="admin-list-note">Категория появится в блоке «Линейки» на главной.</span>
          </span>
        </label>
      </div>
    </article>
  `;
}

function createAdminBundleImageFieldMarkup(bundle, part, label) {
  const fieldKey = part === "secondary" ? "imageSecondary" : "image";
  const value = bundle[fieldKey] ?? "";

  return `
    <div class="admin-image-tools admin-bundle-image-tools">
      <div class="admin-image-tools-head">
        <div>
          <h4>${escapeHtml(label)}</h4>
        </div>
      </div>
      <div class="admin-form-grid admin-form-grid-tight">
        <label class="field field-full">
          <span class="field-label">Адрес картинки</span>
          <input
            type="text"
            value="${escapeHtml(value)}"
            data-bundle-field="${fieldKey}"
            data-bundle-id="${escapeHtml(bundle.id)}"
          />
        </label>
        <label class="field field-full admin-upload-row">
          <span class="field-label">Выбрать файл</span>
          <input
            type="file"
            accept="image/*"
            data-bundle-image-file="${escapeHtml(bundle.id)}"
            data-bundle-image-part="${part}"
          />
        </label>
        ${value ? `
          <div class="admin-about-image-preview">
            <img src="${escapeHtml(value)}" alt="${escapeHtml(bundle.name)}" />
          </div>
        ` : ""}
      </div>
    </div>
  `;
}

function createAdminBundleCardMarkup(bundle, index) {
  const productChecks = allProducts.map((product) => `
    <label>
      <input
        type="checkbox"
        name="bundleProduct"
        value="${escapeHtml(product.id)}"
        data-bundle-product="${escapeHtml(bundle.id)}"
        ${bundle.productIds.includes(product.id) ? "checked" : ""}
      />
      <span>${escapeHtml(product.name)}</span>
    </label>
  `).join("");

  return `
    <article class="admin-section-card" data-admin-bundle-card="${escapeHtml(bundle.id)}">
      <div class="admin-section-card-head">
        <div>
          <h3>${escapeHtml(bundle.name || `Набор ${index + 1}`)}</h3>
          <span class="admin-status-line">ID: ${escapeHtml(bundle.id)}</span>
        </div>
        <button
          class="button button-secondary admin-card-delete"
          type="button"
          data-admin-delete-bundle="${escapeHtml(bundle.id)}"
        >
          Удалить набор
        </button>
      </div>
      <div class="admin-form-grid">
        <label class="field field-full">
          <span class="field-label">Название</span>
          <input type="text" name="bundleName" value="${escapeHtml(bundle.name)}" data-bundle-field="name" data-bundle-id="${escapeHtml(bundle.id)}" />
        </label>
        <label class="field field-full">
          <span class="field-label">Описание</span>
          <textarea name="bundleDescription" data-bundle-field="description" data-bundle-id="${escapeHtml(bundle.id)}">${escapeHtml(bundle.description)}</textarea>
        </label>
        ${createAdminBundleImageFieldMarkup(bundle, "main", "Фото 1 — крупное слева")}
        ${createAdminBundleImageFieldMarkup(bundle, "secondary", "Фото 2 — маленькое справа")}
        <div class="field field-full">
          <span class="field-label">Товары в наборе</span>
          <div class="admin-product-checklist">${productChecks}</div>
        </div>
        <label class="admin-toggle">
          <input
            type="checkbox"
            name="bundleVisible-${escapeHtml(bundle.id)}"
            data-bundle-field="isVisible"
            data-bundle-id="${escapeHtml(bundle.id)}"
            ${bundle.isVisible !== false ? "checked" : ""}
          />
          <span>
            <strong>Показывать на сайте</strong>
            <span class="admin-list-note">Включите, чтобы набор появился на главной. Можно показывать несколько наборов сразу.</span>
          </span>
        </label>
      </div>
    </article>
  `;
}

function collectCategoriesFromPanel() {
  const categories = getStoreCategories().map((category) => ({ ...category }));
  const panel = dom.adminCategoriesPanel;
  if (!panel) return categories;

  panel.querySelectorAll("[data-category-id]").forEach((element) => {
    const categoryId = element.dataset.categoryId;
    const field = element.dataset.categoryField;
    const target = categories.find((category) => category.id === categoryId);
    if (!target || !field) return;

    if (field === "order") {
      target.order = Number(element.value) || 0;
      return;
    }

    if (field === "isVisible") {
      target.isVisible = element.checked;
      return;
    }

    target[field] = element.value;
  });

  return categories.map((category, index) => sanitizeCategoryRecord(category, index));
}

function collectBundlesFromPanel() {
  const bundles = getStoreBundles().map((bundle) => ({
    ...bundle,
    productIds: [...bundle.productIds],
  }));
  const panel = dom.adminBundlesPanel;
  if (!panel) return bundles;

  panel.querySelectorAll("[data-bundle-id][data-bundle-field]").forEach((element) => {
    const bundleId = element.dataset.bundleId;
    const field = element.dataset.bundleField;
    const target = bundles.find((bundle) => bundle.id === bundleId);
    if (!target || !field) return;

    if (field === "isVisible") {
      target.isVisible = element.checked;
      return;
    }

    target[field] = element.value;
  });

  panel.querySelectorAll("[data-bundle-product]").forEach((checkbox) => {
    const bundleId = checkbox.dataset.bundleProduct;
    const target = bundles.find((bundle) => bundle.id === bundleId);
    if (!target) return;

    target.productIds = target.productIds.filter((productId) => productId !== checkbox.value);
    if (checkbox.checked) {
      target.productIds.push(checkbox.value);
    }
  });

  bundles.forEach((bundle) => {
    bundle.productIds = [...new Set(bundle.productIds)];
  });

  return bundles.map((bundle, index) => sanitizeBundleRecord(bundle, index));
}

function collectHeroFromPanel() {
  const panel = dom.adminHeroPanel;
  if (!panel) return getStoreHero();

  const readValue = (name) => panel.querySelector(`[name="${name}"]`)?.value ?? "";

  return sanitizeHeroRecord({
    topTitle: readValue("heroTopTitle"),
    topSubtitle: readValue("heroTopSubtitle"),
    topText: readValue("heroTopText"),
    stageLabel: readValue("heroStageLabel"),
    stageTitle: readValue("heroStageTitle"),
    stageSubtitle: readValue("heroStageSubtitle"),
    videoUrl: readValue("heroVideoUrl"),
  });
}

function renderAdminCategoriesPanel() {
  if (!dom.adminCategoriesPanel) return;

  const categories = getStoreCategories()
    .slice()
    .sort((left, right) => left.order - right.order);

  dom.adminCategoriesPanel.innerHTML = `
    <form class="admin-panel admin-form" id="adminCategoriesForm">
      <div class="checkout-card-head">
        <h3>Категории на главной</h3>
        <p>Настройте линейки: название, описание, фото и порядок показа.</p>
      </div>
      <div class="admin-section-list">
        ${categories.map(createAdminCategoryCardMarkup).join("")}
      </div>
      <div class="admin-section-toolbar admin-actions">
        <button class="button button-secondary" type="button" data-admin-add-category>Добавить категорию</button>
        <button class="button button-primary" type="submit">Сохранить</button>
      </div>
    </form>
  `;
}

function renderAdminBundlesPanel() {
  if (!dom.adminBundlesPanel) return;

  const bundles = getStoreBundles();

  dom.adminBundlesPanel.innerHTML = `
    <form class="admin-panel admin-form" id="adminBundlesForm">
      <div class="checkout-card-head">
        <h3>Наборы</h3>
        <p>Добавляйте наборы, загружайте два фото, выбирайте товары. На главной показываются все наборы с включённым «Показывать на сайте».</p>
      </div>
      <div class="admin-section-list">
        ${bundles.map(createAdminBundleCardMarkup).join("")}
      </div>
      <div class="admin-section-toolbar admin-actions">
        <button class="button button-secondary" type="button" data-admin-add-bundle>Добавить набор</button>
        <button class="button button-primary" type="submit">Сохранить</button>
      </div>
    </form>
  `;
}

function createAdminAboutImageFieldMarkup(imageKey, image) {
  const label = aboutImageLabels[imageKey] ?? imageKey;

  return `
    <div class="admin-section-card admin-about-image-card">
      <div class="admin-section-card-head">
        <h3>${escapeHtml(label)}</h3>
      </div>
      <div class="admin-form-grid">
        <label class="field field-full">
          <span class="field-label">Адрес картинки</span>
          <input
            type="text"
            name="aboutImageSrc${imageKey}"
            value="${escapeHtml(image.src)}"
            data-about-image-field="${imageKey}"
            data-about-image-part="src"
          />
        </label>
        <label class="field field-full">
          <span class="field-label">Подпись (alt)</span>
          <input
            type="text"
            name="aboutImageAlt${imageKey}"
            value="${escapeHtml(image.alt)}"
            data-about-image-field="${imageKey}"
            data-about-image-part="alt"
          />
        </label>
        <label class="field field-full admin-upload-row">
          <span class="field-label">Выбрать файл</span>
          <input type="file" accept="image/*" data-about-image-file="${imageKey}" />
          <span class="admin-upload-note">Фото загрузится на сервер и сразу сохранится в блоке «О бренде».</span>
        </label>
        ${image.src ? `
          <div class="admin-about-image-preview">
            <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}" />
          </div>
        ` : ""}
      </div>
    </div>
  `;
}

function collectAboutFromPanel() {
  const panel = dom.adminAboutPanel;
  if (!panel) return getStoreAbout();

  const readValue = (name) => panel.querySelector(`[name="${name}"]`)?.value ?? "";
  const defaults = createDefaultAbout();
  const images = { ...defaults.images };

  aboutImageKeys.forEach((key) => {
    const src = panel.querySelector(`[data-about-image-field="${key}"][data-about-image-part="src"]`)?.value ?? "";
    const alt = panel.querySelector(`[data-about-image-field="${key}"][data-about-image-part="alt"]`)?.value ?? "";
    images[key] = sanitizeAboutImage({ src, alt }, defaults.images[key]);
  });

  const principles = [1, 2, 3, 4].map((index) => ({
    title: readValue(`aboutPrincipleTitle${index}`),
    text: readValue(`aboutPrincipleText${index}`),
  }));

  return sanitizeAboutRecord({
    kicker: readValue("aboutKicker"),
    title: readValue("aboutTitle"),
    lead: readValue("aboutLead"),
    principles,
    images,
  });
}

function renderAdminAboutPanel() {
  if (!dom.adminAboutPanel) return;

  const about = getStoreAbout();
  const principlesMarkup = about.principles.map((principle, index) => `
    <article class="admin-section-card" data-about-principle="${index + 1}">
      <div class="admin-section-card-head">
        <h3>Принцип ${index + 1}</h3>
      </div>
      <div class="admin-form-grid">
        <label class="field field-full">
          <span class="field-label">Заголовок</span>
          <input type="text" name="aboutPrincipleTitle${index + 1}" value="${escapeHtml(principle.title)}" />
        </label>
        <label class="field field-full">
          <span class="field-label">Текст</span>
          <textarea name="aboutPrincipleText${index + 1}">${escapeHtml(principle.text)}</textarea>
        </label>
      </div>
    </article>
  `).join("");

  const imagesMarkup = aboutImageKeys
    .map((key) => createAdminAboutImageFieldMarkup(key, about.images[key]))
    .join("");

  dom.adminAboutPanel.innerHTML = `
    <form class="admin-panel admin-form" id="adminAboutForm">
      <div class="checkout-card-head">
        <h3>Почему I-FOODS</h3>
        <p>Тексты и три фото в блоке «О бренде» на главной.</p>
      </div>

      <fieldset class="admin-fieldset">
        <legend>Тексты блока</legend>
        <div class="admin-form-grid">
          <label class="field field-full">
            <span class="field-label">Подпись над заголовком</span>
            <input type="text" name="aboutKicker" value="${escapeHtml(about.kicker)}" />
          </label>
          <label class="field field-full">
            <span class="field-label">Заголовок</span>
            <input type="text" name="aboutTitle" value="${escapeHtml(about.title)}" />
          </label>
          <label class="field field-full">
            <span class="field-label">Основной текст</span>
            <textarea name="aboutLead">${escapeHtml(about.lead)}</textarea>
          </label>
        </div>
      </fieldset>

      <fieldset class="admin-fieldset">
        <legend>Четыре принципа</legend>
        <div class="admin-about-principles">${principlesMarkup}</div>
      </fieldset>

      <fieldset class="admin-fieldset">
        <legend>Фото справа</legend>
        <div class="admin-about-images">${imagesMarkup}</div>
      </fieldset>

      <div class="admin-actions">
        <button class="button button-primary" type="submit">Сохранить</button>
      </div>
    </form>
  `;
}

function renderAdminHeroPanel() {
  if (!dom.adminHeroPanel) return;

  const hero = getStoreHero();

  dom.adminHeroPanel.innerHTML = `
    <form class="admin-panel admin-form" id="adminHeroForm">
      <div class="checkout-card-head">
        <h3>Главный экран</h3>
        <p>Заголовки первого блока и блока с видео, а также ссылка на ролик.</p>
      </div>
      <fieldset class="admin-fieldset">
        <legend>Заголовок H1 слева</legend>
        <div class="admin-form-grid">
          <label class="field">
            <span class="field-label">Первая строка H1</span>
            <input type="text" name="heroTopTitle" value="${escapeHtml(hero.topTitle)}" placeholder="Десерты" />
          </label>
          <label class="field">
            <span class="field-label">Вторая строка H1 (акцент)</span>
            <input type="text" name="heroTopSubtitle" value="${escapeHtml(hero.topSubtitle)}" placeholder="Зефир, пирожные и наборы…" />
          </label>
          <label class="field field-full">
            <span class="field-label">Текст под заголовком</span>
            <textarea name="heroTopText">${escapeHtml(hero.topText)}</textarea>
          </label>
        </div>
      </fieldset>
      <fieldset class="admin-fieldset">
        <legend>Блок с видео справа</legend>
        <div class="admin-form-grid">
          <label class="field field-full">
            <span class="field-label">Подпись над заголовком</span>
            <input type="text" name="heroStageLabel" value="${escapeHtml(hero.stageLabel)}" />
          </label>
          <label class="field field-full">
            <span class="field-label">Заголовок блока с видео</span>
            <input type="text" name="heroStageTitle" value="${escapeHtml(hero.stageTitle)}" />
          </label>
          <label class="field field-full">
            <span class="field-label">Подзаголовок блока с видео</span>
            <textarea name="heroStageSubtitle">${escapeHtml(hero.stageSubtitle)}</textarea>
          </label>
          ${createAdminHeroVideoToolsMarkup(hero)}
        </div>
      </fieldset>
      <div class="admin-actions">
        <button class="button button-primary" type="submit">Сохранить</button>
      </div>
    </form>
  `;
}

async function saveAdminCategories() {
  state.admin.store.categories = collectCategoriesFromPanel();

  if (!(await saveAdminStore())) {
    renderAdminSection();
    return;
  }

  rebuildCatalogData();
  renderAllViews();
  showToast("Категории сохранены.");
}

async function saveAdminBundles() {
  state.admin.store.bundles = collectBundlesFromPanel();

  if (!(await saveAdminStore())) {
    renderAdminSection();
    return;
  }

  rebuildCatalogData();
  renderAllViews();
  if (state.admin.activeTab === "bundles") {
    renderAdminBundlesPanel();
  }
  showToast("Наборы сохранены.");
}

async function saveAdminHero() {
  state.admin.store.hero = collectHeroFromPanel();

  if (!(await saveAdminStore())) {
    renderAdminSection();
    return;
  }

  renderAllViews();
  showToast("Главный экран обновлён.");
}

function collectStoryMomentsFromPanel() {
  const panel = dom.adminMomentsPanel;
  if (!panel) return getStoreStoryMoments();

  return getStoreStoryMoments().map((moment) => {
    const card = panel.querySelector(`[data-admin-story-moment="${moment.id}"]`);
    if (!card) return moment;

    const readValue = (name) => card.querySelector(`[name="${name}"]`)?.value ?? "";
    const readChecked = (name) => Boolean(card.querySelector(`[name="${name}"]`)?.checked);

    return sanitizeStoryMomentRecord({
      ...moment,
      placement: readValue(`storyPlacement-${moment.id}`),
      isVisible: readChecked(`storyVisible-${moment.id}`),
      isReverse: readChecked(`storyReverse-${moment.id}`),
      stageLabel: readValue(`storyStageLabel-${moment.id}`),
      stageTitle: readValue(`storyStageTitle-${moment.id}`),
      stageSubtitle: readValue(`storyStageSubtitle-${moment.id}`),
      noteLabel: readValue(`storyNoteLabel-${moment.id}`),
      noteText: readValue(`storyNoteText-${moment.id}`),
      linkHref: readValue(`storyLinkHref-${moment.id}`),
      linkLabel: readValue(`storyLinkLabel-${moment.id}`),
      videoUrl: readValue(`storyVideoUrl-${moment.id}`),
      sideTextFirst: readValue(`storySideTextFirst-${moment.id}`),
      sideTextSecond: readValue(`storySideTextSecond-${moment.id}`),
      companionLabel: readValue(`storyCompanionLabel-${moment.id}`),
      companionTitle: readValue(`storyCompanionTitle-${moment.id}`),
      companionSubtitle: readValue(`storyCompanionSubtitle-${moment.id}`),
      companionNoteLabel: readValue(`storyCompanionNoteLabel-${moment.id}`),
      companionNoteText: readValue(`storyCompanionNoteText-${moment.id}`),
      companionVideoUrl: readValue(`storyCompanionVideoUrl-${moment.id}`),
    });
  });
}

function createAdminStoryMomentCardMarkup(moment, index) {
  const isDualMoment = dualStoryMomentIds.has(moment.id);
  const placementOptions = Object.entries(storyMomentPlacementLabels)
    .map(([value, label]) => `<option value="${escapeHtml(value)}"${moment.placement === value ? " selected" : ""}>${escapeHtml(label)}</option>`)
    .join("");

  return `
    <article class="admin-section-card" data-admin-story-moment="${escapeHtml(moment.id)}">
      <div class="admin-section-card-head">
        <h3>Блок ${index + 1}: ${escapeHtml(storyMomentPlacementLabels[moment.placement] ?? moment.placement)}</h3>
        <label class="admin-toggle">
          <input type="checkbox" name="storyVisible-${escapeHtml(moment.id)}"${moment.isVisible ? " checked" : ""} />
          <span>
            <strong>Показывать на сайте</strong>
            <span class="admin-list-note">Скрытый блок не занимает место на главной.</span>
          </span>
        </label>
      </div>
      <div class="admin-form-grid">
        <label class="field">
          <span class="field-label">Место на странице</span>
          <select name="storyPlacement-${escapeHtml(moment.id)}">${placementOptions}</select>
        </label>
        <label class="admin-toggle">
          <input type="checkbox" name="storyReverse-${escapeHtml(moment.id)}"${moment.isReverse ? " checked" : ""} />
          <span>
            <strong>Видео слева</strong>
            <span class="admin-list-note">Зеркальный вариант, как в верхнем блоке, но с другой стороны.</span>
          </span>
        </label>
        <label class="field field-full">
          <span class="field-label">Подпись над заголовком</span>
          <input type="text" name="storyStageLabel-${escapeHtml(moment.id)}" value="${escapeHtml(moment.stageLabel)}" />
        </label>
        <label class="field field-full">
          <span class="field-label">Заголовок</span>
          <input type="text" name="storyStageTitle-${escapeHtml(moment.id)}" value="${escapeHtml(moment.stageTitle)}" />
        </label>
        <label class="field field-full">
          <span class="field-label">Описание</span>
          <textarea name="storyStageSubtitle-${escapeHtml(moment.id)}">${escapeHtml(moment.stageSubtitle)}</textarea>
        </label>
        <label class="field">
          <span class="field-label">Подпись в карточке снизу</span>
          <input type="text" name="storyNoteLabel-${escapeHtml(moment.id)}" value="${escapeHtml(moment.noteLabel)}" />
        </label>
        <label class="field field-full">
          <span class="field-label">Текст в карточке снизу</span>
          <textarea name="storyNoteText-${escapeHtml(moment.id)}">${escapeHtml(moment.noteText)}</textarea>
        </label>
        <label class="field">
          <span class="field-label">Ссылка</span>
          <input type="text" name="storyLinkHref-${escapeHtml(moment.id)}" value="${escapeHtml(moment.linkHref)}" placeholder="#catalog" />
        </label>
        <label class="field">
          <span class="field-label">Текст ссылки</span>
          <input type="text" name="storyLinkLabel-${escapeHtml(moment.id)}" value="${escapeHtml(moment.linkLabel)}" />
        </label>
        ${!isDualMoment ? createAdminVideoToolsMarkup({
          title: "Видео блока",
          description: "Ролик в формате верхнего блока: автозапуск без звука, зациклен.",
          urlInputName: `storyVideoUrl-${moment.id}`,
          fileInputName: `storyVideoFile-${moment.id}`,
          previewAttr: `data-admin-story-video-preview="${escapeHtml(moment.id)}"`,
          videoUrl: moment.videoUrl,
        }) : ""}
        ${isDualMoment ? `
          <fieldset class="admin-fieldset field-full">
            <legend>Текст справа вместо видео</legend>
            <div class="admin-form-grid">
              <label class="field field-full">
                <span class="field-label">Первый абзац</span>
                <textarea name="storySideTextFirst-${escapeHtml(moment.id)}">${escapeHtml(moment.sideTextFirst)}</textarea>
              </label>
              <label class="field field-full">
                <span class="field-label">Второй абзац</span>
                <textarea name="storySideTextSecond-${escapeHtml(moment.id)}">${escapeHtml(moment.sideTextSecond)}</textarea>
              </label>
            </div>
          </fieldset>
          <fieldset class="admin-fieldset field-full">
            <legend>Левая карточка в паре</legend>
            <div class="admin-form-grid">
              <label class="field field-full">
                <span class="field-label">Подпись над заголовком</span>
                <input type="text" name="storyCompanionLabel-${escapeHtml(moment.id)}" value="${escapeHtml(moment.companionLabel)}" />
              </label>
              <label class="field field-full">
                <span class="field-label">Заголовок</span>
                <input type="text" name="storyCompanionTitle-${escapeHtml(moment.id)}" value="${escapeHtml(moment.companionTitle)}" />
              </label>
              <label class="field field-full">
                <span class="field-label">Подзаголовок</span>
                <textarea name="storyCompanionSubtitle-${escapeHtml(moment.id)}">${escapeHtml(moment.companionSubtitle)}</textarea>
              </label>
              <label class="field">
                <span class="field-label">Подпись в карточке снизу</span>
                <input type="text" name="storyCompanionNoteLabel-${escapeHtml(moment.id)}" value="${escapeHtml(moment.companionNoteLabel)}" />
              </label>
              <label class="field field-full">
                <span class="field-label">Текст в карточке снизу</span>
                <textarea name="storyCompanionNoteText-${escapeHtml(moment.id)}">${escapeHtml(moment.companionNoteText)}</textarea>
              </label>
              ${createAdminVideoToolsMarkup({
                title: "Видео левой карточки",
                description: "Видео внутри карточки-пары.",
                urlInputName: `storyCompanionVideoUrl-${moment.id}`,
                fileInputName: `storyCompanionVideoFile-${moment.id}`,
                previewAttr: `data-admin-story-companion-video-preview="${escapeHtml(moment.id)}"`,
                videoUrl: moment.companionVideoUrl,
              })}
            </div>
          </fieldset>
        ` : ""}
      </div>
    </article>
  `;
}

function renderAdminMomentsPanel() {
  if (!dom.adminMomentsPanel) return;

  const moments = getStoreStoryMoments();

  dom.adminMomentsPanel.innerHTML = `
    <form class="admin-panel admin-form" id="adminMomentsForm">
      <div class="checkout-card-head">
        <h3>Сюжетные блоки на главной</h3>
        <p>Здесь можно менять заголовки, тексты и видео у обычных и задвоенных блоков.</p>
      </div>
      <div class="admin-section-list">
        ${moments.map(createAdminStoryMomentCardMarkup).join("")}
      </div>
      <div class="admin-actions">
        <button class="button button-primary" type="submit">Сохранить</button>
      </div>
    </form>
  `;
}

async function saveAdminMoments() {
  state.admin.store.storyMoments = collectStoryMomentsFromPanel();

  if (!(await saveAdminStore())) {
    renderAdminSection();
    return;
  }

  renderAllViews();
  if (state.admin.activeTab === "moments") {
    renderAdminMomentsPanel();
  }
  showToast("Сюжетные блоки обновлены.");
}

async function saveAdminAbout() {
  state.admin.store.about = collectAboutFromPanel();

  if (!(await saveAdminStore())) {
    renderAdminSection();
    return;
  }

  renderAllViews();
  if (state.admin.activeTab === "about") {
    renderAdminAboutPanel();
  }
  showToast("Блок «О бренде» обновлён.");
}

function addAdminCategory() {
  const categories = collectCategoriesFromPanel();
  const nextIndex = categories.length + 1;
  categories.push(sanitizeCategoryRecord({
    id: `category-${Date.now()}`,
    label: "Новая категория",
    description: "",
    image: categoryMeta.cakes.image,
    order: nextIndex,
    isVisible: true,
    tone: "aqua",
    filterId: `line-${nextIndex}`,
  }, categories.length));
  state.admin.store.categories = categories;
  renderAdminCategoriesPanel();
  state.admin.status = "Добавлена новая категория. Не забудьте сохранить.";
  if (dom.adminStatus) dom.adminStatus.textContent = state.admin.status;
}

function addAdminBundle() {
  const bundles = collectBundlesFromPanel();
  bundles.push(sanitizeBundleRecord({
    id: `bundle-${Date.now()}`,
    name: "Новый набор",
    description: "",
    image: "./изображения/ifoods-pack-viennese-pastry-front.jpg",
    imageSecondary: defaultBundleSecondaryImage,
    productIds: [],
    isVisible: true,
  }, bundles.length));
  state.admin.store.bundles = bundles;
  renderAdminBundlesPanel();
  state.admin.status = "Добавлен новый набор. Не забудьте сохранить.";
  if (dom.adminStatus) dom.adminStatus.textContent = state.admin.status;
}

function deleteAdminBundle(bundleId) {
  const bundles = collectBundlesFromPanel();
  const nextBundles = bundles.filter((bundle) => bundle.id !== bundleId);

  if (nextBundles.length === bundles.length) return;

  state.admin.store.bundles = nextBundles;
  renderAdminBundlesPanel();
  state.admin.status = "Набор удалён из списка. Нажмите «Сохранить», чтобы обновить сайт.";
  if (dom.adminStatus) dom.adminStatus.textContent = state.admin.status;
  showToast("Набор удалён. Сохраните изменения.");
}

async function applyAdminSectionImage(file, target) {
  if (!file || !target?.field || !target?.id) return;

  if (!file.type.startsWith("image/")) {
    showToast("Нужен файл изображения.");
    return;
  }

  try {
    let imageUrl = "";
    if (isAdminAuthenticated()) {
      imageUrl = await uploadAdminImageFile(file);
    } else {
      imageUrl = await readFileAsDataUrl(file);
    }

    if (target.scope === "category") {
      const categories = collectCategoriesFromPanel();
      const category = categories.find((item) => item.id === target.id);
      if (!category) return;
      category.image = imageUrl;
      state.admin.store.categories = categories;
      renderAdminCategoriesPanel();
    }

    if (target.scope === "bundle") {
      const fieldKey = target.field === "imageSecondary" ? "imageSecondary" : "image";
      const srcField = dom.adminBundlesPanel?.querySelector(
        `[data-bundle-field="${fieldKey}"][data-bundle-id="${target.id}"]`,
      );
      if (srcField) {
        srcField.value = imageUrl;
      }

      state.admin.status = "Сохраняем наборы…";
      if (dom.adminStatus) dom.adminStatus.textContent = state.admin.status;

      await saveAdminBundles();
      return;
    }

    if (target.scope === "about" && aboutImageKeys.includes(target.id)) {
      const srcField = dom.adminAboutPanel?.querySelector(`[data-about-image-field="${target.id}"][data-about-image-part="src"]`);
      if (srcField) {
        srcField.value = imageUrl;
      }

      state.admin.status = "Сохраняем блок «О бренде»…";
      if (dom.adminStatus) dom.adminStatus.textContent = state.admin.status;

      await saveAdminAbout();
      return;
    }

    state.admin.status = "Фото загружено. Нажмите «Сохранить», чтобы применить на сайте.";
    if (dom.adminStatus) dom.adminStatus.textContent = state.admin.status;
    showToast("Фото подставлено в форму.");
  } catch {
    showToast("Не удалось загрузить фото.");
  }
}

function renderAdminPreview() {
  const product = getAdminPreviewProduct();
  const previewHost = dom.adminRoot?.querySelector("[data-admin-preview]");
  const previewStageHost = dom.adminRoot?.querySelector("[data-admin-preview-stage]");
  const previewMetaHost = dom.adminRoot?.querySelector("[data-admin-preview-meta]");
  const imageModeNoteHost = dom.adminRoot?.querySelector("[data-admin-image-mode-note]");

  if (!previewHost || !product || !state.admin.draft) return;

  if (!previewStageHost || !previewMetaHost) {
    previewHost.innerHTML = createAdminPreviewMarkup(state.admin.draft);
    return;
  }

  previewStageHost.innerHTML = createAdminPreviewStageMarkup(product);
  previewMetaHost.innerHTML = createAdminPreviewMetaMarkup(product);

  if (imageModeNoteHost) {
    imageModeNoteHost.textContent = getAdminImageToolsModeNote(state.admin.draft);
  }
}

function renderAdminSection() {
  if (currentPage === "admin" && !isAdminAuthenticated()) return;

  const isVisible = (currentPage === "admin" && isAdminAuthenticated()) || state.admin.isEnabled;

  if (dom.adminSection) {
    dom.adminSection.hidden = !isVisible;
  }
  if (dom.adminToggle) {
    dom.adminToggle.textContent = state.admin.isEnabled ? "Закрыть админ" : "Админ";
    dom.adminToggle.setAttribute("aria-pressed", String(state.admin.isEnabled));
  }
  if (dom.adminStatus) {
    dom.adminStatus.textContent = state.admin.status;
  }

  if (!isVisible) {
    dom.adminProductsPanel && (dom.adminProductsPanel.innerHTML = "");
    dom.adminCategoriesPanel && (dom.adminCategoriesPanel.innerHTML = "");
    dom.adminBundlesPanel && (dom.adminBundlesPanel.innerHTML = "");
    dom.adminHeroPanel && (dom.adminHeroPanel.innerHTML = "");
    dom.adminMomentsPanel && (dom.adminMomentsPanel.innerHTML = "");
    dom.adminAboutPanel && (dom.adminAboutPanel.innerHTML = "");
    return;
  }

  if (state.admin.activeTab === "products") {
    if (!state.admin.selectedProductId && allProducts[0]) {
      state.admin.selectedProductId = allProducts[0].id;
    }

    if (!state.admin.draft && state.admin.selectedProductId) {
      state.admin.draft = createAdminDraftFromProduct(findProductById(state.admin.selectedProductId));
    }

    if (dom.adminProductsPanel) {
      dom.adminRoot = dom.adminProductsPanel;
      dom.adminProductsPanel.innerHTML = createAdminFormMarkup();
    }
    return;
  }

  if (state.admin.activeTab === "categories") {
    renderAdminCategoriesPanel();
    return;
  }

  if (state.admin.activeTab === "bundles") {
    renderAdminBundlesPanel();
    return;
  }

  if (state.admin.activeTab === "hero") {
    renderAdminHeroPanel();
    return;
  }

  if (state.admin.activeTab === "moments") {
    renderAdminMomentsPanel();
    return;
  }

  if (state.admin.activeTab === "about") {
    renderAdminAboutPanel();
  }
}

function selectAdminProduct(productId) {
  const product = findProductById(productId);
  if (!product) return;

  state.admin.selectedProductId = product.id;
  state.admin.draft = createAdminDraftFromProduct(product);
  state.admin.status = "Товар открыт.";
  renderAdminSection();
}

function openAdminEditor() {
  state.admin.isEnabled = true;
  if (!state.admin.selectedProductId && allProducts[0]) {
    state.admin.selectedProductId = allProducts[0].id;
    state.admin.draft = createAdminDraftFromProduct(allProducts[0]);
  }
  renderAdminSection();
  dom.adminSection?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function createNewAdminProduct() {
  state.admin.isEnabled = true;
  state.admin.draft = createEmptyAdminDraft();
  state.admin.selectedProductId = state.admin.draft.id;
  state.admin.status = "Новый товар готов. Сохраните его, чтобы добавить в список.";
  renderAdminSection();
  dom.adminSection?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function syncAdminDraftField(name, value, inputType = "text") {
  if (!state.admin.draft) return;

  switch (name) {
    case "adminName":
      state.admin.draft.name = String(value);
      break;
    case "adminWeight":
      state.admin.draft.weight = String(value);
      break;
    case "adminPrice":
      state.admin.draft.price = String(value);
      break;
    case "adminStock":
      state.admin.draft.stock = String(value);
      break;
    case "adminCategoryKey":
      state.admin.draft.categoryKey = String(value);
      break;
    case "adminMediaMode":
      state.admin.draft.mediaMode = value === "pack" ? "pack" : "social";
      break;
    case "adminImage":
      state.admin.draft.image = String(value);
      break;
    case "adminSummary":
      state.admin.draft.summary = String(value);
      break;
    case "adminDetails":
      state.admin.draft.details = String(value);
      break;
    case "adminDetailsBlock1":
    case "adminDetailsBlock2":
    case "adminDetailsBlock3":
      state.admin.draft.detailsBlocks[Number(name.slice(-1)) - 1] = String(value);
      state.admin.draft.details = composeAdminTextFromValues(state.admin.draft.detailsBlocks);
      break;
    case "adminStatusText":
      state.admin.draft.statusText = String(value);
      break;
    case "adminStatusBlock1":
    case "adminStatusBlock2":
    case "adminStatusBlock3":
      state.admin.draft.statusBlocks[Number(name.slice(-1)) - 1] = String(value);
      state.admin.draft.statusText = composeAdminTextFromValues(state.admin.draft.statusBlocks);
      break;
    case "adminShiftX":
      state.admin.draft.mediaTuning = {
        ...(state.admin.draft.mediaTuning ?? {}),
        x: `${value}%`,
      };
      break;
    case "adminShiftY":
      state.admin.draft.mediaTuning = {
        ...(state.admin.draft.mediaTuning ?? {}),
        y: `${value}%`,
      };
      break;
    case "adminScale":
      state.admin.draft.mediaTuning = {
        ...(state.admin.draft.mediaTuning ?? {}),
        scale: String(value),
      };
      break;
    case "adminHoverScale":
      state.admin.draft.mediaTuning = {
        ...(state.admin.draft.mediaTuning ?? {}),
        hoverScale: String(value),
      };
      break;
    case "adminIsPublished":
      state.admin.draft.isPublished = inputType === "checkbox" ? Boolean(value) : value === "true";
      if (!state.admin.draft.isPublished) {
        state.admin.draft.isFeatured = false;
      }
      break;
    case "adminIsHit":
      state.admin.draft.isHit = inputType === "checkbox" ? Boolean(value) : value === "true";
      break;
    case "adminIsNew":
      state.admin.draft.isNew = inputType === "checkbox" ? Boolean(value) : value === "true";
      break;
    case "adminIsBundle":
      state.admin.draft.isBundle = inputType === "checkbox" ? Boolean(value) : value === "true";
      break;
    case "adminIsLineup":
      state.admin.draft.isLineup = inputType === "checkbox" ? Boolean(value) : value === "true";
      break;
    case "adminIsFeatured":
      state.admin.draft.isFeatured = inputType === "checkbox" ? Boolean(value) : value === "true";
      if (state.admin.draft.isFeatured) {
        state.admin.draft.isPublished = true;
      }
      break;
    default:
      return;
  }

  state.admin.status = "Есть несохранённые изменения.";
  if (dom.adminStatus) {
    dom.adminStatus.textContent = state.admin.status;
  }
  renderAdminPreview();
}

function reconcileCartWithCatalog() {
  let changed = false;

  Object.entries(state.cart).forEach(([productId, rawQuantity]) => {
    const product = findProductById(productId);
    const quantity = Number(rawQuantity) || 0;

    if (!product || quantity <= 0 || product.stock <= 0) {
      delete state.cart[productId];
      changed = true;
      return;
    }

    if (quantity > product.stock) {
      state.cart[productId] = product.stock;
      changed = true;
    }
  });

  if (changed) {
    saveCart();
  }
}

function renderAllViews() {
  renderCounters();
  renderHeroStage();
  renderStoryMoments();
  renderAboutSection();
  renderFeaturedPanel();
  renderLineupBlock();
  renderCategories();
  renderHits();
  renderBundlesSection();
  renderFilters();
  renderCatalog();
  renderCommercePanels();
  renderAdminSection();
}

function isMobile() {
  return window.innerWidth <= 960;
}

function renderCatalog() {
  if (!dom.productsGrid || !dom.catalogMeta || !dom.loadMoreButton) return;

  const filtered = getFilteredProducts();
  
  // На мобильных показываем все товары сразу, на десктопе — с пагинацией
  const visibleCount = isMobile() ? filtered.length : state.visibleCount;
  const visibleProducts = filtered.slice(0, visibleCount);
  
  dom.productsGrid.innerHTML = visibleProducts.length > 0
    ? visibleProducts.map(createProductCard).join("")
    : `
      <div class="checkout-empty">
        <strong>Здесь пока пусто</strong>
        <p>На странице управления можно вернуть товары, сменить раздел или добавить новые.</p>
      </div>
    `;
  dom.catalogMeta.textContent = `${filtered.length} ${pluralize(filtered.length, ["десерт", "десерта", "десертов"])} в этом разделе`;
  
  // На мобильных скрываем кнопку, на десктопе — показываем если нужно
  if (isMobile()) {
    dom.loadMoreButton.hidden = true;
  } else {
    dom.loadMoreButton.hidden = filtered.length <= state.visibleCount;
  }
}

async function saveAdminDraft() {
  if (!state.admin.draft) return;

  const normalized = normalizeProductRecord({
    ...state.admin.draft,
    id: state.admin.draft.id,
    source: state.admin.draft.source,
  });
  const snapshot = sanitizeAdminProductRecord(extractAdminSnapshot(normalized));

  if (normalized.source === "custom") {
    const existingIndex = state.admin.store.customProducts.findIndex((product) => product.id === normalized.id);
    if (existingIndex >= 0) {
      state.admin.store.customProducts[existingIndex] = snapshot;
    } else {
      state.admin.store.customProducts.push(snapshot);
    }
  } else {
    state.admin.store.overrides[normalized.id] = snapshot;
  }

  if (state.admin.draft.isFeatured && normalized.isPublished) {
    state.admin.store.featuredProductId = normalized.id;
  } else if (state.admin.store.featuredProductId === normalized.id) {
    state.admin.store.featuredProductId = "";
  }

  if (!(await saveAdminStore())) {
    renderAdminSection();
    return;
  }

  rebuildCatalogData();
  reconcileCartWithCatalog();
  state.admin.selectedProductId = normalized.id;
  state.admin.draft = createAdminDraftFromProduct(findProductById(normalized.id));
  renderAllViews();

  const lineupCount = products.filter((product) => product.isLineup).length;
  const hitCount = products.filter((product) => product.isHit).length;

  if (lineupCount > HOME_PREVIEW_PRODUCT_COUNT) {
    showToast(`Карточка сохранена. В линейке показываются ${HOME_PREVIEW_PRODUCT_COUNT} из ${lineupCount} отмеченных товаров.`);
    return;
  }

  if (hitCount > HOME_PREVIEW_PRODUCT_COUNT) {
    showToast(`Карточка сохранена. В хитах показываются ${HOME_PREVIEW_PRODUCT_COUNT} из ${hitCount} отмеченных товаров.`);
    return;
  }

  showToast(`Карточка «${normalized.variant}» сохранена.`);
}

async function resetAdminProductToBase() {
  const draft = state.admin.draft;
  if (!draft || draft.source !== "base") return;

  delete state.admin.store.overrides[draft.id];
  if (state.admin.store.featuredProductId === draft.id) {
    state.admin.store.featuredProductId = "";
  }

  if (!(await saveAdminStore())) {
    renderAdminSection();
    return;
  }

  rebuildCatalogData();
  state.admin.selectedProductId = draft.id;
  state.admin.draft = createAdminDraftFromProduct(findProductById(draft.id));
  renderAllViews();
  showToast("Вернули исходный вид товара.");
}

async function deleteAdminProduct() {
  const draft = state.admin.draft;
  if (!draft || draft.source !== "custom") return;

  state.admin.store.customProducts = state.admin.store.customProducts.filter((product) => product.id !== draft.id);
  delete state.cart[draft.id];
  if (state.admin.store.featuredProductId === draft.id) {
    state.admin.store.featuredProductId = "";
  }

  if (!(await saveAdminStore())) {
    renderAdminSection();
    return;
  }

  rebuildCatalogData();
  reconcileCartWithCatalog();
  state.admin.selectedProductId = allProducts[0]?.id ?? "";
  state.admin.draft = state.admin.selectedProductId
    ? createAdminDraftFromProduct(findProductById(state.admin.selectedProductId))
    : null;
  renderAllViews();
  showToast("Товар удалён из списка.");
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("read-error"));
    reader.readAsDataURL(file);
  });
}

async function uploadAdminMediaFile(file, fieldName = "image") {
  const token = window.ifoodsAuth?.getAdminToken?.();
  if (!token) {
    throw new Error("missing-token");
  }

  const formData = new FormData();
  formData.append(fieldName, file);

  const response = await fetch(UPLOAD_API, {
    method: "POST",
    headers: {
      "X-Admin-Token": token,
    },
    body: formData,
  });

  let payload = null;
  try {
    payload = await response.json();
  } catch {
    payload = null;
  }

  if (!response.ok) {
    const errorCode = payload?.error ?? "upload-failed";
    throw new Error(errorCode);
  }

  if (!payload?.url) {
    throw new Error("upload-invalid-response");
  }

  return payload.url;
}

async function uploadAdminImageFile(file) {
  return uploadAdminMediaFile(file, "image");
}

async function uploadAdminVideoFile(file) {
  return uploadAdminMediaFile(file, "video");
}

function getUploadErrorMessage(error) {
  switch (error?.message) {
    case "file_too_large":
      return "Файл слишком большой. Для видео — до 50 МБ, для фото — до 5 МБ.";
    case "unsupported_type":
      return "Этот формат файла не поддерживается.";
    case "missing-token":
      return "Нужно войти в админку, чтобы загружать файлы.";
    default:
      return "Не удалось загрузить файл. Проверьте формат и размер.";
  }
}

async function applyAdminHeroVideo(file) {
  if (!file) return;

  if (!isVideoUploadFile(file)) {
    showToast("Нужен видеофайл (MP4, WebM или MOV).");
    return;
  }

  const maxBytes = 50 * 1024 * 1024;
  if (file.size > maxBytes) {
    showToast("Видео больше 50 МБ. Сожмите файл или загрузите более короткий ролик.");
    return;
  }

  if (!isAdminAuthenticated()) {
    showToast("Загрузка видео доступна только после входа в админку.");
    return;
  }

  const fileInput = dom.adminHeroPanel?.querySelector('[name="heroVideoFile"]');
  if (fileInput) fileInput.disabled = true;

  try {
    state.admin.status = "Загружаем видео…";
    if (dom.adminStatus) dom.adminStatus.textContent = state.admin.status;

    const videoUrl = await uploadAdminVideoFile(file);
    const urlField = dom.adminHeroPanel?.querySelector('[name="heroVideoUrl"]');
    if (urlField) {
      urlField.value = videoUrl;
    }

    updateAdminHeroVideoPreview(videoUrl);

    state.admin.status = "Сохраняем главный экран…";
    if (dom.adminStatus) dom.adminStatus.textContent = state.admin.status;

    await saveAdminHero();
  } catch (error) {
    state.admin.status = "Не удалось загрузить видео.";
    if (dom.adminStatus) dom.adminStatus.textContent = state.admin.status;
    showToast(getUploadErrorMessage(error));
  } finally {
    if (fileInput) {
      fileInput.disabled = false;
      fileInput.value = "";
    }
  }
}

async function applyAdminStoryMomentVideo(file, momentId, options = {}) {
  if (!file || !momentId) return;
  const {
    fileInputNamePrefix = "storyVideoFile-",
    urlInputNamePrefix = "storyVideoUrl-",
    previewType = "story",
  } = options;

  if (!isVideoUploadFile(file)) {
    showToast("Нужен видеофайл (MP4, WebM или MOV).");
    return;
  }

  const maxBytes = 50 * 1024 * 1024;
  if (file.size > maxBytes) {
    showToast("Видео больше 50 МБ. Сожмите файл или загрузите более короткий ролик.");
    return;
  }

  if (!isAdminAuthenticated()) {
    showToast("Загрузка видео доступна только после входа в админку.");
    return;
  }

  const fileInput = dom.adminMomentsPanel?.querySelector(`[name="${fileInputNamePrefix}${momentId}"]`);
  if (fileInput) fileInput.disabled = true;

  try {
    state.admin.status = "Загружаем видео…";
    if (dom.adminStatus) dom.adminStatus.textContent = state.admin.status;

    const videoUrl = await uploadAdminVideoFile(file);
    const urlField = dom.adminMomentsPanel?.querySelector(`[name="${urlInputNamePrefix}${momentId}"]`);
    if (urlField) {
      urlField.value = videoUrl;
    }

    updateAdminStoryMomentVideoPreview(momentId, videoUrl, previewType);

    state.admin.store.storyMoments = collectStoryMomentsFromPanel();
    state.admin.status = "Сохраняем видео-блоки…";
    if (dom.adminStatus) dom.adminStatus.textContent = state.admin.status;

    await saveAdminMoments();
  } catch (error) {
    state.admin.status = "Не удалось загрузить видео.";
    if (dom.adminStatus) dom.adminStatus.textContent = state.admin.status;
    showToast(getUploadErrorMessage(error));
  } finally {
    if (fileInput) {
      fileInput.disabled = false;
      fileInput.value = "";
    }
  }
}

async function applyAdminImageFile(file) {
  if (!file || !state.admin.draft) return;

  if (!file.type.startsWith("image/")) {
    showToast("Для карточки нужен файл изображения.");
    return;
  }

  try {
    let imageUrl = "";

    if (isAdminAuthenticated()) {
      imageUrl = await uploadAdminImageFile(file);
    } else {
      imageUrl = await readFileAsDataUrl(file);
    }

    state.admin.draft.image = imageUrl;
    if (state.admin.draft.mediaMode !== "pack") {
      state.admin.draft.mediaMode = "social";
    }
    state.admin.status = `Фото «${file.name}» добавлено. Сохраните изменения.`;
    if (dom.adminStatus) {
      dom.adminStatus.textContent = state.admin.status;
    }
    const imageField = dom.adminRoot?.querySelector('[name="adminImage"]');
    if (imageField) {
      imageField.value = imageUrl;
    }
    renderAdminPreview();
  } catch {
    showToast("Не удалось загрузить изображение на сервер.");
  }
}

function renderFeaturedPanel() {
  const product = getSelectedProduct();
  if (!product || !dom.featuredPanel) {
    if (dom.featuredPanel) {
      dom.featuredPanel.innerHTML = `
        <div class="checkout-empty">
          <strong>На витрине пока пусто</strong>
          <p>Откройте управление и верните хотя бы один товар.</p>
        </div>
      `;
    }
    return;
  }

  const tabContentMap = {
    description: product.summary,
    details: product.details,
    status: product.statusText,
  };

  const badges = [
    `<span class="pill">${featuredLeadBadge[product.categoryKey] ?? product.category}</span>`,
    product.isHit ? '<span class="pill">Выбор гостей</span>' : product.isLow ? '<span class="pill">Мало осталось</span>' : "",
  ]
    .filter(Boolean)
    .join("");

  const tabsMarkup = featuredTabs
    .map(
      (tab) => `
        <button class="featured-tab ${tab.id === state.featuredTab ? "is-active" : ""}" type="button" data-featured-tab="${tab.id}">
          ${tab.label}
        </button>
      `,
    )
    .join("");

  dom.featuredPanel.innerHTML = `
    <div class="featured-top">
      <button class="mini-link" type="button" data-filter-jump="${categoryMeta[product.categoryKey].filterId}">← К линейке</button>
      <div class="pill-group">${badges}</div>
    </div>
    <div class="featured-layout">
      <div class="featured-overview">
        <div class="featured-content">
          <div class="featured-headline">
            <p class="eyebrow">${product.category}</p>
            <h2 class="featured-name">${product.name}</h2>
            <p class="featured-subline">${product.weight} · ${product.variant}</p>
          </div>
          <div class="featured-facts">
            <article class="fact-card"><strong>${product.weight}</strong><span>Вес порции</span></article>
            <article class="fact-card"><strong>${product.stock} шт.</strong><span>${product.isLow ? "Осталось в витрине" : "Сейчас в наличии"}</span></article>
          </div>
          <div class="featured-details">
            <div class="featured-tabs">${tabsMarkup}</div>
            <div class="featured-panel-copy">${tabContentMap[state.featuredTab]}</div>
          </div>
        </div>
        <div class="featured-media is-${product.mediaMode}">
          <img src="${product.image}" alt="${product.name}" />
        </div>
      </div>
      <div class="featured-purchase-bar">
        <div class="featured-price-row">
          <div>
            <div class="featured-price">${formatPrice(product.price)}</div>
            <div class="availability ${product.isLow ? "availability-low" : ""}">
              ${product.isLow ? "Осталось немного" : "В наличии"}
            </div>
          </div>
        </div>
        <div class="featured-actions">
          <div class="quantity-stepper" aria-label="Количество">
            <button type="button" data-qty-action="decrease">−</button>
            <span>${state.featuredQuantity}</span>
            <button type="button" data-qty-action="increase">+</button>
          </div>
          <button class="button button-primary" type="button" data-add-product="${product.id}">В корзину</button>
          <button class="button button-secondary" type="button" data-scroll-to="#catalog">В каталог</button>
        </div>
      </div>
    </div>
  `;
}

function createBadgeMarkup(product) {
  const badges = [];
  if (product.isHit) badges.push('<span class="mini-pill hit">Хит</span>');
  if (product.isNew) badges.push('<span class="mini-pill new">Новинка</span>');
  if (product.isLow) badges.push('<span class="mini-pill low">Мало</span>');
  return badges.join("");
}

function createProductCard(product) {
  return `
    <article class="product-card" data-product-card="${product.id}">
      <div class="product-card-media is-${product.mediaMode}"${buildCardMediaStyle(product)}>
        <img src="${product.image}" alt="${product.name}" />
        <div class="product-badges">${createBadgeMarkup(product)}</div>
      </div>
      <div class="product-content">
        <div>
          <h3>${product.name}</h3>
          <p>${product.summary}</p>
        </div>
        <div class="product-meta">${product.weight} · ${product.category}</div>
        <div class="product-price-row">
          <div class="product-price">${formatPrice(product.price)}</div>
          <div class="availability ${product.isLow ? "availability-low" : ""}">
            ${product.isLow ? "Мало" : "В наличии"}
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="button-tertiary" type="button" data-select-product="${product.id}">Подробнее</button>
        <button class="button button-primary" type="button" data-add-product="${product.id}">В корзину</button>
      </div>
    </article>
  `;
}

function renderHits() {
  if (!dom.hitsGrid) return;

  const hitProducts = products.filter((product) => product.isHit).slice(0, HOME_PREVIEW_PRODUCT_COUNT);
  dom.hitsGrid.innerHTML = hitProducts.length > 0
    ? hitProducts.map(createProductCard).join("")
    : `
      <div class="checkout-empty">
        <strong>Популярное пока не собрано</strong>
        <p>Отметьте нужные товары на странице управления.</p>
      </div>
    `;
}

function renderCategories() {
  if (!dom.categoriesGrid) return;

  dom.categoriesGrid.innerHTML = categoryCards.length > 0
    ? categoryCards
      .map(
        (category) => `
        <button class="category-card" type="button" data-tone="${category.tone}" data-filter-jump="${category.filterId}">
        <div>
          <h3>${escapeHtml(category.label)}</h3>
          <p>${category.description
            ? `${escapeHtml(category.description)} `
            : ""}${category.count} ${pluralize(category.count, ["десерт", "десерта", "десертов"])}</p>
        </div>
          <div class="category-card-media is-${category.mediaMode}">
            <img src="${escapeHtml(category.image)}" alt="${escapeHtml(category.label)}" />
          </div>
        </button>
      `,
      )
      .join("")
    : `
      <div class="checkout-empty">
        <strong>Линейки пока скрыты</strong>
        <p>Включите категории в админке, чтобы они появились на главной.</p>
      </div>
    `;
}

function createBundleCalloutMarkup(bundle) {
  const picks = resolveBundleProducts(bundle);
  const picksMarkup = picks.length > 0
    ? picks.map((product) => `<span class="pill">${escapeHtml(product.variant)} · ${formatPrice(product.price)}</span>`).join("")
    : '<span class="pill">Выберите товары для этого набора в админке</span>';

  const mainAlt = bundle.name || "Набор I-FOODS";
  const secondaryAlt = `${mainAlt} — фото 2`;

  return `
    <article class="collection-callout" data-bundle-id="${escapeHtml(bundle.id)}">
      <div class="collection-copy">
        <p class="section-kicker">Наборы на каждый день</p>
        <h2>${escapeHtml(bundle.name)}</h2>
        <p>${escapeHtml(bundle.description)}</p>
        <div class="collection-picks">${picksMarkup}</div>
        <a class="button button-primary" href="#catalog">Собрать набор</a>
      </div>

      <div class="collection-visual">
        <div class="collection-visual-card">
          <img
            src="${escapeHtml(bundle.image)}"
            alt="${escapeHtml(mainAlt)}"
            loading="lazy"
          />
        </div>
        <div class="collection-visual-card collection-visual-card-offset">
          <img
            src="${escapeHtml(bundle.imageSecondary)}"
            alt="${escapeHtml(secondaryAlt)}"
            loading="lazy"
          />
        </div>
        <div class="collection-badge">Собрать за пару минут</div>
      </div>
    </article>
  `;
}

function renderBundlesSection() {
  const collectionsSection = document.getElementById("collections");
  const bundles = getVisibleBundles();

  if (collectionsSection) {
    collectionsSection.hidden = bundles.length === 0;
  }

  if (!dom.bundlesRoot) return;

  dom.bundlesRoot.innerHTML = bundles.length > 0
    ? bundles.map(createBundleCalloutMarkup).join("")
    : "";
}

function renderFilters() {
  if (!dom.filterBar) return;

  dom.filterBar.innerHTML = filters
    .map(
      (filter) => `
        <button class="filter-chip ${filter.id === state.selectedFilter ? "is-active" : ""}" type="button" data-filter="${filter.id}">
          ${filter.label}
        </button>
      `,
    )
    .join("");
}

function renderCounters() {
  if (dom.totalProducts) {
    dom.totalProducts.textContent = String(products.length);
  }
  if (dom.totalCategories) {
    dom.totalCategories.textContent = String(Object.keys(categoryMeta).length);
  }
  if (dom.cartCount) {
    dom.cartCount.textContent = String(getCartCount());
  }
}

function renderCommercePanels() {
  renderCart();
  renderCheckout();
  renderDeliverySection();
}

function resetCheckout({ keepOpen = false } = {}) {
  const nextState = createCheckoutState();
  nextState.isOpen = keepOpen && getCartCount() > 0;
  state.checkout = nextState;
}

function syncCheckoutField(name, value, inputType = "text") {
  switch (name) {
    case "customerName":
      state.checkout.customerName = String(value);
      delete state.checkout.errors.customerName;
      break;
    case "phone":
      state.checkout.phone = String(value);
      delete state.checkout.errors.phone;
      break;
    case "deliveryMethod":
      state.checkout.deliveryMethod = value === "pickup" ? "pickup" : "courier";
      if (state.checkout.deliveryMethod === "pickup") {
        state.checkout.address = createAddressFields();
      }
      delete state.checkout.errors.deliveryMethod;
      delete state.checkout.errors.deliveryZone;
      delete state.checkout.errors.addressCity;
      delete state.checkout.errors.addressStreet;
      delete state.checkout.errors.addressHouse;
      delete state.checkout.errors.deliveryInterval;
      break;
    case "deliveryZone":
      state.checkout.deliveryZone = value === "suburb" ? "suburb" : "city";
      delete state.checkout.errors.deliveryZone;
      delete state.checkout.errors.deliveryMethod;
      break;
    case "deliveryInterval":
      state.checkout.deliveryInterval = String(value);
      delete state.checkout.errors.deliveryInterval;
      break;
    case "addressCity":
      state.checkout.address.city = String(value);
      delete state.checkout.errors.addressCity;
      break;
    case "addressStreet":
      state.checkout.address.street = String(value);
      delete state.checkout.errors.addressStreet;
      break;
    case "addressHouse":
      state.checkout.address.house = String(value);
      delete state.checkout.errors.addressHouse;
      break;
    case "addressEntrance":
      state.checkout.address.entrance = String(value);
      break;
    case "addressFloor":
      state.checkout.address.floor = String(value);
      break;
    case "addressApartment":
      state.checkout.address.apartment = String(value);
      break;
    case "paymentMethod":
      state.checkout.paymentMethod = String(value);
      delete state.checkout.errors.paymentMethod;
      break;
    case "comment":
      state.checkout.comment = String(value);
      break;
    case "consent":
      state.checkout.consent = inputType === "checkbox" ? Boolean(value) : value === "true";
      delete state.checkout.errors.consent;
      break;
    default:
      break;
  }

  ensureCheckoutPaymentMethod();
}

function syncCheckoutStateFromForm(form) {
  if (!form?.elements) return;

  syncCheckoutField("customerName", form.elements.customerName?.value ?? "", "text");
  syncCheckoutField("phone", form.elements.phone?.value ?? "", "tel");
  syncCheckoutField("deliveryMethod", form.elements.deliveryMethod?.value ?? state.checkout.deliveryMethod, "radio");
  syncCheckoutField("deliveryZone", form.elements.deliveryZone?.value ?? state.checkout.deliveryZone, "radio");
  syncCheckoutField("deliveryInterval", form.elements.deliveryInterval?.value ?? state.checkout.deliveryInterval, "select-one");
  syncCheckoutField("addressCity", form.elements.addressCity?.value ?? "", "text");
  syncCheckoutField("addressStreet", form.elements.addressStreet?.value ?? "", "text");
  syncCheckoutField("addressHouse", form.elements.addressHouse?.value ?? "", "text");
  syncCheckoutField("addressEntrance", form.elements.addressEntrance?.value ?? "", "text");
  syncCheckoutField("addressFloor", form.elements.addressFloor?.value ?? "", "text");
  syncCheckoutField("addressApartment", form.elements.addressApartment?.value ?? "", "text");
  syncCheckoutField("paymentMethod", form.elements.paymentMethod?.value ?? state.checkout.paymentMethod, "radio");
  syncCheckoutField("comment", form.elements.comment?.value ?? "", "textarea");
  syncCheckoutField("consent", Boolean(form.elements.consent?.checked), "checkbox");
}

function validateCheckoutState() {
  ensureCheckoutPaymentMethod();

  const errors = {};
  const phoneDigits = getPhoneDigits(state.checkout.phone);
  const quote = getDeliveryQuote();
  const paymentOptions = getPaymentOptions();

  if (!state.checkout.customerName.trim()) {
    errors.customerName = "Укажите имя получателя.";
  } else if (state.checkout.customerName.trim().length < 2) {
    errors.customerName = "Имя должно быть не короче двух символов.";
  }

  if (phoneDigits.length < 11) {
    errors.phone = "Укажите телефон в формате +7 999 000 00 00.";
  }

  if (state.checkout.deliveryMethod !== "courier" && state.checkout.deliveryMethod !== "pickup") {
    errors.deliveryMethod = "Выберите способ получения.";
  }

  if (state.checkout.deliveryMethod === "courier") {
    if (!state.checkout.deliveryZone) {
      errors.deliveryZone = "Выберите зону доставки.";
    }
    if (!state.checkout.address.city.trim()) {
      errors.addressCity = "Укажите город доставки.";
    }
    if (!state.checkout.address.street.trim()) {
      errors.addressStreet = "Укажите улицу доставки.";
    }
    if (!state.checkout.address.house.trim()) {
      errors.addressHouse = "Укажите дом.";
    }
    if (!state.checkout.deliveryInterval) {
      errors.deliveryInterval = "Выберите удобный интервал.";
    }
    if (!quote.available) {
      errors.deliveryMethod = quote.note;
    }
  }

  if (!paymentOptions.some((option) => option.id === state.checkout.paymentMethod)) {
    errors.paymentMethod = "Выберите доступный способ оплаты.";
  }

  if (!state.checkout.consent) {
    errors.consent = "Подтвердите согласие, чтобы оформить заказ.";
  }

  return errors;
}

function focusFirstCheckoutError(errors) {
  const priority = [
    "customerName",
    "phone",
    "deliveryMethod",
    "deliveryZone",
    "addressCity",
    "addressStreet",
    "addressHouse",
    "deliveryInterval",
    "paymentMethod",
    "consent",
  ];

  const firstField = priority.find((fieldName) => errors[fieldName]);
  if (!firstField || !dom.checkoutRoot) return;

  const focusTarget = dom.checkoutRoot.querySelector(`[name="${firstField}"]`);
  if (!focusTarget) return;

  requestAnimationFrame(() => {
    focusTarget.focus();
  });
}

function buildOrderConfirmation() {
  const subtotal = getCartSubtotal();
  const quote = getDeliveryQuote(subtotal);
  const createdAt = new Date();
  const orderNumber = `IF-${createdAt.getFullYear().toString().slice(-2)}${String(createdAt.getMonth() + 1).padStart(2, "0")}${String(createdAt.getDate()).padStart(2, "0")}-${Math.floor(100 + Math.random() * 900)}`;

  return {
    number: orderNumber,
    createdAt: formatOrderDate(createdAt),
    customerName: state.checkout.customerName.trim(),
    phone: state.checkout.phone.trim(),
    deliveryLabel: state.checkout.deliveryMethod === "pickup"
      ? deliveryConfig.methods.pickup.label
      : `${deliveryConfig.methods.courier.label}, ${quote.zone?.label ?? "По городу"}`,
    receiveLabel: state.checkout.deliveryMethod === "pickup"
      ? deliveryConfig.methods.pickup.pickupDetails
      : formatAddressLabel(state.checkout.address),
    intervalLabel: state.checkout.deliveryMethod === "pickup"
      ? "Получение после подтверждения заказа"
      : `Интервал ${state.checkout.deliveryInterval}`,
    paymentLabel: deliveryConfig.paymentMethods[state.checkout.paymentMethod]?.label ?? "Оплата уточняется",
    subtotal,
    deliveryFee: quote.available ? quote.fee : 0,
    total: quote.available ? quote.total : subtotal,
    comment: state.checkout.comment.trim(),
  };
}

function submitCheckout(form) {
  syncCheckoutStateFromForm(form);
  const errors = validateCheckoutState();
  state.checkout.errors = errors;

  if (Object.keys(errors).length > 0) {
    renderCommercePanels();
    showToast("Проверьте поля оформления: часть данных ещё не заполнена.");
    focusFirstCheckoutError(errors);
    return;
  }

  const order = buildOrderConfirmation();
  state.checkout.order = order;
  state.checkout.isOpen = false;
  state.checkout.errors = {};
  state.cart = {};
  saveCart();
  renderCounters();
  renderCommercePanels();
  showToast(`Заказ ${order.number} принят. Скоро подтвердим детали.`);
  dom.checkoutSection?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openCheckout() {
  if (getCartCount() === 0) {
    showToast("Корзина пока пустая. Сначала добавьте десерты в заказ.");
    return;
  }

  if (state.checkout.order) {
    resetCheckout({ keepOpen: true });
  }

  state.checkout.isOpen = true;
  ensureCheckoutPaymentMethod();
  renderCommercePanels();
  dom.checkoutSection?.scrollIntoView({ behavior: "smooth", block: "start" });

  requestAnimationFrame(() => {
    dom.checkoutRoot?.querySelector('[name="customerName"]')?.focus();
  });
}

function setCartQuantity(productId, quantity) {
  const product = findProductById(productId);
  if (!product) return { product: null, quantity: 0, previous: 0, changed: false, removed: false, capped: false };

  const previous = Number(state.cart[productId] || 0);
  const normalized = Number.isFinite(quantity) ? Math.max(0, Math.floor(quantity)) : previous;
  const next = Math.min(normalized, product.stock);

  if (next <= 0) {
    delete state.cart[productId];
  } else {
    state.cart[productId] = next;
  }

  if (getCartCount() === 0 && !state.checkout.order) {
    state.checkout.isOpen = false;
    state.checkout.errors = {};
  }

  saveCart();
  renderCounters();
  renderCommercePanels();

  return {
    product,
    quantity: next,
    previous,
    changed: next !== previous,
    removed: previous > 0 && next === 0,
    capped: normalized > next,
  };
}

function addToCart(productId, amount = 1) {
  if (state.checkout.order) {
    resetCheckout();
  }

  const currentQuantity = Number(state.cart[productId] || 0);
  const result = setCartQuantity(productId, currentQuantity + amount);
  if (!result.product) return;

  if (!result.changed) {
    showToast(`Для «${result.product.variant}» сейчас доступно ${result.product.stock} шт. Больше добавить нельзя.`);
    return;
  }

  showToast(`Добавили «${result.product.variant}». В корзине сейчас ${getCartCount()} ${pluralize(getCartCount(), ["десерт", "десерта", "десертов"])}.`);
}

function clearCart() {
  const items = getCartItems();
  const itemCount = items.length;
  const dessertCount = items.reduce((sum, item) => sum + item.quantity, 0);

  if (dessertCount === 0) {
    showToast("Корзина уже пустая.");
    return;
  }

  const needsConfirmation = itemCount >= 3 || dessertCount >= 5;
  if (needsConfirmation) {
    const confirmationMessage = `В корзине ${itemCount} ${pluralize(itemCount, ["позиция", "позиции", "позиций"])} и ${dessertCount} ${pluralize(dessertCount, ["десерт", "десерта", "десертов"])}. Очистить всё?`;
    if (!window.confirm(confirmationMessage)) {
      showToast("Очистку корзины отменили.");
      return;
    }
  }

  state.cart = {};
  resetCheckout();
  saveCart();
  renderCounters();
  renderCommercePanels();
  showToast("Корзину очистили. Можно собрать заказ заново.");
}

function handleDocumentClick(event) {
  if (event.target?.id === "adminToggle") {
    state.admin.isEnabled = !state.admin.isEnabled;
    if (state.admin.isEnabled) {
      openAdminEditor();
    } else {
      renderAdminSection();
    }
    return;
  }

  const adminTabButton = event.target.closest("[data-admin-tab]");
  if (adminTabButton) {
    setAdminTab(adminTabButton.dataset.adminTab);
    return;
  }

  const adminAddCategoryButton = event.target.closest("[data-admin-add-category]");
  if (adminAddCategoryButton) {
    addAdminCategory();
    return;
  }

  const adminAddBundleButton = event.target.closest("[data-admin-add-bundle]");
  if (adminAddBundleButton) {
    addAdminBundle();
    return;
  }

  const adminDeleteBundleButton = event.target.closest("[data-admin-delete-bundle]");
  if (adminDeleteBundleButton) {
    deleteAdminBundle(adminDeleteBundleButton.dataset.adminDeleteBundle);
    return;
  }

  const adminSelectButton = event.target.closest("[data-admin-select]");
  if (adminSelectButton) {
    selectAdminProduct(adminSelectButton.dataset.adminSelect);
    return;
  }

  const adminNewButton = event.target.closest("[data-admin-new]");
  if (adminNewButton) {
    createNewAdminProduct();
    return;
  }

  const adminResetButton = event.target.closest("[data-admin-reset-product]");
  if (adminResetButton) {
    void resetAdminProductToBase();
    return;
  }

  const adminDeleteButton = event.target.closest("[data-admin-delete-product]");
  if (adminDeleteButton) {
    void deleteAdminProduct();
    return;
  }

  const openCheckoutButton = event.target.closest("[data-open-checkout]");
  if (openCheckoutButton) {
    openCheckout();
    return;
  }

  const resetCheckoutButton = event.target.closest("[data-reset-checkout]");
  if (resetCheckoutButton) {
    resetCheckout({ keepOpen: getCartCount() > 0 });
    renderCommercePanels();
    showToast("Форму оформления очистили.");
    return;
  }

  const resetOrderButton = event.target.closest("[data-reset-order]");
  if (resetOrderButton) {
    resetCheckout();
    renderCommercePanels();
    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const addButton = event.target.closest("[data-add-product]");
  if (addButton) {
    const productId = addButton.dataset.addProduct;
    const amount = productId === state.selectedProductId ? state.featuredQuantity : 1;
    addToCart(productId, amount);
    return;
  }

  const selectButton = event.target.closest("[data-select-product]");
  if (selectButton) {
    state.selectedProductId = selectButton.dataset.selectProduct;
    state.featuredQuantity = 1;
    renderFeaturedPanel();
    document.getElementById("top")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) {
    state.selectedFilter = filterButton.dataset.filter;
    state.visibleCount = 8;
    renderFilters();
    renderCatalog();
    return;
  }

  const jumpButton = event.target.closest("[data-filter-jump]");
  if (jumpButton) {
    state.selectedFilter = jumpButton.dataset.filterJump;
    state.visibleCount = 8;
    renderFilters();
    renderCatalog();
    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const quantityButton = event.target.closest("[data-qty-action]");
  if (quantityButton) {
    state.featuredQuantity = quantityButton.dataset.qtyAction === "increase"
      ? Math.min(state.featuredQuantity + 1, 12)
      : Math.max(state.featuredQuantity - 1, 1);
    renderFeaturedPanel();
    return;
  }

  const cartQuantityButton = event.target.closest("[data-cart-qty]");
  if (cartQuantityButton) {
    const productId = cartQuantityButton.dataset.cartProduct;
    const currentQuantity = Number(state.cart[productId] || 0);
    const nextQuantity = cartQuantityButton.dataset.cartQty === "increase"
      ? currentQuantity + 1
      : currentQuantity - 1;
    const result = setCartQuantity(productId, nextQuantity);
    if (!result.product) return;

    if (!result.changed && cartQuantityButton.dataset.cartQty === "increase") {
      showToast(`Для «${result.product.variant}» сейчас доступно ${result.product.stock} шт. Больше добавить нельзя.`);
      return;
    }

    if (result.removed) {
      showToast(`«${result.product.variant}» убрали из корзины.`);
    }
    return;
  }

  const cartRemoveButton = event.target.closest("[data-cart-remove]");
  if (cartRemoveButton) {
    const productId = cartRemoveButton.dataset.cartRemove;
    const result = setCartQuantity(productId, 0);
    if (result.product && result.previous > 0) {
      showToast(`«${result.product.variant}» убрали из корзины.`);
    }
    return;
  }

  const tabButton = event.target.closest("[data-featured-tab]");
  if (tabButton) {
    state.featuredTab = tabButton.dataset.featuredTab;
    renderFeaturedPanel();
    return;
  }

  const scrollButton = event.target.closest("[data-scroll-to]");
  if (scrollButton) {
    document.querySelector(scrollButton.dataset.scrollTo)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function handleDocumentInput(event) {
  const target = event.target;
  if (!target?.name) return;

  if (target.name.startsWith("admin")) {
    if (target.name === "adminImageFile") return;
    syncAdminDraftField(target.name, target.value, target.type);
    return;
  }

  if (target.dataset.categoryField || target.dataset.bundleField) {
    state.admin.status = "Есть несохранённые изменения.";
    if (dom.adminStatus) dom.adminStatus.textContent = state.admin.status;
    return;
  }

  if (target.closest("#adminHeroForm")) {
    state.admin.status = "Есть несохранённые изменения.";
    if (dom.adminStatus) dom.adminStatus.textContent = state.admin.status;
  }

  if (target.closest("#adminMomentsForm")) {
    state.admin.status = "Есть несохранённые изменения.";
    if (dom.adminStatus) dom.adminStatus.textContent = state.admin.status;
  }

  const textFields = new Set([
    "customerName",
    "phone",
    "addressCity",
    "addressStreet",
    "addressHouse",
    "addressEntrance",
    "addressFloor",
    "addressApartment",
    "comment",
  ]);
  if (!textFields.has(target.name)) return;

  syncCheckoutField(target.name, target.value, target.type);
}

function handleDocumentChange(event) {
  const target = event.target;
  if (!target) return;

  if (target.name === "adminImageFile") {
    applyAdminImageFile(target.files?.[0]);
    target.value = "";
    return;
  }

  if (target.name === "heroVideoFile") {
    void applyAdminHeroVideo(target.files?.[0]);
    target.value = "";
    return;
  }

  if (target.name?.startsWith("storyVideoFile-")) {
    const momentId = target.name.slice("storyVideoFile-".length);
    void applyAdminStoryMomentVideo(target.files?.[0], momentId);
    target.value = "";
    return;
  }

  if (target.name?.startsWith("storyCompanionVideoFile-")) {
    const momentId = target.name.slice("storyCompanionVideoFile-".length);
    void applyAdminStoryMomentVideo(target.files?.[0], momentId, {
      fileInputNamePrefix: "storyCompanionVideoFile-",
      urlInputNamePrefix: "storyCompanionVideoUrl-",
      previewType: "companion",
    });
    target.value = "";
    return;
  }

  if (target.dataset.categoryImageFile) {
    void applyAdminSectionImage(target.files?.[0], {
      scope: "category",
      id: target.dataset.categoryImageFile,
      field: "image",
    });
    target.value = "";
    return;
  }

  if (target.dataset.bundleImageFile) {
    const imagePart = target.dataset.bundleImagePart === "secondary" ? "imageSecondary" : "image";
    void applyAdminSectionImage(target.files?.[0], {
      scope: "bundle",
      id: target.dataset.bundleImageFile,
      field: imagePart,
    });
    target.value = "";
    return;
  }

  if (target.dataset.aboutImageFile) {
    void applyAdminSectionImage(target.files?.[0], {
      scope: "about",
      id: target.dataset.aboutImageFile,
      field: "src",
    });
    target.value = "";
    return;
  }

  if (!target.name) return;

  if (target.name.startsWith("admin")) {
    const value = target.type === "checkbox" ? target.checked : target.value;
    syncAdminDraftField(target.name, value, target.type);
    return;
  }

  if (target.closest("#adminHeroForm")) {
    state.admin.status = "Есть несохранённые изменения.";
    if (dom.adminStatus) dom.adminStatus.textContent = state.admin.status;
    return;
  }

  if (target.closest("#adminMomentsForm")) {
    state.admin.status = "Есть несохранённые изменения.";
    if (dom.adminStatus) dom.adminStatus.textContent = state.admin.status;
    return;
  }

  if (target.closest("#adminAboutForm")) {
    state.admin.status = "Есть несохранённые изменения.";
    if (dom.adminStatus) dom.adminStatus.textContent = state.admin.status;
    return;
  }

  if (target.dataset.categoryField || target.dataset.bundleField || target.dataset.bundleProduct) {
    state.admin.status = "Есть несохранённые изменения.";
    if (dom.adminStatus) dom.adminStatus.textContent = state.admin.status;
    return;
  }

  const dynamicFields = new Set(["deliveryMethod", "deliveryZone", "deliveryInterval", "paymentMethod", "consent"]);
  if (!dynamicFields.has(target.name)) return;

  syncCheckoutField(target.name, target.type === "checkbox" ? target.checked : target.value, target.type);
  renderCommercePanels();
}

function handleDocumentSubmit(event) {
  if (event.target?.id === "adminProductForm") {
    event.preventDefault();
    void saveAdminDraft();
    return;
  }

  if (event.target?.id === "adminCategoriesForm") {
    event.preventDefault();
    void saveAdminCategories();
    return;
  }

  if (event.target?.id === "adminBundlesForm") {
    event.preventDefault();
    void saveAdminBundles();
    return;
  }

  if (event.target?.id === "adminHeroForm") {
    event.preventDefault();
    void saveAdminHero();
    return;
  }

  if (event.target?.id === "adminMomentsForm") {
    event.preventDefault();
    void saveAdminMoments();
    return;
  }

  if (event.target?.id === "adminAboutForm") {
    event.preventDefault();
    void saveAdminAbout();
    return;
  }

  if (event.target?.id !== "checkoutForm") return;

  event.preventDefault();
  submitCheckout(event.target);
}

function setupLoadMore() {
  dom.loadMoreButton?.addEventListener("click", () => {
    state.visibleCount += 8;
    renderCatalog();
  });

  dom.showHitsInCatalog?.addEventListener("click", () => {
    state.selectedFilter = "hits";
    state.visibleCount = 8;
    renderFilters();
    renderCatalog();
    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  dom.cartPill?.addEventListener("click", () => {
    dom.cartSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  dom.checkoutButton?.addEventListener("click", openCheckout);
  dom.clearCartButton?.addEventListener("click", clearCart);
}

function bindStageMotion(stage) {
  if (!stage || stage.dataset.motionBound === "true") return;

  stage.dataset.motionBound = "true";
  stage.addEventListener("pointermove", (event) => {
    const rect = stage.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 24;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 24;
    stage.style.setProperty("--hero-shift-x", `${x}px`);
    stage.style.setProperty("--hero-shift-y", `${y}px`);
  });

  stage.addEventListener("pointerleave", () => {
    stage.style.setProperty("--hero-shift-x", "0px");
    stage.style.setProperty("--hero-shift-y", "0px");
  });
}

function setupStageMotion() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  if (dom.heroStage) {
    bindStageMotion(dom.heroStage);
  }

  document.querySelectorAll(".story-moment-stage").forEach((stage) => bindStageMotion(stage));
}

function setupReveals() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll("[data-reveal]").forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
}

let appStarted = false;

async function startApp() {
  if (appStarted) return;
  appStarted = true;

  if (currentPage === "admin") {
    state.admin.isEnabled = true;
    bindAdminDom();
  }

  state.admin.store = await hydrateAdminStore();
  rebuildCatalogData();
  reconcileCartWithCatalog();
  ensureCheckoutPaymentMethod();
  renderAllViews();
  setupLoadMore();
  setupStageMotion();
  setupReveals();
  document.addEventListener("click", handleDocumentClick);
  document.addEventListener("input", handleDocumentInput);
  document.addEventListener("change", handleDocumentChange);
  document.addEventListener("submit", handleDocumentSubmit);
  
  // Добавляем обработчик изменения размера окна для мобильной версии
  window.addEventListener('resize', function() {
    renderCatalog();
  });
}

window.ifoodsStartAdminApp = startApp;

function init() {
  if (currentPage === "admin" && !isAdminAuthenticated()) {
    window.addEventListener("ifoods-admin-auth", startApp, { once: true });
    return;
  }

  if (currentPage === "admin") {
    window.ifoodsAuth?.applyAdminGate?.();
    bindAdminDom();
  }

  void startApp();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}

function getProductCreatedAt(product) {
  if (product.createdAt) return Number(product.createdAt) || 0;
  const suffix = String(product.id).split("-").pop();
  const parsed = Number.parseInt(suffix, 10);
  return Number.isFinite(parsed) ? parsed : 0;
}

function sortLineupProducts(products) {
  return [...products].sort((left, right) => getProductCreatedAt(right) - getProductCreatedAt(left));
}

function renderLineupBlock() {
  const lineupContainer = dom.lineupGrid;
  if (!lineupContainer) return;

  const lineupProducts = state.lineupProducts ?? [];

  if (lineupProducts.length === 0) {
    lineupContainer.innerHTML = `
      <div class="checkout-empty">
        <strong>В линейке пока пусто</strong>
        <p>Отметьте до 4 товаров чекбоксом «Показывать в линейке» во вкладке «Товары».</p>
      </div>
    `;
    return;
  }

  lineupContainer.innerHTML = lineupProducts.map((product) => createProductCard(product)).join("");
}