import { pullRepoData } from "./ipcService"

function App(): React.JSX.Element {
  
  const pullTest = async () => {

    pullRepoData().then(()=>{
      console.log("success pulling data")
    }).catch(()=>{console.log("failed pulling repo data")})

  }

  return (
    <button onClick={()=>{
      pullTest()
    }}>initial stuff</button>
  )
}

export default App
