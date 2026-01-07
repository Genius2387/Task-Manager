export default function TaskTable({
    tasks, onEdit
}){

    return(
        <table className="table table-bordered">
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
                {tasks.map((t)=>(
                    <tr key={t.id}>
                        <td>{t.tasktitle}</td>
                        <td>{t.taskDescription}</td>
                        <td>{t.taskStatus}</td>
                        <td>{t.priority}</td>
                        <td>{t.dueDate}</td>

                    <td>
                    <button className="btn btn-warning"
                    onClick={()=>onEdit(t)}>Edit</button>

                    </td>
                    </tr>
                ))}
            </tbody>
            </table>
    );
}