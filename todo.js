 const $ = document.querySelector.bind(document)
 const $$ = document.querySelectorAll.bind(document)

 const task = $$('.task')
 
 const tasks = $('#tasks')
 const addTask = $('.addTask')
 const inputTodo = $('.inputTodo')
 const deleteBtn = $('.deleteBtn')

 
// active add button
    inputTodo.onkeyup = function(){
    if(inputTodo.value.trim() != 0){
        addTask.classList.add("active");
    }else{
        addTask.classList.remove("active");
    }
}

// create new todo

    // create empty array to collect value 
    var dataInputs = [];

    addTask.onclick = function(){

        if(inputTodo.value !== ''){
            const newValue = inputTodo.value
            dataInputs.unshift(newValue)
    
            render = function(){
                const userData = dataInputs.map((input,index) => {
                    return `
                    <div class="task">
                        <span class="taskname">${input}</span>
                        <button onclick="deleteTodo(${index})" class="deleteBtn">
                            <i class="far fa-trash-alt"></i>
                        </button>
                    </div>
                    `
                    
                }) 
                tasks.innerHTML = userData.join('')
            }

            // clear input before add
            inputTodo.value = ''
            // focus on input before clear input
            inputTodo.focus()
            // render HTML
            render() 
        }

    }
    
// delete todo
    deleteTodo = function(index){
        // get class task
        const task = document.querySelectorAll('.task')
        // 
        task.forEach((e) => {
            e.onclick = function(){
            dataInputs.splice(index,1)
            render()
            }
        })
        
    }
     

    
    