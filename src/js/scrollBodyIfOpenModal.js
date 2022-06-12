function scrollBodyIfOpenModal (visible) {
    if(visible) {
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
    }
    else {
        document.body.style.position = '';
        document.body.style.top = '';
    }
}

export  {scrollBodyIfOpenModal};