let goofy = {
  name: "Goofy",
  health: 100,
  hits: 0,
  inventory: []
}

let items = {
  fire: { name: 'Fire', modifier: 2, description: 'IT BURNS!' },
  mantis: { name: 'Mantis Shrimp', modifier: 18, description: 'Struck with the Umph of the Mantis Shrimp' },
  kaboom: { name: 'Kaboom', modifier: 9, description: 'Extra Pow' }
}

let screenSay = "";

function slap() {
  if (goofy.health > 0) {
    goofy.hits++
  }
  goofy.health -= 1 + addMods();

  useThing()
  //alert(health);
  update()
}

function punch() {

  if (goofy.health > 0) {
    goofy.hits++
  }
  goofy.health -= 5 + addMods();
  useThing()
  update()
}

function kick() {

  if (goofy.health > 0) {
    goofy.hits++
  }
  goofy.health -= 10 + addMods();
  useThing()
  update()
}


function giveThing(itemName) {
  goofy.inventory.push(items[itemName]);
  screenSay = items[itemName].description;
}

function useThing() {
  goofy.inventory = [];
}

function addMods() {
  let combVal = 0;
  for (let i = 0; i < goofy.inventory.length; i++) {
    combVal += goofy.inventory[i].modifier;
  }

  return combVal;
}



function update() {
  if (goofy.health < 0) {
    goofy.health = 0;
  }
  document.getElementById("health").innerText = (`${goofy.name} is feeling ${goofy.health}% because he's been hit ${goofy.hits} times!`)

  document.getElementById("saying").innerText = (`${screenSay}`)

  if (goofy.inventory.length == 0) {
    screenSay = "Plain and Simple"
  }
}

update()