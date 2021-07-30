export default class ListView extends HTMLElement {

    constructor() {
        super();
        console.trace('ListView created.');
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                header {
                    background: var(--air-brown, red);
                }
            </style>
            <header>
                <h2>List Stocks</h2>
            </header>
        `;
        console.trace('ListView connected.');
    }

}

customElements.define('list-view', ListView);
