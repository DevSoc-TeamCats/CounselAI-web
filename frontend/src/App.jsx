import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//layouts
import RootLayout from "./layouts/RootLayout";
//pages
import Home from "../src/pages/Home";
import Results from "../src/pages/Results";
import DataVisual from '../src/pages/DataVisual';
import Login from "./layouts/Login";



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(

      <>
        <Route element={<RootLayout/>}> 
          <Route element={<Home/>} path="/"></Route>
          <Route element={<Results/>} path="/route"></Route>
          <Route element={<DataVisual/>} path="/"></Route>
        </Route>
        <Route element={<Login/>} path="/login" ></Route>
        <Route element ={<Results/>} path="/results" ></Route>
      
      </>

    )
  )


  return <>
  
        <RouterProvider router = {router}></RouterProvider>
  </>;
}

export default App;
