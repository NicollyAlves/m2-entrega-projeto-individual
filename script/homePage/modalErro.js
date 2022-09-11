export class ModalErro {
    static showToast() {
        const modal = document.getElementById("modal")
            modal.className = "show"
    }

    static closeToast() {
        const modal = document.getElementById("modal")
        const entendi = document.getElementById("entendi")
        entendi.addEventListener("click", () => {
            modal.className = "hid"
        })
    }
}
