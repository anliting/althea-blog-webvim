import setUpVim from './setUpVim.js'
export default async editpage=>{
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
