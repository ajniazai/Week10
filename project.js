function toggleText () {
    const toggleDiv = document.getElementById('toggleDiv')
    toggleDiv.innerHTML = toggle ? 'World' : 'Hello'
    toggle != toggle;
}

function hideImage() {
    const disapearingImage = document.getElementById('disapearingImage')
    disapearingImage.style.opacity = '0';
}

function showImage() {
    const disapearingImage = document.getElementById('disapearingImage');
    disapearingImage.style.opacity = '1';
}

function appendTableRow() {
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const newRow = document.getElementById('tr')
    newRow.innerHTML = `
                    ${'name'} ${'email'}
    `;
    document.getElementById('tBody').appendChild(newRow)

    document.getElementById('name').value = ' ';
    document.getElementById('email').value = ' ';
}
