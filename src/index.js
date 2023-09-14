document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', e => {
    e.preventDefault()
    let todos = document.getElementById("tasks")
    let p = document.createElement('p')
    p.textContent = `${e.target["new-task-description"].value} `
    let prioritySelected = e.target.priority.value
    applyPriority(p,prioritySelected)
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
    
    function applyPriority (element,priority){
      if (priority === 'high'){
        element.style.color = 'red'
        todos = document.getElementById("highPriorityList")
      } else if (e.target.priority.value === 'medium'){
        element.style.color = 'blue'
        todos = document.getElementById("mediumPriorityList")
      } else {
        element.style.color = 'green'
        todos = document.getElementById("lowPriorityList")
      }
    }

})

});
