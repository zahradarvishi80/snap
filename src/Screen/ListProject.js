import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import "../style/LoginScreen.css"
import { useDispatch, useSelector } from "react-redux"
import { setListProject } from "../redux/features/project/projectSlice"
const ListProjects = () => {
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const listProject = useSelector((state) => state.project.listProject)
    const dispatch = useDispatch()
    useEffect(() => {

        fetch('https://gitlab.com/api/v4/projects?owned=true', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user}`,
            },
        })
            .then(response => response.json())
            .then((json) => {
                dispatch(setListProject(json))
                console.log(json);

            })
    }, [])


    const handleClick = (id) => {
        navigate(`/Issues/${id}`)
    }

    return (
        <div className="container d-flex justify-content-center align-items-center shadow-xl w-auto h-100">
            <div style={{ height: "90vh" }} className="d-flex justify-content-center align-items-center w-100 mt-4 shadow-lg bg-light">

                {listProject.map((i, index) => {
                    return (
                        <div onClick={() => handleClick(i.id)} className="d-flex m-2 flex-column border rounded bg-body shadow-lg w-25 h-50 justify-content-start align-items-start" id={index} key={i.id}>
                            {/*  */}
                            <div className="d-flex flex-row w-100  bg-light" >
                                <img src={i.owner.avatar_url} alt={i.name} className="rounded-circle m-2 w-25 h-75" />
                                <div className="flex-column">
                                    <h6 className="m-2">@{i.namespace.path} </h6>
                                    <p className="m-2">UserId : {i.namespace.id} </p>
                                    {i.owner.state === 'active' ? (
                                    <h6 className="text-success m-2">{i.owner.state}</h6>
                                ) : (
                                    <h6 className="text-danger m-2">{i.owner.state}</h6>
                                )}
                                </div>
                                

                            </div>
                            {/* <i className="bi bi-star-half"></i> */}
                            <h6 className="m-3" >{i.path_with_namespace} </h6>
                            <small className="h6 m-2">Project-Id : {i.id}</small>
                            <p className="h6 m-2">Project-Name : {i.name} </p>
                            <p className="h6 m-2">Score : {i.star_count}
                            
                             </p>

                             {/* <i className="bi bi-star-fill"></i> */}
                        </div>
                    )
                })}</div>
            {/* <button onClick={() => navigate('/')} >go to home</button> */}
        </div>
    )
}

export default ListProjects