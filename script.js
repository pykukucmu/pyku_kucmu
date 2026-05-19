const statuses = [
  "пью кофе ☕",
  "двигаю ключевые кадры ✦",
  "воспитываю пиксели",
  "делаю вид, что всё под контролем",
  "спорю с композицией",
  "выбираю между «нормально» и «идеально»"
];

const projectDetails = {
  babr: {
    kicker: "Маскот / Айдентика",
    title: "Сытый бабр",
    description: "Фестивальный образ с характером: маскот, цветовая логика и визуальные элементы, которые можно развивать в афишах, мерче и digital-материалах.",
    tags: ["персонаж", "айдентика", "event visuals"],
    link: {
      url: "https://edafest.ru/",
      label: "edafest.ru"
    },
    galleryType: "wide",
    images: [
      {
        src: "assets/images/project-babr-01.jpg",
        alt: "Кейс проекта Сытый бабр: маскот фестиваля"
      },
      {
        src: "assets/images/project-babr-02.jpg",
        alt: "Кейс проекта Сытый бабр: фирменные фоны"
      }
    ]
  },
  sber: {
    kicker: "Стикерпак",
    title: "Душа регионов",
    description: "Стикерпак для Сбера, где региональные образы собраны в дружелюбную визуальную систему: узнаваемо, тепло и без канцелярского холода.",
    tags: ["Сбер", "стикеры", "иллюстрация"],
    galleryType: "tall",
    images: [
      {
        src: "assets/images/project-sber-01.jpg",
        alt: "Кейс Душа регионов: стикерпак для команды Сбера"
      },
      {
        src: "assets/images/project-sber-02.jpg",
        alt: "Кейс Душа регионов: продолжение серии"
      },
      {
        src: "assets/images/project-sber-03.jpg",
        alt: "Кейс Душа регионов: от севера до юга"
      }
    ]
  },
  "feel-it": {
    kicker: "AI / Game concept",
    title: "Feel it!",
    description: "Концепция визуального мира для ироничной dating-игры: карточки персонажей, интерфейс, промо-экраны и розовый хаос, где red flags выглядят почти как green flags.",
    tags: ["AI-визуалы", "game concept", "UI mockup"],
    galleryType: "wide",
    images: [
      {
        src: "assets/images/project-feelit-01.webp",
        alt: "Кейс Feel it!: карточки персонажей и промо-экраны"
      },
      {
        src: "assets/images/project-feelit-02.webp",
        alt: "Кейс Feel it!: интерфейс и финальный экран"
      }
    ],
    videos: [
      {
        src: "assets/videos/project-feelit.mov",
        type: "video/quicktime",
        alt: "Видео проекта Feel it!"
      }
    ]
  },
  brickme: {
    kicker: "3D / NFT concept",
    title: "BRICKME",
    description: "Крипто-концепт с LEGO-style 3D-персонажами: аватары основателей, визуальная айдентика, промо-экран и анимированные персонажи для ончейн-коллекции.",
    tags: ["3D", "NFT", "Blender", "Nomad Sculpt"],
    galleryType: "mixed",
    images: [
      {
        src: "assets/images/project-brickme-01.jpg",
        alt: "Кейс BRICKME: презентационный экран проекта",
        layout: "wide"
      },
      {
        src: "assets/images/project-brickme-01.gif",
        alt: "Кейс BRICKME: анимация персонажа Johnny Mack",
        layout: "tall"
      },
      {
        src: "assets/images/project-brickme-02.gif",
        alt: "Кейс BRICKME: персонажи в траве",
        layout: "tall"
      },
      {
        src: "assets/images/project-brickme-03.gif",
        alt: "Кейс BRICKME: анимация персонажа Erik",
        layout: "tall"
      },
      {
        src: "assets/images/project-brickme-04.gif",
        alt: "Кейс BRICKME: анимация персонажа Jesse Pollack",
        layout: "tall"
      }
    ]
  },
  "future-ai": {
    kicker: "AI visuals",
    title: "Будущий кейс",
    description: "Здесь может появиться серия AI-визуалов, концептов для кампании или экспериментальная подача нового продукта.",
    tags: ["AI", "концепт", "coming soon"]
  },
  "future-motion": {
    kicker: "Motion",
    title: "Еще один проект",
    description: "Место под будущий motion-кейс: ролик, анимационный тизер, оформление презентации или визуальный разбор для бренда.",
    tags: ["motion", "video", "case design"]
  }
};

