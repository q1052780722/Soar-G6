SOAR-G6-web
版本： nodejs:16.16.0 vuecli:2.6.10 vue-router: 3.1.3

项目前提需求：
安装nodejs vue-cli yarn或者npm 推荐yarn

第一次启动流程：
yarn install

yarn serve

路由
/ : vue默认欢迎界面 /edit:G6编辑器

相关问题
由于项目demo采用了axios进行服务请求，所以会出现网络连接错误，请无视。 相关代码在src/componets/Toolbar/index.vue：546