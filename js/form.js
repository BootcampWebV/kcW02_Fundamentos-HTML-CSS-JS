export class Form {

    constructor() {
        this.oForm = document.querySelector('#contactForm')
        this.oName = document.querySelector('#iName')
        this.oMail = document.querySelector('#iMail')
        this.oKnow = document.querySelector('#iKnown')
        this.oOtherKnow = document.querySelector('#otherKnow')
        this.oTel = document.querySelector('#iTel')
        this.oMessage = document.querySelector('#iComent')

        this.groupOtherKnow = document.querySelector('#groupOtherKnow')



        this.oButton = document.querySelector('#send')

        this.data = {
            name: '',
            email: '',
            phone: '',
            know: '',
            message: ''
        }

        this.oKnow.addEventListener('change', this.selectKnow.bind(this))
        console.log(this.oName.checkValidity())
    }
    hola() {
        console.log('hola')
    }

    selectKnow(event) {
        this.groupOtherKnow.classList.add('dNone')
        if (event.target.value == 'other') {
            this.groupOtherKnow.classList.remove('dNone')
        }
    }
}