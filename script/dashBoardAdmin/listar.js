import { ApiEmpresa } from "../API/Admin/empresa.js";
import { ApiSetor } from "../API/Admin/setor.js";
import { RenderAdmin } from "./renderAdmin.js";
import { ApiDep } from "../API/Admin/departamento.js";

export class ListarSetor {
    static async renderSetor() {
        const setores = await ApiSetor.getSetores()
        RenderAdmin.renderSetores(setores)
    }
    static async renderEmpresa() {
        const empresas = await ApiEmpresa.getEmpresas()
        RenderAdmin.renderCriarEmpresa(empresas)
    }
    static async renderDep() {
        const departamento = await ApiDep.getDepartamentos()
        RenderAdmin.loopDep(departamento)
    }

    static async update() {
        const dep = await ApiDep.editarDep()
        RenderAdmin.updateDep(dep)
    }
    
}
ListarSetor.renderSetor()
ListarSetor.renderEmpresa()
ListarSetor.renderDep()



