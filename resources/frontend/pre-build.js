var config = require('dotenv').config({path: '../../.env'});
var appHost = config.parsed.APP_URL_FRONT == undefined ? '' : config.parsed.APP_URL_FRONT;
var appProduction = config.parsed.APP_ENV == 'production';
var fs = require('fs');
fs.writeFile('./src/environments/environment.local.ts', `export const environment = {
  production: ${appProduction},
  APP_URL: "${appHost}",
}`, (err, fd) => {
  if(err){
    console.error('Não foi possível definir as environments')
  }
});
