export default class AddView extends HTMLElement {

    constructor() {
        super();
        console.trace('AddView created.');
    }

    connectedCallback() {
        this.innerHTML = `
            <input placeholder="stock"/>
            <button>Add stock</button>
        `;
        console.trace('AddView connected.');
    }

}

customElements.define('add-view', AddView);
