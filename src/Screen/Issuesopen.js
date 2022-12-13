import { useSelector } from 'react-redux';
import '../style/ListIssues.css';
const Issuesopen = () => {
    const listIssues = useSelector(state => state.issues.listIssues)
    return (
        <div className='page'>
            {
                listIssues.map((i, index) => {

                    return (
                        <>
                            {
                                i.state === "opened" && (
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
export default Issuesopen