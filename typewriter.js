const typeWriter = function(sentence) {
  for(let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, 1000 * (i+1));
  }
  setTimeout(() => {
    console.log("\n")
  }, 1000 * sentence.length);
}
const sentence = "hello there from lighthouse labs";
typeWriter(sentence);