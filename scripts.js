//Shorten the necessary variables
const productPrice = document.getElementsByClassName("productPrice")

const productQuantity = document.getElementsByClassName("productQuantity")

const productTotalCost = document.getElementsByClassName("productTotalCost")

const totalCost = document.getElementById("totalCost")

//Add an empty array for the calculated subtotals
const productTotalCostArray = []


//Function loops over all subtotal elements, importing quantity and price values from HTML, calculating the cost and places this both in the HTML table as well as an array for total cost calculation 
const calculateCost = function(){
    for (let index = 0; index < productTotalCost.length; index++) {
        const price = parseFloat(productPrice[index].innerHTML);
        const quantity = productQuantity[index].value
        const cost = price*quantity
        productTotalCostArray[index] = cost
        productTotalCost[index].innerHTML = cost.toFixed(2)
    }
    totalCost.innerHTML = productTotalCostArray.reduce((a, b) => { return a + b}, 0).toFixed(2) //Calculate the total cost by summarising the subtotals array
}


document.querySelectorAll('.productQuantity').forEach(quantity => //Loops over all elements of the quantity class and updates the subtotals and total with each quantity change
    quantity.addEventListener('input', () => {
        calculateCost()
    }
))




