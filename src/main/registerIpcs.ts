import { ipcMain, BrowserWindow } from "electron"
import {pullRemoteChanges} from "./noteReaderService"

export const registerIpcs = (mainWindow : BrowserWindow) => {

    const pullRepoDataHandler = async () => {
        const response = await pullRemoteChanges()
        mainWindow.webContents.send("pullRepoDataResponse", response)
    }

  ipcMain.on("pullRepoData", pullRepoDataHandler)

}