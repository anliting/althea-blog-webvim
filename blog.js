let setUpVim=
    module.importByPath('plugins/althea-webvim/setUpVim.js',{mode:1})
this.on('pageLoad',async page=>{
    let ct=page.textarea_comment__form_comment
    ct.addEventListener('focus',()=>
        ct.placeholder='Ctrl+Shift+V to enable Vim.'
    )
    setUpVim=await setUpVim
    setUpVim(ct)
})
