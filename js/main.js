// Prendo l'ul dell'HTML tramite il suo id
const customUl = document.getElementById('custom_ul');

// Faccio partire un contatore per 100 volte
for (i = 1; i <= 100; i++) {

    // Creo un elemento <li>
    const customLi = document.createElement('li')

    // SE un numero è un multiplo di 3 E NON è multiplo di 5 stampo 'Fizz'
    if (i % 3 == 0 && !(i % 5 == 0)) {
        // Inserisco 'fizz' dentro l'li
        customLi.append('fizz');
        console.log('fizz');
    }

    // ALTRIMENTI SE un numero è un multiplo di 5 E NON è multiplo di 3 stampo 'Buzz'
    else if (i % 5 == 0 && !(i % 3 == 0)) {
        // Inserisco 'buzz' dentro l'li
        customLi.append('buzz');
        console.log('buzz');
    }

    // ALTRIMENTI SE un numero è un multiplo di 3 E multiplo di 5 stampo 'Fizzbuzz'
    else if (i % 3 == 0 && i % 5 == 0) {
        // Inserisco 'fizzbuzz' dentro l'li
        customLi.append('fizzbuzz');
        console.log('fizzbuzz');
    }

    // ALTRIMENTI stampo un numero normale
    else {
        // Inserisco il numero dentro l'li
        customLi.append(i);
        console.log(i);
    }

    // Inserisco <li> dentro <ul>
    customUl.append(customLi);

}