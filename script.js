let display = document.getElementById('inputBox');

// we will take all the buttons in a variable and then evaluate it in an array.
let buttons = document.querySelectorAll('button'); // it will be stored as Nodelist
let buttonsArray = Array.from(buttons); // converted in arrays

let string = '';
// now once again for accessing all the buttons we have to separately store them
buttonsArray.forEach((btn) => {

    btn.addEventListener('click', (e) => {

        if(e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length-1);
            display.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = '';
            display.value = string;
        }
        else if(e.target.innerHTML == '=') {
            string = eval(string);
            display.value = string;
        }
        else{
            string += e.target.innerHTML;
            display.value = string;
            // console.log(e.target.innerHTML);
        } 
        
    });

});