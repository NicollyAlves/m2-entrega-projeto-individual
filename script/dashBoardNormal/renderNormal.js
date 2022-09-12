import { ApiNormal } from "../API/normal.js"
export class RenderNormal {

    static renderOwnCompany(data) {
        const nav = document.querySelector(".ownCompany")
        const princ = document.createElement("div")
        const nome = document.createElement("h2")
        const horario = document.createElement("h3")
        const description = document.createElement("div")
        const textDesc = document.createElement("h3")
        
        description.classList.add("descriptionCompany")
        princ.classList.add("princip")

        nome.innerText = data.name
        horario.innerText = data.opening_hours
        textDesc.innerText = data.description

        description.append(textDesc)
        princ.append(nome, horario)
        nav.append(princ, description)

        return nav
    }

    static renderDep(data) {
        const div = document.querySelector(".ownDep")
        const h3 = document.createElement("h3")
        const h4 = document.createElement("h4")
        h3.innerText = data[0].name
        h4.innerText = data[0].description

        div.append(h3, h4)

        return div
    }

    static renderFormEditar() {
        const div = document.querySelector(".inputsEditar")
        const form = document.createElement("form")
        const nome = document.createElement("input")
        const email = document.createElement("input")
        const pass = document.createElement("input")

        nome.classList.add("input")
        email.classList.add("input")
        pass.classList.add("input")

        nome.id = "nomeEditar"
        email.id = "emailEditar"
        pass.id = "passEditar"

        nome.type = "text"
        email.type = "email"
        pass.type = "password"

        nome.placeholder = "Digite um novo nome"
        email.placeholder = "Digite um novo e-mail"
        pass.placeholder = "Digite uma nova senha"

        form.append(nome, email, pass)
        div.appendChild(form)

        return div
    }
    
    static renderFuncion(data) {
        const listaSection = document.querySelector(".listaFuncionarios")
        for(let i = 0; i<data[0].users.length; i++) {
            console.log(data);
            const lista = document.createElement("div")
            const infos = document.createElement("div")
            const nome = document.createElement("h2")
            const nivel = document.createElement("h2")
            const divEmail = document.createElement("div")
            const email = document.createElement("h3")

            lista.classList.add("listaFuncio")

            nome.innerText = `Nome: ${data[0].users[i].username}`
            nivel.innerText = `Nível profissional: ${data[0].users[i].professional_level}`
            email.innerText = `Email: ${data[0].users[i].email}`

            divEmail.append(email)
            infos.append(nome, nivel)
            lista.append(infos, divEmail)
            
            listaSection.appendChild(lista)
        }
    }

    static renderInfos(data) {
        console.log(data);
        const nav = document.querySelector(".infoFuncio")
        const div = document.createElement("div")
        const nome = document.createElement("h2")
        const email = document.createElement("h3")
        const nivel = document.createElement("h3")
        const button = document.createElement("button")

        button.classList.add("editar")

        nome.innerText = `Nome: ${data.username}`
        email.innerText = `Email: ${data.email}`
        nivel.innerText = `Nível profissional: ${data.professional_level}`
        button.innerText = "Editar"

        button.id = data.uuid

        button.addEventListener("click", async () => {
            const nome = document.getElementById("nomeEditar")
            const email = document.getElementById("emailEditar")
            const pass = document.getElementById("passEditar")

            const data = {
                username: nome.value,
                email: email.value,
                password: pass.value
            }

            await ApiNormal.editarInfos(data)
            window.location.reload(true)
        })

        div.append(nome, email, nivel, button)
        nav.appendChild(div)
        return nav
    }
}

RenderNormal.renderFormEditar()