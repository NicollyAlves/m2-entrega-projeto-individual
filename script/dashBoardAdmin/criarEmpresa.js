import { ApiDep } from "../API/Admin/departamento.js";
import { ApiEmpresa } from "../API/Admin/empresa.js";
import { RenderAdmin } from "./renderAdmin.js";


export class CriarEmpresa {
    static criar() {
        const nome = document.getElementById("nomeEmp")
        const time = document.getElementById("timeEmp")
        const desc = document.getElementById("descEmp")
        const id = document.getElementById("idEmp")
        const button = document.querySelector("#criarEmpresa")

        button.addEventListener("click", async (event) => {
        event.preventDefault()

            const data = {
                name: nome.value,
                opening_hours: time.value,
                description: desc.value,
                sector_uuid: id.value,
            }

            const newCompany = await ApiEmpresa.criarEmpresa(data)
            RenderAdmin.renderCriarEmpresa(newCompany)
        })
    }

    static criarDep() {
        const nome = document.getElementById("nomeDep")
        const desc = document.getElementById("descDep")
        const id = document.getElementById("idDep")
        const button = document.getElementById("criarDep")

        button.addEventListener("click", async (event) => {
            event.preventDefault()

            const data = {
                name: nome.value,
                description: desc.value,
                company_uuid: id.value
            }

            const  newDep = await ApiDep.newDepartamento(data)
            RenderAdmin.renderDepartCriado(newDep)
        })
    }
}

CriarEmpresa.criar()
CriarEmpresa.criarDep()