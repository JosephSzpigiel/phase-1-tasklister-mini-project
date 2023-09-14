document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', e => {
    e.preventDefault()
    let todos = document.getElementById("tasks")
    let p = document.createElement('p')
    p.textContent = `${e.target["new-task-description"].value} `
    if (e.target.priority.value === 'high'){
      p.style.color = 'red'
      todos = document.getElementById("highPriorityList")
    } else if (e.target.priority.value === 'medium'){
      p.style.color = 'blue'
      todos = document.getElementById("mediumPriorityList")
    } else {
      p.style.color = 'green'
      todos = document.getElementById("lowPriorityList")
    }
    let doneBtn = document.createElement('button')
    doneBtn.addEventListener('click', event => {
      let doneP = document.createElement('p')
      doneP.textContent = `${p.textContent}`
      document.querySelector("#tasksCompleted").append(doneP)

      event.target.parentNode.remove()
    })
    doneBtn.textContent = "Done!"
    p.appendChild(doneBtn)
    todos.append(p)
    form.reset()

})

});
