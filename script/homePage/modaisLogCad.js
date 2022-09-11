
export class Modais {
    static abrirLogin() {
        const btnLogin = document.querySelector("#login")
        const modal = document.getElementById("loginModal")

            btnLogin.addEventListener("click", () => {
                modal.classList.toggle("hidden")
            })
    }
    static abrirCadastro() {
        const btnCadastro = document.getElementById("cadastro")
        const modal = document.getElementById("cadastroModal")
        
        btnCadastro.addEventListener("click", () => {
            modal.classList.toggle("hidd")
        })
    }
}

Modais.abrirLogin()
Modais.abrirCadastro()