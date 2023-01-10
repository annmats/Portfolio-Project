let arr
let start

$(document).ready(function(){
    $("button#submit").click(function(e) {
        arr = $("input#numbers").val().split(",")
        start = $("input#teen-start").val()
        start = parseInt(start)
        let vals = Object.values(arr)
        let right = start
        let left = start
        var yValues = vals
        var barColors = "red"
        var stats = false
        
        if (start <= arr.length) {
            while(vals[left] <= parseInt(vals[left - 1])) {
                left -= 1
            }
        
            while(vals[right] <= parseInt(vals[right + 1])) {
                right += 1
            }
        
            $(".answer").text(`Longest distance between the two: ${right - left + 1}`)

            var xValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        

            new Chart("myChart", {
            type: "bar",
            data: {
                labels: xValues.slice(0, arr.length),
                datasets: [{
                backgroundColor: barColors,
                data: yValues
                }]
            },
            options: {
                legend: {display: false},
                scales: {
                yAxes: [{
                    ticks: {
                    beginAtZero: true
                    }
                }],
                }
            }
            })
        }
        else {
            $(".answer").text(`Please enter a valid starting index. `)
        }
        
    })
    
    $("button#reset").click(function() {
        location.reload(true);
    })
})
