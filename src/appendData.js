import { taskDomCreation } from "./domtasks";
const appendToFront = () => {
    const lastIndex = taskData.tasks.length - 1;
    taskData.tasks.map((i) => {
        if(i === lastIndex){
           taskDomCreation(i)
        }
    })
}
export { appendToFront }