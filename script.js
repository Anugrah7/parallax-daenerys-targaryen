let bg = document.getElementById("bg");
let daenerys = document.getElementById("daenerys");
let drogo = document.getElementById("drogo");
let smokeL = document.getElementById("smokeL");
let smokeR = document.getElementById("smokeR");
let text1 = document.getElementById("text1");
let text = document.getElementById("text");
let paragraph = document.getElementById("para"); 
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            let value = window.scrollY;

            // Update smoke positions
            smokeL.style.left = value * -2.2 + 'px';
            smokeL.style.filter = `grayscale(${value / 100})`;
            smokeR.style.left = value * 2.2 + 'px';

            // Update drogo width
            drogo.style.width = 1800 + value * 1 + 'px';

            // Sticky text update
            text.style.marginTop = value * -0.3  + '%';
            text.style.position = 'sticky';
            text.style.top = '50%';

            // Parallax effect for the paragraph
            paragraph.style.transform = `translateY(${value * 0.3}px)`; // Adjust the multiplier for speed

            ticking = false; // Allow the next frame
        });

        ticking = true; // Prevent multiple requestAnimationFrame calls
    }
});

let parallaxSection = document.getElementById("parallaxSection");

window.addEventListener("scroll", function() {
    let scrollValue = window.scrollY; 
    parallaxSection.style.backgroundPositionY = scrollValue * 0.7 + "px"; 
});

//spark

let spark = document.getElementById("spark");

window.addEventListener("scroll", () => {
    // Use window.scrollY for vertical scroll position
    let scrollValue = window.scrollY;

    // Move the spark image based on the scroll value
    spark.style.transform = `translateX(${scrollValue * 0.5}px)`; // Adjust the multiplier for speed
});

