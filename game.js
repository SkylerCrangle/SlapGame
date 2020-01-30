let goofy = {
  name: "Goofy",
  health: 100,
  hits: 0
}


function slap() {

  if (goofy.health > 0) {
    goofy.hits++
  }
  goofy.health--;

  //alert(health);
  update()
}

function punch() {

  if (goofy.health > 0) {
    goofy.hits++
  }
  goofy.health -= 5;
  update()
}

function kick() {

  if (goofy.health > 0) {
    goofy.hits++
  }
  goofy.health -= 10;

  update()
}


function update() {
  if (goofy.health < 0) {
    goofy.health = 0;
  }
  document.getElementById("health").innerText = (`${goofy.name} is feeling ${goofy.health}% because he's been hit ${goofy.hits} times!`)
}
update()