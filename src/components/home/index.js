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
} from "axon-component-library";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  return (
    <div className={styles.wrapper}>
      <Masonry options={{ horizontalOrder: false }}>
        <Tile className={styles.tile}>
          <Subheader title="Welcome" />
          <p>
            To get started on the Herrmann Coding Exercise
            use the link below to view the README. If you've
            already read the README, you can play with the
            choose your own adventure game with the tile
            to the right.
          </p>
          <div>
            <Link to="/content/readme"><ColorButton variant="green" buttonText="Readme" /></Link>
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
              <a href="">
                <FontAwesomeIcon icon={["fas", "question"]} />
                FAQs
              </a>
            </li>
            <li>
              <Link to="/content/frameworks">
                <FontAwesomeIcon icon={["fas", "book"]} />
                Frameworks in this App
              </Link>
            </li>
            <li>
              <a href="">
                <FontAwesomeIcon icon={["fas", "puzzle-piece"]} />
                Herrmann Component Library
              </a>
            </li>
            <li>
              <a href="">
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
