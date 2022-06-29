/* 
 when you click an element the browser goes down the tree to the last element and then starts firing the event function
 from the last element up to the root
*/

const divs = document.querySelectorAll('div');



function logText(e)
{
    console.log(this.classList.value);
    e.stopPropagation(); // stops the bubbling
}



divs.forEach(div => div.addEventListener('click', logText, {
    capture: false // this will make the event fire on the way down default is false
})); // bubbles through all divs bcs click event ripples through the whole page


const btn = document.querySelector('button');


btn.addEventListener('click', logElement, {
    once: true //only fires this event once and removes it eg button is not clickable again
});



function logElement(e)
{
    console.log(e.target);
}