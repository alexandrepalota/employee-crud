import {BsPersonCircle} from 'react-icons/bs'

export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <div class="container">
                <a className="navbar-brand" href="/">MyCRUD</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/departments/form">Departamentos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/employees/form">Funcionários</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-success" href="/signup">Cadastrar-se</a>
                        </li>
                        <a href="/signin" className="btn btn-primary">
                            <BsPersonCircle />
                            &nbsp; Login
                        </a>
                    </ul>
                </div>
            </div>
        </nav>
    )
}