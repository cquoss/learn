import AddStock from './views/AddStock.js';
import ListStocks from './views/ListStocks.js';
export default class AirSlot extends HTMLElement {

    constructor() {
        super();
        console.trace('AirSlot created.')
    }

    connectedCallback() {
        document.addEventListener('air-nav', e => this.onNavigation(e));
        console.trace('AirSlot connected.');
    }

    onNavigation(evt) {

        const { detail } = evt;
        console.log('air-slot', detail);

        const { href } = detail;
        const { hash:linkName } = detail;
        const { text } = detail;

        console.log(href, linkName, text);

        if (linkName === 'add') {
            const view = new AddStock();
            this.appendChild(view);
        }

        if (linkName === 'list') {
            const view = new ListStocks();
            this.appendChild(view);
        }

    }

}

customElements.define('air-slot', AirSlot);
