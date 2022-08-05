import * as React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faCrown,
} from "@fortawesome/free-solid-svg-icons"

const Girls = () => {

  return (
    <>
      <div className="">
        <div className="container">
    <div className="columns has-text-centered">

      <div className="column">
        <Link to="/linda">
          <div
            className="girlcontainer pulse"
            style={{
              backgroundImage: `url('/img/linda2.png')`,
            }}
          >
            <div className="girlinfo has-text-warning">
              <div className="infocontainer">
                <i className="is2 fadename">👑</i>
                <FontAwesomeIcon icon="faCrown"/>
                <h2 className="title mb-0 fadename has-text-warning">Linda</h2>
                <p className="fadenameslow">Leeftijd: 27 jaar</p>
                <p className="fadenameslow">Lengte: 1.74m</p>
              </div>
            </div>
          </div>
        </Link>
      </div>



      <div className="column">
        <Link to="/demi">
        <div
          className="girlcontainer pulse"
          style={{
            backgroundImage: `url('/img/demi5.png')`,
          }}
        >
          <div className="girlinfo has-text-warning">
            <div className="infocontainer">
              <i className="is2 fadename">👑</i>
              <FontAwesomeIcon icon="faCrown"/>
          <h2 className="title mb-0 fadename has-text-warning">Demi</h2>
            <p className="fadenameslow">Leeftijd: 29 jaar</p>
            <p className="fadenameslow">Lengte: 1.69m</p>
          </div>
          </div>
        </div>
        </Link>
      </div>

      <div className="column">
        <Link to="/layla">
          <div
            className="girlcontainer pulse"
            style={{
              backgroundImage: `url('/img/layla1.png')`,
            }}
          >
            <div className="girlinfo has-text-warning">
              <div className="infocontainer">
                <i className="is2 fadename">👑</i>
                <FontAwesomeIcon icon="faCrown"/>
                <h2 className="title mb-0 fadename has-text-warning">Layla</h2>
                <p className="fadenameslow">Leeftijd: 20 jaar</p>
                <p className="fadenameslow">Lengte: 1.70m</p>
              </div>
            </div>
          </div>
        </Link>
      </div>

    </div>

  <div className="columns has-text-centered centered">

    <div className="column">
      <Link to="/sharita">
        <div
          className="girlcontainer pulse"
          style={{
            backgroundImage: `url('/img/sharita.png')`,
          }}
        >
          <div className="girlinfo has-text-warning">
            <div className="infocontainer">
              <i className="is2 fadename">👑</i>
              <FontAwesomeIcon icon="faCrown"/>
              <h2 className="title mb-0 fadename has-text-warning">Sharita</h2>
              <p className="fadenameslow">Leeftijd: 22 jaar</p>
              <p className="fadenameslow">Lengte: 1.61m</p>
            </div>
          </div>
        </div>
      </Link>
    </div>

    <div className="column">
      <Link to="/rachel">
        <div
          className="girlcontainer pulse"
          style={{
            backgroundImage: `url('/img/rachel1.png')`,
          }}
        >
          <div className="girlinfo has-text-warning">
            <div className="infocontainer">
              <i className="is2 fadename">👑</i>
              <FontAwesomeIcon icon="faCrown"/>
              <h2 className="title mb-0 fadename has-text-warning">Rachel</h2>
              <p className="fadenameslow">Leeftijd: 22 jaar</p>
              <p className="fadenameslow">Lengte: 1.61m</p>
            </div>
          </div>
        </div>
      </Link>
    </div>

    <div className="column">
      <Link to="/kaily">
        <div
          className="girlcontainer pulse"
          style={{
            backgroundImage: `url('/img/kaily2.png')`,
          }}
        >
          <div className="girlinfo has-text-warning">
            <div className="infocontainer">
              <i className="is2 fadename">👑</i>
              <FontAwesomeIcon icon="faCrown"/>
              <h2 className="title mb-0 fadename has-text-warning">Kaily</h2>
              <p className="fadenameslow">Leeftijd: 30 jaar</p>
              <p className="fadenameslow">Lengte: 1.65m</p>
            </div>
          </div>
        </div>
      </Link>
    </div>

  </div>

        </div>
      </div>
    </>
);
};

export default Girls;
