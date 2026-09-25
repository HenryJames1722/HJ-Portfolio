/* =========================
   EMAILJS CONFIGURATION
========================= */

emailjs.init({
  publicKey: "oBx7bKN2-8Uwxj0d-",
});

const EMAILJS_SERVICE_ID = "portfolio_gmail";
const EMAILJS_TEMPLATE_ID = "template_zh2yy2r";

const herbieCard = document.getElementById("herbies-card");
const gallery = document.getElementById("herbies-gallery");
const closeButton = document.getElementById("gallery-close");

// Open Gallery
herbieCard.addEventListener("click", function () {
  gallery.classList.add("active");
  document.body.style.overflow = "hidden";
});

// Close Gallery Button
closeButton.addEventListener("click", function () {
  gallery.classList.remove("active");
  document.body.style.overflow = "";
});

// Close when clicking outside the gallery content
gallery.addEventListener("click", function (event) {
  if (event.target === gallery) {
    gallery.classList.remove("active");
    document.body.style.overflow = "";
  }
});

// Close with Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    gallery.classList.remove("active");
    document.body.style.overflow = "";
  }
});

// ================================
// RAERENZ GALLERY DATA
// ================================

const raerenzGalleryData = {
  client: {
    title: "Raerenz Client Website",
    count: 17,
    folder: "client",
    portrait: 17,
  },

  admin: {
    title: "Raerenz Admin Website",
    count: 14,
    folder: "admin",
    portrait: null,
  },

  reports: {
    title: "Raerenz Reports",
    count: 8,
    folder: "reports",
    portrait: null,
  },
};

// ================================
// OPEN GALLERY
// ================================

function openRaerenzGallery(category, event) {
  // Prevent card click propagation
  if (event) {
    event.stopPropagation();
  }

  const gallery = document.getElementById("raerenz-gallery");

  const title = document.getElementById("raerenz-gallery-title");

  const track = document.getElementById("raerenz-gallery-track");

  const data = raerenzGalleryData[category];

  if (!data) return;

  // Update gallery title
  title.textContent = data.title;

  // Clear previous images
  track.innerHTML = "";

  // Generate images
  for (let i = 1; i <= data.count; i++) {
    const img = document.createElement("img");

    img.src = `img/raerenz/${data.folder}/${i}.png`;

    img.alt = `${data.title} Screenshot ${i}`;

    img.loading = "lazy";

    if (data.portrait === i) {
      img.classList.add("portrait");
    } else {
      img.classList.add("landscape");
    }

    track.appendChild(img);
  }

  // Show gallery
  gallery.classList.add("active");

  // Prevent background scrolling
  document.body.style.overflow = "hidden";
}

// ================================
// CLOSE GALLERY
// ================================

function closeRaerenzGallery() {
  const gallery = document.getElementById("raerenz-gallery");

  gallery.classList.remove("active");

  document.body.style.overflow = "";
}

// ================================
// CLICK OUTSIDE TO CLOSE
// ================================

document
  .getElementById("raerenz-gallery")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      closeRaerenzGallery();
    }
  });

// ================================
// ESCAPE KEY TO CLOSE
// ================================

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeRaerenzGallery();
  }
});

// ================================
// FULLSCREEN IMAGE VIEWER
// ================================

const imageViewer = document.getElementById("image-viewer");
const imageViewerImage = document.getElementById("image-viewer-image");
const imageViewerClose = document.getElementById("image-viewer-close");
const imageViewerPrev = document.getElementById("image-viewer-prev");
const imageViewerNext = document.getElementById("image-viewer-next");
const imageViewerCounter = document.getElementById("image-viewer-counter");

let currentViewerImages = [];
let currentViewerIndex = 0;

// ================================
// OPEN IMAGE
// ================================

function openImageViewer(images, index) {
  currentViewerImages = images;
  currentViewerIndex = index;

  showViewerImage();

  imageViewer.classList.add("active");

  document.body.style.overflow = "hidden";
}

// ================================
// SHOW CURRENT IMAGE
// ================================

