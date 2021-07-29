import AddStock from './views/AddStock.js';
import ListStocks from './views/ListStocks.js';
export default class AirSlot extends HTMLElement {

    constructor() {
        super();
        this.oldChild = null;
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

        let newChild = null;

        if (linkName === 'add') {
            newChild = new AddStock();
        }

        if (linkName === 'list') {
            newChild = new ListStocks();
        }

        if (this.oldChild) {
            this.replaceChild(newChild, this.oldChild);
        } else {
            this.appendChild(newChild);
        }

        this.oldChild = newChild;

    }

}

customElements.define('air-slot', AirSlot);
