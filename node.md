Set-ExecutionPolicy -ExecutionPolicy AllSigned -Scope CurrentUser 
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process

npm i -g @nestjs/cli
npm i --save @nestjs/mongoose mongoose
npm i --save hbs
npm i --save @nestjs/config

#for chat

$ npm i @nestjs/platform-socket.io @nestjs/websockets
$ npm i --save-dev @types/socket.io

$ npm i -D @types/multer

$ npm i sweetalert2



nest g controller Home



nest g module TimeLine

npm run start:dev


//deploy

npm run build --prod
copy project => server
npm i

//config iis

create new website => add rewrite: Pattern: [(.*)], rewrite: [http://localhost:3000/{R:1}] 
make sure restart website iis

pm2 ecosystem

pm2 start ecosystem.config.js


//pm2 deploy production setup
//pm2 deploy production update

#Microservices
npm i --save @nestjs/microservices
