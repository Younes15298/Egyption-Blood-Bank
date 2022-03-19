import { Link } from "react-router-dom";

const Links = ({
    paragraph,
    link,
    path
}) => {
    return (
        <>
            <div className="login d-flex">
                <p>{paragraph}</p>
                <Link to={path}> {link}</Link>
            </div>
        </>
    )
}

export default Links;