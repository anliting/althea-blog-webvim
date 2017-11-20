import { load } from '/lib/core.static.js';

let loadVim=async()=>{
    let module=await load.module();
    return module.moduleByPath('https://gitcdn.link/cdn/anliting/webvim/91a954056b79fa6b931d419098dd72bd096131fc/src/Vim.static.js')
};
function setUpVim(textarea){
    textarea.addEventListener('keydown',e=>{
        if(!(e.ctrlKey&&e.shiftKey&&e.key=='V'))
            return
        e.preventDefault();
        e.stopPropagation();
        load$1(textarea,e);
    });
}
async function load$1(textarea,e){
    if(typeof loadVim=='function')
        loadVim=loadVim();
    textarea.disabled=true;
    let Vim=await loadVim;
    let vim=new Vim(p=>{
        if(p=='~/.vimrc')
            return localStorage.webvimVimrc
    }),viewDiv=createViewDiv(vim);
    vim.text=textarea.value;
    vim._cursor.moveTo(textarea.selectionStart);
    document.head.appendChild(vim.style);
    document.body.appendChild(viewDiv);
    vim.focus();
    vim.on('quit',e=>{
        document.head.removeChild(vim.style);
        document.body.removeChild(viewDiv);
        textarea.disabled=false;
        textarea.focus();
    });
    vim.write=p=>{
        if(p==undefined){
            textarea.value=vim.text;
            textarea.selectionStart=textarea.selectionEnd=
                vim.cursor;
        }else if(p=='~/.vimrc')
            localStorage.webvimVimrc=vim.text;
    };
}
function createViewDiv(vim){
    let div=document.createElement('div');
    div.style.position='fixed';
    div.style.left='50%';
    div.style.top='50%';
    div.style.transform='translate(-50%,-50%)';
    div.style.width='min-content';
    div.style.zIndex='3';
    div.addEventListener('click',()=>{
        vim.focus();
    });
    vim.width=80;
    vim.height=24;
    div.appendChild(vim.node);
    return div
}

var blog = async blog=>{
    blog.on('pageLoad',async page=>{
        let ct=page.textarea_comment__form_comment;
        ct.addEventListener('focus',()=>
            ct.placeholder='Ctrl+Shift+V to enable Vim.'
        );
        setUpVim(ct);
    });
};

export default blog;
