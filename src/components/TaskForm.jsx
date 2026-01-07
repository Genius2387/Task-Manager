import { useEffect, useState } from "react";

export default function TaskForm({
    onSubmit,editData
}){
    const [formData, setFormData] = useState({
        taskTitle:"",
        taskDescription:"",
        taskStatus:"Pending",
        priority:"Medium",
        dueDate:""
    });
    useEffect(()=>{
        if (editData) setFormData(editData);
    },[editData]);

    const handleChange = (e) =>{
        setFormData({...formData,[e.target.name]:e.target.value});

        };

    const handleSubmit =(e)=>{
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            taskTitle:"",
        taskDescription:"",
        taskStatus:"Pending",
        priority:"Medium",
        dueDate:""
    
        });
    }



    return(
        <form className="card p-3 mb-4"
        onSubmit={handleSubmit}>
            <div className="row mb-2">
                <div className="col">
                    <input
                    className="form-control"
                    name="taskTitle"
                    type="text"
                    placeholder="Task Title"
                    value={formData.taskTitle}
                    onChange={handleChange}
                    />
                </div>
            
            <div className="col">
            <select 
            name="taskStatus"
            className="form-control"
            value={formData.taskStatus}
            >
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>

            </select>
            </div>
            </div>

            <textarea
            name="taskDescription"
            className="form-control mb-2"
            value={formData.taskDescription}
            onChange={handleChange}
            />

            <div className="row mb-2">
                <div className="col">
                    <select
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
                name="dueDate"
                className="form-control mb-2"
                value={formData.dueDate}
                onChange={handleChange}
                />

                </div>
            </div>
            <button className="btn btn-primary">
                
            
                
                Submit
            </button>


        </form>
    );
}