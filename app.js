
const btn = document.getElementById('btn');
const randNumber = ()=>{
    const colorText = document.getElementById('colorText');
    const shape = document.getElementById('shape');
    const red = document.getElementById('red').value;
    const green = document.getElementById('green').value;
    const blue = document.getElementById('blue').value;
    
    if(red === '' || green === '' || blue === ''){
        alert('Fill in the missing gaps')
    }else if(red > 255 || green > 255 || blue > 255){
        alert('You just entered a number greater than 255, Enter number ranging from 0 to 255 ');
    }else if(red < 0 || green <0 || blue < 0){
        alert('Enter numbers greater than 0 - 255');
    }
    else{
        shape.style = `background: rgb(${red}, ${green}, ${blue});
                  transition: all 2s forwards 0.5s ease-in-out;`;
        colorText.textContent = `rgb(${red}, ${green}, ${blue})`;
        
    }
  
}

// Event listener to the button
btn.addEventListener('click', randNumber)