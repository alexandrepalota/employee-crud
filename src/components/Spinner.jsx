export default function Spinner() {
    return (
        <div className="d-flex align-items-center justify-content-center mt-2 bg-light p-2">
            <div className="spinner-border me-4" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <span>Aguarde...</span>
        </div>
    )
}