import { Suspense } from "react";
import "./App.css";
import Website from "./pages/Website";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Properties from "./pages/Properties/Properties";


function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>

            <Route path="/" element={<Website />} />
            <Route path='/properties' element={<Properties />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
