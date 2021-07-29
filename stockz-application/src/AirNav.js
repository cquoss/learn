export default class AirNav extends HTMLElement {

    constructor() {
        super();
        this.activeLink = null;
        console.trace('AirNav created.');
    }

    connectedCallback() {
        this.activeLinkClass = this.getAttribute('activeLinkClass');
        if (!this.activeLinkClass) {
            this.activeLinkClass = 'active-link';
        }
        const links = this.querySelectorAll("a");
        console.log(links);
        links.forEach(e => this.registerListener(e));
        console.trace('AirNav connected.');
    }

    registerListener(e) {
        e.onclick = evt => this.onLinkClicked(evt);
    }

    onLinkClicked(evt) {
        const { target } = evt;
        if (this.activeLink) {
            this.activeLink.classList.toggle(this.activeLinkClass);
        }
        this.activeLink = target;
        this.activeLink.classList.toggle(this.activeLinkClass);
        evt.preventDefault();
        console.log(target.href);
        const event = new CustomEvent('air-nav', {
            detail: {
                href: target.href,
                hash: target.hash.substring(1),
                text: target.text
            },
            bubbles: true
        });
        console.log(event);
        this.dispatchEvent(event);
    }

}

customElements.define('air-nav', AirNav);
