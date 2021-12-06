import React from "react";
import { graphql } from "gatsby";

import "./../styles/index.css";

const IndexPage = ({ data }) => {
  console.log(data);
  const { emoji } = data.sitePlugin.pluginOptions;
  return (
    <main>
      <section>
        <h1>
          <span role="img" aria-label="Party popper emoji">
            {emoji}&nbsp;
          </span>
          Check out the favicon
          <span role="img" aria-label="Party popper emoji">
            &nbsp;{emoji}
          </span>
        </h1>
        <p>
          <a href="https://github.com/queen-raae/gatsby-plugin-svg-emoji-favicon">
            @raae/gatsby-plugin-svg-emoji-favicon
          </a>
        </p>
        <p>
          It uses a trick I learned via{" "}
          <a href="https://twitter.com/chriscoyier">@chriscoyier</a> on{" "}
          <a href="https://css-tricks.com/emojis-as-favicons/">CSS-Tricks</a>{" "}
          who got it from{" "}
          <a href="https://twitter.com/LeaVerou/status/1241619866475474946">
            @LeaVerou
          </a>
          .
        </p>
      </section>
      <footer>
        <small>
          Made with
          <span role="img" aria-label="heart emoji">
            &nbsp;❤️&nbsp;
          </span>
          by <br />
          <mark>
            <a href="https://queen.raae.codes/?utm_source=demo&utm_campaign=let-it-snow">
              <span>Queen Raae</span>
              <span role="img" aria-label="queen emoji">
                &nbsp;👑&nbsp;
              </span>
            </a>
          </mark>
        </small>
      </footer>
    </main>
  );
};

export const query = graphql`
  {
    sitePlugin(name: { eq: "@raae/gatsby-plugin-svg-emoji-favicon" }) {
      pluginOptions
    }
  }
`;

export default IndexPage;
