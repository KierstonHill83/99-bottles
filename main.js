
for(i = 99; i >= 1; i--) {
  if(i === 1) {
    document.write(i + " bottle of beer on the wall. " + i + " bottle of beer. You take one down, pass it around " + (i - 1) + " bottles of beer on the wall. <br>")
  } else if(i === 2) {
    document.write(i + " bottles of beer on the wall. " + i + " bottles of beer. You take one down, pass it around " + (i - 1) + " bottle of beer on the wall. <br>")
  } else {
    document.write(i + " bottles of beer on the wall. " + i + " bottles of beer. You take one down, pass it around " + (i - 1) + " bottles of beer on the wall. <br>")
  }
}
