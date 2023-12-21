

const TaskTable = ({t,i}) => {
    const {title,description,status}=t;
    return (
        <>
        <tr>
        <th>{i+1}</th> 
        <td >{title}</td> 
        <td >{status}</td> 
        <td >{description}</td> 

      </tr>
     </>
    );
};

export default TaskTable;