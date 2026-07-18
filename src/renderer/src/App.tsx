import { Header } from "./components/Header/Header"
import { pullRepoData, readDataRepo } from "./ipcService"

function App(): React.JSX.Element {
  
  // const pullTest = async () => {

  //   pullRepoData().then(()=>{
  //     console.log("success pulling data")
  //   }).catch(()=>{console.log("failed pulling repo data")})

  // }

  // const readDataRepoBtn = async () => {
  //   console.log(await readDataRepo([]))
  // }

  return (
    <Header/>
  )
}

export default App
