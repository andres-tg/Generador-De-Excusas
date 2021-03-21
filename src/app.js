/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Generador de Excusas");

  let who = ["The chiguire", "My brother", "His turtle", "My cachicamo"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car", "my pornhub membership"];
  let when = [
    "before the JiuJitsu Session",
    "right on my coke break",
    "when I was raiding some illegal immigrants rent-House",
    "during my tantric-sex meditation",
    "while I was praying to Buda"
  ];

  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  let Excuses =
    randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;

  document.querySelector("#Excuses").innerHTML = Excuses;
};
