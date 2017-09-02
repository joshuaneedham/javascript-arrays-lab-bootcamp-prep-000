const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"]
  var kittens2 = [name, ...kittens];
  return kittens2;
}
