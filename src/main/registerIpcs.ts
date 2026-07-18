import { ipcMain, BrowserWindow } from "electron"
import {pullRemoteChanges, readDataRepo} from "./noteReaderService"

export const registerIpcs = (mainWindow : BrowserWindow) => {

  const pullRepoDataHandler = async () => {
      const response = await pullRemoteChanges()
      mainWindow.webContents.send("pullRepoDataResponse", response)
  }

  const readDataRepoHandler = (_, subPath: any) => {
      const data = readDataRepo(subPath);
      mainWindow.webContents.send("readDataRepoResponse", data)
  }

  ipcMain.on("pullRepoData", pullRepoDataHandler)
  ipcMain.on("readDataRepo", readDataRepoHandler)

}