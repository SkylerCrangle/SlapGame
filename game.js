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



function slap() {
  giveFire()
  if (goofy.health > 0) {
    goofy.hits++
  }
  goofy.health -= 1 + addMods();

  //alert(health);
  update()
}

function punch() {

  if (goofy.health > 0) {
    goofy.hits++
  }
  goofy.health -= 5 + addMods();
  update()
}

function kick() {

  if (goofy.health > 0) {
    goofy.hits++
  }
  goofy.health -= 10 + addMods();

  update()
}


function giveFire() {
  goofy.inventory.push(items.fire);
}

function addMods() {
  let combVal = 0;
  for (let i = 0; i < goofy.inventory.length; i++) {
    combVal += goofy.inventory[i].modifier;
  }
  console.log(combVal);

  return combVal;
}



function update() {
  if (goofy.health < 0) {
    goofy.health = 0;
  }
  document.getElementById("health").innerText = (`${goofy.name} is feeling ${goofy.health}% because he's been hit ${goofy.hits} times!`)
}
update()