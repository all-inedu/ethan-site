$(function () {
    // Scroll to Top
    $(document).ready(function(){
        $(this).scrollTop(0);
    });

    let click = 0;
    ToogleMenu = () => {
        if (click % 2 == 0) {
            $("#navbar-menu").css("display", "flex");
            click += 1;
        } else {
            $("#navbar-menu").css("display", "none");
            click += 1;
        }
    };

    ScrollNavbar = () => {
        if (document.documentElement.scrollTop > 20) {
            $("#navbar").css("background", "white");
            $("#navbar").css("box-shadow", "0px 2px 8px 0px rgba(50, 50, 50, 0.08)");
            $("#navbar-menu").css("background", "white");
        } else {
            $("#navbar").css("background", "none");
            $("#navbar").css("box-shadow", "none");
            $("#navbar-menu").css("background", "none");
        }
    };
    $(window).on("scroll", function () {
        if (window.innerWidth > 960) {
            ScrollNavbar();
        }
    });
    ResizeWindow = () => {
        if (window.innerWidth <= 960) {
            $("#navbar-menu").css("display", "none");
            $("#navbar").css("background", "white");
            $("#navbar-menu").css("background", "white");
            click = 0;
        } else {
            $("#navbar-menu").css("display", "flex");
            $("#navbar-menu").css("background", "none");
            $("#navbar").css("background", "none");
            click += 1;
        }
    };
    ResizeWindow();
    $(window).on("resize", function () {
        ResizeWindow();
    });

    // Active Navbar when Scroll
    let section = document.querySelectorAll('section');
    let lists = document.querySelectorAll('nav ul li');
    function activeLink(li) {
        lists.forEach((item) => item.classList.remove('active'));
        li.classList.add('active');
    }
    lists.forEach((item) =>
        item.addEventListener('click', function(){
            activeLink(this);
        }));

    window.onscroll = () => {
        section.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 120;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                const target = document.querySelector(`[href='#${id}']`).parentElement;
                activeLink(target);
            }
        })
    };

    // AOS
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 60, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
})