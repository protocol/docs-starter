---
title: "Homepage"
description: ""
lead: ""
draft: false
images: []
type: docs
menu:
  docs:
    identifier: "homepage-34abaab9738d1f78e8388bea91e06430"
weight: 100
toc: true
---

## Disable the homepage

If you'd like to make one of your docs pages the homepage, instead of `index.html`, then you can do so by following these steps:

1. Find the page that you want to be the new _homepage_. In this example we're going to use [/docs/basics/create-your-project/]({{< relref "/docs/basics/create-your-project" >}}).
1. In the front-matter of `content/en/docs/basics/create-your-project/index.md` add a `url` variable and set it to `/`:

    ```toml
    ...
    type: docs
    menu:
      docs:
        identifier: "create-your-project-d2c050fb5faacaef26719b08ac79b55e"
    weight: 1
    toc: true
    url: "/"
    ```

1. Rename `layouts/index.html` to `layouts/index.html.bak`. Run this command from the root of your project:

    ```shell
    mv layouts/index.html layouts/index.html.bak
    ```

1. Rename `layouts/_default/list.html` to `layouts/_default/list.html.bak`. Run this command from the root of your project:

    ```shell
    mv layouts/_default/list.html layouts/_default/list.html.bak
    ```

1. Update the first and second items in `config/_default/menus/menus.en.toml` and change the `url` variable to `/`:

    ```toml
    [[main]]
      name = "Docs"
      url = "/"
      identifier = "docs"
      weight = 1

        [[main]]
          name = "Basics"
          weight = 10
          identifier = "docs-basics"
          url = "/"
          parent = "docs"
    ```

1. Stop and then restart your local server with `npm run start`.

## Re-enable the homepage

Follow these steps if you disabled the custom homepage but would like to re-enable it:

1. Update the first and second items in `config/_default/menus/menus.en.toml` and change the `url` variable to `/`:

    ```toml
    [[main]]
      name = "Docs"
      url = "/docs/basics/create-your-project"
      identifier = "docs"
      weight = 1

        [[main]]
          name = "Basics"
          weight = 10
          identifier = "docs-basics"
          url = "/docs/basics/create-your-project"
          parent = "docs"
    ```

1. Rename `layouts/_default/list.html.bak` to `layouts/_default/list.html`. Run this command from the root of your project:

    ```shell
    mv layouts/_default/list.html.bak layouts/_default/list.html
    ```

1. Rename `layouts/index.html.bak` to `layouts/index.html`. Run this command from the root of your project:

    ```shell
    mv layouts/index.html.bak layouts/index.html
    ```

1. In the front-matter of `content/en/docs/basics/create-your-project/index.md` remove the `url` variable:

    ```toml
    ...
    type: docs
    menu:
      docs:
        identifier: "create-your-project-d2c050fb5faacaef26719b08ac79b55e"
    weight: 1
    toc: true
    ```

1. Stop and then restart your local server with `npm run start`.
