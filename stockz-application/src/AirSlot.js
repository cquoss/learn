export default class AirSlot extends HTMLElement {

    constructor() {
        super();
        this.oldChild = null;
        this.root = this.attachShadow({ mode: 'open'});
        console.trace('AirSlot created.');
    }

    connectedCallback() {
        this.root.innerHTML = `
            <slot name="header">HEADER</slot>
            <slot name="view">VIEW</slot>
            <slot name="footer">FOOTER</slot>
        `;
        this.oldChild = this.root.querySelector('[name=view]');
        document.addEventListener('air-nav', e => this.onNavigation(e));
        console.trace('AirSlot connected.');
    }

    onNavigation(evt) {

        const { detail } = evt;
        console.log('air-slot - detail:', detail);

        const { hash:linkName } = detail;

        console.log('air-slot - linkName:', linkName);

        this.loadView(linkName);

    }

    async loadView(linkName) {
        const { default:View } = await import(`./views/${linkName}View.js`)
        const newChild = new View();
        if (this.oldChild) {
            this.root.replaceChild(newChild, this.oldChild);
        } else {
            this.root.appendChild(newChild);
        }
        this.oldChild = newChild;
    }

}

customElements.define('air-slot', AirSlot);
