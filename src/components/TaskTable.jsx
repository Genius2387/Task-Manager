export default function TaskTable({ tasks, onEdit, onDelete }) {
  return (
    <table className="table table-bordered table-striped text-center">
      <thead className="table-dark">
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Due Date</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.taskTitle}</td>
            <td>{task.taskDescription}</td>
            <td>{task.taskStatus}</td>
            <td>{task.priority}</td>
            <td>{task.dueDate}</td>
            <td>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => onEdit(task)}
              >
                Edit
              </button>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(task.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
