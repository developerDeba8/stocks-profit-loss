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
                    output.style.color = 'white';
    }
}

function calculateProfitLoss(intialStockPrice, stockQty, currentStockPrice){
    var initialTotalInvestment = intialStockPrice * stockQty;
    if(intialStockPrice > currentStockPrice){
        var loss = ((intialStockPrice - currentStockPrice) * stockQty).toFixed(2);
        var lossPercentage = ((loss / initialTotalInvestment) * 100).toFixed(2);

        resultOutput(`Hey the loss is ${loss} and the loss percent is ${lossPercentage}%`, 'LOSS');

    } else if(intialStockPrice < currentStockPrice){
        var profit = ((currentStockPrice - intialStockPrice) * stockQty).toFixed(2);
        var profitPercentage = ((profit / initialTotalInvestment) * 100).toFixed(2);

        resultOutput(`Hey the profit is ${profit} and the profit percent is ${profitPercentage}%`, 'PROFIT');
    } else{
        resultOutput('No change in captial', 'NONE');
    }
}

function clickHandler(){
    var initialStckPr = Number(initialPrice.value);
    var stckQty = Number(stocksQuantity.value);
    var currentStckPr = Number(currentPrice.value);

    if(initialStckPr == "" || stckQty == "" || currentStckPr == ""){
        resultOutput('All fields are mandatory');
        return;
    }

    /* console.log(initialStckPr, stckQty, currentStckPr); */
    calculateProfitLoss(initialStckPr, stckQty, currentStckPr);
    

}

submitButton.addEventListener('click', clickHandler);




