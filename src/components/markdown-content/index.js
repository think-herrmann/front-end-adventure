import React from "react";
import { Tile } from "@think-herrmann/component-library";
import {useParams} from 'react-router-dom'

import styles from './markdown-content.module.css';

const pages = {};

function importAll (r) {
  r.keys().forEach(key => pages[key.replace(".mdx","").replace("./","")] = r(key).default);
}

importAll(require.context('../../content/', false, /\.mdx$/));

function MarkdownContent() {
  let {id} = useParams();
  const Content = pages[id];

  return (
    <Tile className={styles.content}>
      <span></span>
      <Content />
    </Tile>
  );
}

export default MarkdownContent;
