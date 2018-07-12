export class Menu {

    constructor() {

        this.mainMenu = document.querySelector('#mainNav')
        this.btnMenu = document.querySelector('#btnNav')


        this.btnMenu.addEventListener('click', this.showMenu.bind(this))

    }

    showMenu(element) {
        element.preventDefault()
        this.mainMenu.classList.toggle('viewNav');

        // Alteramos el botón que maneja el nav
        element.target.classList.toggle('dNone')

        if (element.target.previousElementSibling) {
            element.target.previousElementSibling.classList.toggle('dNone')
        } else {
            element.target.nextElementSibling.classList.toggle('dNone')
        }
    }
}