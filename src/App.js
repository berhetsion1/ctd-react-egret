import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import style from './App.module.css'


function App() {
  return (
    <BrowserRouter>
      <nav >
        <ul className={style.navUl}> 
          <li className={style.navLi}>
            <Link to="/list-1" className={style.navHref}>Personal</Link>
          </li>
          <li className={style.navLi}>
            <Link to="/list-2" className={style.navHref}>Volunteer</Link>
          </li> 
        </ul>
      </nav>
      <Switch>
        <Route  path="/list-1">
          <TodoContainer tableName="personal"/>
        </Route>
        <Route path="/list-2">
        <TodoContainer tableName="Volunteer"/>
        </Route>
        
        <Route path="/">
          <p>select a list...</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;