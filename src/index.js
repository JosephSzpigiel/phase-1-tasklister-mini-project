document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', e => {
    e.preventDefault()
    let todos = document.getElementById("tasks")
    let li = document.createElement('li')
    li.textContent = `${e.target["new-task-description"].value} `
    let prioritySelected = e.target.priority.value
    applyPriority(li,prioritySelected)
    let doneBtn = document.createElement('button')
    doneBtn.addEventListener('click', event => {
      let doneP = document.createElement('li')
      doneP.id = "donetask"
      doneP.textContent = `${li.textContent}`
      document.querySelector("#tasksCompleted").append(doneP)
      event.target.parentNode.remove()
    })
    doneBtn.textContent = "Done!"
    li.appendChild(doneBtn)
    todos.append(li)
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
