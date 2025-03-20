document.addEventListener('DOMContentLoaded', () => {
    newPepTalk();
    document.querySelector('#generate-another button').addEventListener('click', newPepTalk);
});

let newPepTalk = function() {
    let pepTalk = '';
    fetch('assets/pep-talk-partials.json')
        .then(response => response.json())
        .then(data => {
            data.forEach((partials) => {
                pepTalk += partials[randomIndex(partials.length)] + ' ';
            });
            document.getElementById('pep-talk').innerHTML = pepTalk;
        });
}

function randomIndex(length) {
    return Math.floor(Math.random() * length);
}