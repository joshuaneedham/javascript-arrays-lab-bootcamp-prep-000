const app = "I don't do much."

function destructivelyAppendKitten(name) {
  var kittens2 = [name, ...kittens];
  return kittens2;
}
