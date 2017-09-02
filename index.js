const app = "I don't do much."

function destructivelyAppendKitten(name) {
  var kittens = [name];
  kittens.push(name);
  return kittens;
}
