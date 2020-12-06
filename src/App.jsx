import './App.css'
import Table from './Component/Table'
import Container from '@material-ui/core/Container'
import Accordion from './Component/Accordion';
import Navbar from './Component/Navbar';
import Box from '@material-ui/core/Box';
import Copyright from './Component/Copyright';

function App() {
  return (
    <div>
      <Container maxWidth="fixed" fluid={true}>
          <Navbar/>
          <br></br>
          <Accordion/>
          <br></br>
          <Table/>
          <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    </div>
  )
}

export default App
