module.importByPath(`https://cdn.rawgit.com/anliting/webvim/${
    '601147090dd0c85347d5f3e252114d1106f3ec66'
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
    div.style.zIndex='3'
    div.addEventListener('click',()=>{
        vim.focus()
    })
    vim.width=80
    vim.height=24
    div.appendChild(vim.node)
    return div
}
