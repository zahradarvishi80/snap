
import '../style/ListIssues.css';
import { useSelector } from "react-redux";
const Issuesclose = () => {
    const listIssues = useSelector(state => state.issues.listIssues)
    return (
        <div className='page'>

            {
                listIssues.map((i, index) => {

                    return (
                        <>
                            {
                                i.state === "closed" && (
                                    <div className='box' key={i.id}>
                                        <div className='mohtava'>
                                            <p className='title'> {i.title}</p>
                                            <p>{i.description} </p>
                                        </div>
                                    </div>
                                )
                            }
                        </>
                    )
                })
            }
        </div>
    )
}
export default Issuesclose