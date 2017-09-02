const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"]
  var kittens2 = [...kittens, name];
  return kittens2;
}
