export class ApiEmpresa {
    static baseUrl = "http://localhost:6278/"
    static token = localStorage.getItem("@empresas:token")
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
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

    static async getEmpresasporSetor(id) {
        const empresas = await fetch(`${this.baseUrl}companies/${id}`, {
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))

        return empresas
    }

    static async criarEmpresa(body) {
        const empresa = await fetch(`${this.baseUrl}companies`, {
            method: "POST", 
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => err)

        return empresa
    }
}
ApiEmpresa.getEmpresas()