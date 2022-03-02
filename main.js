// npm modules
const { app, BrowserWindow } = require('electron');

// set node env
process.env.NODE_ENV = 'development';

const isEnvDev = process.env.NODE_ENV !== 'production' ? true : false;
let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    title: 'Image Shrink',
    width: 500,
    height: 600,
    icon: `${__dirname}/assets/icons/Icon_256x256.png`,
  });

  // protocols required
  //   mainWindow.loadURL(`file://${__dirname}/app/index.html`);

  // protocools not required
  mainWindow.loadFile('./app/index.html');
}

app.on('ready', createMainWindow);
