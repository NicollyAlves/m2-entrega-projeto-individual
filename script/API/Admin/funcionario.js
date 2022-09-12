export class ApiFuncion {
    static baseUrl = "http://localhost:6278/"
    static token = localStorage.getItem("@empresas:token")
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }

    static async allUsers() {
        const funcionario = await fetch(`${this.baseUrl}users`, {
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))

        return funcionario
    }


    static async funcioSemDep() {
        const funcionario = await fetch(`${this.baseUrl}admin/out_of_work`, {
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))

        return funcionario
    }

    static async hireFuncio(data) {
        const funcionario = await fetch(`${this.baseUrl}departments/hire`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))

        return funcionario
    }

    static async dismissFuncio(uuid) {
        const funcionario = await fetch(`${this.baseUrl}departments/dismiss/${uuid}`, {
            method: "PATCH",
            headers: this.headers
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))

        return funcionario
    }
}