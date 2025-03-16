document.addEventListener("DOMContentLoaded", function () {
    /* ===============================
       IMAGE CAROUSEL (First Section)
       =============================== */
    const carouselImages = [
        "assets/images/carousel/carousel_1.jpg",
        "assets/images/carousel/carousel_2.jpg",
        "assets/images/carousel/carousel_3.jpg"
    ];

    let carouselIndex = 0;
    const carouselContainer = document.querySelector(".carousel-container");

    // Clear existing content (fix reload issue)
    carouselContainer.innerHTML = '';

    // Add images dynamically
    carouselImages.forEach((src, index) => {
        let img = document.createElement("img");
        img.src = src;
        img.classList.add("carousel-image");
        if (index === 0) img.classList.add("active");
        else if (index === 1) img.classList.add("side", "right");
        else if (index === carouselImages.length - 1) img.classList.add("side", "left");
        carouselContainer.appendChild(img);
    });

    const carouselImagesElements = document.querySelectorAll(".carousel-image");

    function updateCarousel() {
        carouselImagesElements.forEach(img => img.classList.remove("active", "left", "right"));

        let prevIndex = (carouselIndex - 1 + carouselImagesElements.length) % carouselImagesElements.length;
        let nextIndex = (carouselIndex + 1) % carouselImagesElements.length;

        carouselImagesElements[carouselIndex].classList.add("active");
        carouselImagesElements[prevIndex].classList.add("side", "left");
        carouselImagesElements[nextIndex].classList.add("side", "right");
    }

    function nextImage() {
        carouselIndex = (carouselIndex + 1) % carouselImagesElements.length;
        updateCarousel();
    }

    function prevImage() {
        carouselIndex = (carouselIndex - 1 + carouselImagesElements.length) % carouselImagesElements.length;
        updateCarousel();
    }

    document.querySelector(".left-btn").addEventListener("click", prevImage);
    document.querySelector(".right-btn").addEventListener("click", nextImage);

    updateCarousel(); // Initialize first state

    /* ===============================
       AD SPACE ROTATION (Second Section)
       =============================== */
    const adImages = [
        "assets/images/ads/ad_banner_01.jpg",
        "assets/images/ads/ad_banner_02.jpg",
        "assets/images/ads/ad_banner_03.jpg"
    ];

    let adIndex = 0;
    const adContainer = document.querySelector(".ad-container");

    // Clear existing content to prevent duplication
    adContainer.innerHTML = '';

    // Add ad images dynamically
    adImages.forEach((src, index) => {
        let img = document.createElement("img");
        img.src = src;
        img.classList.add("ad-image");
        if (index === 0) img.classList.add("active");
        adContainer.appendChild(img);
    });

    const adImagesElements = document.querySelectorAll(".ad-image");

    function rotateAds() {
        if (!adImagesElements.length) return;

        // Hide all images
        adImagesElements.forEach(img => img.classList.remove("active"));

        // Show the next image
        adIndex = (adIndex + 1) % adImagesElements.length;
        adImagesElements[adIndex].classList.add("active");
    }

    setInterval(rotateAds, 10000); // Rotate every 10 seconds

    /* ===============================
       SCROLL DOWN ICON VISIBILITY
       =============================== */
    document.addEventListener("scroll", function () {
        let scrollArrow = document.querySelector(".scroll-down");
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            scrollArrow.classList.add("hidden");
        } else {
            scrollArrow.classList.remove("hidden");
        }
    });
});
