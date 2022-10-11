const thumb = document.querySelector('.thumb');
const navItems = document.querySelectorAll('.header__nav-item');


const getCoords = function (elem) {
    let box = elem.getBoundingClientRect();

    return {
        right: box.right + window.pageXOffset,
        left: box.left + window.pageXOffset
    };
}


navItems.forEach((item) => {
    item.addEventListener('mouseover', event => {
        let coords = getCoords(event.target);
        thumb.style.transform = `translateX(${coords.left - 10}px)`
        thumb.style.width = `${coords.right - coords.left + 20}px`
        thumb.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    });

    item.addEventListener('mouseout', () => {
        thumb.style.backgroundColor = 'transparent';
    });
});