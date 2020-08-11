import React from "react";
import styles from "./App.module.css";
import Masonry from "react-masonry-component";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Header } from "@think-herrmann/component-library";
import { Provider } from "react-redux";
import "@think-herrmann/component-library/dist/global-styles.css";

import store from './store';
import Home from "./components/home";
import MarkdownContent from "./components/markdown-content";
import AdventurePage from "./components/adventure-page";

const basename =
  process.env.NODE_ENV == "production" ? "/front-end-adventure" : "/";
function App() {
  return (
    <Provider store={store}>
      <Router basename={basename}>
        <div className={styles.pageWrapper}>
          <div className={styles.contentWrapper}>
            <div className={styles.tileWrapper}>
              <Header tileOverlap={true} />
              <Route exact path="/" component={Home} />
              <Route path="/content/:id" component={MarkdownContent} />
              <Route path="/adventure/:id" component={AdventurePage} />
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
