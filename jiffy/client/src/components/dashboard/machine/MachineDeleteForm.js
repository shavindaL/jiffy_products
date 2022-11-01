import React from 'react';
import { useNavigate } from 'react-router-dom';

const MachineDeleteForm = ({ setError, id }) => {
    const navigate = useNavigate()

    const handleDeleteSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch('http://localhost:5000/api/machine/' + id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            console.log(json.error)
        }

        if (response.ok) {
            console.log('Machine deleted successfully.', json)
            navigate("/view-machine");
        }
    }

    return <>
        <div className="row mb-3">
            <div className="col-md-8 col-lg-9">
                <button data-bs-toggle="modal" data-bs-target="#verticalycentered" className="btn btn-danger">Delete Permanently</button>
                <div className="modal fade" id="verticalycentered" tabIndex={'-1'}  aria-modal="true" role="dialog">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Delete Machine</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                Are you sure you want to delete this machine?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button onClick={handleDeleteSubmit} type="button" className="btn btn-danger">Confirm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default MachineDeleteForm