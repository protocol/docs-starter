# Docs starter

This repository contains the base platform to build a docs site from. This platform is built using Hugo and started life in the [Doks repo by H-enk](https://github.com/h-enk/doks). This repo is designed to be used as a template and submodule. Follow through the [Create your project](#create-your-project) guide to set up everything properly.

![](./static/images/site-screenshot.png)

## Create your project

You can create your project quicking by following these steps.

1. Clone this repo:

    ```shell
    git clone https://github.com/protocol/docs-starter
    ```

1. Move into the `docs-starter` directory and install the dependencies:

    ```shell
    cd docs-starter && npm install
    ```

1. Done!

## Run locally

Once you have set up your project, you can start a local server by running the following steps.

1. Run the local server with NPM:

    ```shell
    npm run start
    ```

1. Open [`localhost:1313` in your browser](http://localhost:1313).
1. Stop the server with `CTRL` + `c`.

## Maintaining content

This is how the website is organized in terms of menus and pages:

1. Level 1 is the topbar navigation.
1. Level 2 is the dropdown sections on the sidebar navigation.
1. Level 3 is the pages below the dropdown sections in the sidebar navigation.
1. Level 4 is the table of contents on the right of the page. This is automatically generated on each page and is not manually configurable.
Lorem ipsum.

### Commands

Use the following terminal commands to create new sections and pages.

#### Topbar section

To create a new topbar section, run:

```shell
npm run create -- --kind topbar <topbar item name>
```

To create a new level 1 section called _Basics_, run:

```shell
npm run create -- --kind topbar basics
```

##### Add to the topbar menu

To add this new topbar section to the topbar menu, you must add the following in `./config/_default/menus/menus.en.toml`:

```toml
[[main]]
  name = "<topbar item name>"
  url = "/<topbar-item-name>"
  weight = 1
```

To add the _Basics_ section to the topbar nav that sends to users to `/basics/install/windows/` add:

```toml
[[main]]
  name = "Basics"
  url = "/basics/install/windows/"
  weight = 1
```

The lower the `weight` number, the further left the item will appear.

#### Sidebar dropdown

To create a new sidebar dropdown, run:

```shell
npm run create -- --kind sidebar <topbar section>/<sidebar name>
```

To create a new level 2 section called _Install_ under the _Basics_ topbar section, run:

```shell
npm run create -- --kind sidebar basics/install
```

#### Page

To create a new page, run:

```shell
npm run create -- --kind page <topbar>/<sidebar>/<page title>
```

To create a new level 3 page called _Windows_ under the _Basics_ topbar section in the _Install_ dropdown, run:

```shell
npm run create -- --kind page basics/install/windows
```

## Open-source projects used

- [Doks](https://getdoks.org/) by [Henk Verlinde](https://henkverlinde.com/)
- [CSS Tooltip](https://github.com/alterebro/css-tooltip) by [alterebro](https://github.com/alterebro)

## Project todos

This is the stuff we're still working on.

- [ ] Add in better pictures of dogs.
- [ ] Automate favicon creation.
- [ ] Automate adding item to topbar using `npm run create ...` commands.
- [ ] Add setting to use image or text for topbar nav logo.
