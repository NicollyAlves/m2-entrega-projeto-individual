import { ApiDep } from "../API/Admin/departamento.js"
import { ApiFuncion } from "../API/Admin/funcionario.js"
import { ApiEmpresa } from "../API/Admin/empresa.js"

export class RenderAdmin{
    
    static renderSetores(data) {
        const ul = document.querySelector(".listaSetores")
        data.forEach((elem) => {
            const div = document.createElement("div")
            const descricao = document.createElement("li")
            const detalhes = document.createElement("details")
            const summary = document.createElement("summary")
            const h3 = document.createElement("h3")
            const button = document.createElement("button")
            
            descricao.innerText = elem.description
            summary.innerText = "id para criar empresa"
            h3.innerText = elem.uuid
            button.id = elem.description
            button.innerText = "empresas"
            button.classList.add("btnEmpresas")
            descricao.classList.add("nomeSetor")
            
            button.addEventListener("click", async (event) => {
                const empresaslistas = document.querySelector(".sectionEmpresas")
                const uuid = event.target.id
                empresaslistas.innerHTML = ""
                const empresas = await ApiEmpresa.getEmpresasporSetor(uuid)
                RenderAdmin.renderCriarEmpresa(empresas)
            })
            
            detalhes.append(h3, summary)
            div.append(descricao, detalhes, button)
            ul.appendChild(div)
        })
        return ul
    }
    
