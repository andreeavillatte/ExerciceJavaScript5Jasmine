// Créer un tableau "languages" contenant "Html", "CSS", "Java", "PHP"
var languagesArrayCreation = function () {
  var languages=['Html','CSS','Java','PHP'];
  return languages
}

// Créer un tableau "numbers" contenant les numbers de 0 à 5
var numbersArrayCreation = function () {
  var numbers=[0,1,2,3,4,5];
    return numbers;
}

//  Remplacer le troisième élément du tableau par "Javascript"
var ElementReplacement = function (languages) {
  languages[2]='Javascript';
  return languages;
}

// Ajouter "Ruby" et "Python" à la fin du tableau
var AddElementToLanguagesArray = function (languages) {
  var languages = ['Html', 'CSS', 'Javascript', 'PHP'];
  languages.push('Ruby','Python')
  return languages;
}

// Ajouter "-2" et "-1" au début du tableau numbers
var AddElementToNumbersArray = function (numbers) {
  var numbers = [0,1,2,3,4,5];
  numbers.unshift(-2,-1);
  return numbers;
}
// Supprimer le premier élément du tableau languages
var deleteArrayFirstElement = function (languages) {
  var languages = ['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
  languages.shift();
  return languages;
}
// Supprimer le dernier élément du tableau languages
var deleteArrayLastElement = function (languages) {
  languages.pop();
  return languages;
}
  // Faire de la chaîne "socialMediaInString" un tableau "socialMedia"
  var stringToArray = function (socialMediaInString) {
  socialMedia = socialMediaInString.split(',');
  return socialMedia;
}
// Faire du tableau "languages" une chaîne "languagesInString". Séparer les languages par une virgule
var arrayToString = function (languages) {
  var languages = ['CSS', 'Javascript', 'PHP', 'Ruby'];
  // languagesInString = languages.toString('');  // c'est bien aussi, mais c'est plus propre join
  languagesInString = languages.join();
  return languagesInString;
}

// Trier le tableau "socialMedia"
var arraySort = function (socialMedia) {
  socialMedia = socialMedia.sort();
  return socialMedia;
}

// Inverser le tableau "languages"
var arrayInvert = function (languages){
  languages = languages.reverse();
  return languages;
}
