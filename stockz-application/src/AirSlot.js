export default class AirSlot extends HTMLElement {

    constructor() {
        super();
        console.log('AirSlot is created.')
    }

    connectedCallback() {
        console.log('AirSlot is connected.');
    }

}

customElements.define('air-slot', AirSlot);
