const prog = document.getElementsByClassName("progress")[0];
var count = 0;
function update() {
  count++;
  str = count.toString() + "%";
  prog.style.width = str;
  if (count != 100) {
    setTimeout(update, 500);
  }
}
const init = () => {
  setTimeout(update, 500);
};
