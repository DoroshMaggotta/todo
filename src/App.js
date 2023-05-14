
import './App.css';
import InputField from "./components/InputField";
import MyList from "./components/List";
import {useState} from "react";
import {Container} from "@mui/material";

function App() {
    const [tasks, changeTasks] = useState([]);
    const handleData = (data) => {
        changeTasks([...tasks, data]);
    };

  return (
    <div className="App">
        <Container maxWidth="xs">
            <InputField onData={handleData} />
            <MyList tasks={tasks} setTasks={changeTasks} />
        </Container>
    </div>
  );
}

export default App;
