# SVELTE WC
<center>
<img src="./svelte-wc.png"  width="100%"/> 
</center>
## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## Feature

* [x] Svetle
* [x] Vite
* [x] Typescript
* [x] TailwindCSS CDN
* [x] Web Component

## Install svelte-wc

```sh
pnpm i svelte-wc
```
use by unpkg
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" href="/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Svelte + TS + Vite App</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script type="module" src="https://unpkg.com/svelte-wc@0.1.4/dist/esm/index.js"></script>
  <style>
    sv-button {
      --color: rgb(241, 199, 9);
    }
  </style>
</head>

<body>
  <s-button>
    <div class="p-4 text-red-200 font-bold bg-blue-500" slot="content">Button Slot</div>
  </s-button>

  <s-button label="custom css properties" style="--padding: 6px; --color:blue;">
  </s-button>

  <s-button label="custom props" padding="6px" size="20px" color="red">
  </s-button>

</body>

</html>
```
