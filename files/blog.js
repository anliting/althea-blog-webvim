import{load}from'/lib/core.static.js'
export default async blog=>{
    let module=await load.module()
    let setUpVim=
        module.importByPath('plugins/webvim/setUpVim.js',{mode:1})
    blog.on('pageLoad',async page=>{
        let ct=page.textarea_comment__form_comment
        ct.addEventListener('focus',()=>
            ct.placeholder='Ctrl+Shift+V to enable Vim.'
        )
        setUpVim=await setUpVim
        setUpVim(ct)
    })
}
