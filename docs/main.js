// HTML references
const inputBox = document.getElementById('message-input');
const button = document.getElementById('submit-button');
const resultP = document.getElementById('result');

// load in classifier
const classifier = natural.BayesClassifier.restore(classifierObj);

button.onclick = function (event) {
    event.preventDefault();

    const label = classifier.classify(inputBox.value);

    if (label == 'spam') {
        resultP.innerHTML = 'SPAM';
        resultP.style.backgroundColor = 'rgb(255, 57, 57)';
    }
    else {
        resultP.innerHTML = 'OK';
        resultP.style.backgroundColor = 'rgb(57, 255, 57)';
    }
}