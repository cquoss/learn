export default class AirCrumb extends HTMLElement {

    constructor() {
        super();
        console.trace('AirCrumb created.');
    }

    connectedCallback() {
        document.addEventListener('air-nav', e => this.onNavigation(e));
        console.trace('AirCrumb connected.');
    }

    onNavigation({ detail }) {
        const { hash } = detail;
        this.displayCurrent(hash);

    }

    displayCurrent(linkName) {
        this.innerText = `>${linkName}`;
    }
}

customElements.define('air-crumb', AirCrumb);
