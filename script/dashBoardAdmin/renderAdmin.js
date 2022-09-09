import { ApiDep } from "../API/Admin/departamento.js"

export class RenderAdmin{
    
    static renderSetores(data) {
        const ul = document.querySelector(".listaSetores")
        data.forEach((elem) => {
            const descricao = document.createElement("li")
            const detalhes = document.createElement("details")
            const summary = document.createElement("summary")
            const h3 = document.createElement("h3")
            
            descricao.innerText = elem.description
            summary.innerText = "clique para obter o id do setor."
            h3.innerText = elem.uuid
            
            detalhes.append(h3, summary)
            ul.append(descricao, detalhes)
        })
        return ul
    }
    
    static renderInputCriarEmpresa() {
        const form = document.querySelector(".inputsCriarEmpresa")
        const nome = document.createElement("input")
        const time = document.createElement("input")
        const descricao = document.createElement("input")
        const uuid = document.createElement("input")
        const button = document.createElement("button")

        nome.type = "text"
        time.type = "text"
        descricao.type = "text"
        uuid.type = "text"

        nome.placeholder = "Nome"
        time.placeholder = "Horário de abertura"
        descricao.placeholder = "Descrição"
        uuid.placeholder = "ID do setor"
        button.innerText = "Criar empresa"
        
        nome.id = "nomeEmp"
        time.id = "timeEmp"
        descricao.id = "descEmp"
        uuid.id = "idEmp"
        button.id = "criarEmpresa"
        
        form.append(nome, time, descricao, uuid, button)
        return form
    }
    
    
    static async renderCriarEmpresa(data) {
        const section = document.querySelector(".sectionEmpresas")
        for(let i = 0; i<data.length; i++) {
            const empresas = document.createElement("div")
            const info = document.createElement("div")
            const nome = document.createElement("h2")
            const horario = document.createElement("p")
            const infoDesc = document.createElement("div")
            const descricao = document.createElement("h3")
            const details = document.createElement("details")
            const summary = document.createElement("summary")
            const h3 = document.createElement("h3")
            
            empresas.classList.add("empresas")
            details.classList.add("detalhes")
            
            /*btnEditar.addEventListener("click",  async (event) => {
                localStorage.setItem('@empresas:itemId', event.target.uuid)
            })*/
            
            
            nome.innerText = data[i].name
            horario.innerText = data[i].opening_hours
            descricao.innerText = data[i].description
            summary.innerText = "Clique para obter o id da empresa"
            h3.innerText = data[i].uuid
            
            details.append(summary, h3)
            info.append(nome, horario)
            infoDesc.append(descricao)
            empresas.append(info, infoDesc, details)
            
            section.appendChild(empresas)
        }
        return section
    }
    
    static renderInputCriarDep() {
        const form = document.querySelector(".inputsCriarEmpresa")
        const label = document.createElement("label")
        const nome = document.createElement("input")
        const descricao = document.createElement("input")
        const uuid = document.createElement("input")
        const button = document.createElement("button")
        
        nome.type = "text"
        descricao.type = "text"
        uuid.type = "text"
        console.log(button);
        
        
        label.innerText = "Criar Dep"
        nome.placeholder = "Nome"
        descricao.placeholder = "Descrição"
        uuid.placeholder = "ID da empresa"
        button.innerText = "Criar Departamento"
        
        nome.id = "nomeDep"
        descricao.id = "descDep"
        uuid.id = "idDep"
        button.id = "criarDep"
        
        form.append(label, nome, descricao, uuid, button)
        if(button) {
            button.addEventListener("click", async (event) => { 
                localStorage.setItem('@empresas:itemId', event.target.itemId)
            })
        }
        return form
    }
    
    static loopDep(data) {
        data.forEach((elem) => {
            this.renderDepartCriado(elem)
        })
    }
    
    static renderDepartCriado(data) {
        const divDep = document.querySelector(".departamento")
        const div = document.createElement("div")
        const nome = document.createElement("h2")
        const desc = document.createElement("p")
        const btnEditar = document.createElement("button")
        const btnDelete = document.createElement("button")
        
        btnEditar.id = "editar"
        btnDelete.id = "deletar"
        btnEditar.innerText = "editar"
        btnDelete.innerText = "deletar"
        
        div.classList.add("listaDep")
        
        btnEditar.addEventListener("click", async (event) => {
            event.preventDefault()
            console.log("OI");
            const nome = document.getElementById("nomeDep")
            const dec = document.getElementById("descDep")
            const updateId = localStorage.getItem('@empresas:itemId')
            const data = {
                description: dec.value
            }
            
            await ApiDep.editarDep(data, updateId)
            //localStorage.removeItem("@empresas:itemId")
        })
        
        nome.innerText = data.name
        desc.innerText = data.description
        
        div.append(nome, desc, btnEditar, btnDelete)
        divDep.append(div)
        return divDep
    }
}

RenderAdmin.renderInputCriarEmpresa()
RenderAdmin.renderInputCriarDep()
//RenderAdmin.updateDep()