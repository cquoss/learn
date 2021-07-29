export default class AirSlot extends HTMLElement {

    constructor() {
        super();
        console.log('AirSlot is created.')
    }

    connectedCallback() {
        console.log('AirSlot is connected.');
        document.addEventListener('air-nav', e => this.onNavigation(e));
    }

    onNavigation(evt) {
        const { detail } = evt;
        console.log('air-slot', detail);
    }

}

customElements.define('air-slot', AirSlot);
