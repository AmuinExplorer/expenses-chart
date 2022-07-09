const xmlHTTP = new XMLHttpRequest();
const url = "http://127.0.0.1:5500/public/data.json";
xmlHTTP.open('GET', url, true);
xmlHTTP.send();
xmlHTTP.onreadystatechange = function () {
    if(this.readyState === 4 && this.status === 200) {
        let data = JSON.parse(this.response);
        day = data.map(function (day) {
            return day.day; //return json data into [array]
        })
        amount = data.map(function (amount) {
            return amount.amount; //return json data into [array]
        })

        const DAY = day; //day
        const AMOUNT = amount; // amount
        let background = []; // background color

        // Find max value in AMOUNT [array]
        let max = Math.max(...AMOUNT);

        // Find the second largest value in AMOUNT [array]
        function findSecondLargest(AMOUNT){

            let largest= 0, secondLargest= 0
        
            for (i of AMOUNT){
                if (i > largest){
                    largest = i
                    
                }
            }
        
            for (j of AMOUNT){
                if(j>secondLargest && j<largest){
                    secondLargest =   j
                }
            }
        
            return secondLargest;
        
        }

        const secondLowest = findSecondLargest(AMOUNT);

        // Adding background color dynamically
        const Lvaluecolor = AMOUNT.map((amount, index) => {
            if (amount === secondLowest) {
                background.push('hsl(186, 34%, 80%)') // lowest value color
            }
            if(amount === max) {
                background.push('hsl(186, 34%,60%)') //highest value color
            }
            if(amount !== secondLowest && amount !== max) {
                background.push('hsl(10, 79%, 65%)')  //default
            }
        })

        // Bar Chart 
        const ctx = document.getElementById('chartCanvas').getContext('2d');
        const myChart = new Chart(ctx, {

        type: 'bar', // specify what kind of chart to use

        data: {
        labels: DAY,
        datasets: [{
            label: 'Spending - Last 7 Days',
            data: AMOUNT,
            backgroundColor: background,
            borderColor: [],
            borderWidth: 0
        }]
        },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
        });
    }
}