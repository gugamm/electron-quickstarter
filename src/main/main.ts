import { app, BrowserWindow } from 'electron'
import url from 'url'
import path from 'path'

let mainWindow: BrowserWindow | null = null

/*
const installExtensions = async () => {
  const installer = require('electron-devtools-installer')
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS
  const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS']

  return Promise.all(
    extensions.map(name => installer.default(installer[name], forceDownload))
  ).catch(console.log)
}
*/

const createMainWindow = async (): Promise<BrowserWindow> => {
  if (process.env.NODE_ENV !== 'production') {
    // await installExtensions()
  }

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  if (process.env.NODE_ENV !== 'production') {
    process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1'
    mainWindow.loadURL('http://localhost:2000')
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
      })
    )
  }


  if (process.env.NODE_ENV !== 'production') {
    mainWindow.webContents.once('dom-ready', () => {
      mainWindow?.webContents.openDevTools()
    })
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  return mainWindow
}

app.whenReady().then(createMainWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createMainWindow()
  }
})
