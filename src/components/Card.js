import React, {useState} from 'react';
import { useNavigate } from 'react-router';
import EditTask from '../modals/EditTask'

const Card = ({taskObj, index, deleteTask, updateListArray, updateTaskList, setUpdateTaskList}) => {
    const [modal, setModal] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);
    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }
    const updateCancel = () => {
        setUpdateModal(!updateModal);
    }
   
    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)  
    }

    return (
        <div className = "card-wrapper mr-5" style={{margin: "20px"}}>
            <div className= "card-top" style={{"backgroundColor": colors[index%5].primaryColor}}></div>
            <div className = "task-holder">
                <span className="card-header" style={{"backgroundColor": colors[index%5].secondaryColor, "borderRadius": "10px"}}>{taskObj.Name}</span>
                <p className = "mt-3" style={{wordWrap: "break-word"}}>{taskObj.Description}</p>

                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i class = "fa fa-edit mr-3" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer", padding: "20px"}} onClick = {() => setUpdateModal(true)}></i>
                    <i class="fa fa-trash" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>
                </div>
        </div>
        <EditTask modal = {modal} updateModal={updateModal} setUpdateModal={setUpdateModal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj} updateTaskList={updateTaskList} setUpdateTaskList={setUpdateTaskList}/>
        </div>
    );
};

export default Card;