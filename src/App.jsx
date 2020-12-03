import './App.css'
import Table from './Component/Table'
import Container from '@material-ui/core/Container'
import TextField from './Component/TextField'
import DateTime from './Component/DateTime'
import SharingInfo from './Component/SharingInfo'
import UploadPhoto from './Component/UploadPhoto'
import Submit from './Component/Submit'

function App() {
  return (
    <div>
      <Container className="p-0" fluid={true}>
        <TextField/>
        <SharingInfo/>
        <DateTime/>
        <UploadPhoto/>
        <Submit/>
        <Table/>
      </Container>
    </div>
  )
}

export default App