    static renderInputCriarEmpresa() {
        const form = document.querySelector(".inputsCriarEmpresa")
        const div = document.createElement("div")
        const nome = document.createElement("input")
        const time = document.createElement("input")
        const descricao = document.createElement("input")
        const uuid = document.createElement("input")
        const button = document.createElement("button")
        
        div.classList.add("divEmpresas")

        nome.classList.add("inputCreateCompany")
        time.classList.add("inputCreateCompany")
        descricao.classList.add("inputCreateCompany")
        uuid.classList.add("inputCreateCompany")
        button.classList.add("btnCriarEmpresa")


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
        
        div.append(nome, time, descricao, uuid, button)
        form.append(div)
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

            button.classList.add("btnDepart")
            empresas.classList.add("empresas")
            details.classList.add("detalhes")
            nome.classList.add("nomeDep")
            
            nome.innerText = data[i].name
            horario.innerText = data[i].opening_hours
            descricao.innerText = data[i].description
            ramo.innerText = data[i].sectors.description
            summary.innerText = "id para criar depart"
            h3.innerText = data[i].uuid
            button.id = data[i].uuid
            button.innerText = "departamentos"

            button.addEventListener("click", async (event) => {
                const departamento = document.querySelector(".departamento")
                departamento.innerHTML = ""
                const uuid = event.target.id
                const dep = await ApiDep.depEmpresaEspecifica(uuid)
                console.log(dep);
                RenderAdmin.renderDepartCriado(dep)
            })

            details.append(summary, h3)
            info.append(nome, ramo, horario)
            infoDesc.append(descricao)
            empresas.append(info, infoDesc, details, button)
            
            section.appendChild(empresas)
        }
        return section
    }
    
    static renderAllUsers(data) {
        const section = document.querySelector(".allUsers")
        for(let i = 0; i<data.length; i++) {

            if(data[i].department_uuid != null) {

                const empresas = document.createElement("div")
                const info = document.createElement("div")
                const nome = document.createElement("h2")
                const email = document.createElement("p")
                const infoDesc = document.createElement("div")
                const nivel = document.createElement("h3")
                const kind = document.createElement("h4")
                const demitir = document.createElement("button")
                const h2 = document.createElement("h2")
                
                empresas.classList.add("users")
                nome.classList.add("nomeFuncio")
                demitir.classList.add("btnDemitir")
                
                nome.innerText =  data[i].username
                email.innerText = data[i].email
                nivel.innerText = data[i].professional_level
                kind.innerText =  data[i].kind_of_work
                demitir.innerText = "Demitir"
                demitir.id = data[i].uuid
                h2.id = data[i].department_uuid

                demitir.addEventListener("click", async (event) => {
                    const uuid = event.target.id 
                    await ApiFuncion.dismissFuncio(uuid)
                    window.location.reload(true)
                })
                
                info.append(nome, email, nivel)
                infoDesc.append(kind, demitir)
                empresas.append(info, infoDesc)
                
                section.appendChild(empresas)
            }
        }
    }
    
    static renderInputCriarDep() {
        const form = document.querySelector(".inputsCriarDep")
        const div = document.createElement("div")
        const nome = document.createElement("input")
        const descricao = document.createElement("input")
        const uuid = document.createElement("input")
        const button = document.createElement("button")
        
        nome.type = "text"
        descricao.type = "text"
        uuid.type = "text"
        console.log(button);

        nome.classList.add("inputsCreateDep")
        descricao.classList.add("inputsCreateDep")
        uuid.classList.add("inputsCreateDep")
        div.classList.add("departments")
        button.classList.add("btnCriarDep")
        
        nome.placeholder = "Nome"
        descricao.placeholder = "Descrição"
        uuid.placeholder = "ID da empresa"
        button.innerText = "Criar Departamento"
        
        nome.id = "nomeDep"
        descricao.id = "descDep"
        uuid.id = "idDep"
        button.id = "criarDep"
        
        div.append(nome, descricao, uuid, button)
        form.appendChild(div)
        return form
    }
    
    static renderDepartCriado(data) {
        for(let i = 0; i<data.length; i++) {
            
            const divDep = document.querySelector(".departamento")
            const div1 = document.createElement("div")
            const div = document.createElement("div")
            const nome = document.createElement("h2")
            const desc = document.createElement("p")
            const btnEditar = document.createElement("button")
            const btnDelete = document.createElement("button")
            const btnFuncio = document.createElement("button")
            const details = document.createElement("details")
            const summary = document.createElement("summary")
            const h3 = document.createElement("h3")
            
            btnEditar.id = data[i].uuid
            btnDelete.id = data[i].uuid
            btnEditar.innerText = "editar"
            btnDelete.innerText = "deletar"
            summary.innerText = "id para contratar funcionário"
            h3.innerText = data[i].uuid
            btnFuncio.innerText = "funcionários"
            btnFuncio.id = data[i].uuid

            nome.classList.add("nomeDepart")
            
            div1.classList.add("divDepart")
            div.classList.add("listaDep")
            btnEditar.classList.add("btnDepartment")
            btnDelete.classList.add("btnDepartment")
            btnFuncio.classList.add("btnDepartment")
            
            btnEditar.addEventListener("click", async (event) => {
                
                const dec = document.getElementById("editDesc")
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
            
            btnFuncio.addEventListener("click", async (event) => {
                const users = document.querySelector(".allUsers")
                //const idDep = document.getElementById("data[i].department_uuid")
                //if(department_uuid == btnFuncio.id) {
                    users.innerHTML = ""
                    const funcio = await ApiFuncion.allUsers()
                    //if(btnFuncio.id == data[i].department_uuid) {
                        console.log(funcio);
                        RenderAdmin.renderAllUsers(funcio)

                    //} 
                //}
            })
            nome.innerText = data[i].name
            desc.innerText = data[i].description
            
            details.append(summary, h3)
            div.append(nome, desc, btnEditar, btnDelete, btnFuncio)
            div1.append(div, details)
            divDep.append(div1)
            //return divDep
        }
    }

    static renderHireInputs() {
        const div = document.querySelector(".hireInputs")
        const form = document.createElement("form")
        const idFuncio = document.createElement("input")
        const idDep = document.createElement("input")
        const btnHire = document.createElement("button")

        idFuncio.type = "text"
        idDep.type = "text"

        idFuncio.classList.add("inputsHire")
        idDep.classList.add("inputsHire")
        btnHire.classList.add("btnHire")

        idFuncio.id = "idFuncio"
        btnHire.innerText = "Contratar"

        
        form.classList.add("formHire")

        btnHire.addEventListener("click", async (event) => {
            event.preventDefault()

            const data = {
                user_uuid: idFuncio.value,
                department_uuid: idDep.value,
            }
    
            await ApiFuncion.hireFuncio(data)
            window.location.reload(true)
        })

        /*btnDismiss.addEventListener("click", async (event) => {
            event.preventDefault()

            const id = event.target.id
            await ApiFuncion.dismissFuncio(id)
        })*/
        
        idFuncio.placeholder = "Digite o id do usuário"
        idDep.placeholder = "Digite o id do departamento"

        form.append(idFuncio, idDep, btnHire)
        div.appendChild(form)

        return div
    }

    static renderDismissInputs() {
        const div = document.querySelector(".dismissInputs")
        const form = document.createElement("form")
        const label = document.createElement("label")
        const idFuncio = document.createElement("input")
        const btnDismiss = document.createElement("button")

        label.innerText = "Demitir Funcionário"
        idFuncio.type = "text"
        idDep.type = "text"

        idFuncio.id = "idFuncio"
        btnHire.innerText = "Contratar"
        btnDismiss.innerText = "Demitir"
        
        
        btnHire.addEventListener("click", async (event) => {
            event.preventDefault()

            const data = {
                user_uuid: idFuncio.value,
                department_uuid: idDep.value,
            }
    
            await ApiFuncion.hireFuncio(data)
            window.location.reload(true)
        })
        
        idFuncio.placeholder = "Digite o id do usuário"
        idDep.placeholder = "Digite o id do departamento"

        form.append(label, idFuncio, idDep, btnHire, btnDismiss)
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
            
            empresas.classList.add("semDep")
            details.classList.add("detalhes")
            nome.classList.add("nomeSemDep")
            
            nome.innerText =  data[i].username
            email.innerText = data[i].email
            nivel.innerText = data[i].professional_level
            kind.innerText =  data[i].kind_of_work
            summary.innerText = "id para contratar"
            h3.innerText = data[i].uuid

            details.append(summary, h3)
            info.append(nome, email, nivel)
            infoDesc.append(kind)
            empresas.append(info, infoDesc, details)
            
            section.appendChild(empresas)
        }
    }
}

RenderAdmin.renderInputCriarEmpresa()
RenderAdmin.renderInputCriarDep()
RenderAdmin.renderHireInputs()