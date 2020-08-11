import React from "react";
import styles from "./home.module.css";
import Masonry from "react-masonry-component";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Header,
  Subheader,
  Tile,
  DecoderRings,
  ColorButton
} from "@think-herrmann/component-library";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  return (
    <div className={styles.wrapper}>
      <Masonry options={{ horizontalOrder: false }}>
        <Tile className={styles.tile}>
          <Subheader title="Welcome" />
          <p>
            To get started on the Herrmann Coding Exercise
            use the link below to view the exercise overview.
            If you've already read the overview, you can play with the
            choose your own adventure game with the tile
            to the right.
          </p>
          <div>
            <Link to="/content/overview"><ColorButton variant="green" buttonText="Overview" /></Link>
          </div>
        </Tile>
        <Tile className={styles.tile}>
          <Subheader title="Start Your Adventure" />
          <p>
            Click Below to start your "Choose your own Adventure" experience!
          </p>
          <div>
            <Link to="/adventure/start"><ColorButton variant="green" buttonText="Begin" /></Link>
          </div>
        </Tile>
        <Tile className={styles.tile}>
          <Subheader title="Track your Adventure" />
          <DecoderRings delay={1} />
        </Tile>
        <Tile className={styles.tile}>
          <Subheader title="Resources" />
          <ul className={styles.resourcesList}>
            <li>
              <Link to="/content/faqs">
                <FontAwesomeIcon icon={["fas", "question"]} />
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/content/app-overview">
                <FontAwesomeIcon icon={["fas", "map"]} />
                App Overview
              </Link>
            </li>
            <li>
              <Link to="/content/frameworks">
                <FontAwesomeIcon icon={["fas", "book"]} />
                Frameworks in this App
              </Link>
            </li>
            <li>
              <a href="https://myelin.herrmannsolutions.net/">
                <FontAwesomeIcon icon={["fas", "puzzle-piece"]} />
                Herrmann Component Library
              </a>
            </li>
            <li>
              <a href="https://github.com/think-herrmann/front-end-adventure">
                <FontAwesomeIcon icon={["fab", "github-alt"]} />
                GitHub Repository
              </a>
            </li>
          </ul>
        </Tile>
      </Masonry>
    </div>
  );
}

export default Home;
