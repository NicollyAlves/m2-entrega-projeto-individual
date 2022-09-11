export class ApiNormal {

    static baseUrl = "http://localhost:6278"
    static token = localStorage.getItem("@empresas:token") || ""
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }

    static async getInfoFuncio() {
        const info = await fetch(`${this.baseUrl}/users/profile`, {
            method: "GET", 
            headers: this.headers
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
        
        return info
    }

    static async getFuncio() {
        const funcionarios = await fetch(`${this.baseUrl}/users/departments/coworkers`, {
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
        
        return funcionarios
    }

    static async getDeparts() {
        const departamento = await fetch(`${this.baseUrl}/users/departments/`, {
            method: "GET",
            headers: this.headers,
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))

        return departamento
    }

    static async editarInfos(data) {
        const usuarioLogado = await fetch(`${this.baseUrl}/users`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))

        return usuarioLogado
    }
}