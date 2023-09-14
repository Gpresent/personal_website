// Define a boolean variable to track the current theme
var isTheme1 = true;
var themeLink = document.getElementById('theme-link');
if (sessionStorage.getItem('theme-one') == 'false') {
    themeLink.href = 'css/style2.css';
}
// Function to toggle the theme
function toggleTheme() {
    // Toggle the theme by changing the href attribute of the link element
    if (isTheme1) {
        themeLink.href = 'css/style2.css';
        sessionStorage.setItem('theme-one', 'false');
    }
    else {
        themeLink.href = 'css/style.css';
        sessionStorage.setItem('theme-one', 'true');
    }
    // Update the theme toggle state
    isTheme1 = !isTheme1;
}
// Add a click event listener to the button
var themeToggleBtn = document.getElementById("theme-toggle");
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
}
