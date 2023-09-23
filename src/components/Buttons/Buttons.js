class Buttons extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }
connectedCallback() {
    this.render();
}
render(){
    const btn = document.createElement('button')
    btn.textContent= 'boton pa'
    this.shadowRoot.appendChild(btn);
}
}

customElements.define('app-buttons', Buttons)