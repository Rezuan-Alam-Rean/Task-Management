import { useEffect, useState } from "react";
import ManageTask from "./ManageTask";
import { Table } from "react-bootstrap";
import Swal from "sweetalert2";


const TaskManagement = () => {
    const [task,setTask]=useState([]);

    useEffect(()=>{
        fetch("https://task-management-server-iota.vercel.app/task")
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setTask(data);
        });
    },[])
    const handleDelete = (id) => {
        const proceed = confirm("Are you sure ,you want to delete");
        if (proceed) {
          fetch(`https://task-management-server-iota.vercel.app/taskDelete/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
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
            <th> Title  </th>
            <th> Status  </th>
            <th> Description  </th>
            <th> Update  </th>
            <th> Delete  </th>
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