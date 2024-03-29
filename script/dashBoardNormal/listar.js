import { ApiNormal } from "../API/normal.js";
import { RenderNormal } from "./renderNormal.js";

const token = localStorage.getItem("@empresas:token")
if(!token) {
    window.location.assign("/index.html")
}

export class ListarNormal {
    static async renderOwnCompany() {
        const company = await ApiNormal.getDeparts()
        RenderNormal.renderOwnCompany(company)
    }

    static async renderOwnDep() {
        const dep = await ApiNormal.getFuncio()
        RenderNormal.renderDep(dep)
    }

    static async renderFuncio() {
        const funcionarios = await ApiNormal.getFuncio()
        RenderNormal.renderFuncion(funcionarios)
    }

    static async renderInfos() {
        const infos = await ApiNormal.getInfoFuncio()
        RenderNormal.renderInfos(infos)
    }

    static async updateInfos() {
        const updateInfos = await ApiNormal.updateInfos()
        console.log(updateInfos);
    }
}

ListarNormal.renderOwnCompany()
ListarNormal.renderOwnDep()
ListarNormal.renderFuncio()
ListarNormal.renderInfos()
//ListarNormal.updateInfos()