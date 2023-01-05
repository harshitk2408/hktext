import PropTypes from 'prop-types';
document.title = "Textify"
export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/about">{props.about}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Contact</a>
                            </li>

                        </ul>
                        <input type="checkbox" onClick={props.toggle} className="btn-check" id="btn-check-2-outlined" checked autoComplete="off" />
                        <label className="btn btn-outline-secondary" htmlFor="btn-check-2-outlined">{props.mode}</label><br />
                    </div>
                </div>
            </nav>
        </div>
    )
}
Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string
};
Navbar.defaultProps = {
    title: "Enter Title",
    about: "About"
};