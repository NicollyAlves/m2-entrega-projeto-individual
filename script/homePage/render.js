import { Renderiza } from "./listar.js"

const filtersContainer = document.querySelector(".filtersContainer")
const sectionEmpresas = document.querySelector(".sectionEmpresas")
export class HomePage {
    static renderButtons() {
        const button  = document.createElement("button")
        const button1 = document.createElement("button")
        const button2 = document.createElement("button")
        const button3 = document.createElement("button")
        const button4 = document.createElement("button")
        const button5 = document.createElement("button")
        const button6 = document.createElement("button")
        const button7 = document.createElement("button")
        const button8 = document.createElement("button")

        button.innerText  = "Todas"
        button1.innerText = "Alimenticio"
        button2.innerText = "Varejo"
        button3.innerText = "Textil"
        button4.innerText = "Manufatura"
        button5.innerText = "Aeroespacial"
        button6.innerText = "Automotiva"
        button7.innerText = "TI"
        button8.innerText = "Atacado"
        
        button.addEventListener("click", () => {
            Renderiza.listarTodas()
            sectionEmpresas.innerHTML = ""
        })

        button1.addEventListener("click", () => {
            Renderiza.listar1()
            sectionEmpresas.innerHTML = ""
        })

        button2.addEventListener("click", () => {
            Renderiza.listar2()
            sectionEmpresas.innerHTML = ""
        })

        button3.addEventListener("click", () => {
            Renderiza.listar3()
            sectionEmpresas.innerHTML = ""
        })

        button4.addEventListener("click", () => {
            Renderiza.listar4()
            sectionEmpresas.innerHTML = ""
        })

        button5.addEventListener("click", () => {
            Renderiza.listar5()
            sectionEmpresas.innerHTML = ""
        })

        button6.addEventListener("click", () => {
            Renderiza.listar6()
            sectionEmpresas.innerHTML = ""
        })

        button7.addEventListener("click", () => {
            Renderiza.listar7()
            sectionEmpresas.innerHTML = ""
        })

        button8.addEventListener("click", () => {
            Renderiza.listar8()
            sectionEmpresas.innerHTML = ""
        })

        filtersContainer.append(button, button1, button2, button3, button4, button5, button6, button7, button8)

        return filtersContainer
    }

    static renderEmpresas(data) {
        for(let i = 0; i < data.length; i++) {
            const empresas = document.createElement("div")
            const info = document.createElement("div")
            const nome = document.createElement("h2")
            const horario = document.createElement("p")
            const infoDesc = document.createElement("div")
            const descricao  = document.createElement("h3")
            const setor = document.createElement("h4")

            empresas.classList.add('empresas')
            empresas.id = data[i].uuid

            nome.innerText = data[i].name
            horario.innerText = data[i].opening_hours
            descricao.innerText = data[i].description
            setor.innerText = data[i].sectors.description
            

            info.append(nome, horario)
            infoDesc.append(descricao)
            empresas.append(info, infoDesc, setor) 
            sectionEmpresas.appendChild(empresas)
        }
        return sectionEmpresas
    }
}

HomePage.renderButtons()