import { ModalAcerto } from "../homePage/modalAcerto.js"
import { ModalErro } from "../homePage/modalErro.js"

export class ApiHomepage {

    static baseUrl = "http://localhost:6278/"
    static token = localStorage.getItem("@empresas:token")
    static headers = {
        "Content-Type": "application/json"
    }

    static async login(body) {
        const userLogin = await fetch(`${this.baseUrl}auth/login`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => {
            if(res.token != undefined) {
                localStorage.setItem("@empresas:token", res.token)
            }
            if(res.uuid != undefined) {
                localStorage.setItem("@empresas:uuid", res.uuid)
            }
            if(res.is_admin != undefined) {
                localStorage.setItem("@empresas:is_admin", res.is_admin)
            }
            
            if(res.error){
                const abrir = ModalErro.showToast()
                const fechar = ModalErro.closeToast()
                return abrir, fechar
            }
            
            if(res.is_admin == false) {
                window.location.assign("../../pages/dashBNormal.html")
            } else if(res.is_admin == true) {
                window.location.assign("../../pages/dashBAdmin.html")
            }


            console.log(res);
            return res
        })
        .catch(err => console.log(err))
        return userLogin
    }

    static async createUser(body) {
        const user = await fetch(`${this.baseUrl}auth/register/user`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => {
            if(!res.error) {
                const abrir = ModalAcerto.showToast()
                const fechar = ModalAcerto.closeToast()
                return abrir, fechar
            }

            console.log(res);
            return res
        })
        .catch(err => console.log(err))

        return user
    }

    static async getEmpresas() {
        const empresas = await fetch(`${this.baseUrl}companies`, {
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))

        return empresas
    }

    static async getEmpSetor1() {
        const setores = await fetch(`${this.baseUrl}companies/Alimenticio`, {
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))

        return setores
    }

    static async getEmpSetor2() {
        const setores = await fetch(`${this.baseUrl}companies/Varejo`, {
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))

        return setores
    }

    static async getEmpSetor3() {
        const setores = await fetch(`${this.baseUrl}companies/Textil`, {
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))

        return setores
    }

    static async getEmpSetor4() {
        const setores = await fetch(`${this.baseUrl}companies/Manufatura`, {
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))

        return setores
    }

    static async getEmpSetor5() {
        const setores = await fetch(`${this.baseUrl}companies/Aeroespacial`, {
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
        
        return setores
    }
    
    static async getEmpSetor6() {
        const setores = await fetch(`${this.baseUrl}companies/Automotiva`, {
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))

        return setores
    }
    static async getEmpSetor7() {
        const setores = await fetch(`${this.baseUrl}companies/TI`, {
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))

        return setores
    }

    static async getEmpSetor8() {
        const setores = await fetch(`${this.baseUrl}companies/Atacado`, {
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))

        return setores
    }

}