projectDetails.toxic = {
  kicker: "NFT / Visual content",
  title: "Lili & Toxicat",
  description: "Визуальная наполняющая персонажей из криптопроекта: серия NFT-визуалов, анимаций и атмосферных сцен, которые раскрывают характеры героев, музыкальный вайб и токсично-магический мир проекта.",
  tags: ["NFT", "персонажи", "анимация", "visual world"],
  galleryType: "mixed",
  images: [
    {
      src: "assets/images/project-toxic-01.jpg",
      alt: "Кейс Lili & Toxicat: музыкальный интерфейс проекта",
      layout: "wide"
    },
    {
      src: "assets/images/project-toxic-01.gif",
      alt: "Кейс Lili & Toxicat: космический визуал",
      layout: "tall"
    },
    {
      src: "assets/images/project-toxic-02.gif",
      alt: "Кейс Lili & Toxicat: профиль персонажа",
      layout: "tall"
    },
    {
      src: "assets/images/project-toxic-03.gif",
      alt: "Кейс Lili & Toxicat: метро",
      layout: "tall"
    },
    {
      src: "assets/images/project-toxic-04.gif",
      alt: "Кейс Lili & Toxicat: банка с персонажами",
      layout: "tall"
    },
    {
      src: "assets/images/project-toxic-05.gif",
      alt: "Кейс Lili & Toxicat: VR-персонаж",
      layout: "tall"
    },
    {
      src: "assets/images/project-toxic-06.gif",
      alt: "Кейс Lili & Toxicat: героиня в метро",
      layout: "tall"
    },
    {
      src: "assets/images/project-toxic-07.gif",
      alt: "Кейс Lili & Toxicat: рабочая комната",
      layout: "tall"
    },
    {
      src: "assets/images/project-toxic-08.gif",
      alt: "Кейс Lili & Toxicat: астронавт и пирамида",
      layout: "tall"
    },
    {
      src: "assets/images/project-toxic-09.gif",
      alt: "Кейс Lili & Toxicat: персонажи в космосе",
      layout: "tall"
    },
    {
      src: "assets/images/project-toxic-10.gif",
      alt: "Кейс Lili & Toxicat: финальный постер-анимация",
      layout: "tall"
    }
  ]
};

Object.values(projectDetails).forEach((project) => {
  const gifImages = [];

  project.images = (project.images || []).filter((image) => {
    if (!image.src.endsWith(".gif")) return true;
    gifImages.push({
      src: image.src.replace("assets/images/", "assets/videos/").replace(".gif", ".webm"),
      type: "video/webm",
      alt: image.alt,
      layout: image.layout,
      autoplay: true,
      loop: true
    });
    return false;
  });

  project.videos = [
    ...(project.videos || []).map((video) => ({
      ...video,
      src: video.src.endsWith(".mov") ? video.src.replace(".mov", ".webm") : video.src,
      type: video.src.endsWith(".mov") ? "video/webm" : video.type
    })),
    ...gifImages
  ];
});

const statusText = document.querySelector(".status-text");
let statusIndex = 0;
let isTypingStatus = false;

setInterval(() => {
  isTypingStatus = !isTypingStatus;

  if (!isTypingStatus) {
    statusIndex = (statusIndex + 1) % statuses.length;
  }

  statusText.animate(
    [
      { opacity: 0, transform: "translateY(6px)" },
      { opacity: 1, transform: "translateY(0)" }
    ],
    { duration: 320, easing: "ease-out" }
  );

  statusText.classList.toggle("is-typing", isTypingStatus);
  statusText.textContent = isTypingStatus ? "печатает" : statuses[statusIndex];
}, 2400);

document.addEventListener("pointerdown", () => {
  document.body.classList.add("is-clicking");
});

document.addEventListener("pointerup", () => {
  document.body.classList.remove("is-clicking");
});

document.addEventListener("pointercancel", () => {
  document.body.classList.remove("is-clicking");
});

const cards = [...document.querySelectorAll(".project-card")];
const dotsWrap = document.querySelector(".carousel-dots");
let activeIndex = 1;

