const form = document.getElementById('numbers')

//impedindo a atualização da página

form.addEventListener('submit', function(e){
    e.preventDefault();

    const primeiroNumero = document.getElementById('campoA');
    const segundoNumero = document.getElementById('campoB');

    //convertendo os valores para integrais

    const campoA = parseInt (primeiroNumero.value);
    const campoB = parseInt (segundoNumero.value);

    //verificando se B > A

    if (campoB > campoA){
        alert('Correto! B é maior do que A!')

        primeiroNumero.value = '';
        segundoNumero.value = '';
    }

    else{
        alert('B é menor do que A. Tente novamente!')

        primeiroNumero.value = '';
        segundoNumero.value = '';
    }
})