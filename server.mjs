function Plugin(althea){
    althea.setClientModules({
        blog:       'blog.static.js',
        editpage:   'editpage.static.js',
    })
}
Plugin.prototype.end=function(){
}
Plugin.prototype.shutdownEnd=function(){
}
export default Plugin