cards.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.dataset.index = index;
  dotsWrap.append(dot);
});

function renderCarousel() {
  const dots = [...dotsWrap.children];

  cards.forEach((card, index) => {
    let offset = index - activeIndex;

    if (offset > cards.length / 2) offset -= cards.length;
    if (offset < -cards.length / 2) offset += cards.length;

    const abs = Math.abs(offset);
    const translateX = offset * 210;
    const rotateY = offset * -16;
    const scale = offset === 0 ? 1.08 : 0.84 - abs * 0.04;
    const opacity = abs > 2 ? 0 : 1 - abs * 0.16;
    const zIndex = 10 - abs;

    card.style.transform = `translateX(calc(-50% + ${translateX}px)) translateZ(${-abs * 80}px) rotateY(${rotateY}deg) scale(${scale})`;
    card.style.opacity = opacity;
    card.style.zIndex = zIndex;
    card.style.pointerEvents = abs > 2 ? "none" : "auto";
    card.classList.toggle("is-active", offset === 0);
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle("is-active", index === activeIndex);
  });
}

function moveCarousel(direction) {
  activeIndex = (activeIndex + direction + cards.length) % cards.length;
  renderCarousel();
}

document.querySelector(".prev").addEventListener("click", () => moveCarousel(-1));
document.querySelector(".next").addEventListener("click", () => moveCarousel(1));

dotsWrap.addEventListener("click", (event) => {
  if (!event.target.dataset.index) return;
  activeIndex = Number(event.target.dataset.index);
  renderCarousel();
});

const modal = document.querySelector(".project-modal");
const modalKicker = document.querySelector(".modal-kicker");
const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector(".modal-description");
const modalTags = document.querySelector(".modal-tags");
const modalGallery = document.querySelector(".modal-gallery");
const modalPrev = document.querySelector(".modal-prev");
const modalNext = document.querySelector(".modal-next");
const modalLinkWrap = document.querySelector(".modal-link-wrap");
const imageViewer = document.querySelector(".image-viewer");
const imageViewerImg = document.querySelector(".image-viewer-img");
let viewerScale = 1;
let viewerPanX = 0;
let viewerPanY = 0;
let isViewerDragging = false;
let viewerDragStartX = 0;
let viewerDragStartY = 0;
let viewerDragBaseX = 0;
let viewerDragBaseY = 0;
let initialPinchDistance = 0;
let initialPinchScale = 1;
let modalMediaIndex = 0;
const activePointers = new Map();

function cleanupProjectMedia() {
  [...modalGallery.querySelectorAll("video")].forEach((video) => {
    video.pause();
    video.currentTime = 0;
  });
  modalGallery.innerHTML = "";
  modalLinkWrap.innerHTML = "";
  modalMediaIndex = 0;
  modalPrev.classList.add("is-hidden");
  modalNext.classList.add("is-hidden");
}

function renderModalGallery() {
  const items = [...modalGallery.children];

  items.forEach((item, index) => {
    item.classList.toggle("is-current", index === modalMediaIndex);
    item.classList.toggle("is-prev", index === modalMediaIndex - 1);
    item.classList.toggle("is-next", index === modalMediaIndex + 1);
  });

  modalPrev.classList.toggle("is-hidden", modalMediaIndex <= 0);
  modalNext.classList.toggle("is-hidden", modalMediaIndex >= items.length - 1);
}

function moveModalGallery(direction) {
  const items = modalGallery.children.length;
  if (!items) return;

  modalMediaIndex = Math.min(Math.max(modalMediaIndex + direction, 0), items - 1);
  renderModalGallery();
}

