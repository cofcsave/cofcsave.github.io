/* Data VidUp */

/* Get all elements with data-vidup */
const vidupElements = document.querySelectorAll('[data-vidup]');

const modal = document.getElementById('modal');
const modalVideo = document.getElementById('modal-video');
const mdc = document.getElementById('mdc');
const close = document.getElementById('close');

function closeModal() {
    // mdc.style.width = "0";
    mdc.style.transform = "scale(0)";
    
    setTimeout(() => {
        modal.style.visibility = "hidden";
        modal.style.opacity = "0";
        modalVideo.src = "";  
    }, 500);
}

function showModal(element) {
    modal.style.visibility = "visible";
    modal.style.opacity = "1";
    modalVideo.src = element.href;
    mdc.style.width = "100%";


    setTimeout(() => {
        mdc.style.transform = "scale(1)";
    }, 300);

}

/* Foreach element add an eventlistener and show the popup when clicked and add the src in the link */
vidupElements.forEach(element => {
    element.addEventListener("click", (e) => {

        e.preventDefault();
        showModal(element);
    });
});

close.addEventListener('click', (e) => {
    closeModal();
});

mdc.addEventListener('click', () => {
    closeModal();
});

modal.addEventListener('click', () => {
    closeModal();
});