function showViewerImage() {
  const image = currentViewerImages[currentViewerIndex];

  if (!image) return;

  imageViewerImage.src = image.src;
  imageViewerImage.alt = image.alt;

  imageViewerCounter.textContent = `${currentViewerIndex + 1} / ${currentViewerImages.length}`;
}

// ================================
// NEXT IMAGE
// ================================

function nextViewerImage() {
  currentViewerIndex++;

  if (currentViewerIndex >= currentViewerImages.length) {
    currentViewerIndex = 0;
  }

  showViewerImage();
}

// ================================
// PREVIOUS IMAGE
// ================================

function previousViewerImage() {
  currentViewerIndex--;

  if (currentViewerIndex < 0) {
    currentViewerIndex = currentViewerImages.length - 1;
  }

  showViewerImage();
}

// ================================
// CLOSE VIEWER
// ================================

function closeImageViewer() {
  imageViewer.classList.remove("active");

  imageViewerImage.src = "";

  document.body.style.overflow = "";
}

// ================================
// CLICK RAERENZ IMAGE
// ================================

document
  .getElementById("raerenz-gallery-track")
  .addEventListener("click", function (event) {
    if (event.target.tagName !== "IMG") return;

    const images = Array.from(
      document.querySelectorAll("#raerenz-gallery .gallery-track img"),
    );

    const clickedIndex = images.indexOf(event.target);

    openImageViewer(images, clickedIndex);
  });

// ================================
// BUTTONS
// ================================

imageViewerNext.addEventListener("click", function (event) {
  event.stopPropagation();

  nextViewerImage();
});

imageViewerPrev.addEventListener("click", function (event) {
  event.stopPropagation();

  previousViewerImage();
});

imageViewerClose.addEventListener("click", function (event) {
  event.stopPropagation();

  closeImageViewer();
});

// ================================
// CLICK OUTSIDE IMAGE
// ================================

imageViewer.addEventListener("click", function (event) {
  if (event.target === imageViewer) {
    closeImageViewer();
  }
});

// ================================
// KEYBOARD CONTROLS
// ================================

document.addEventListener("keydown", function (event) {
  if (!imageViewer.classList.contains("active")) return;

  if (event.key === "ArrowRight") {
    nextViewerImage();
  }

  if (event.key === "ArrowLeft") {
    previousViewerImage();
  }

  if (event.key === "Escape") {
    closeImageViewer();
  }
});

// ================================
// ANGELO SHS GALLERY
// ================================

const angeloCard = document.getElementById("angelo-card");
const angeloGallery = document.getElementById("angelo-gallery");
const angeloGalleryClose = document.getElementById("angelo-gallery-close");

const angeloTrack = document.getElementById("angelo-gallery-track");

// ================================
// GENERATE 14 IMAGES
// ================================

for (let i = 1; i <= 14; i++) {
  const img = document.createElement("img");

  img.src = `img/angelo/${i}.png`;

  img.alt = `Angelo L. Loyola SHS Screenshot ${i}`;

  img.loading = "lazy";

  angeloTrack.appendChild(img);
}

// ================================
// OPEN ANGELO GALLERY
// ================================

angeloCard.addEventListener("click", function () {
  angeloGallery.classList.add("active");

  document.body.style.overflow = "hidden";
});

// ================================
// CLOSE ANGELO GALLERY
// ================================

angeloGalleryClose.addEventListener("click", function () {
  angeloGallery.classList.remove("active");

  document.body.style.overflow = "";
});

// ================================
// PICKADEV SINGLE IMAGE FULLSCREEN
// ================================

const pickadevCard = document.getElementById("pickadev-card");

if (pickadevCard) {
  const pickadevImage = pickadevCard.querySelector("img");

  pickadevCard.style.cursor = "pointer";

  pickadevCard.addEventListener("click", function () {
    openImageViewer([pickadevImage], 0);
  });
}
// ================================
// CLICK OUTSIDE
// ================================

angeloGallery.addEventListener("click", function (event) {
  if (event.target === angeloGallery) {
    angeloGallery.classList.remove("active");

    document.body.style.overflow = "";
  }
});

// ================================
// OPEN IMAGE IN FULLSCREEN
// ================================