function openProject(projectId) {
  const project = projectDetails[projectId];
  if (!project) return;

  closeImageViewer();
  cleanupProjectMedia();

  modalKicker.textContent = project.kicker;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalTags.innerHTML = "";
  modalMediaIndex = 0;
  modalGallery.className = `modal-gallery ${project.galleryType ? `is-${project.galleryType}` : "is-wide"}`;

  project.tags.forEach((tag) => {
    const item = document.createElement("span");
    item.textContent = tag;
    modalTags.append(item);
  });

  if (project.link) {
    const link = document.createElement("a");
    link.className = "modal-project-link";
    link.href = project.link.url;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = project.link.label;
    modalLinkWrap.append(link);
  }

  (project.images || []).forEach((image) => {
    const item = document.createElement("img");
    item.src = image.src;
    item.alt = image.alt;
    item.loading = "lazy";
    item.className = image.layout ? `gallery-media is-${image.layout}` : "";
    item.addEventListener("click", () => {
      if (!item.classList.contains("is-current")) return;
      openImageViewer(image.src, image.alt);
    });
    modalGallery.append(item);
  });

  (project.videos || []).forEach((video) => {
    const item = document.createElement("video");
    item.src = video.src;
    item.controls = !video.autoplay;
    item.autoplay = Boolean(video.autoplay);
    item.loop = Boolean(video.loop);
    item.muted = true;
    item.playsInline = true;
    item.preload = "metadata";
    item.className = video.layout ? `gallery-media is-${video.layout}` : "";
    item.setAttribute("aria-label", video.alt);
    modalGallery.append(item);
  });

  renderModalGallery();

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProject() {
  closeImageViewer();
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  cleanupProjectMedia();
}

function setViewerScale(scale) {
  viewerScale = Math.min(Math.max(scale, 1), 4);
  if (viewerScale === 1) {
    viewerPanX = 0;
    viewerPanY = 0;
  }
  renderImageViewerTransform();
}

function renderImageViewerTransform() {
  imageViewerImg.style.setProperty("--zoom", viewerScale);
  imageViewerImg.style.setProperty("--pan-x", `${viewerPanX}px`);
  imageViewerImg.style.setProperty("--pan-y", `${viewerPanY}px`);
}

function openImageViewer(src, alt) {
  imageViewerImg.src = src;
  imageViewerImg.alt = alt;
  viewerPanX = 0;
  viewerPanY = 0;
  setViewerScale(1);
  imageViewer.classList.add("is-open");
  imageViewer.setAttribute("aria-hidden", "false");
}

function closeImageViewer() {
  imageViewer.classList.remove("is-open");
  imageViewer.setAttribute("aria-hidden", "true");
  imageViewerImg.src = "";
  viewerPanX = 0;
  viewerPanY = 0;
  isViewerDragging = false;
  renderImageViewerTransform();
  activePointers.clear();
  initialPinchDistance = 0;
}

function getPointerDistance() {
  const points = [...activePointers.values()];
  if (points.length < 2) return 0;
  return Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
}

cards.forEach((card, index) => {
  card.addEventListener("focus", () => {
    if (index === activeIndex) return;
    activeIndex = index;
    renderCarousel();
  });

  card.addEventListener("click", () => {
    if (index !== activeIndex) {
      activeIndex = index;
      renderCarousel();
      return;
    }

    openProject(card.dataset.project);
  });

  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    openProject(card.dataset.project);
  });
});

document.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", closeProject);
});

document.querySelectorAll("[data-close-viewer]").forEach((element) => {
  element.addEventListener("click", closeImageViewer);
});

modalPrev.addEventListener("click", () => moveModalGallery(-1));
modalNext.addEventListener("click", () => moveModalGallery(1));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeImageViewer();
    closeProject();
  }
  if (modal.classList.contains("is-open")) {
    if (event.key === "ArrowLeft") moveModalGallery(-1);
    if (event.key === "ArrowRight") moveModalGallery(1);
    return;
  }
  if (event.key === "ArrowLeft") moveCarousel(-1);
  if (event.key === "ArrowRight") moveCarousel(1);
});

imageViewer.addEventListener("wheel", (event) => {
  if (!imageViewer.classList.contains("is-open")) return;
  event.preventDefault();
  const direction = event.deltaY > 0 ? -0.16 : 0.16;
  setViewerScale(viewerScale + direction);
}, { passive: false });

imageViewerImg.addEventListener("pointerdown", (event) => {
  event.preventDefault();
  activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
  imageViewerImg.setPointerCapture(event.pointerId);

  if (viewerScale > 1 && event.button === 0) {
    isViewerDragging = true;
    imageViewerImg.classList.add("is-dragging");
    viewerDragStartX = event.clientX;
    viewerDragStartY = event.clientY;
    viewerDragBaseX = viewerPanX;
    viewerDragBaseY = viewerPanY;
  }

  if (activePointers.size === 2) {
    initialPinchDistance = getPointerDistance();
    initialPinchScale = viewerScale;
  }
});

