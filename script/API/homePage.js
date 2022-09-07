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
            
            if(!this.token) {
                window.location.assign("../../homePage.html")
            }
            
            if(res.is_admin == false) {
                window.location.assign("../../pages/dashBNormal.html")
            } else if(res.is_admin == true) {
                window.location.assign("../../pages/dashBAdmin.html")
            }


            console.log(res);
            return res
        })
        .catch(err => err)
        return userLogin
    }

    static async createUser(body) {
        const user = await fetch(`${this.baseUrl}auth/register/user`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))

        return user
    }

    static async getEmpresas() {
        const empresas = await fetch(`${this.baseUrl}companies`, {
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())
        .then(res => console.log(res))

        return empresas
    }
}