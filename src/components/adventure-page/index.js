import React from "react";
import { Tile } from "axon-component-library";
import {Link, useParams} from 'react-router-dom';

import styles from './adventure-page.module.css';
import Start, { choices as startChoices } from '../../content/adventure/start.mdx'
import NotFound, { choices as notfoundChoices } from '../../content/adventure/not-found.mdx'


const pages = {
  start: {
    component: Start,
    choices: startChoices
  },
  notFound: {
    component: NotFound,
    choices: notfoundChoices
  }
};

function AdventurePage(props) {
  let { id } = useParams();
  const page = pages[id] || pages.notFound
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
