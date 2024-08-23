document.addEventListener("DOMContentLoaded", function () {
    // Dropdown toggle functionality
    var dropdowns = document.getElementsByClassName("dropdown-btn");
    for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].addEventListener("click", function () {
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
        toggleButton.addEventListener("click", function () {
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


    //CHART REVENUE AND EXPENSE
    const config = {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
                {
                    label: 'Expense',
                    data: [30, 50, 70, 90, 50, 80],
                    borderColor: '#457B9D',
                    backgroundColor: '#457B9D',
                    order: 1
                },
                {
                    label: 'Revenue',
                    data: [80, 60, 90, 120, 100, 130],
                    borderColor: '#E63946',
                    backgroundColor: '#E63946',
                    type: 'line',
                    order: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,  // This allows the chart to resize based on container
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    };
    
    // Create and render the chart
    const ctx = document.getElementById('comboChart').getContext('2d');
    new Chart(ctx, config);
    
});