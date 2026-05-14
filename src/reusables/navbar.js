class Navbar extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <nav class="navbar">
        <p>About</p>
        <p>Projects</p>
        <p>Contacts</p>
        </nav>
        `
    }
}

customElements.define('Navbar', Navbar)