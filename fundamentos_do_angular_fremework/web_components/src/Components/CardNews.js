class CardNews HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build() {
        const componentRoot = document.createElement('div');
    }

    style() {

    }
}

customElements.define('card-news', CardNews);