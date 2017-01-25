let setUpVim=module.importByPath('plugins/althea-vimontheweb/setUpVim.js',{mode:1})
this.on('pageLoad',page=>{
    page.textarea_comment__form_comment.addEventListener('focus',()=>{
        page.textarea_comment__form_comment.placeholder=
            'Ctrl+Shift+V to enable/disable Vim.'
        setUpVim.then(setUpVim=>
            setUpVim(page.textarea_comment__form_comment)
        )
    })
})
/*vim.afterkeydown_textarea=
vim.afterinput_textarea=()=>{
    vim.textarea.rows=Math.max(
        2,vim.textarea.value.split('\n').length
    )
}*/
/*Promise.all([
    module.scriptByPath('https://cdn.rawgit.com/anliting/vimontheweb/42158900a84a07fe6a850a4b5096131f99e9e5f4/Vim.js'),
    module.scriptByPath('https://cdn.rawgit.com/sytelus/CryptoJS/7fbfbbee0d005b31746bc5858c70c359e98308e5/rollups/aes.js'),
]).then(()=>{
    let vim=new Vim
    vim.setup(textarea)
})*/
