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
    buttonCol.className = 'col text-end'
    var button = document.createElement('button')
    button.className = 'btn btn-danger'
    button.addEventListener('click',  () => listTile.remove())
    const icon = document.createElement('i')
    icon.className = 'fa-solid fa-trash'
    
    button.append(icon)
    buttonCol.append(button)
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