angeloTrack.addEventListener("click", function (event) {
  if (event.target.tagName !== "IMG") return;

  const images = Array.from(angeloTrack.querySelectorAll("img"));

  const clickedIndex = images.indexOf(event.target);

  openImageViewer(images, clickedIndex);
});

// APPAREL & JERSEY GALLERY
const apparelCard = document.getElementById("apparel-card");
const apparelGallery = document.getElementById("apparel-gallery");
const apparelGalleryClose = document.getElementById("apparel-gallery-close");
const apparelTrack = document.getElementById("apparel-gallery-track");

const apparelExtensions = [
  "jpg", // 1
  "jpg", // 2
  "jpg", // 3
  "jpg", // 4
  "png", // 5
  "png", // 6
  "png", // 7
  "jpg", // 8
];

for (let i = 1; i <= 8; i++) {
  const img = document.createElement("img");

  img.src = `img/apparel/${i}.${apparelExtensions[i - 1]}`;
  img.alt = `Apparel and Jersey Design ${i}`;
  img.loading = "lazy";

  apparelTrack.appendChild(img);
}

// OPEN APPAREL GALLERY
apparelCard.addEventListener("click", function () {
  apparelGallery.classList.add("active");
  document.body.style.overflow = "hidden";
});

// CLOSE BUTTON
apparelGalleryClose.addEventListener("click", function () {
  apparelGallery.classList.remove("active");
  document.body.style.overflow = "";
});

// CLICK OUTSIDE
apparelGallery.addEventListener("click", function (event) {
  if (event.target === apparelGallery) {
    apparelGallery.classList.remove("active");
    document.body.style.overflow = "";
  }
});

// OPEN IMAGE IN FULLSCREEN
apparelTrack.addEventListener("click", function (event) {
  if (event.target.tagName !== "IMG") return;

  const images = Array.from(apparelTrack.querySelectorAll("img"));
  const clickedIndex = images.indexOf(event.target);

  openImageViewer(images, clickedIndex);
});

// =================================
// CUSTOM GRAPHICS GALLERY DATA
// =================================

const customGraphicsGalleryData = {
  logo: {
    title: "Logo Design",
    count: 8,
    folder: "logo",
    extensions: [
      "jpg", // 1
      "png", // 2
      "png", // 3
      "png", // 4
      "png", // 5
      "png", // 6
      "png", // 7
      "png", // 8
    ],
  },

  apparel: {
    title: "Apparel Design",
    count: 6,
    folder: "apparel",
    extension: "png",
  },

  lanyards: {
    title: "Lanyard Design",
    count: 3,
    folder: "lanyards",
    extension: "png",
  },

  posters: {
    title: "Poster Design",
    count: 0,
    folder: "posters",
    extension: "png",
  },

  cards: {
    title: "Card Design",
    count: 0,
    folder: "cards",
    extension: "png",
  },

  resume: {
    title: "Resume Design",
    count: 0,
    folder: "resume",
    extension: "png",
  },

  other: {
    title: "Other Visual Requests",
    count: 0,
    folder: "other",
    extension: "png",
  },
};

// =================================
// OPEN CUSTOM GRAPHICS GALLERY
// =================================

function openCustomGraphicsGallery(category, event) {
  if (event) {
    event.stopPropagation();
  }

  const gallery = document.getElementById("custom-graphics-gallery");
  const title = document.getElementById("custom-graphics-gallery-title");
  const track = document.getElementById("custom-graphics-gallery-track");

  const data = customGraphicsGalleryData[category];

  if (!data) return;

  title.textContent = data.title;

  // Clear previous images
  track.innerHTML = "";

  // No images yet
  if (data.count === 0) {
    track.innerHTML = `
      <div class="gallery-empty">
        <p>More designs coming soon.</p>
      </div>
    `;

    gallery.classList.add("active");
    document.body.style.overflow = "hidden";
    return;
  }

  // Generate images
  for (let i = 1; i <= data.count; i++) {
    const img = document.createElement("img");

    let extension;

    // Logo has mixed file types
    if (data.extensions) {
      extension = data.extensions[i - 1];
    } else {
      extension = data.extension;
    }

    img.src = `img/custom-graphics/${data.folder}/${i}.${extension}`;

    img.alt = `${data.title} ${i}`;

    img.loading = "lazy";

    track.appendChild(img);
  }

  gallery.classList.add("active");

  document.body.style.overflow = "hidden";
}

