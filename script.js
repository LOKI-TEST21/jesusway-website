/* =====================================
   WORD OF GOD SLIDER
===================================== */


/* GET ALL IMAGES */

const slides = document.querySelectorAll("#slider img");


/* CURRENT IMAGE */

let currentSlide = 0;


/* GET COUNTERS */

const currentSlideNumber =
    document.getElementById("currentSlide");

const totalSlidesNumber =
    document.getElementById("totalSlides");


/* SET TOTAL SLIDES AUTOMATICALLY */

totalSlidesNumber.textContent =
    slides.length;


/* =====================================
   SHOW SLIDE
===================================== */

function showSlide(index) {


    /* LOOP TO LAST IMAGE */

    if (index < 0) {

        currentSlide =
            slides.length - 1;

    }


    /* LOOP TO FIRST IMAGE */

    else if (index >= slides.length) {

        currentSlide = 0;

    }


    else {

        currentSlide = index;

    }


    /* REMOVE ACTIVE FROM ALL */

    slides.forEach(function (slide) {

        slide.classList.remove("active");

    });


    /* SHOW CURRENT IMAGE */

    slides[currentSlide]
        .classList.add("active");


    /* UPDATE NUMBER */

    currentSlideNumber.textContent =
        currentSlide + 1;

}


/* =====================================
   NEXT SLIDE
===================================== */

function nextSlide() {

    showSlide(currentSlide + 1);

}


/* =====================================
   PREVIOUS SLIDE
===================================== */

function previousSlide() {

    showSlide(currentSlide - 1);

}


/* =====================================
   CLICK IMAGE TO ENLARGE
===================================== */

const imageModal =
    document.getElementById("imageModal");

const modalImage =
    document.getElementById("modalImage");


slides.forEach(function (slide) {

    slide.addEventListener("click", function () {

        openImage();

    });

});


function openImage() {


    /* GET CURRENT IMAGE */

    modalImage.src =
        slides[currentSlide].src;


    /* UPDATE MODAL NUMBER */

    document.getElementById(
        "modalCurrentSlide"
    ).textContent =
        currentSlide + 1;


    document.getElementById(
        "modalTotalSlides"
    ).textContent =
        slides.length;


    /* SHOW MODAL */

    imageModal.classList.add("show");

}


/* =====================================
   CLOSE ENLARGED IMAGE
===================================== */

function closeImage() {

    imageModal.classList.remove("show");

}


/* =====================================
   MODAL NEXT
===================================== */

function nextModalSlide() {

    nextSlide();

    updateModal();

}


/* =====================================
   MODAL PREVIOUS
===================================== */

function previousModalSlide() {

    previousSlide();

    updateModal();

}


/* =====================================
   UPDATE MODAL IMAGE
===================================== */

function updateModal() {


    modalImage.src =
        slides[currentSlide].src;


    document.getElementById(
        "modalCurrentSlide"
    ).textContent =
        currentSlide + 1;


    /* RESTART FADE ANIMATION */

    modalImage.style.animation =
        "none";


    void modalImage.offsetWidth;


    modalImage.style.animation =
        "imageFade 0.4s ease";

}


/* =====================================
   CLICK OUTSIDE TO CLOSE
===================================== */

imageModal.addEventListener(
    "click",
    function (event) {

        if (event.target === imageModal) {

            closeImage();

        }

    }
);


/* =====================================
   MOBILE SWIPE SUPPORT
===================================== */

let touchStartX = 0;

let touchEndX = 0;


/* START TOUCH */

const slider =
    document.getElementById("slider");


slider.addEventListener(
    "touchstart",
    function (event) {

        touchStartX =
            event.changedTouches[0].screenX;

    },
    { passive: true }
);


/* END TOUCH */

slider.addEventListener(
    "touchend",
    function (event) {

        touchEndX =
            event.changedTouches[0].screenX;


        handleSwipe();

    },
    { passive: true }
);


/* CHECK SWIPE */

function handleSwipe() {


    const swipeDistance =
        touchEndX - touchStartX;


    /* SWIPE LEFT */

    if (swipeDistance < -50) {

        nextSlide();

    }


    /* SWIPE RIGHT */

    if (swipeDistance > 50) {

        previousSlide();

    }

}


/* =====================================
   KEYBOARD CONTROLS
===================================== */

document.addEventListener(
    "keydown",
    function (event) {


        /* ONLY WHEN IMAGE IS OPEN */

        if (
            !imageModal.classList.contains(
                "show"
            )
        ) {

            return;

        }


        /* RIGHT ARROW */

        if (event.key === "ArrowRight") {

            nextModalSlide();

        }


        /* LEFT ARROW */

        if (event.key === "ArrowLeft") {

            previousModalSlide();

        }


        /* ESC TO CLOSE */

        if (event.key === "Escape") {

            closeImage();

        }

    }
);


/* =====================================
   START SLIDER
===================================== */

showSlide(0);

function openService(serviceName) {

    alert(
        "You selected: " + serviceName
    );

}

function openService(service) {

    const modal = document.getElementById("serviceModal");

    const title = document.getElementById("modalTitle");
    const icon = document.getElementById("modalIcon");
    const description = document.getElementById("modalDescription");
    const details = document.getElementById("modalDetails");


    const services = {

        bible: {

            icon: "📖",

            title: "Bible Study",

            description:
                "Grow deeper in God's Word through meaningful discussions, learning, and fellowship.",

            details:
                "Our Bible Study provides an opportunity for members to study Scripture, ask questions, share insights, and grow together in faith."

        },


        feeding: {

            icon: "❤️",

            title: "Community Feeding Program",

            description:
                "Sharing God's love by serving meals and supporting members of our community.",

            details:
                "This ministry reaches out to people in the community by providing meals and showing God's love through practical service."

        },


        visitation: {

            icon: "🤝",

            title: "Visitation Ministry",

            description:
                "Reaching out to people through prayer, encouragement, fellowship, and care.",

            details:
                "The Visitation Ministry connects with church members and people in the community through visits, prayer, encouragement, and fellowship."

        },


        ywam: {

            icon: "🌍",

            title: "YWAM Collaboration",

            description:
                "Working together with YWAM to serve communities and share God's love with others.",

            details:
                "Through collaboration and outreach activities, this ministry works alongside YWAM to serve people and strengthen communities."

        },


        soul: {

            icon: "🔗",

            title: "Connect to Soul",

            description:
                "Building meaningful connections and encouraging people in their spiritual journey.",

            details:
                "Connect to Soul focuses on creating meaningful relationships, encouraging people, and helping individuals grow in their journey of faith."

        },


        christian: {

            icon: "✨",

            title: "Christian Life Development Program",

            description:
                "Helping believers grow spiritually and develop a stronger Christian life.",

            details:
                "This program focuses on spiritual growth, Christian character, discipleship, and helping believers develop a stronger relationship with God."

        }

    };


    /* PUT INFORMATION INTO POPUP */

    icon.textContent = services[service].icon;

    title.textContent = services[service].title;

    description.textContent =
        services[service].description;

    details.textContent =
        services[service].details;


    /* SHOW POPUP */

    modal.classList.add("show");

}


/* CLOSE POPUP */

function closeService() {

    const modal =
        document.getElementById("serviceModal");

    modal.classList.remove("show");

}


/* CLOSE WHEN CLICKING OUTSIDE */

window.addEventListener("click", function (event) {

    const modal =
        document.getElementById("serviceModal");


    if (event.target === modal) {

        closeService();

    }

});