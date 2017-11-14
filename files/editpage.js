import{load}from'/lib/core.static.js'
export default async editpage=>{
    let module=await load.module()
    let setUpVim=await module.importByPath('plugins/webvim/setUpVim.js',{mode:1})
    if(editpage.setUp)
        main()
    else
        editpage.on('setUp',main)
    function main(){
        if(editpage.isMobile)
            return
        setUpVim(editpage.textarea_content)
    }
}