export function setAttributes(node, attributes) {
    const applyAttributes = () => {
        Object.entries(attributes).forEach(([k, v]) => {
            if (v !== undefined) {
                node.style.setProperty(`--${k}`, v);
            } else {
                node.removeAttribute(k);
            }
        });
    };
    applyAttributes();
    return {
        update(updatedAttributes) {
            attributes = updatedAttributes;
            applyAttributes();
        },
    };
}