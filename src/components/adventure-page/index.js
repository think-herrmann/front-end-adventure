import React, { useEffect } from "react";
import { Tile } from "axon-component-library";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./adventure-page.module.css";

const pages = {};

function importAll(r) {
  r.keys().forEach((key) => {
    const page = {
      component: r(key).default,
      choices: r(key).choices,
      event: r(key).event,
    };
    pages[key.replace(".mdx", "").replace("./", "")] = page;
  });
}

importAll(require.context("../../content/adventure", false, /\.mdx$/));

function AdventurePage(props) {
  let { id } = useParams();
  const dispatch = useDispatch();
  const storyEvents = useSelector((state) => state.storyEvents);

  const page = pages[id] || pages["not-found"];
  const Content = page.component;
  const choices =
    typeof page.choices == "function"
      ? page.choices(storyEvents)
      : page.choices;

  useEffect(() => {
    page.event && dispatch(page.event());
  });

  return (
    <Tile className={styles.content}>
      <Content />
      {Object.entries(choices).map(([key, value]) => {
        return (
          <div key={key}>
            <Link to={`/adventure/${key}`}> {value} </Link>
          </div>
        );
      })}
    </Tile>
  );
}

export default AdventurePage;
