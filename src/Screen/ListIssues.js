import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import '../style/ListIssues.css';
import { useSelector, useDispatch } from "react-redux";
import { setIssues } from "../redux/features/issue/issuesSlice";
import Issuesclose from "./Issuesclose";
import Issuesopen from "./Issuesopen";
const Issueslist = () => {
    const user = useSelector((state) => state.user)
    const { id } = useParams()
    const dispatch = useDispatch()


    useEffect(() => {
        async function getUser() {
            try {
                const response = await fetch(`https://gitlab.com/api/v4/projects/${id}/issues`, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${user}`,
                    },
                })
                    .then((response) => response.json())
                    .then((data) => {
                        dispatch(setIssues(data))
                        console.log("issus", data);
                    })

            } catch (err) {
                console.log(err);
            }
        }

        getUser();
    }, [])

    return (


        <div className="first">
            <div className="column" >
                <h2>issuesOpened</h2>
                <Issuesopen />
            </div>
            <div className="column">
                <h2>issuesCloseed</h2>
                <Issuesclose />
            </div>
        </div>

    )

}
export default Issueslist