const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
//  transpileDependencies: true
outputDir: "C:/Users/chyoi/git/bizweb/src/main/resources/static",// vue 프로젝트가 빌드될 경로
devServer: {
port: 18082,// vue 포트
proxy: 'http://localhost:18080',// springboot 포트
//disableHostCheck: true// 해당 설정을 하지않으면 springboot로 요청시 Invalid Host header 에러를 맞이하게 된다.
headers: { 'Content-Type': 'application/json; charset=UTF-8' }
},
/*  allowedHosts: [
'host1.example.com',
'host2.example.com',
// Add more hosts as needed
  ],*/
})