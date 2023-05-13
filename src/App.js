import "./App.css"
import {Routes,Route} from "react-router-dom"
import QuizApp from "./components/QuizApp";
import QuizStart from "./components/QuizStart";
import QuizEnd from "./components/QuizEnd";
import ResultPage from "./components/ResultPage";
import AppContextProvider from "./context/AppContext";


function App() {
  return (
    <AppContextProvider
    value={{
      
    }}
    >
    <>
      <Routes>
        <Route exact path="/" Component={QuizApp} />
        <Route exact path="/quizstart" Component={QuizStart} render= {(props)=>window.location.reload()}/>
        <Route exact path="/quizend" Component={QuizEnd}/>
        <Route exact path="/results" Component={ResultPage}/>
      </Routes>
    </>
    </AppContextProvider>
  );
}

export default App;
