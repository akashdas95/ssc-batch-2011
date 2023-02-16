 import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from './Form';
import List from './List';
import Signin from "./Signin";
import Signup from "./Signup";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/add" element={<Form/>}/>
          {/* <Route path="/edit/:id" element={<Update/>}/> */}
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App;
