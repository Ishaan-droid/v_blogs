import React from 'react';
import './App.css';
import NavigationBar from './components/navigationBar/navigationBar';
import Home from './components/home/home';
import AllBlog from './components/allBlog/allBlog';
import AboutMe from './components/aboutMe/aboutMe';
import WholeBlog from './components/allBlog/wholeBlog/wholeBlog';
import Success from './components/success/success';
import Footer from './components/footer/footer';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route path="/blog/:id" component={WholeBlog} />
        <Route path="/blog" component={AllBlog} />
        <Route path="/success" component={Success} />
        <Route path="/aboutMe" component={AboutMe} />
        <Route exact path="/" component={Home} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
