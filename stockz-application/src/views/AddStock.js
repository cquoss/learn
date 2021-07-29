export default class AddStock extends HTMLElement {

    constructor() {
        super();
        console.trace('AddStock created.');
    }

    connectedCallback() {
        this.innerHTML = `
            <input placeholder="stock"/>
            <button>Add stock</button>
        `;
        console.trace('AddStock connected.');
    }

}

customElements.define('add-stock', AddStock);
