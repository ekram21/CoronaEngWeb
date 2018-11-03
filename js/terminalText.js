


// function([string1, string2],target id,[color1,color2])    
consoleText(['Engineering, Procurement & Construction (EPC)'], 'text',['white']);

function consoleText(words, id, colors) {
    document.getElementById('console').innerHTML = '&#95;';
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])


  window.setInterval(function() {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)

      console.log('Letter count was 0')
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)

    } else if (letterCount === words[0].length + 1 && waiting === false) {

      //this sets the incremenet variable x to -1 so that letters are now erased sequentially
      console.log('finished displaying whole text');

        //get rid of the underscore sign at the end
        fullText = document.getElementById('console').innerHTML
        document.getElementById('console').innerHTML = fullText.slice(0, -1);

      // waiting = true;
      // window.setTimeout(function() {
      //   x = -1;
      //   letterCount += x;
      //   waiting = false;
      // }, 1000)
    } else if (waiting === false) {

      //if x is positive a letter is added sequentially to the string in display
      //if x is negative then a letter is subtracted
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 40)


  // window.setInterval(function() {
  //   if (visible === true) {
  //     con.className = 'console-underscore hidden'
  //     visible = false;

  //   } else {
  //     con.className = 'console-underscore'

  //     visible = true;
  //   }
  // }, 400)

}
