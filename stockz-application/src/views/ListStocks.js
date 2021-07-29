export default class ListStocks extends HTMLElement {

    constructor() {
        super();
        console.trace('ListStocks created.');
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <h2>List Stocks</h2>
            </header>
        `;
        console.trace('ListStocks connected.');
    }

}

customElements.define('list-stocks', ListStocks);
