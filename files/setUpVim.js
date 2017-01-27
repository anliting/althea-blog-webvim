module.importByPath(`https://cdn.rawgit.com/anliting/webvim/${
    '2a70e3d3e2a8b7873cd3b6131e6aa45f138ce78a'
}/src/Vim.js`,{mode:1}).then(Vim=>{
    return setUpVim
    function setUpVim(textarea){
        let
            vim=new Vim,
            viewDiv=createViewDiv(vim)
        textarea.addEventListener('keydown',e=>{
            if(!(e.ctrlKey&&e.shiftKey&&e.key=='V'))
                return
            e.preventDefault()
            e.stopPropagation()
            vim.text=textarea.value
            vim._cursor.moveTo(textarea.selectionStart)
            document.head.appendChild(vim.style)
            document.body.appendChild(viewDiv)
            vim.focus()
        })
        vim.on('quit',e=>{
            document.head.removeChild(vim.style)
            document.body.removeChild(viewDiv)
            textarea.focus()
        })
        vim.on('write',e=>{
            textarea.value=vim.text
            textarea.selectionStart=textarea.selectionEnd=vim._cursor.abs
        })
    }
})
function createViewDiv(vim){
    let div=document.createElement('div')
    div.style.position='fixed'
    div.style.left='50%'
    div.style.top='50%'
    div.style.transform='translate(-50%,-50%)'
    div.style.width='min-content'
    div.style.border='1px solid lightgray'
    div.style.backgroundColor='white'
    div.addEventListener('click',()=>{
        vim.focus()
    })
    vim.width=80
    vim.height=24
    div.appendChild(vim.node)
    return div
}
