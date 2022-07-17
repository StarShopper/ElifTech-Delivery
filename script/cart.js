const modalItem = document.querySelector(".modal__item.item-2")
window.addEventListener('click', function (event) {

    if (event.target.hasAttribute('data-cart')) {

        const product = event.target.closest('.product')

        const productInfo = {
            id: product.dataset.id,
            imgSrc: product.querySelector('.product__image').getAttribute('src'),
            title: product.querySelector('.product__name').innerText,
            price: product.querySelector('.product__price').innerText,
            counter: product.querySelector('[data-counter]'),
        };
        console.log(productInfo);

        const cartItemHTML = `
        <div class="product modal-product">
        <div class="product__inner modal-inner">
        <button class="item__remove" data-remove>
            <h5>remove</h5>
        </button>
            <img src="${productInfo.imgSrc}" alt="product-photo">
            <div class="product__right">
                <h5 class="product__name">${productInfo.title}</h5>
                <h5 class="product__price">${productInfo.price}</h5>
                <div class="product__counter modal-counter">
                    <div class="product__control" data-action="minus">-</div>
                    <div class="product__current" data-counter>1</div>
                    <div class="product__control" data-action="plus">+</div>
                </div>
            </div>
        </div>
    </div>`

        modalItem.insertAdjacentHTML('beforeend', cartItemHTML)
    }
})