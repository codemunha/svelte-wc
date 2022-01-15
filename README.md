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
  <script type="module" src="https://unpkg.com/svelte-wc@0.1.7/dist/esm/index.js"></script>
  <style>
    :root {
      --color: rgb(250, 250, 250);
      --padding:0.5em;
      --margin: 0.25em;
      --background-color: rgb(0, 214, 46);
      --font-size: 2rem;
      --border: 2px;
      --border-rabius: 60px;
      --border-focus: 3px;
      --background-color-active: rgba(255, 0, 0, 0.699);
      --background-color-hover: rgb(3, 117, 32);
    }
  </style>
</head>

<body>
   <s-button style="">
    <button  class=" p-4 text-white font-bold bg-blue-500 rounded-3xl w-48 hover:bg-red-500" slot="content">Button Slot</button>
  </s-button>
  <div>
    <s-button label="custom css properties" style="--padding: 10px"></s-button>
  </div>
  <div>
    <s-button   label="custom props" padding="10px" size="20px" color="green">
    </s-button>
  </div>
  <div>
    <s-button label="custom css properties inline" style="">
    </s-button>
  </div>

</body>

</html>
```
