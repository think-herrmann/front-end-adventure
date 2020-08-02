import React from "react";
import { Tile } from "axon-component-library";
import {Link, useParams} from 'react-router-dom';

import styles from './adventure-page.module.css';

const pages = {}

function importAll (r) {
  r.keys().forEach(key => {
    const page = {
      component: r(key).default,
      choices: r(key).choices
    }
    pages[key.replace(".mdx","").replace("./","")] = page
  });
}

importAll(require.context('../../content/adventure', false, /\.mdx$/));

function AdventurePage(props) {
  let { id } = useParams();
  const page = pages[id] || pages["not-found"]
  const Content = page.component;
  const choices = page.choices

  return (
    <Tile className={styles.content}>
      <Content />
      {
        Object.entries(choices).map(([key, value])=>{
          return <div><Link to={`/adventure/${key}`}> {value} </Link></div>
        })
      }
    </Tile>
  );
}

export default AdventurePage;
