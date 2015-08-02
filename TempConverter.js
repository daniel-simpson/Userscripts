// ==UserScript==
// @name       Convert units to Celcius
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://*/*
// @copyright  2012+, You
// ==/UserScript==

var config = {
  pattern: />[^<>]*\s((\d{1,3}(\.\d*)?)[°°\s]{0,2}F)\s[^<>]*<\//g,
  debug: 0,
  rerun: 3,
  dp: 3
};

var generateReplacementString = function(tempF) {
  var tempC = (((tempF - 32) * 5) / 9).toFixed(config.dp);
  return "" + tempC + "°C";
};

var runConversion = function() {
  if(config.debug) console.log("Starting temperature fix, replacing farenheit with celcius...");
  var match = config.pattern.exec(document.body.innerHTML);  
  
  while(match) {   
    //var itemTextF = match[0];        //Full text node            >assudygsudfkujhsdbfjhabsd sadhgfujsh 123F ajshbda</
    var replaceTextF = match[1];     //Match including unit      123F
    var tempF = match[2];            //Temperature value         123
          
    var replaceTextC = generateReplacementString(tempF);
    
    if(config.debug) console.log("Replacing " + replaceTextF + " with " + replaceTextC);
    document.body.innerHTML = document.body.innerHTML.replace(replaceTextF, replaceTextC);
      
    match = config.pattern.exec(document.body.innerHTML);
  }
  if(config.debug) console.log('Completed conversion without errors');
};

for(var i=0;i<config.rerun;i=i+1) {
  setTimeout(runConversion,  500);
}
