
let jokes=["Because they're always lion! Can't trust those sneaky cheetahs either!","Just push it! Roll, egg, roll!","It had a bad fall! Guess it forgot to stick the landing!",
"Give it ten-tickles! Then watch it ink-joy the joke!","It's a bit bigger than the letter A!","Once you've seen one, you've seen them all!",
"A double-butt killer!","But then I changed my mind.","Because he was having a hard time with his game.","She thought it would be fun to send them flying through the air.",
"They go to watch movies—moo-vies, that is!","It opened its own branch.","She felt like her career was totally wrecked.","He writes it down in a logbook.",
"They're in everything!","You can buy it without any strings!","She had a lot of problems.","How do we drive this thing?",
"It was a really profitable job","I actually find it quite easy to avoid drinking too much","It had too many problems.",
"They know lots of quick ways to get around","It was tired of getting paid peanuts","He couldn't picture himself doing it",
"It stops eating after just one bite","It started off fine but went downhill fast"]

var n=jokes.length;
let num=Math.floor(Math.random()*n);
document.getElementById("joke-text").innerText=jokes[num];
