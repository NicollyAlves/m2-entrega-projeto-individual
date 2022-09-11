export class ShowModal {
    static show() {
        const abrir = document.getElementById("hamburguer")
        abrir.addEventListener("click", () => {
            let toggleMenu = document.getElementById("navegador")
            toggleMenu.classList.toggle("listas")
        })
        
        abrir.addEventListener("click", () => {
            let toggle = document.getElementById("navegador")
            abrir.classList.toggle("active")
            toggle.classList.toggle("filters")                
        })
    }
    
    static showMinWidth() {
            let toggleMenu = document.getElementById("navegador")
            let toggle = document.getElementById("navegador")
            toggleMenu.classList.toggle("listas")
            toggle.classList.toggle("filters") 
        }
    }

ShowModal.showMinWidth()
ShowModal.show()
