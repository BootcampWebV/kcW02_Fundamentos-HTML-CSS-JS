export class Menu {

    constructor() {

        this.mainMenu = document.querySelector('#mainNav')
        this.btnMenu = document.querySelector('#btnNav')

        this.btnMenu.addEventListener('click', this.showMenu.bind(this))

        this.aMenu = document.querySelectorAll('#mainNav a')
        this.aMenu.forEach(
            (element) => {
                element.addEventListener('click', this.navigate.bind(this))
            }
        )
        console.log(this.btnMenu);


    }

    showMenu(element) {
        element.preventDefault()
        console.log(element)
        this.mainMenu.classList.toggle('noNav');

        // Alteramos el botón que maneja el nav
        console.log(element)
            // element.target.classList.toggle('dNone')

        if (element.target.classList.contains('fa-bars')) {
            element.target.classList.replace('fa-bars', 'fa-times')
        } else {
            element.target.classList.replace('fa-times', 'fa-bars')
        }
        // if (element.target.previousElementSibling) {
        //     console.log(element.target.previousElementSibling)
        //     element.target.previousElementSibling.classList.toggle('dNone')
        // } else {
        //     element.target.nextElementSibling.classList.toggle('dNone')
        // }
    }

    navigate(element) {
        element.preventDefault()
        let target = element.target.hash
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        })
        this.showMenu(element)
    }
}