import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { SignUpPage } from './pages/SignUpPage';
import { GlobalStyles } from './globalStyles';
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
  
  const username = useSelector((state: RootState) => state.username.value);

  return (
    
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={username ? <MainPage /> : <Navigate to='/signup'/>} />
          <Route path="/signup" element={!username ? <SignUpPage /> : <Navigate to='/'/>} />
        </Routes>
      </BrowserRouter>
    
  )
}

export default App
