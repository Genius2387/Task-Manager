import { useEffect, useState } from "react";
import { getTasks, addTask, updateTask, deleteTask } from "../services/api";
import TaskForm from "../components/TaskForm";
import TaskTable from "../components/TaskTable";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [editData, setEditData] = useState(null);

  const fetchTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (err) {
      console.error("GET Error:", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleSubmit = async (taskObj) => {
    try {
      if (editData) {
        await updateTask(editData.id, taskObj);
        setEditData(null);
      } else {
        await addTask(taskObj);
      }
      fetchTasks();
    } catch (err) {
      console.error("Save Error:", err);
    }
  };

  const handleEdit = (task) => {
    setEditData(task);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete this task?")) return;
    try {
      await deleteTask(id);
      fetchTasks();
    } catch (err) {
      console.error("DELETE Error:", err);
    }
  };

  return (
    <>
      <TaskForm onSubmit={handleSubmit} editData={editData} />
      <TaskTable tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
    </>
  );
}
