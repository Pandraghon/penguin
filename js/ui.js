// @see http://keycode.info/
const KEYLEFT = 37,
    KEYRIGHT = 39,
    KEYSTART = 33,
    KEYEND = 34,
    KEYESCAPE = 27;

const navigate = (e) => {
    const event = e || window.event,
        id = window.location.hash.substr(1),
        current = document.getElementById(id),
        active = document.activeElement;
    if (active.tagName === "TEXTAREA" || active.tagName === "INPUT") return;
    switch (event.keyCode) {
        case KEYESCAPE:
            window.location.hash = '';
            break;
        case KEYLEFT:
            const previous = current.previousElementSibling;
            if (previous !== null) window.location.hash = "#" + previous.id;
            break;
        case KEYRIGHT:
            const next = current.nextElementSibling;
            if (next !== null) window.location.hash = "#" + next.id;
            break;
        case KEYSTART:
            break;
        case KEYEND:
            break;
        default:
            return;
    }
};

const init = () => {
  window.addEventListener('keyup', navigate);
};

export default init;
