document.addEventListener("DOMContentLoaded", function () {
    // Dropdown toggle functionality
    var dropdowns = document.getElementsByClassName("dropdown-btn");
    for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
        });
    }

    // Sidebar toggle functionality
    var toggleButton = document.getElementById("toggleSidebar");
    var sidebar = document.getElementById("sidebar");

    if (toggleButton && sidebar) {
        toggleButton.addEventListener("click", function () {
            sidebar.classList.toggle("d-none");
        });
    } else {
        console.error("Toggle button or sidebar not found!");
    }

    // Currency formatting
    let currencyElements = document.querySelectorAll(".curr");
    for (let i = 0, len = currencyElements.length; i < len; i++) {
        let num = Number(currencyElements[i].innerHTML).toLocaleString('en');
        currencyElements[i].innerHTML = num;
        currencyElements[i].classList.add("currSign");
    }

    // Line chart (Room Rate)
    const lineCtx = document.getElementById('lineChart').getContext('2d');
    const lineChart = new Chart(lineCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'March', 'April', 'May'],
            datasets: [{
                label: 'Room Rate',
                data: [180, 150, 120, 80, 40],
                borderColor: '#3182ce',
                fill: false,
                tension: 0.4
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    suggestedMax: 200
                }
            }
        }
    });

    // Pie chart (Occupancy Rate)
    const pieCtx = document.getElementById('pieChart').getContext('2d');
    const pieChart = new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: ['Occupied', 'Vacant', 'Maintenance'],
            datasets: [{
                data: [13, 4, 2],
                backgroundColor: ['#e53e3e', '#f6ad55', '#3182ce'],
                hoverOffset: 4
            }]
        },
        options: {
            plugins: {
                legend: {
                    position: 'right'
                }
            }
        }
    });

    // Pie chart (Staff Distribution)
    const staffData = {
        labels: ['Programmer', 'Accounts', 'Human Resources', 'Marketing', 'Sales'],
        datasets: [{
            data: [19, 3, 1, 6, 3],
            backgroundColor: ['#6dd5ed', '#2193b0', '#f85032', '#ffb75e', '#000428'],
            hoverBackgroundColor: ['#58c6d9', '#1c7ca0', '#e1432e', '#e69d45', '#2d3e50']
        }]
    };
    const staffConfig = {
        type: 'pie',
        data: staffData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right'
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw;
                        }
                    }
                }
            }
        }
    };
    const staffPieChart = new Chart(document.getElementById('staffPieChart'), staffConfig);

    // Bar and Line Combo Chart (Revenue and Expense)
    const comboConfig = {
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
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top'
                }
            }
        }
    };
    const comboCtx = document.getElementById('comboChart').getContext('2d');
    new Chart(comboCtx, comboConfig);

    // Modal for editing tax rate
    var taxType;
    $('#editTaxModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        taxType = button.data('tax-target');
        $('#taxTypeInput').val(taxType);
        $('#taxRateInput').val('');
    });

    $('#saveTaxRate').on('click', function () {
        var newRate = $('#taxRateInput').val();
        var taxType = $('#taxTypeInput').val();

        if (newRate !== "") {
            $('.' + taxType.replace(/ /g, '-')).text(newRate + '%');
            $('#editTaxModal').modal('hide');
        } else {
            alert('Please enter a valid tax rate.');
        }
    });
});