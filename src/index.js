import "./components/index.js"

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const section = document.createElement('section');
        const title = document.createElement('h2');
        const btn = document.createElement('app-buttons')

        title.textContent = "Titulardo";
        section.appendChild(title);
        section.appendChild(btn);

        this.shadowRoot.appendChild(section);
    }
}

customElements.define('app-container', AppContainer);
