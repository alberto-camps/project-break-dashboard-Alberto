const linkName = document.getElementById('link-name');
const linkUrl = document.getElementById('link-url');
const linkButton = document.getElementById('link-button');
const linkList = document.getElementById('link-list');

let linkArray = JSON.parse(localStorage.getItem('myLinks')) || [];

function renderLinks() {
    linkList.innerHTML = '';

    linkArray.forEach((linkObj, index) => {
        const listItem = document.createElement('li');
        
        const link = document.createElement('a');
        link.href = linkObj.url;
        link.textContent = linkObj.name;
        link.target = '_blank';
        listItem.appendChild(link);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'x';
        deleteBtn.addEventListener('click', () => {
            linkArray.splice(index, 1);
            localStorage.setItem('myLinks', JSON.stringify(linkArray));
            renderLinks();
        });

        listItem.appendChild(deleteBtn);
        linkList.appendChild(listItem);
    });
}


linkButton.addEventListener('click', () => {
    const name = linkName.value;
    const url = linkUrl.value;

    if (name && url) {
        const linkObj = { name, url };
        linkArray.push(linkObj);
        localStorage.setItem('myLinks', JSON.stringify(linkArray));
        renderLinks();

        linkName.value = '';
        linkUrl.value = '';
    } else {
        alert('Por favor, completa ambos campos antes de añadir el enlace.');
    }
});


document.addEventListener('DOMContentLoaded', () => {
    renderLinks();
});