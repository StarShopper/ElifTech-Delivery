function calcCardPrice() {
    const cartItems = document.querySelector(".modal__item.item-2")
    const priceEl = cartItems.querySelectorAll('.product__price')
    const totalPriceEl = document.querySelector('.total__price')

    let totalPrice = 0;

    priceEl.forEach( function (item){

        const amountEl = item.closest('.product__inner.modal-inner').querySelector('[data-counter]')

        totalPrice += parseInt(item.innerText) * parseInt(amountEl.innerText)
    })

    //Ціна на сторінці
    totalPriceEl.innerText = totalPrice

}