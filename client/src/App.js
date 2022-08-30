
import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/:id" element={<Detail />} />
          <Route exact path="/:id/edit" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
