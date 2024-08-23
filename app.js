document.addEventListener("DOMContentLoaded", function() {
    // Dropdown toggle functionality
    var dropdowns = document.getElementsByClassName("dropdown-btn");
    for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    }

    // Sidebar toggle functionality
    var toggleButton = document.getElementById("toggleSidebar");
    var sidebar = document.getElementById("sidebar");

    if (toggleButton && sidebar) {
        toggleButton.addEventListener("click", function() {
            if (sidebar.classList.contains("d-none")) {
                sidebar.classList.remove("d-none");
            } else {
                sidebar.classList.add("d-none");
            }
        });
    } else {
        console.error("Toggle button or sidebar not found!");
    }
    let x = document.querySelectorAll(".curr");
    for (let i = 0, len = x.length; i < len; i++) {
        let num = Number(x[i].innerHTML)
            .toLocaleString('en');
        x[i].innerHTML = num;
        x[i].classList.add("currSign");
    }
    
});