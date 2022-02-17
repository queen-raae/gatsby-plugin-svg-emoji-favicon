# @raae/gatsby-plugin-svg-emoji-favicon

_Use an emoji as your site's svg favicon_ 🖼

The plugin uses a trick I learned via [@chriscoyier](https://twitter.com/chriscoyier) on [CSS-Tricks](https://css-tricks.com/emojis-as-favicons/) who got it from [@LeaVerou](https://twitter.com/LeaVerou/status/1241619866475474946); the emoji is placed inside an svg tag and the svg is used as the favicon.

&nbsp;

## A message or two from Queen Raae 👑

### 1-on-1 Emergency Gatsby Call

Are you stuck on a reef in the sharky waters around the Gatsby islands? Check out [1-on-1 Emergency Gatsby Call](https://queen.raae.codes/gatsby-emergency/?utm_source=readme&utm_campaign=svg-emoji-favicon) with Queen Raae to get friendly advice you can put into action immediately from a seasoned Gatsby developer.

### Stay updated and get the most out of Gatsby

Learn how to get the most out of Gatsby and **stay updated** on the plugin by [subscribing](https://queen.raae.codes/emails/?utm_source=readme&utm_campaign=svg-emoji-favicon) to daily emails from Queen Raae and Cap'n Ola.

&nbsp;

## How to install

`npm install @raae/gatsby-plugin-svg-emoji-favicon`

or

`yarn add @raae/gatsby-plugin-svg-emoji-favicon`

## How to use

In the gatsby-config.js for your site add @raae/gatsby-plugin-svg-emoji-favicon to the plugins array making sure to add an emoji.

```
// gatsby-config.js

module.exports = {
  plugins: [
    {
      resolve: "@raae/gatsby-plugin-svg-emoji-favicon",
      options: {
        emoji: "🥳",
      },
    },
  ],
};
```

## How to contribute

I love to hear from folks, do not be shy 🎉

### With Code

Take a look at [CONTRIBUTING.md](https://github.com/queen-raae/gatsby-plugin-let-it-snow/blob/main/CONTRIBUTING.md).

### With Questions, Feedback and Suggestions

If you have any questions, feedback or suggestions head on over to [discussions](https://github.com/queen-raae/gatsby-plugin-svg-emoji-favicon/discussions).

### With Bugs Reports

If you find a bug please open an [issue](https://github.com/queen-raae/gatsby-plugin-svg-emoji-favicon/issues) and/or create a pull request to fix it.
