//перевірка прослуховування нажаття на всьому документі
window.addEventListener('click', function (event) {

    let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus' ) {

        // Находимо обгортку (батьків (?) ) лічильника
        const modalCounter = event.target.closest('.modal-counter')

        // Находимо div з числом лічильника
        counter = modalCounter.querySelector('[data-counter]')
    }

    // віжсліжування натиску на кноку Плюс
    if (event.target.dataset.action === 'plus') {

        // збільшення номеру лічильника на 1
        counter.innerText = ++counter.innerText;
    }

    // віжсліжування натиску на кноку Мінус
    if (event.target.dataset.action === 'minus') {

        // зменшення номеру лічильника на 1
        if (parseInt(counter.innerText) > 1){
            counter.innerText = --counter.innerText;

        // видалення товарів
        }else if (event.target.closest(".modal__item.item-2") && parseInt(counter.innerText) === 1){

            event.target.closest(".product.modal-product").remove()

            calcCardPrice()
        }
    }

    if(event.target.hasAttribute('data-action') && event.target.closest('.modal__item.item-2')){
        calcCardPrice()
    }
})