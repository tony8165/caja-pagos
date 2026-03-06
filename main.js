const { app, BrowserWindow } = require("electron");
const path = require("path");

/* Creado by truizc8165@gmail.com */

function createWindow() {
  const win = new BrowserWindow({
    width: 420,
    height: 720,
    resizable: false,
    autoHideMenuBar: true,
    icon: path.join(__dirname, "icono.ico")
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);
