console.log('start')

import {Input} from './components/getInputValue'
 

  class Container {
    constructor() {
       this.generateContainer()
    }

generateContainer() {
    let container = document.createElement('div');
    container.classList.add('container');

    document.getElementById('body').appendChild(container); 
    
    let h1 = document.createElement('h1');
    h1.innerText = 'Welcome to my Movie App';

    container.appendChild(h1)

    let form = document.createElement('form')

    container.appendChild(form)


    let div = document.createElement('div');
    div.classList.add('form-group')

    form.appendChild(div);
    
    let input = document.createElement('input');
    input.id = 'inputValue';
    input.type = 'text';

    div.appendChild(input);

    let button = document.createElement('button')
    button.id = 'search';
    button.type = 'submit';
    button.innerText = 'Search for movie';

    container.appendChild(button);

    let inputClass = new Input();

}





}

let newContainer = new Container();


