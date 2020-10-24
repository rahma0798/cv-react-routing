import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import routes from './config/routes';
// import Header from './header';
import './App.css';

const color = {
  active: {
    textColor: '#332021',
  },
  inActive: {
    textColor: '#47a1ad',
  },
};
const ActiveColor = React.createContext(color);

const App = () => {
  return (
    <Router>
      <ActiveColor.Provider value={color}>
        <Menus />
      </ActiveColor.Provider>
      <Switch>
        {routes.map((route) => {
          return (
            <Route
              path={route.path}
              component={route.component}
              key={route.path}
            />
          );
        })}
      </Switch>
    </Router>
  );
};

function Menus() {
  const nav = [
    {
      name: 'Home',
      destination: '/home',
    },
    {
      name: 'Profile',
      destination: '/profile',
    },
    {
      name: 'Experience',
      destination: '/experience',
    },
    {
      name: 'Contact',
      destination: '/contact',
    },
  ];
  const colorIsActive = useContext(ActiveColor);
  const [isActive, setIsActive] = useState('Home');
  useEffect(() => {
    nav.forEach((route) => {
      document.getElementById(`${route.name}`).style.color =
        colorIsActive.inActive.textColor;
    });
    const menu = document.getElementById(`${isActive}`);
    menu.style.color = colorIsActive.active.textColor;
  });
  return (
    <div className="top">
      {nav.map((x) => {
        return (
          <Link
            to={x.destination}
            key={x.destination}
            onClick={() => {
              setIsActive(x.name);
            }}
          >
            <div className="menu" id={x.name}>
              {x.name}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default App;
