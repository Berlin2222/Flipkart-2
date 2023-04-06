import './App.css';
import Header from './component/header';
import { Home } from './component/Home/Home';
import {Box} from "@mui/material";


function App() {
  return (
    <div>
      <Header />
      <Box style={{ marginTop: "55px" }}>
        <Home />
      </Box>
    </div>
  );
}

export default App;
