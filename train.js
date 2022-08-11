const natural = require('natural');

// Creates a new Bayes Classifier
const classifier = new natural.BayesClassifier();

// read JSON file and put it in training set as an object
const trainingSet = require('./data/training_set.json');

// show our classifier all of the training emails (already labeled)
for (let i = 0; i < trainingSet.length; i++) {
    classifier.addDocument(trainingSet[i].message, trainingSet[i].label_text);
}

// asks the classifier to build a model that can predict whether future messages are spam
classifier.train();

// saves our model into classifier.json
classifier.save('classifier.json', function(err, classifier) {

})