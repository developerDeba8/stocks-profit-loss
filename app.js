var initialPrice = document.querySelector('#initial-price');
var stocksQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var output = document.querySelector('.result-container');
var submitButton = document.querySelector('#submit-button');


function resultOutput(string, status){
    switch (status) {
        case 'PROFIT': output.innerText = string;
                       output.style.color = 'green';
                       break;
        
        case 'LOSS':   output.innerText = string;
                       output.style.color = 'red';
                       break;               
    
        default:    output.innerText = string;
            break;
    }
}

function calculateProfitLoss(intialStockPrice, stockQty, currentStockPrice){
    var initialTotalInvestment = intialStockPrice * stockQty;
    if(intialStockPrice > currentStockPrice){
        console.log('Inside loss block', intialStockPrice, currentStockPrice);
        var loss = (intialStockPrice - currentStockPrice) * stockQty;
        var lossPercentage = (loss / initialTotalInvestment) * 100;

        resultOutput(`Hey the loss is ${loss} and the loss percent is ${lossPercentage}%`, 'LOSS');

    } else if(intialStockPrice < currentStockPrice){
        console.log('Inside profit block', intialStockPrice, currentStockPrice);
        var profit = (currentStockPrice - intialStockPrice) * stockQty;
        var profitPercentage = (profit / initialTotalInvestment) * 100;

        resultOutput(`Hey the profit is ${profit} and the profit percent is ${profitPercentage}%`, 'PROFIT');
    } else{
        console.log("Inside equal block");
        resultOutput('No change in captial', 'NONE');
    }
}

function clickHandler(){
    var initialStckPr = initialPrice.value;
    var stckQty = stocksQuantity.value;
    var currentStckPr = currentPrice.value;

    console.log(initialStckPr, stckQty, currentStckPr);
    calculateProfitLoss(initialStckPr, stckQty, currentStckPr);
    

}

submitButton.addEventListener('click', clickHandler);




