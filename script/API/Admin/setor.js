export class ApiSetor {
    static baseUrl = "http://localhost:6278/"
    static token = localStorage.getItem("@empresas:token")
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }

    static async getSetores() {
        const setores = await fetch(`${this.baseUrl}sectors`, {
            method: "GET",
            headers: this.headers,
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))

        return setores
    }
}