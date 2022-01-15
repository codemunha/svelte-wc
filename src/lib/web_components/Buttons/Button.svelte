<svelte:options tag="s-button" />

<script>
  import { setAttributes } from "./cssVar";
  $: ({ label, padding, margin, color, fontsize, icon, position, bgcolor } = $$props);

  $: styleVars = {
    padding,
    margin,
    color,
    "font-size": fontsize,
    "background-color": bgcolor,
  };
  $: linkIcon = window["SV_WC"];
</script>

{#if $$slots.content}
  <slot name="content" />
{:else}
  <button use:setAttributes={styleVars}>
    {#if position == "left" && icon}
      <i class={icon} />
    {/if}
    {label}
    {#if position == "right" && icon}
      <i class={icon} />
    {/if}
  </button>
{/if}
{#if icon && linkIcon}
  <link rel="stylesheet" href={linkIcon} />
{/if}

<style>
  button {
    border-radius: var(--border-rabius, 0px);
    padding: var(--padding, 0.5em);
    margin: var(--margin);
    color: var(--color, black);
    background-color: var(--background-color, rgb(248, 248, 248));
    font-size: var(--font-size);
    cursor: var(--cursor, pointer);
    width: var(--width, max-content);
    border: var(--border, none);
    height: var(--hight);
  }
  .fa {
    color: var(--icon-color, none);
  }
  button:focus {
    border: var(--border-focus, 1px solid #000);
  }

  button:active {
    background-color: var(--background-color-active, #000);
  }
  button:hover {
    background-color: var(--background-color-hover, rgb(49, 49, 49));
  }
</style>
