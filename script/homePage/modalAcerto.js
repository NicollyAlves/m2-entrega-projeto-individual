export class ModalAcerto {
    static showToast() {
        const modal = document.getElementById("modalCerto")
            modal.className = "showCerto"
    }

    static closeToast() {
        const modal = document.getElementById("modalCerto")
        const entendi = document.getElementById("entendiCerto")
        entendi.addEventListener("click", () => {
            modal.className = "hdd"
        })
    }
}
