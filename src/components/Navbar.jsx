import { Link, Outlet } from 'react-router-dom';

function Navbar() {

    return (
        <>

            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <div class="container-fluid">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="logo">
                            <a class="navbar-brand" href="#">
                                <img src="src\assets\download.svg" alt="Cretigal Logo" style={{ width: '60px', }} />
                            </a>
                        </div>
                        <h3 className="logo-text text-white text-large font-bold">
                            Cretigal
                        </h3>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>);

}

export default Navbar;