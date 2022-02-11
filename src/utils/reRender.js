export const reRender = async (component, domEl) => {
    if (component) {
        document.querySelector(domEl).innerHTML = await component.render();
    }
    if (component.afterRender) component.afterRender();
};