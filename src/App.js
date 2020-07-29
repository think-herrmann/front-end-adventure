import React from "react";
import styles from "./App.module.css";
import Masonry from "react-masonry-component";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Header } from "axon-component-library";
import 'axon-component-library/dist/global-styles.css';

import Home from "./components/home";
import MarkdownContent from "./components/markdown-content";
import AdventurePage from "./components/adventure-page";

function App() {
  return (
    <Router>
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
  );
}

export default App;
