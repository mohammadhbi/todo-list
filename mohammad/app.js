const formEL = document.querySelector("form")
const todosEL = document.querySelector(".list")


formEL.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputEL = document.querySelector("input")
    const inputValue = inputEL.value

    if(!inputValue) return alert("your input is empty ")


    createTodo(inputValue)

    formEL.reset();
})
function createTodo(todo) {
    const containerEL = document.createElement("div")
    const inputEL = document.createElement("input")
    const paragraphEL = document.createElement("p")
    const buttonEL = document.createElement("button")

    inputEL.type = "checkbox"

    paragraphEL.textContent = todo


    buttonEL.textContent = '-'

    containerEL.append(inputEL, paragraphEL, buttonEL)
    containerEL.classList.add("todoList1")

    todosEL.appendChild(containerEL)
}
