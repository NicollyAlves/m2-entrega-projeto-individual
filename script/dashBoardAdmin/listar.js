import { ApiEmpresa } from "../API/Admin/empresa.js";
import { ApiSetor } from "../API/Admin/setor.js";
import { RenderAdmin } from "./renderAdmin.js";
import { ApiFuncion } from "../API/Admin/funcionario.js";

const token = localStorage.getItem("@empresas:token")
if(!token) {
    window.location.assign("/homePage.html")
}

export class ListarSetor {
    static async renderSetor() {
        const setores = await ApiSetor.getSetores()
        RenderAdmin.renderSetores(setores)
    }
    static async renderEmpresa() {
        const empresas = await ApiEmpresa.getEmpresas()
        RenderAdmin.renderCriarEmpresa(empresas)
    }
    /*static async renderDep() {
        const departamento = await ApiDep.getDepartamentos()
        RenderAdmin.loopDep(departamento)
    }*/

    static async renderFuncionSemDep() {
        const funcio = await ApiFuncion.funcioSemDep()
        RenderAdmin.renderFuncioSemDep(funcio)
    }
}
ListarSetor.renderSetor()
ListarSetor.renderEmpresa()
ListarSetor.renderFuncionSemDep()
//ListarSetor.renderDep()



