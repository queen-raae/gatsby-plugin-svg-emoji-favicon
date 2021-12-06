// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/

// Import React so that you can use JSX in HeadComponents
const React = require("react");

const EmojiFavicon = ({ emoji }) => {
  return (
    <link
      id="gatsby-plugin-svg-emoji-favicon"
      rel="icon"
      href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`}
    />
  );
};

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents([
    <EmojiFavicon key="gatsby-plugin-svg-emoji-favicon" {...pluginOptions} />,
  ]);
};
