// console.log()
// console.log(document.getElementsByClassName("productQuantity"))



const productPrice = document.getElementsByClassName("productPrice")

const productQuantity = document.getElementsByClassName("productQuantity")

const productTotalCost = document.getElementsByClassName("productTotalCost")

const productTotalCostArray = []

// for (let index = 0; index < productPrice.length; index++) {
//     const element = productPrice[index];
//     productPriceArray.push(parseFloat(element.innerHTML))
// }

// for (let index = 0; index < productQuantity.length; index++) {
//     const element = productQuantity[index];
//     productQuantityArray.push(element.value)
// }

// for (let index = 0; index < productTotalCost.length; index++) {
//     const cost = productTotalCost[index];
//     const price = productQuantityArray[index]

    
// }


for (let index = 0; index < productTotalCost.length; index++) {
    const price = parseFloat(productPrice[index].innerHTML);
    console.log(price)
    const quantity = productQuantity[index].value
    console.log(quantity)
    const totalCost = price*quantity
    productTotalCostArray.push(totalCost)
    
}

console.log(productTotalCostArray)