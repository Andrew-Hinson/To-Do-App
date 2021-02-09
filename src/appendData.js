import { taskDomCreation } from "./domtasks";
import { createTask } from "./objectCreation";
const appendToFront = () => {
    const lastIndex = taskData.tasks.length - 1;
    taskData.tasks.map((task, i) => {
        if(i === lastIndex){
            createTask()
        }
    })
}
export { appendToFront }