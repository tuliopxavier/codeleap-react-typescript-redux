import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { SignUpPage } from './pages/SignUpPage';
import { GlobalStyle } from './globalstyles';

function App() {

  return (
    <BrowserRouter>
    <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
