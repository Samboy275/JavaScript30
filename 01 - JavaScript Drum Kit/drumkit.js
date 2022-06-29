
window.addEventListener('keydown', function (e){
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    if (!audio) return; // stop if the pressed keycode isn't in the keys
    audio.currentTime = 0;// allow to play sounds repeatedly
    key.classList.add('playing'); // transition key to give playing animation
    audio.play();

});

function removeTransition(key)
{
    if (key.propertyName !== 'transform') return; //stops if the transition event isn't a transform  
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',  removeTransition))