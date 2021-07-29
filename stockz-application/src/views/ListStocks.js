export default class ListStocks extends HTMLElement {

    constructor() {
        super();
        console.trace('ListStocks created.');
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
        console.trace('ListStocks connected.');
    }

}

customElements.define('list-stocks', ListStocks);
