// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/

exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    emoji: Joi.string().required().description(`The emoji to use as a favicon`),
  });
};
