import { Home } from "lucide-react";
import { BrowserRouter,Route,Router, Routes} from "react-router-dom";
import { NotFound } from "./pages/notfound";

function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
          <Route index element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
   
    
    </BrowserRouter>
    </>
  );
  }
export default App;