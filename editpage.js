if(this.setUp)
    main(this)
else
    this.on('setUp',()=>main(this))
function main(editpage){
    if(editpage.isMobile)
        return
    module.importByPath('plugins/althea-webvim/setUpVim.js',{mode:1}).then(setUpVim=>{
        setUpVim(editpage.textarea_content)
    })
}
