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

    //tooltip for icons
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });

    //tooltip for rate change
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[title]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    
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
    const newLineCtx = document.getElementById('lineChart').getContext('2d');

    const newLineChartConfig = {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'March', 'April', 'May', 'Jun'],
            datasets: [{
                label: 'Room Rate',
                data: [70, 150, 120, 80, 40, 60],
                borderColor: '#3182ce',
                borderWidth: 2,
                borderDash: [5, 5], 
                borderDashOffset: 2,
                backgroundColor: 'rgba(49, 130, 206, 0.1)',  
                fill: true,
                tension: 0.3, 
                pointBackgroundColor: 'white',  
                pointBorderColor: '#3182ce',  
                pointBorderWidth: 2,
                pointRadius: 5, 
                pointHoverBackgroundColor: '#2b6cb0',  
                pointHoverBorderColor: 'white',  
                pointHoverBorderWidth: 3,
                pointHoverRadius: 7, 
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    suggestedMax: 200
                }
            },
            interaction: {
                mode: 'index',
                intersect: false 
            },
            plugins: {
                legend: {
                    display: true,  
                    position: 'top', 
                    labels: {
                        usePointStyle: true, 
                        padding: 20 
                    }
                },
                tooltip: {
                    enabled: true, 
                    backgroundColor: 'rgba(0,0,0,0.7)',  
                    titleColor: '#fff', 
                    bodyColor: '#fff', 
                    borderColor: '#3182ce',  
                    borderWidth: 1,
                    cornerRadius: 4, 
                }
            },
            elements: {
                line: {
                    borderWidth: 2  
                },
                point: {
                    radius: 5  
                }
            }
        }
    };
    
    const newLineChart = new Chart(newLineCtx, newLineChartConfig);
    


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


    //staff pie chart
    const staffPieChart = new Chart(document.getElementById('staffPieChart'), staffConfig);

    const comboCtx = document.getElementById('comboChart').getContext('2d');

    const comboConfig = {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
                {
                    label: 'Expense',
                    data: [30, 50, 70, 90, 50, 80],
                    backgroundColor: '#457B9D',
                    borderColor: '#457B9D',
                    borderWidth: 1,
                    borderRadius: 4, 
                    hoverBackgroundColor: '#274772 ', 
                    hoverBorderColor: '#274772 ',
                    order: 1
                },
                {
                    label: 'Revenue',
                    data: [80, 60, 90, 120, 100, 130],
                    borderColor: '#E63946',
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    type: 'line',
                    tension: 0.4, 
                    pointBackgroundColor: '#E63946',
                    pointBorderColor: '#E63946',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverBackgroundColor: '#d62839',
                    pointHoverBorderColor: '#d62839',
                    pointHoverRadius: 6,
                    order: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true  
                },
                y: {
                    beginAtZero: true,
                    suggestedMax: 150,
                    ticks: {
                        stepSize: 20  
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 20
                    }
                },
                tooltip: {
                    enabled: true,
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: '#000',
                    borderWidth: 1,
                    cornerRadius: 4
                }
            }
        }
    };
    
    new Chart(comboCtx, comboConfig);

    var ctxAttendance = document.getElementById('staffAttendanceChart').getContext('2d');

    var staffAttendanceChart = new Chart(ctxAttendance, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: 'Present',
                    data: [40, 35, 38, 45, 42, 47, 50, 48, 52, 47, 45, 50],
                    backgroundColor: '#48bb78',
                    hoverBackgroundColor: '#38a169',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderSkipped: false,
                },
                {
                    label: 'Absent',
                    data: [14, 11, 8, 9, 7, 6, 9, 6, 8, 10, 12, 11],
                    backgroundColor: '#f56565',
                    hoverBackgroundColor: '#e53e3e',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderSkipped: false,
                },
                {
                    label: 'Late',
                    data: [7, 4, 6, 3, 9, 4, 3, 5, 8, 4, 3, 6],
                    backgroundColor: '#f6ad55',
                    hoverBackgroundColor: '#dd6b20',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderSkipped: false,
                },
                {
                    label: 'Early Left',
                    data: [2, 1, 2, 1, 3, 2, 1, 2, 3, 2, 1, 2],
                    backgroundColor: '#38bdf8',
                    hoverBackgroundColor: '#0ea5e9',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderSkipped: false,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true,
                    grid: {
                        display: false,
                    }
                },
                y: {
                    beginAtZero: true,
                    stacked: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)',
                    },
                    title: {
                        display: true,
                        text: 'Number of Staff',
                        color: '#333',
                        font: {
                            family: 'Arial',
                            size: 14,
                            weight: 'bold',
                            lineHeight: 1.2
                        }
                    },
                    ticks: {
                        stepSize: 10,
                        color: '#333'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 20,
                        boxWidth: 15
                    }
                },
                tooltip: {
                    enabled: true,
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: '#333',
                    borderWidth: 1,
                    cornerRadius: 4,
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += context.raw;
                            return label;
                        }
                    }
                }
            }
        }
    });

