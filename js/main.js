// Faccio partire un contatore per 100 volte
for (i = 1; i <= 100; i++) {

    // SE un numero è un multiplo di 3 E NON è multiplo di 5 stampo 'Fizz'
    if (i % 3 == 0 && !(i % 5 == 0)) {
        console.log('fizz');
    }

    // ALTRIMENTI SE un numero è un multiplo di 5 E NON è multiplo di 3 stampo 'Buzz'
    else if (i % 5 == 0 && !(i % 3 == 0)) {
        console.log('buzz');
    }

    // ALTRIMENTI SE un numero è un multiplo di 3 E multiplo di 5 stampo 'Fizzbuzz'
    else if (i % 3 == 0 && i % 5 == 0) {
        console.log('fizzbuzz');
    }

    // ALTRIMENTI stampo un numero normale
    else {
        console.log(i);
    }

}