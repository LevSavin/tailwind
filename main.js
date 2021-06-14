class Menu {
    constructor() {
        const navbar = this.setVisual(document.querySelector("#navbarBtn"));
    }

    setVisual($element) {
        $element.addEventListener('click', () => {
            document.querySelector("#navbar").classList.toggle("hidden")
        })
    }

}
const menu = new Menu();