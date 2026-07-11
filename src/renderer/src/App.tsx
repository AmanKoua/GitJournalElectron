function App(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('pullRepoData')
  window.electron.ipcRenderer.on("pullRepoDataResponse", (_, data) => {console.log(data)})

  return (
    <button onClick={()=>{
      ipcHandle()
      console.log("lmao")
    }}>initial stuff</button>
  )
}

export default App
