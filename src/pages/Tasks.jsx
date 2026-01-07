import {useEffect, useState} from "react";
import TaskForm from "../components/TaskForm";
import TaskTable from "../components/TaskTable";



export default function Tasks(){
    const [tasks, setTasks]= useState([]);
    const [editData, setEditData]=useState(null);

    const fetchTasks = async () => {
        const response = await getTasks();
        
        setTasks(response.data);
    };
    useEffect(()=>{
        fetchTasks();
    },[])

    const handleSubmit = async (taskObj) => {
        if (editData){
            await updateTask(editData.id, taskObj);
            setEditData(null);
        } else {
            await addTask(taskObj);
        }
        fetchTasks();
    };

    const handleEdit = (task) => setEditData(task);

    return(
        <>
        <TaskForm onSubmit={handleSubmit}
        editData={editData}/>
        <TaskTable tasks={tasks}
        onEdit={handleEdit}/>
        </>
    )   
}