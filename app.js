// const http = require('http');
// http.createServer((request,response)=>{
//     response.write('hah');
//     response.end();
// }).listen(9000);
// const http = require('http');
const fs = require('fs');
const url = require('url');

GetUrl('http://www.clevaly.com/liyou/images/1.jpg',data=>{
    // console.log(data);
    fs.writeFile('22.jpg',data,()=>{
        console.log('可以了');
    });
});
function GetUrl(sUrl,success){
    var urlObj = url.parse(sUrl);
    var http = '';
    if(urlObj.protocol == 'http:'){
         http = require('http');
    }else{
         http = require('https');
    }
    let req = http.request({
        'hostname':urlObj.hostname,
        'path':urlObj.path
    },res=>{
        // console.log(1);
        var arr = [];
        res.on('data',buffer=>{
            arr.push(buffer);
        });
        res.on('end',()=>{
            let b = Buffer.concat(arr);
            success && success(b);
        });
    });
    req.end();
    // req.on('error');
}
// let req = http.request({
//     // 'hostname':'nodejs.cn',
//     // 'path':'/download/'  
//     'hostname':'www.clevaly.com',  //域名 
//     'path':'/liyou/images/1.jpg'  
// },res=>{
//     var arr = [];
//     var str = ''; 
//     res.on('data',buffer=>{
//         arr.push(buffer);
//         str+=buffer
//     });
//     res.on('end',()=>{
//         // console.log(arr,str);
//         // fs.writeFile('download.html',arr,'utf8');
//         // console.log(Buffer)
//         var b = Buffer.concat(arr);
//         fs.writeFile('hah.jpg',b,()=>{
//             console.log('成功');
//         });
//     })
    // console.log(res);
    // console.log(1);
// });
// req.end();