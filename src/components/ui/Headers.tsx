import { Link } from "react-router-dom";

const Headers = () => {
    return (
        <div className="flex justify-evenly bg-blue-700 text-white p-5">
            <div>Logo</div>
            <div>
                <Link to={''}></Link>
            </div>
            <div>Hamburger</div>
        </div>
    );
};

export default Headers;