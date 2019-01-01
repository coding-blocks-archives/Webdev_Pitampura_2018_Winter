window.onload = function () {
  let btnAdd = document.getElementById('btnAdd')
  let btnClear = document.getElementById('btnClear')
  let btnSort = document.getElementById('btnSort')
  let inpNewTask = document.getElementById('inpNewTask')
  let taskList = document.getElementById("taskList")

  let tasks = []
  if (localStorage.list) {
    tasks = JSON.parse(localStorage.list)
  }

  function refreshList () {
    localStorage.list = JSON.stringify(tasks)
    taskList.innerHTML = ""
    for (let i in tasks) {
      let task = tasks[i]
      let li = document.createElement('li')
      li.className = "list-group-item"
      let div = document.createElement('div')
      div.className = task.done ? "row done" : "row"

      let span = document.createElement('span')
      span.innerText = task.name
      span.className = "col py-1"

      let liBtnDone = document.createElement('button')
      liBtnDone.innerText = task.done ? "❌" : "✔️"
      liBtnDone.className = "btn btn-info col-2 mx-2"
      let liBtnDelete = document.createElement('button')
      liBtnDelete.innerText = "DELETE"
      liBtnDelete.className = "btn btn-danger col-2 mx-2"

      let liBtnUp = document.createElement('button')
      liBtnUp.innerText = "⬆️"
      liBtnUp.className = "btn btn-warning col-1 mx-2"
      let liBtnDown = document.createElement('button')
      liBtnDown.innerText = "⬇️"
      liBtnDown.className = "btn btn-warning col-1 mx-2"

      liBtnDone.onclick = function () {
        task.done = !task.done
        refreshList()
      }
      liBtnDelete.onclick = function () {
        tasks.splice(i, 1)
        refreshList()
      }

      div.appendChild(span)
      div.appendChild(liBtnUp)
      div.appendChild(liBtnDown)
      div.appendChild(liBtnDone)
      div.appendChild(liBtnDelete)

      li.appendChild(div)
      taskList.appendChild(li)

    }
  }

  refreshList()

  function sortList () {
    tasks.sort(function (a, b) {
      return a.done - b.done
    })
    refreshList()
  }

  function clearList() {
    tasks = tasks.filter(function (t) {
      return !t.done
    })
    refreshList()
  }

  function addTask() {
    console.log(tasks)
    let taskName = inpNewTask.value
    tasks.push({
      name: taskName,
      done: false
    })
    inpNewTask.value = ""
    refreshList()
  }

  btnAdd.onclick = function () {
    addTask()
  }
  inpNewTask.onkeyup = function (ev) {
    if (ev.keyCode == 13) {
      addTask()
    }
  }

  btnSort.onclick = function () {
    sortList()
  }

  btnClear.onclick = function () {
    clearList()
  }
}
