import { ApiHomepage } from "../API/homePage.js";

class SignUp {

    static createUser() {
        const name = document.getElementById("nome_cad")
        const email = document.getElementById("email_cad")
        const nivel = document.getElementById("nivel_cad")
        const pass = document.getElementById("senha_cad")
        const btnCad = document.getElementById("cadastrar")

        btnCad.addEventListener("click", async (event) => {
            event.preventDefault()

            const data = {
                username: name.value,
                email: email.value,
                professional_level: nivel.value,
                password: pass.value
            }

            await ApiHomepage.createUser(data)
        })
    }

    static login() {
        const token  = localStorage.getItem("@empresas:token")
        const userId = localStorage.getItem("@empresas:uuid")
        const is_admin = localStorage.getItem("@empresas:is_admin")

        /*if(is_admin == true) {
            window.location.assign("../../pages/dashBAdmin.html")
        } else if(is_admin == false) {
            window.location.assign("../../pages/dashBNormal.html")
        } else {
            window.location.assign("../../homePage.html")
        }*/
        /*if(token != undefined && userId != undefined && is_admin == false) {
            window.location.assign("../../pages/dashBNormal.html")
        } else if(token != undefined && userId != undefined && is_admin == true) {
            window.location.assign("../../pages/dashBAdmin.html")
        }*/

        const emailLogin = document.getElementById("email_login")
        const passLogin = document.getElementById("pass_login")
        const btnLogin = document.getElementById("logar")

        btnLogin.addEventListener("click", (event) => {
            event.preventDefault()

            const data = {
                email: emailLogin.value,
                password: passLogin.value
            }

            console.log(data);

            ApiHomepage.login(data)
        })
    }
}

SignUp.login()
SignUp.createUser()
