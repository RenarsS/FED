import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Quiz from "./Quiz";
import {Container, createTheme, ThemeProvider} from "@mui/material";


const theme = createTheme({
    palette: {
        primary: {
            main: '#353535',
        },
    },
});

function App() {

  const [data, setData] = useState("");


  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=10&category=19&type=multiple")
        .then(response => response.data.results)
        .then(result => {
          setData(result);
        })

  }, []);

  console.log(data)
  return (
    <ThemeProvider theme={theme}>
        <Container>
            <div className={"App"}>
                <Quiz questions={data}/>
            </div>
        </Container>
    </ThemeProvider>
  );
}

export default App;
