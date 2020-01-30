let health = 100;

function slap() {
  health--;
  //alert(health);
  update()
}

function update() {
  document.getElementById("health").innerText = (`Goofy is feeling ${health}%`)
}
update()