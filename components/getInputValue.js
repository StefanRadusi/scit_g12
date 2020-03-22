export class Input {
    constructor() {
        this.getInputValue();
    }
     getInputValue() {
    const buttonElement = document.querySelector('#search');
    const inputElement = document.querySelector('#inputValue');

        buttonElement.addEventListener('click', (event) =>{
            console.log('button clicked')
        })
    }







}


