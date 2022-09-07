export class HomePage {
    static renderButtons(data) {
        const filtersContainer = document.querySelector(".filtersContainer")
        for(let i = 0; i<data.length; i++) {
            const button = document.createElement("button")
            button.id = data[i].sectors.uuid
            button.innerText = data[i].sectors.description
        }
        filtersContainer.appendChild(button)
    }
}