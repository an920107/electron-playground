// const information = document.getElementById('info')

// if (information != null) {
//     // @ts-expect-error
//     information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`
// } else {
//     console.log("info is null")
// }

// const func = async () => {
//     // @ts-expect-error
//     const response = await versions.ping()
//     console.log(response) // prints out 'pong'
// }

// func()

var todoListView = document.getElementById('todoListView')
var todoInput = document.getElementById('todoInput') as HTMLInputElement
var todoButton = document.getElementById('todoButton')

const wrapWithPS2 = (element: HTMLElement) => {
    const div = document.createElement('div')
    div.className = 'ps-2'
    div.append(element)
    return div
}

const toggleInput = (element: HTMLDivElement) => {
    if (element.children.length == 0) {
        const input = document.createElement('input')
        input.type = 'text'
        input.className = 'form-control'
        input.value = element.innerText
        input.addEventListener('keypress', (event) => {
            if (event.key == 'Enter') {
                toggleInput(element)
            }
        })
        element.innerText = ''
        element.append(input)
    } else {
        const input = element.getElementsByTagName('input')[0]
        const text = input.value
        input.remove()
        element.innerText = text
    }
}

const buildListTile = (text: string) => {
    const listTile = document.createElement('div')
    listTile.className = 'col-12 py-1'
    const card = document.createElement('div')
    card.className = 'card'
    const cardBody = document.createElement('div')
    cardBody.className = 'card-body'
    const blockquote = document.createElement('blockquote')
    blockquote.className = 'blockquote mb-0'
    const row = document.createElement('div')
    row.className = 'row'
    const textCol = document.createElement('div')
    textCol.className = 'col'
    const buttonCol = document.createElement('div')
    buttonCol.className = 'col-auto d-flex flex-row-reverse'
    var editButton = document.createElement('button')
    editButton.className = 'btn btn-secondary'
    const editIcon = document.createElement('i')
    editIcon.className = 'fa-solid fa-pen-to-square'
    var deleteButton = document.createElement('button')
    deleteButton.className = 'btn btn-danger'
    const deleteIcon = document.createElement('i')
    deleteIcon.className = 'fa-solid fa-trash'

    editButton.append(editIcon)
    editButton.addEventListener('click', () => toggleInput(textCol))
    deleteButton.append(deleteIcon)
    deleteButton.addEventListener('click', () => listTile.remove())
    buttonCol.append(wrapWithPS2(deleteButton), wrapWithPS2(editButton))
    textCol.textContent = text
    row.append(textCol, buttonCol)
    blockquote.append(row)
    cardBody.append(blockquote)
    card.append(cardBody)
    listTile.append(card)

    return listTile
}


const submit = () => {
    todoListView?.append(buildListTile(todoInput?.value))
    todoInput.value = ''
    todoInput.focus()
}

todoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') submit()
})

todoButton?.addEventListener('click', submit)

