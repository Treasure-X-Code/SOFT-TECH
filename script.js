function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// simple form alert (later you’ll connect backend)
document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Message sent successfully!");
});
