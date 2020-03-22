export class Input {
    constructor() {
        this.getInputValue();
    }
     getInputValue() {
         const API_KEY = 'fce3c396aa55d1e4f37f285d0f38ac2f';
         const url = 'https://api.themoviedb.org/4/search/movie?api_key=fce3c396aa55d1e4f37f285d0f38ac2f';


        const buttonElement = document.querySelector('#search');
        const inputElement = document.querySelector('#inputValue');


        buttonElement.addEventListener('click', (event) =>{
            event.preventDefault();
            const value = inputElement.value

            const newUrl = url + '&query=' + value;
         
            fetch(newUrl) 
            .then((response) => response.json())
            .then((data) => {
                console.log('Data:', data)

            }) 
            .catch((error) =>{
                console.log('Error:', error)
            } );   


            console.log('Value:', value)
        })

      



           
      
    }







}


