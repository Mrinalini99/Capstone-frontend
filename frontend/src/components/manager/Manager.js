import { ThemeProvider } from '@material-ui/styles';
import React , {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateUser from './CreateUser';
import History from './History';


import Header from './ui/Header';
import theme from "./ui/Theme";
import Users from './Users';
// import './ui/App.css'
import './ui/History.css'
import LandingPage from './LandingPage';


function Manager() {
  const [value,setValue] = useState(0);
  const [selectedIndex,setSelectedIndex] = useState(0)
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          />
          <Routes>
          <Route exact path='/'  
          render={(props)=>(
                <LandingPage
                  {...props} 
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              )} 
            />
          <Route exact path='/users'  
              render={(props)=>(
                <Users
                  {...props} 
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              )}
          />
          <Route exact path='/history' component={History} />
          
          <Route exact path='/create' component={CreateUser} />
          
         
          </Routes>
          {/*
         
         
          
          <Route exact path='/about' component={AboutUs} /> */}
    
    </BrowserRouter>

    </ThemeProvider>
  );
}

export default Manager;
