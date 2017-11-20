let
    rollup=require('rollup'),
    skip=[
        '/lib/core.static.js',
    ]
async function link(input,file){
    let bundle=await rollup.rollup({
        input,
        external:s=>skip.includes(s),
    })
    await bundle.write({
        file,
        format:'es',
        paths:s=>skip.includes(s)&&s,
    })
}
;(async()=>{
    await link(`files/blog.js`,`files/blog.static.js`)
    await link(`files/editpage.js`,`files/editpage.static.js`)
})()

