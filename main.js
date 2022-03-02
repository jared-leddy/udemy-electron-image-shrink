// npm modules
const { app, BrowserWindow } = require('electron');

// set node env
process.env.NODE_ENV = 'development';

const isEnvDev = process.env.NODE_ENV !== 'production' ? true : false;
const isPlatformMac = process.platform !== 'darwin' ? true : false;

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    title: 'Image Shrink',
    width: isEnvDev ? 1200 : 500,
    height: isEnvDev ? 1000 : 600,
    icon: `${__dirname}/assets/icons/Icon_256x256.png`,
    resizable: isEnvDev,
  });

  // protocols required
  //   mainWindow.loadURL(`file://${__dirname}/app/index.html`);

  // protocools not required
  mainWindow.loadFile('./app/index.html');
}

app.on('ready', createMainWindow);
