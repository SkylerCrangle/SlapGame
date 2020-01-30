let health = 100;
let hits = 0;
let theName = "Goofy";

function slap() {
  health--;
  if (health > 0) {
    hits++
  }
  //alert(health);
  update()
}

function punch() {
  health -= 5;
  if (health > 0) {
    hits++
  }
  update()
}

function kick() {
  health -= 10;
  if (health > 0) {
    hits++
  }
  update()
}


function update() {
  if (health < 0) {
    health = 0;
  }
  document.getElementById("health").innerText = (`${theName} is feeling ${health}% because he's been hit ${hits} times!`)
}
update()