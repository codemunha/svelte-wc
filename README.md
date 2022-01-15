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
  <script type="module" src="https://unpkg.com/svelte-wc@0.1.8/dist/esm/index.js"></script>
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
   
  <s-button label="custom css properties" style="--padding: 6px; --color:blue;">
  </s-button>

  <s-button label="custom props" padding="6px" fontsize="20px" color="red">
  </s-button>

  <button class=" p-4 text-white font-bold bg-blue-500 rounded-3xl w-48 hover:bg-red-500" slot="content">
    <i class="fa fa-user"></i> Button Slot
  </button>
  <div>
    <s-button label="Button With Icon Right" icon="far fa-chevron-down" position="right" />
  </div>
  <div>
    <s-button label="Button With Icon Right" icon="far fa-cloud-download"
      style="--background-color: #62A420; --padding: 12px;" />
  </div>


  <div>
    <s-button label="ACTION RED" icon="far fa-chevron-down" position="right"
      style="--background-color: #E62700; --padding: 12px;" />
  </div>


  <div>
    <s-button label="Button With Icon Right" icon="far fa-cloud-download" position="left"
      style="--background-color: #CCCCCC; --padding: 12px; --color: black;" />
  </div>
  <div>
    <s-button label="Button With Icon Right" icon="far fa-cloud-download" position="left" />
  </div>

</body>

</html>
```
