import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile(path.join(__dirname, 'index.html'))
    // win.webContents.openDevTools();
}

app.whenReady().then(() => {
    ipcMain.handle('ping', () => 'pong')
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})