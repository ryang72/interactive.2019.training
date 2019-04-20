# gatsby-starter-dailybruin

How the Daily Bruin likes using [Gatsby](https://www.gatsbyjs.org). Note this starter combines a couple of other in-house DB tools, like [gatsby-source-kerckhoff](https://github.com/dailybruin/gatsby-source-kerckhoff), which draws from our site manager [Kerckhoff](https://github.com/dailybruin/kerckhoff), and [Lux](https://github.com/dailybruin/lux), our React-based design system.

## Overview

What's going on here? Kerckhoff is pulling data from a [Google Drive Folder](https://docs.google.com/document/d/1CBXuDRDNLyZZVe51Z0F_0eEgwupJWF9J0NQ0CK7jlNQ/edit?usp=sharing) that contains docs written in [ArchieML](http://archieml.org/) and images and transforming them into parsable JSON via [an api](https://kerckhoff.dailybruin.com/api/packages/flatpages/online.demoaml/). gatsby-source-kerckhoff is then fetching that JSON and makes it available as GraphQL for use in this Gatsby template. In a diagram:

```
ArchieML  --Kerckhoff-->  JSON ––gatsby-source-kerckhoff--> GraphQL ––gatsby-starter-dailybruin--> HTML
```

## Installation

Make sure you have [Yarn](https://yarnpkg.com/) the [Gatsby CLI](https://www.gatsbyjs.org/docs/#using-the-gatsby-cli) installed.

```
gatsby new <your-project-name> https://github.com/dailybruin/gatsby-starter-dailybruin
```

## Usage

### Development

If you haven't already, install [yarn](https://yarnpkg.com/).

Install dependencies with:

```
yarn
```

To start the development server, run:

```
yarn start
```

Then go to [localhost:1234](http://localhost:1234)!

### Deployment

To build:

```
yarn build
```
