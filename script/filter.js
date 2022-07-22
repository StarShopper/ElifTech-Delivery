function shops() {
    // Вибираємо усі категорії
    const buttons = document.querySelectorAll('.btn__item')
    // Вибираємо усі продукти з категорій
    const product = document.querySelectorAll('.product')

    // Початок фільтрації
    function filter(category, items) {
        // Перебираємо усі продукти
        items.forEach((item) => {
            const isProductFiltered = !item.classList.contains(category)
            const isShowedAll = category.toLowerCase() === "all"
            // Робимо перевірку натиску на кнопки категорій та превентимо видалення усіх продуктів при атиску на "All" категорію
            if(isProductFiltered && !isShowedAll){
                item.classList.add('hide')
            }else{
                item.classList.remove('hide')
            }
        })
    }
    // Функціонал для кнопок категорій
    buttons.forEach((button) => {
        button.addEventListener('click', () =>{
            // Перевіраємо і віиводимо котегорію продукту
            const currentCat = button.dataset.filter
            filter(currentCat, product)
        })
    });
}

shops()