const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  var array2 = array(...kittens, name);
  return array2;
}
