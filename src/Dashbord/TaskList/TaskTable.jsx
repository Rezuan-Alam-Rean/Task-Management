// TaskTable.js
const TaskTable = ({t,i}) => {
    const {title,description,status,deadline}=t; // Added 'deadline' to the destructuring
    return (
        <>
            <tr>
                <th>{i+1}</th> 
                <td>{title}</td> 
                <td>{status}</td> 
                <td>{description}</td> 
                <td>{deadline}</td> {/* Added this line */}
            </tr>
        </>
    );
};

export default TaskTable;
