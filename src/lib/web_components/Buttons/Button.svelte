<svelte:options tag="s-button" />

<script>
  import cssVars from "svelte-css-vars";
  export let label = "Button";
  export let padding = "1px";
  export let margin = "1px";
  export let color;
  export let size;

  $: styleVars = {
    padding,
    margin,
    color,
    "font-size": size,
  };
</script>

{#if $$slots.content}
  <slot name="content" />
{:else}
  <button {...$$props} use:cssVars={styleVars}>{label}</button>
{/if}

<style>
  button {
    border-radius: var(--border-rabius, 0px);
    padding: var(--padding, 0.25em);
    margin: var(--margin, 0.25em);
    color: var(--color);
    background-color: var(--background-color, transparent);
    font-size: var(--font-size, 14px);
    cursor: var(--cursor, pointer);
    border: var(--border, 1px solid #000);
  }
  button:focus {
    border: var(--border-focus, 1px solid #000);
  }

  button:active {
    background-color: var(--background-color-active,#000);
  }
  button:hover {
    background-color: var(--background-color-hover,rgb(49, 49, 49));
  }
</style>