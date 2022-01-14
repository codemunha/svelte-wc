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
  <div {...$$props} use:cssVars={styleVars}>{label}</div>
{/if}

<style>
  div {
    padding: var(--padding, 0.25em);
    margin: var(--margin, 0.25em);
    color: var(--color, black);
    background-color: var(--background-color, transparent);
    font-size: var(--font-size, 14px);
    cursor: var(--cursor, pointer);
    /* border: var(--border, 1px solid #000); */
  }
</style>
