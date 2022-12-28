import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTaskPopup = ({updateModal, setUpdateModal, toggle, updateTask, taskObj, updateTaskList, setUpdateTaskList}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else{
            setDescription(value)
        }

    }

    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
    },[])

    const handleUpdate = (e) => {
        e.preventDefault(); 
        let tempObj = {}
        /* tempObj['Name'] = taskName
        tempObj['Description'] = description*/
        tempObj.Name = taskName
        tempObj.Description = description
        updateTask(tempObj)
        setUpdateModal(false);
        setUpdateTaskList(tempObj)
    }

    return (
        <Modal isOpen={updateModal}>
            <ModalHeader toggle={toggle} className="allNotesHeadings">Update Task</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label className="allNotesHeadings">Task Name</label>
                        <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>
                    </div>
                    <div className = "form-group">
                        <label className="allNotesHeadings">Description</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
            <Button color="secondary" onClick={() =>{setUpdateModal(false)} }>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditTaskPopup;