let text = prompt("Enter the input");
let todo = ["wash hands","perform daily chores"];
while(text!="quit"){
    text = prompt("Enter the input");
    if(text === "list")
    {
        console.log("**********");
        for(let i =0;i<todo.length;i++)
        {
            console.log(`${i}: ${todo[i]}`);
        }
        console.log("**********");
    }
    else if(text === 'new')
    {
        let newTodo = prompt("Enter the task in the todo list");
        todo.push(newTodo);
    }
    else if(text === "delete")
    {
        let index = prompt("Enter the no. of list you want to delete ");
        todo.splice(index,1);
    }

}
console.log("You Quit, bye have a great day!");