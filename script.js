const container = document.querySelector('.container');


window.addEventListener('keydown', (event)=>{
    container.innerHTML = `
    <div class="key">
            ${event.key == ' ' ? '{space }' : event.key}
            <small>event.key</small>
        </div>
        <div class="key">
            ${event.keyCode}
            <small>event.keycode</small>
        </div>
        <div class="key">
            ${event.code}
            <small>event.code</small>
        </div>
    `
})