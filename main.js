// window.onload = function() {
//     alert("Scroll on your mouse or touchpad to see scroll effect");
// };

if (window.innerWidth >= 1100) {

    // alert("Running scroll script");

    let isScrolling = false;

    document.querySelector('.container').addEventListener('wheel', (event) => {
        event.preventDefault(); // Prevent default scroll behavior

        if (isScrolling) return; // Ignore if a scroll is already in progress

        isScrolling = true; // Lock scrolling

        const container = event.currentTarget;
        const currentScroll = container.scrollTop;
        const sectionHeight = window.innerHeight;

        if (event.deltaY > 0) {
            // Scroll down
            container.scrollTo({
                top: currentScroll + sectionHeight,
                behavior: 'smooth'
            });
        } else {
            // Scroll up
            container.scrollTo({
                top: currentScroll - sectionHeight,
                behavior: 'smooth'
            });
        }

        // Unlock scrolling after a delay to avoid over-scrolling
        setTimeout(() => {
            isScrolling = false;
        }, 1000); // Adjust the delay if necessary
    });


    document.addEventListener("DOMContentLoaded", function () {
        const elements = document.querySelectorAll('.hidden1'); // Select all elements to animate

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show'); // Add the 'show' class when in view
                }
            });
        });

        elements.forEach(element => {
            observer.observe(element); // Observe each element
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        const elements = document.querySelectorAll('.hidden2'); // Select all elements to animate

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show'); // Add the 'show' class when in view
                }
            });
        });

        elements.forEach(element => {
            observer.observe(element); // Observe each element
        });
    });

}

const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
// const menu2 = document.getElementById('menu2');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('open');
});


// if (window.innerWidth >= 1100) {
//     menuBtn.addEventListener('click', () => {
//         menu.classList.toggle('open');
//     });
// } else {
//     menuBtn.addEventListener('click', () => {
//         menu2.classList.toggle('responsive');
//     });
// }

