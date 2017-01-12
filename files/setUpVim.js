module.importByPath('https://cdn.rawgit.com/anliting/webvim/806c92536ca29e52ca676117c2a51bcf576e7077/src/Vim.js',{mode:1}).then(Vim=>{
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
            document.head.appendChild(Vim.style)
            document.body.appendChild(viewDiv)
            vim.focus()
        })
        vim.on('quit',e=>{
            document.head.removeChild(Vim.style)
            document.body.removeChild(viewDiv)
            textarea.focus()
        })
        vim.on('write',e=>{
            textarea.value=vim.text
        })
    }
})
function createViewDiv(vim){
    let div=document.createElement('div')
    div.style.position='fixed'
    div.style.top='50%'
    div.style.left='50%'
    div.style.webkitTransform='translateY(-50%) translateX(-50%)'
    div.style.width='min-content'
    div.style.border='1px solid lightgray'
    div.style.backgroundColor='white'
    div.addEventListener('click',()=>{
        vim.focus()
    })
    vim.width=80
    vim.height=24
    div.appendChild(vim.div)
    return div
}
