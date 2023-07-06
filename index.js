import { foodData } from "./data.js";

const orderItems = []


function getMenuList(){
    let menuList = ``

    foodData.forEach(function(food){

        // let isAddedClass = ''

        // if (food.isInCart){
        //     isAddedClass = 'inCart'
        // }
    
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
                    <button class="add-btn"></button>
                </div>
            </div>    
            `
        })
        return menuList
        }

function render(){
    document.getElementById('feed').innerHTML = getMenuList()
}




function getOrderList() {
    let orderHtml = ''

    if (orderItems.length > 0) {
       orderItems.forEach(function(item){
        orderHtml +=`
            <div class="order-items">
                <div class="item-text">
                    <p class="item-name">${item.itemName}</p>
                    <button class="remove-btn">REMOVE</button>
                </div>
                <div class="item-right">
                    <p class="item-price">$ ${item.price}</p>
                </div>
            </div>
        `
       })
    }
}



render()