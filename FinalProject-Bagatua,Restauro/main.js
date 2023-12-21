var x = document.getElementById("headernav");

function burger() {
    // var state = 1;
    if (x.style.display === "flex") {
        x.style.display = "none";
    }
    else {
        x.style.display = "flex";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                if (this.classList.contains("scroll-to-contact")) {
                    targetElement.scrollIntoView({
                        behavior: "smooth"
                    });
                }
                 else if (this.classList.contains("scroll-to-services")) {
                    targetElement.scrollIntoView({
                        behavior: "smooth"
                    });
                }
                else if (this.classList.contains("scroll-to-aboutUs")) {
                    targetElement.scrollIntoView({
                        behavior: "smooth"
                    });
                }
                 else {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});
