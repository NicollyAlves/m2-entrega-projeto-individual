export class ApiDep {
    static baseUrl = "http://localhost:6278/"
    static token = localStorage.getItem("@empresas:token")
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }

    static async newDepartamento(body) {
        const departamento = await fetch(`${this.baseUrl}departments`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))

        return departamento
    }

    static async getDepartamentos() {
        const departamento = await fetch(`${this.baseUrl}departments/`, {
            method: "GET",
            headers: this.headers,
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))

        return departamento
    }

    static async editarDep(data, uuid) {
        const departamento = await fetch(`${this.baseUrl}departments/${uuid}`, {
            method: "PATCH", 
            headers: this.headers,
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))

        return departamento
    }
}
