<svelte:options tag="sv-button" />

<script>
  export let label = "Button";
</script>

<button>{label}</button>

<style>
  button {
    padding: var(--padding, 0.25em);
    margin: var(--margin, 0.25em);
    color: var(--color);
    background-color: var(--background-color);
    font-size: var(--font-size);
    border: var(--border, 1px solid #000);
  }
</style>