imageViewerImg.addEventListener("pointermove", (event) => {
  if (!activePointers.has(event.pointerId)) return;
  activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

  if (activePointers.size === 2 && initialPinchDistance) {
    setViewerScale(initialPinchScale * (getPointerDistance() / initialPinchDistance));
    return;
  }

});

document.addEventListener("pointermove", (event) => {
  if (!isViewerDragging || viewerScale <= 1) return;
  event.preventDefault();
  viewerPanX = viewerDragBaseX + event.clientX - viewerDragStartX;
  viewerPanY = viewerDragBaseY + event.clientY - viewerDragStartY;
  renderImageViewerTransform();
});

["pointerup", "pointercancel"].forEach((eventName) => {
  imageViewerImg.addEventListener(eventName, (event) => {
    activePointers.delete(event.pointerId);
    isViewerDragging = false;
    imageViewerImg.classList.remove("is-dragging");
    if (activePointers.size < 2) {
      initialPinchDistance = 0;
    }
  });
});

["pointerup", "pointercancel"].forEach((eventName) => {
  document.addEventListener(eventName, () => {
    isViewerDragging = false;
    imageViewerImg.classList.remove("is-dragging");
  });
});

let startX = 0;
const carousel = document.querySelector(".carousel");
let hoverFrame = null;
let hoverTimer = null;
let pendingHoverIndex = null;
let lastHoverSwitchTime = 0;
let hoverSwitchLocked = false;

function activateCardByPointer(clientX, clientY) {
  const carouselRect = carousel.getBoundingClientRect();
  if (
    clientX < carouselRect.left ||
    clientX > carouselRect.right ||
    clientY < carouselRect.top ||
    clientY > carouselRect.bottom
  ) {
    return;
  }

  const centerX = carouselRect.left + carouselRect.width / 2;
  const leftZone = carouselRect.left + carouselRect.width * 0.46;
  const rightZone = carouselRect.right - carouselRect.width * 0.46;
  const unlockLeft = carouselRect.left + carouselRect.width * 0.49;
  const unlockRight = carouselRect.right - carouselRect.width * 0.49;

  if (clientX > unlockLeft && clientX < unlockRight) {
    hoverSwitchLocked = false;
    pendingHoverIndex = null;
    window.clearTimeout(hoverTimer);
    return;
  }

  if (hoverSwitchLocked && Date.now() - lastHoverSwitchTime < 620) return;
  if (hoverSwitchLocked) hoverSwitchLocked = false;

  let direction = 0;
  if (clientX < leftZone) direction = -1;
  if (clientX > rightZone) direction = 1;
  if (!direction) return;

  const nextIndex = (activeIndex + direction + cards.length) % cards.length;

  if (nextIndex === activeIndex) return;
  if (Date.now() - lastHoverSwitchTime < 650) return;

  if (pendingHoverIndex === nextIndex) return;
  pendingHoverIndex = nextIndex;
  window.clearTimeout(hoverTimer);
  hoverTimer = window.setTimeout(() => {
    if (pendingHoverIndex === activeIndex) return;
    activeIndex = pendingHoverIndex;
    lastHoverSwitchTime = Date.now();
    hoverSwitchLocked = true;
    renderCarousel();
  }, 320);
}

carousel.addEventListener("pointermove", (event) => {
  if (event.pointerType && event.pointerType !== "mouse") return;
  window.cancelAnimationFrame(hoverFrame);
  hoverFrame = window.requestAnimationFrame(() => {
    activateCardByPointer(event.clientX, event.clientY);
  });
});

carousel.addEventListener("pointerleave", () => {
  pendingHoverIndex = null;
  hoverSwitchLocked = false;
  window.clearTimeout(hoverTimer);
});

carousel.addEventListener("pointerdown", (event) => {
  startX = event.clientX;
});

carousel.addEventListener("pointerup", (event) => {
  const distance = event.clientX - startX;
  if (Math.abs(distance) < 45) return;
  moveCarousel(distance > 0 ? -1 : 1);
});

renderCarousel();
