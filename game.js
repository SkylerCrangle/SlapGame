let goofy = {
  name: "Mirabelle",
  health: 0,
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
  goofy.health += 1 + addMods();

  //useThing()
  //alert(health);
  update()
}

function punch() {

  if (goofy.health > 0) {
    goofy.hits++
  }
  goofy.health += 5 + addMods();
  //useThing()
  update()
}

function kick() {

  if (goofy.health > 0) {
    goofy.hits++
  }
  goofy.health += 10 + addMods();
  //useThing()
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
  if (goofy.health > 1000) {
    goofy.health = 1000;
    goofy.hits--
  }
  document.getElementById("health").innerText = (`${goofy.name} is feeling ${goofy.health}% Special! Thank you for your ${goofy.hits} loving contributions!`)

  //document.getElementById("saying").innerText = (`${screenSay}`)


  if (goofy.inventory.length == 0) {
    //screenSay = "Plain and Simple"
  }


}

function inviteTheDog() {
  document.getElementById("error").innerHTML = (`
    <h3 class="text-danger"> Never Invite the Dog! </h3>

    <img
    src="https://i.dlpng.com/static/png/6560668_thumb.png"
    alt="" class="my-img img-fluid">
  
  `)
  alert("You're literally the Worst!");
}

update()