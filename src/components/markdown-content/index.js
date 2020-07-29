import React from "react";
import { Tile } from "axon-component-library";
import {useParams} from 'react-router-dom'

import styles from './markdown-content.module.css';
import Readme from '../../content/readme.mdx'

const pages = {
  readme: Readme
};

function MarkdownContent() {
  let {id} = useParams();
  const Content = pages[id];

  return (
    <Tile className={styles.content}>
      <Content />
    </Tile>
  );
}

export default MarkdownContent;
