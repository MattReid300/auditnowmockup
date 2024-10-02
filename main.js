window.onload = function() {
    alert("Scroll on your mouse or touchpad to see scroll effect");
};

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
