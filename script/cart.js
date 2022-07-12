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

    }
})