// =================================
// CLOSE CUSTOM GRAPHICS GALLERY
// =================================

function closeCustomGraphicsGallery() {
  const gallery = document.getElementById("custom-graphics-gallery");

  gallery.classList.remove("active");

  document.body.style.overflow = "";
}

// =================================
// CLICK CUSTOM GRAPHICS IMAGE
// =================================

document
  .getElementById("custom-graphics-gallery-track")
  .addEventListener("click", function (event) {
    if (event.target.tagName !== "IMG") return;

    const images = Array.from(this.querySelectorAll("img"));

    const clickedIndex = images.indexOf(event.target);

    openImageViewer(images, clickedIndex);
  });

// ==========================================
// CLOSE GALLERIES WHEN CLICKING OUTSIDE
// ==========================================

document.querySelectorAll(".gallery-modal").forEach((gallery) => {
  gallery.addEventListener("click", function (event) {
    // Only close if the actual dark background was clicked
    if (event.target === gallery) {
      gallery.classList.remove("active");

      document.body.style.overflow = "";
    }
  });
});

/* =========================
   SERVICE REQUEST MODAL
========================= */

const serviceRequestModal = document.getElementById("service-request-modal");

const serviceRequestClose = document.getElementById("service-request-close");

const serviceRequestForm = document.getElementById("service-request-form");

const selectedService = document.getElementById("selected-service");

const description = document.getElementById("project-description");

const descriptionCount = document.getElementById("description-count");

const quotationSubmit = document.getElementById("quotation-submit");

const formStatus = document.getElementById("form-status");

/* =========================
   OPEN MODAL
========================= */

document.querySelectorAll(".service-card").forEach(function (card) {
  card.addEventListener("click", function () {
    const serviceName = card.dataset.service;

    selectedService.value = serviceName;

    formStatus.textContent = "";

    serviceRequestModal.classList.add("active");

    document.body.style.overflow = "hidden";
  });
});

/* =========================
   CLOSE MODAL
========================= */

function closeServiceRequestModal() {
  serviceRequestModal.classList.remove("active");

  document.body.style.overflow = "";
}

/* =========================
   CLOSE BUTTON
========================= */

serviceRequestClose.addEventListener("click", closeServiceRequestModal);

/* =========================
   CLICK OUTSIDE
========================= */

serviceRequestModal.addEventListener("click", function (event) {
  if (event.target === serviceRequestModal) {
    closeServiceRequestModal();
  }
});

/* =========================
   ESCAPE KEY
========================= */

document.addEventListener("keydown", function (event) {
  if (
    event.key === "Escape" &&
    serviceRequestModal.classList.contains("active")
  ) {
    closeServiceRequestModal();
  }
});

/* =========================
   CHARACTER COUNTER
========================= */

description.addEventListener("input", function () {
  descriptionCount.textContent = description.value.length;
});

/* =========================
   FORM SUBMISSION
========================= */

serviceRequestForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  quotationSubmit.disabled = true;

  quotationSubmit.textContent = "Sending...";

  formStatus.textContent = "";

  try {
    await emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      serviceRequestForm,
    );

    /* SUCCESS */

    formStatus.textContent =
      "Your quotation request has been sent successfully. I'll get back to you soon.";

    serviceRequestForm.reset();

    descriptionCount.textContent = "0";

    quotationSubmit.textContent = "Sent!";

    setTimeout(function () {
      closeServiceRequestModal();

      quotationSubmit.disabled = false;

      quotationSubmit.textContent = "Get a Quotation";

      formStatus.textContent = "";
    }, 2000);
  } catch (error) {
    /* ERROR */

    console.error("EmailJS Error:", error);

    formStatus.textContent =
      "Something went wrong while sending your request. Please try again.";

    quotationSubmit.disabled = false;

    quotationSubmit.textContent = "Get a Quotation";
  }
});