var ctx = document.getElementById('customerSatisfactionChart').getContext('2d');

var customerSatisfactionChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Very Satisfied', 'Satisfied', 'Neutral', 'Unsatisfied'],
        datasets: [{
            label: 'Customer Satisfaction',
            data: [40, 35, 15, 10],
            backgroundColor: [
                '#48bb78',
                '#38bdf8',
                '#f6ad55',
                '#f56565'
            ],
            borderColor: '#ffffff',
            borderWidth: 2,
            hoverOffset: 6 
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '60%',
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    padding: 20,
                    boxWidth: 15
                }
            },
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#fff',
                bodyColor: '#fff',
                borderColor: '#333',
                borderWidth: 1,
                cornerRadius: 4,
                callbacks: {
                    label: function(context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += `${context.raw}%`;
                        return label;
                    }
                }
            }
        }
    }
});



document.querySelectorAll('.status-select').forEach(select => {
    updateSelectBackground(select);

    select.addEventListener('change', function() {
        updateSelectBackground(this);
    });
});

function updateSelectBackground(selectElement) {
    const value = selectElement.value;

    if (value === "processing") {
        selectElement.style.backgroundColor = '#f6ad55';
    } else if (value === "completed") {
        selectElement.style.backgroundColor = '#48bb78';
    } else if (value === "pending") {
        selectElement.style.backgroundColor = '#f56565';
    }

    selectElement.querySelectorAll('option').forEach(option => {
        if (option.value === "processing") {
            option.style.backgroundColor = '#f6ad55';
        } else if (option.value === "completed") {
            option.style.backgroundColor = '#48bb78';
        } else if (option.value === "pending") {
            option.style.backgroundColor = '#f56565';
        }
    });
}  
    

    
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


    //PROFIT loss TABLE SIGNS
    const elements = document.querySelectorAll('.pl-curr');
    
    elements.forEach(function(td) {
        let value = parseInt(td.getAttribute('data-value'), 10);
        
        // check if value is positive or negative
        if (value > 0) {
            td.classList.add('inc');
            td.textContent = `+$${value.toLocaleString()}`;
        } else if (value < 0) {
            td.classList.add('dec');
            td.textContent = `-$${Math.abs(value).toLocaleString()}`;
        }
    });


    //sales anaylis percent
    const percentCells = document.querySelectorAll('#payment-table .p-change');

    percentCells.forEach(cell => {
            //find prev and curr vall
        const prevCell = cell.previousElementSibling.previousElementSibling;
        const currentCell = cell.previousElementSibling;
        
        //fetch prev curr
        const prevValue = parseFloat(prevCell.getAttribute('data-prev'));
        const currentValue = parseFloat(currentCell.getAttribute('data-curr'));
        
        const percentChange = ((currentValue - prevValue) / prevValue) * 100;
        
        cell.textContent = `${Math.abs(percentChange).toFixed(2)}%`;

        if (percentChange >= 0) {
            cell.classList.add('inc');
        } else {
            cell.classList.add('dec');
        }




    });


    //maleeha js
    
    const ctxBookings = document.getElementById('bookingsChart').getContext('2d');

    // Predefined dataset
    const pmsData = [8, 3, 4, 6, 5, 2];
    const bookingEngineData = [5, 6, 2, 7, 4, 3];

    const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'PMS',
          data: pmsData,
          backgroundColor: '#E63946',
          borderRadius: 8, 
          hoverBackgroundColor: '#C8102E', 

          stack: 'Stack 0',
        },
        {
          label: 'Booking Engine',
          data: bookingEngineData,
          backgroundColor: '#f6ad55',
          borderRadius: 8, 
          hoverBackgroundColor: '#F59E0B', 
          stack: 'Stack 0',
        }
      ]
    };

    const config = {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: true,
            title: {
              display: true,
              text: 'Months'
            }
          },
          y: {
            stacked: true,
            beginAtZero: true,
            max: 16,
            title: {
              display: true,
              text: 'Bookings'
            }
          }
        },
        elements: {
          bar: {
            borderRadius: 8, 
          }
        }
      }
    };

    new Chart(ctxBookings, config);




    //multichart reservations

    
    
});