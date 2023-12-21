// TaskManagement.js
import { useEffect, useState } from "react";
import ManageTask from "./ManageTask";
import { Table } from "react-bootstrap";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const TaskManagement = () => {
    const [task,setTask]=useState([]);

    useEffect(()=>{
        fetch("https://task-management-server-tan.vercel.app/task")
        .then((res) => res.json())
        .then((data) => {
          setTask(data);
        });
    },[])
    const handleDelete = (id) => {
        const proceed = toast("Are you sure ,you want to delete");
        if (proceed) {
          fetch(`https://task-management-server-tan.vercel.app/taskDelete/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                Swal.fire({
                  title: "success!",
                  text: "Delete Succesfull",
                  icon: "success",
                  confirmButtonText: "Cool",
                });
                const remains = task.filter((t) => t._id !== id);
                setTask(remains);
              }
            });
        }
      };
    return (
     <div className="text-center mt-3 mb-3 p-3">
           <Table responsive>
        <thead>
          <tr>
              <th>Index</th>
            <th>Title</th>
            <th>priority</th>
            <th>Description</th>
            <th>Deadline</th> {/* Added this line */}
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {
          task.map((t, i) => (
              <ManageTask key={t._id} t={t} i={i} handleDelete={handleDelete}></ManageTask>
            ))
        }
        </tbody>
      </Table>
     </div>
    );
};

export default TaskManagement;
