
const btn = document.getElementById('btn');
const randNumber = ()=>{
    const colorText = document.getElementById('colorText');
    const shape = document.getElementById('shape');
    const inputRandNumber = document.getElementById('inputRandNumber').value;
    
    
    if(inputRandNumber === ''){
        alert('Fill in the missing gaps')
    }else if(inputRandNumber > 255 ){
        alert('You just entered a number greater than 255, Enter number ranging from 0 to 255 ');
    }else if(inputRandNumber < 0 ){
        alert('Enter numbers greater than 0 - 255');
    }
    else{
        const rand1 = Math.round(Math.floor(Math.random() * inputRandNumber));
        const rand2 = Math.round(Math.floor(Math.random() * inputRandNumber));
        const rand3 = Math.round(Math.floor(Math.random() * inputRandNumber));
        shape.style = `background: rgb(${rand1}, ${rand2}, ${rand3});
                  transition: all 2s forwards 0.5s ease-in-out;`;
        colorText.textContent = `rgb(${rand1}, ${rand2}, ${rand3})`;
        
    }
  
}

// Event listener to the button
btn.addEventListener('click', randNumber)