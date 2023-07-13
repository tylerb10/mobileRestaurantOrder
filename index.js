import { foodData } from "./data.js";


const orderItems = []

//  Event Listeners

document.addEventListener('click', function(e){
    if(e.target.dataset.menubtn){
        handleAddClick(e.target.dataset.menubtn)
    }
})

//  Adding the food that is clicked on to the orderItems array

function handleAddClick(foodId){
    const targetFoodObj = foodData.filter(function(food){
        return food.uuid === foodId
    })[0]

    if(foodId){
        orderItems.push({
        itemName: `${targetFoodObj.itemName}`,
        price: `${targetFoodObj.price}`,
        })
    }
    return foodId
}

// HTML for menu items

function getMenuList(){
    let menuList = ''
    foodData.forEach(function(food){
        menuList += `
            <div class="item"> 
                <div class="item-img">
                    <img src="${food.pic}" class="item-pic">
                </div>
                <div class="item-text">
                    <p class="item-name">${food.itemName}</p>
                    <i class="item-ingredients">${food.ingredients}</i>
                    <p class="item-price">$ ${food.price}</p>
                </div>
                <div class="item-right">
                    <button class="add-btn" data-menubtn=${food.uuid}></button>
                </div>
            </div>    
            `
            })
        return menuList
        }

// Getting the list of food ordered.

function getOrderList() {
    let orderHtml = ''

    if (orderItems.length > 0) {
       orderItems.forEach(function(item){
        orderHtml +=`
            <div class="order-items">
                <div class="item-text big-text">
                    <p class="item-name">${item.itemName}</p>
                    <button class="remove-btn">REMOVE</button>
                </div>
                <div class="item-right">
                    <p class="item-price">$ ${item.price}</p>
                </div>
            </div>
            <div class="total-order">
                <p class="big-text">Total price:</p>
                <p class="">ADDED PRICE GOES HERE</p>
            </div>
        `
       })
    }
    return orderHtml
}

function render(){
    document.getElementById('feed').innerHTML = getMenuList()
    document.getElementById('order-feed').innerHTML = getOrderList()
}

render()