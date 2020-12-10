export const smoothJumpUp = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        window.scrollBy(0, -50);
        setTimeout(smoothJumpUp, 20);
    }
}