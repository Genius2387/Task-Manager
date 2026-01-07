import { useEffect, useState } from "react";

export default function TaskForm({ onSubmit, editData }) {
  const [formData, setFormData] = useState({
    taskTitle: "",
    taskDescription: "",
    taskStatus: "Pending",
    priority: "Medium",
    dueDate: "",
  });

  useEffect(() => {
    if (editData) setFormData(editData);
  }, [editData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      taskTitle: "",
      taskDescription: "",
      taskStatus: "Pending",
      priority: "Medium",
      dueDate: "",
    });
  };

  return (
    <form className="card p-3 mb-4" onSubmit={handleSubmit}>
      <div className="row mb-2">
        <div className="col">
          <input
            className="form-control"
            placeholder="Task Title"
            name="taskTitle"
            value={formData.taskTitle}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col">
          <select
            className="form-control"
            name="taskStatus"
            value={formData.taskStatus}
            onChange={handleChange}
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>
      </div>

      <textarea
        className="form-control mb-2"
        placeholder="Task Description"
        name="taskDescription"
        value={formData.taskDescription}
        onChange={handleChange}
        required
      />

      <div className="row mb-2">
        <div className="col">
          <select
            className="form-control"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <div className="col">
          <input
            type="date"
            className="form-control"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <button className="btn btn-primary w-100">
        {editData ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}
