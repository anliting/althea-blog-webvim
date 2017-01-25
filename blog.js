let setUpVim=
    module.importByPath('plugins/althea-vimontheweb/setUpVim.js',{mode:1})
this.on('pageLoad',page=>{
    page.textarea_comment__form_comment.addEventListener('focus',()=>{
        page.textarea_comment__form_comment.placeholder=
            'Ctrl+Shift+V to enable/disable Vim.'
        setUpVim.then(setUpVim=>
            setUpVim(page.textarea_comment__form_comment)
        )
    })
})
