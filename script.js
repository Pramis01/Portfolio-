// Selects the side menu element with the ID 'sideMenu'.
const sideMenu = document.querySelector('#sideMenu');

// Selects the navigation bar element.
const navBar = document.querySelector("nav");

// Selects the unordered list (nav links) inside the navigation bar.
const navLinks = document.querySelector("nav ul");

// Function to open the side menu.
function openMenu(){
    // Moves the side menu into view by applying a CSS transform.
    sideMenu.style.transform ='translateX(-16rem)';
    // 'translateX(-16rem)': Moves the menu 16 rem units to the left, making it visible.
}

// Function to close the side menu.
function closeMenu(){
     // Moves the side menu out of view by applying a CSS transform.
    sideMenu.style.transform = 'translateX(16rem)';
     // 'translateX(16rem)': Moves the menu 16 rem units to the right, hiding it.

}

// Adds an event listener to the window for the 'scroll' event.
window.addEventListener('scroll', ()=>{

    // Checks if the page has been scrolled down more than 40 pixels.
    if(scrollY > 40){

        // Adds classes to the navBar to style it when scrolled.
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg',
            'shadow-sm')
        
        // Removes specific classes from navLinks for styling adjustments.
            navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50')
        }else{  
         // Removes the scroll-specific styles from navBar when at the top of the page.
            navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg',
                'shadow-sm')
        // Ensures navLinks also reverts to its original style when at the top of the page.
             navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50')
    }
})

// Get the video element by its ID (assumes <video id="work-video"> exists in HTML)
const workVideo = document.getElementById('work-video');

// Get the overlay text element that will appear/disappear on click
const overlayText = document.getElementById('overlay-text');

// Add a click event listener to the video
workVideo.addEventListener('click', () => {
    
    // If the overlay is currently visible (opacity is 1)
    if (overlayText.style.opacity === '1') {
        // Hide the overlay by setting opacity to 0 and disable pointer events
        overlayText.style.opacity = '0';
        overlayText.style.pointerEvents = 'none';
    } else {
        // Show the overlay by setting opacity to 1 and enable pointer events
        overlayText.style.opacity = '1';
        overlayText.style.pointerEvents = 'auto';
    }
});
