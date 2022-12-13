import { useNavigate, useParams } from "react-router"
import { Link } from "react-router-dom"

const Header = () => {

    const navigate = useNavigate()
    const { id } = useParams()
    return (
        <>
        <nav>
            <Link to="close">
            <div
                className="close">
                <p className="p">closed</p>
            </div>
            </Link>
        </nav>

        <nav>
            <Link to="open">
            <div
                className="open">
                <p className="p">opend</p>
            </div>
            </Link>
        </nav>

        <nav>
            <Link to={`/issues/${id}`}>
            <div
                className="open">
                <p className="p">All</p>
            </div>
            </Link>
        </nav>
           
            
           
        </>
    )
}

export default Header