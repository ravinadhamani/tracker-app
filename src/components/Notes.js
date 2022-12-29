import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router';
import CreateTask from '../modals/CreateTask'
import Card from './Card';
import Home from './Home';

const Notes = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    const [updateTaskList, setUpdateTaskList] = useState([])

    useEffect(() => {
        let arr = localStorage.getItem("taskList")
        console.log("line 13", arr)
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
            
        }
    }, [])

    const navigate = useNavigate();
    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        navigate("/notes");
        //window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        setUpdateTaskList(tempList)
        console.log("unique", tempList)
        //navigate("/notes");
        //window.location.reload()
       
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
        window.location.reload()
    }


    return (
        <>
        <Home/>
            <div className = "header text-center">
                <h3 className="allNotesHeadings">Add Notes</h3>
                <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)} >Create Notes</button>
            </div>
            <div className = "task-container">
            {taskList && taskList.map((obj , index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray} updateTaskList={updateTaskList} setUpdateTaskList={setUpdateTaskList}/> )}
            </div>
            <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
        </>
    );
};

export default Notes;
