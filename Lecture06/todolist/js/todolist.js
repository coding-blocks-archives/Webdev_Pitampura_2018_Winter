
window.onload = function () {
  let tasklist = document.getElementById('tasklist')
  let newtask = document.getElementById('newtask')
  let addbtn = document.getElementById('addbtn')

  addbtn.onclick = function () {
    let newTaskValue = newtask.value
    let newTaskListItem = document.createElement('li')

    tasklist.innerHTML +=
    '<li class="list-group-item">' +
      newTaskValue
     +'</li>'

    // newTaskListItem.innerText = newTaskValue
    // newTaskListItem.className = "list-group-item"

    // tasklist.appendChild(newTaskListItem)
  }


}
