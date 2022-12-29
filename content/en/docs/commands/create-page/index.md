---
title: "Create page"
description: "Manually creating pages is annoying. You can create a page directly from the command line by using the `npm run create` command, along with a few arguments."
lead: "Manually creating pages is annoying. You can create a page directly from the command line by using the `npm run create` command, along with a few arguments. The _create page_ command is your basic bread and butter. You'll be using this command a lot when you create pages, so it's best to get to grips with it now."
draft: false
images: []
type: docs
menu:
  docs:
    identifier: "create-page-7170c6b48e3178fd9799c774e9c8d3b1"
weight: 100
toc: true
---

## Command

Call the `npm run create` command, along with the type of content you want to create, and the location of that content:

```shell
npm run create -- --kind page <DIRECTORY>/<PAGE>
```

## Example

To create a new page called **Windows** in the **Install** directory, we'd run:

```shell
npm run create -- --kind page install/windows
```

```plaintext
> @johnnymatthews/npmify-test@0.0.1 create
> exec-bin node_modules/.bin/hugo/hugo new --kind page install/windows

Content dir "/home/johnny/Code/docs-starter/content/en/install/windows" created
```

This creates the following file structure within `/content/en/`:

```
install
├── _index.md
└── windows
    └── index.md
```

## Troubleshooting

### Page not showing in the sidebar

If you've ran the `npm run create -- --kind page` command but can't see your page in the sidebar, make sure you used an existing `<DIRECTORY>` in your command. In the above example our directory is `install`.
