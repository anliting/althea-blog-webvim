import{load}from'/lib/core.static.js'
import setUpVim from './setUpVim.js'
export default async blog=>{
    blog.on('pageLoad',async page=>{
        let ct=page.textarea_comment__form_comment
        ct.addEventListener('focus',()=>
            ct.placeholder='Ctrl+Shift+V to enable Vim.'
        )
        setUpVim(ct)
    })
}
