console.log('start')

import {Input} from './components/input/getInputValue';
import {Movie} from './components/movie/movieContainer';
 

  export class Container {
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

    button.addEventListener('click', () => {
      input.innerHTML = "";
    })

    form.appendChild(button);

    const newInput = new Input();

    let newerDiv = document.createElement('div')
    newerDiv.id = 'movies-searchable';

    document.getElementById('body').appendChild(newerDiv);

    
    const newMovie = new Movie();

}





}

let newContainer = new Container();






