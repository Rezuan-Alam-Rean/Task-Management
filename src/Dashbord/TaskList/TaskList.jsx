import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import TaskTable from "./TaskTable";


const TaskList = () => {
    const [task,setTask]=useState([]);

    useEffect(()=>{
        fetch("https://task-management-server-iota.vercel.app/task")
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setTask(data);
        });
    },[])
    return (
        <div className="text-center mt-5 mb-5 p-3">
            <h3 className="my-5">All Task</h3>
            <Table responsive>
      <thead>
        <tr>
            <th>Index</th>
          <th> Title  </th>
          <th> Status  </th>
          <th> Description  </th>
        </tr>
      </thead>
      <tbody>
      {
        task.map((t, i) => (
            <TaskTable key={t._id} t={t} i={i}></TaskTable>
          ))
      }
      </tbody>
    </Table>
        </div>
    );
};

export default TaskList;