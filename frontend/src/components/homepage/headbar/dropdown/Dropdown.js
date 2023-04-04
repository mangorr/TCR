import {Link, Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom';
import MedicalPage from '../../../medical/public/index';
// import App from '../../../App';


const Dropdown = ({ submenus, dropdown }) => {
    return (
        <div className={`dropdown ${dropdown ? "show" : ""}`}>
            {submenus.map((submenu, index) => (
                <li key={index} className="menu-items">
                    {/*<>{submenu.title}</>*/}
                    {/*<Link to={submenu.url}>{submenu.title}</Link><br />*/}

                    <a href={submenu.url} >{submenu.title}</a>
                    {/*<Router>*/}
                    {/*    <Routes>*/}
                    {/*        <div>*/}
                    {/*            <Route exact path={submenu.url} element={submenu.name} />*/}
                    {/*            {submenu.title}*/}
                    {/*        </div>*/}

                    {/*    </Routes>*/}
                    {/*</Router>*/}
                </li>
            ))}
        </div>
    );
};


export default Dropdown;