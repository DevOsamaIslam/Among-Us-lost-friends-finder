import './App.css'
import Table from './Component/Table'
import Container from '@material-ui/core/Container'
import Accordion from './Component/Accordion';
import Navbar from './Component/Navbar';
import Box from '@material-ui/core/Box';
import Copyright from './Component/Copyright';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

function App() {
  const theme = createMuiTheme ({
    palette: {
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <paper>
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
    </paper>
    </ThemeProvider>

  )
}

export default App
