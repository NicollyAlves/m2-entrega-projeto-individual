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
            const ramo = document.createElement("h4")
            const details = document.createElement("details")
            const summary = document.createElement("summary")
            const h3 = document.createElement("h3")
            const button = document.createElement("button")
            
            empresas.classList.add("empresas")
            details.classList.add("detalhes")
            

            nome.innerText = data[i].name
            horario.innerText = data[i].opening_hours
            descricao.innerText = data[i].description
            ramo.innerText = data[i].sectors.description
            summary.innerText = "Clique para obter o id da empresa"
            h3.innerText = data[i].uuid
            button.id = data[i].uuid
            button.innerText = "departamentos"

            button.addEventListener("click", async (event) => {
                const uuid = event.target.id
                const dep = await ApiDep.depEmpresaEspecifica(uuid)
                console.log(dep);
                const departamento = await ApiDep.getDepartamentos()
                RenderAdmin.renderDepartCriado(dep)
                //window.location.reload(true)
            })

            
            details.append(summary, h3)
            info.append(nome, ramo, horario)
            infoDesc.append(descricao)
            empresas.append(info, infoDesc, details, button)
            
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
        return form
    }
    
    /*static loopDep(data) {
        for(let i = 0; i<data[i].length; i++){
            this.renderDepartCriado(data)
        }
    }
    */
    static renderDepartCriado(data) {
        for(let i = 0; i<data.length; i++) {
            
            const divDep = document.querySelector(".departamento")
            const div = document.createElement("div")
            const nome = document.createElement("h2")
            const desc = document.createElement("p")
            const btnEditar = document.createElement("button")
            const btnDelete = document.createElement("button")
            const details = document.createElement("details")
            const summary = document.createElement("summary")
            const h3 = document.createElement("h3")
            
            btnEditar.id = data[i].uuid
            btnDelete.id = data[i].uuid
            btnEditar.innerText = "editar"
            btnDelete.innerText = "deletar"
            summary.innerText = "Clique para obter o id do departamento"
            h3.innerText = data[i].uuid
            
            div.classList.add("listaDep")
            
            btnEditar.addEventListener("click", async (event) => {
        
                const dec = document.getElementById("descDep")
                const updateId = event.target.id
                const data = {
                    description: dec.value
                }
                
                await ApiDep.editarDep(data, updateId)
                document.location.reload(true)
            })
            
            btnDelete.addEventListener("click", async (event) => {
                const deleteId = event.target.id
                await ApiDep.deleteDep(deleteId)
                document.location.reload(true)
            })
        
            nome.innerText = data[i].name
            desc.innerText = data[i].description
            
            details.append(summary, h3)
            div.append(nome, desc, btnEditar, btnDelete)
            divDep.append(div, details)
            //return divDep
        }
    }

    static renderHireInputs() {
        const div = document.querySelector(".hireInputs")
        const form = document.createElement("form")
        const label = document.createElement("label")
        const idFuncio = document.createElement("input")
        const idDep = document.createElement("input")

        label.innerText = "Contratar Funcionário"
        idFuncio.type = "text"
        idDep.type = "text"

        idFuncio.placeholder = "Digite o id do usuário"
        idDep.placeholder = "Digite o id do departamento"

        form.append(label, idFuncio, idDep)
        div.appendChild(form)

        return div
    }


    static renderFuncioSemDep(data) {
        const section = document.querySelector(".funcioSemDep")
        for(let i = 0; i<data.length; i++) {
            
            const empresas = document.createElement("div")
            const info = document.createElement("div")
            const nome = document.createElement("h2")
            const email = document.createElement("p")
            const infoDesc = document.createElement("div")
            const nivel = document.createElement("h3")
            const kind = document.createElement("h4")
            const details = document.createElement("details")
            const summary = document.createElement("summary")
            const h3 = document.createElement("h3")
            const button = document.createElement("button")
            
            empresas.classList.add("empresas")
            details.classList.add("detalhes")
            
    
            nome.innerText =  data[i].username
            email.innerText = data[i].email
            nivel.innerText = data[i].professional_level
            kind.innerText =  data[i].kind_of_work
            summary.innerText = "Clique para obter o id do usuário"
            h3.innerText = data[i].uuid
            button.id = data[i].uuid
            button.innerText = "contratar"
    
            
            details.append(summary, h3)
            info.append(nome, email, nivel)
            infoDesc.append(kind)
            empresas.append(info, infoDesc, details, button)
            
            section.appendChild(empresas)
        }
    }
}

RenderAdmin.renderInputCriarEmpresa()
RenderAdmin.renderInputCriarDep()
RenderAdmin.renderHireInputs()
//RenderAdmin.updateDep()