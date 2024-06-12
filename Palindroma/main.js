const inputUser = document.getElementById('input');
const button = document.getElementById('button');

button.addEventListener('click', function (event) {
    event.preventDefault

    console.log(inputUser.value);

    let esempio = identificaPalabraPalindroma(inputUser.value);
    console.log(esempio);
})


function identificaPalabraPalindroma(parola) {
    parola = parola.toLowerCase();
    let parolaInvertita = parola.split('').reverse().join('');
    return parola === parolaInvertita;
}
