import { ApiHomepage } from "../API/homePage.js";
import { HomePage } from "./render.js";

export class Renderiza {
    static async listarTodas() {
        const empresa = await ApiHomepage.getEmpresas()
        HomePage.renderEmpresas(empresa)
    }

    static async listar1() {
        const empresa = await ApiHomepage.getEmpSetor1()
        HomePage.renderEmpresas(empresa)
    }

    static async listar2() {
        const empresa = await ApiHomepage.getEmpSetor2()
        HomePage.renderEmpresas(empresa)
    }

    static async listar3() {
        const empresa = await ApiHomepage.getEmpSetor3()
        HomePage.renderEmpresas(empresa)
    }

    static async listar4() {
        const empresa = await ApiHomepage.getEmpSetor4()
        HomePage.renderEmpresas(empresa)
    }

    static async listar5() {
        const empresa = await ApiHomepage.getEmpSetor5()
        HomePage.renderEmpresas(empresa)
    }

    static async listar6() {
        const empresa = await ApiHomepage.getEmpSetor6()
        HomePage.renderEmpresas(empresa)
    }

    static async listar7() {
        const empresa = await ApiHomepage.getEmpSetor7()
        HomePage.renderEmpresas(empresa)
    }

    static async listar8() {
        const empresa = await ApiHomepage.getEmpSetor8()
        HomePage.renderEmpresas(empresa)
    }
}
Renderiza.listarTodas()