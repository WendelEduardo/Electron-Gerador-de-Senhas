const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', ()=> {

  mainWindow = new BrowserWindow({
    width:400,
    height:400,
    resizable:false
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`)
});