document.getElementById('button').addEventListener('click', display)

let ran = 0
let user = 0

function display () {
  user = document.getElementById('input').value
  user = parseInt(user)
  ran = Math.floor(Math.random() * 6) + 1
  document.getElementById('paragraph').innerHTML = ran

  if (ran === user) {
    alert('correct')
  } else {
    alert('incorrect')
  }
}
