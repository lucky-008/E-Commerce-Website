import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './responsive.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import { useState, createContext, useEffect ,useRef } from "react";
import Login from './pages/Login'; // Correct import
import SignUp from "./pages/SignUp";
import ProductDetails from "./pages/productDetails";
import ProductUpload from "./pages/ProductUpload";
import CategoryAdd from "./pages/CategoryAdd";
import Category from "./pages/Category";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";

import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


const MyContext = createContext();

function App() {
  // States for handling sidebar, login, header visibility, and theme mode
  const [isToggleSidebar, setisToggleSidebar] = useState(false);
  const [isLogin, setisLogin] = useState(false);
  const [isHideSidebarAndHeader, setisHideSidebarAndHeader] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpenNav, setisOpenNav] = useState(false);  
  const [alertBox,setAlertBox] = useState({
    msg:'',
    error:false,
    open:false
  })
  
 

  const [progress, setProgress] = useState(0);
  const [baseUrl,setBaseUrl] = useState("http://localhost:4000/");

  const [themeMode, setThemeMode] = useState(
    localStorage.getItem('themeMode') === 'dark' ? false : true
  );

  useEffect(() => {
    if (themeMode) {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('themeMode', 'light');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      localStorage.setItem('themeMode', 'dark');
    }
  }, [themeMode]);

 
  

  const handleClose = (
   event,reason
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlertBox({
      open:false,
   
    });
  };

  // Dynamically create the theme based on `themeMode`
  const theme = createTheme({
    palette: {
      mode: themeMode ? 'light' : 'dark',  // Toggle between light and dark mode
    },
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openNav = () => {
    setisOpenNav(true);
  };

  const values = {
    isToggleSidebar,
    setisToggleSidebar,
    isLogin,
    setisLogin,
    isHideSidebarAndHeader,
    setisHideSidebarAndHeader,
    themeMode,
    setThemeMode,
    windowWidth,
    openNav,
    isOpenNav,
    setisOpenNav,
    alertBox,
    setAlertBox,
    progress,setProgress,
    baseUrl
  
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      
        {/* ThemeProvider wraps the entire app */}
        <MyContext.Provider value={values}>
        <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        className="topLoadingBar"
      />
        <Snackbar open={alertBox.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={alertBox.error===false ?"success":"error"}
          variant="filled"
          sx={{ width: '100%' }}
        >
         {alertBox.msg}
        </Alert>
      </Snackbar>
      
          {/* Conditionally render Header */}
          {isHideSidebarAndHeader !== true && <Header />}

          <div className="main d-flex">
            {/* Conditionally render Sidebar */}
            {isHideSidebarAndHeader !== true && (
              <>
                <div className={`sidebarOverlay d-none ${isOpenNav === true && 'open'}`} onClick={() => setisOpenNav(false)}></div>
                <div className={`sidebarWrapper ${isToggleSidebar ? 'toggle' : ''} ${isOpenNav === true ? 'open' : ''}`}>
                  <Sidebar />
                </div>
              </>
            )}

            <div className={`content ${isHideSidebarAndHeader && 'full'} ${isToggleSidebar && 'toggle'}`}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/products" element={<Dashboard />} />
                <Route path="/product/details" element={<ProductDetails />} />
                <Route path="/product/upload" element={<ProductUpload />} />
                <Route path="/category/add" element={<CategoryAdd />} />
                <Route path="/category" element={<Category />} />
              </Routes>
            </div>
          </div>
     
        </MyContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
export { MyContext };
