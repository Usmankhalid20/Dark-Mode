import "./App.css";
import Cards from "./components/Cards";
import Themebtn from "./components/Themebtn";
import { ThemeProvider } from "./Context/Theme";
import {useState, useEffect} from 'react'

function App() {

  const [themeMode, setThemeMode] = useState("light")

  const lightMode = () => {
    setThemeMode("light")
  }
  const darkMode = () => {
    setThemeMode("dark")
  }

  // autual change in them
  useEffect(() => {
   document.querySelector('html').classList.remove("light", "dark");
   document.querySelector("html").classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode, lightMode, darkMode}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          {/* theme btn */}
          <Themebtn />
        </div>

        <div className="w-full max-w-sm mx-auto">
          {/* cards */}
          <Cards />
        </div>
      </div>
    </div> 
    </ThemeProvider>
  );
}

export default App;
