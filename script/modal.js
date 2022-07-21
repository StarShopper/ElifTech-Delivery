
    const modalCall = document.querySelector("[data-modal]")
    const modalClose = document.querySelector("[data-close]")


    modalCall.addEventListener("click", function (event) {
        event.preventDefault();

        let modalId = document.getElementById('modal')

        modalId.classList.add('show')

    })

    modalClose.addEventListener("click", function (event) {
        event.preventDefault();

        let modalId = document.getElementById('modal')

        modalId.classList.remove('show')
    })



