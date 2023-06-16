import { Fragment } from 'react';
import Modal from 'react-bootstrap/Modal';
import AddressForm from './AddressForm';
import AddressQuery from './AddressQuery';

const EditAddress = ({ modelState, id }) => {
    const { data, isLoading } = AddressQuery(id)
    const [show, setShow] = modelState
    const handleClose = () => setShow(false);

    return (
        <Fragment>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {!isLoading ? (
                        <AddressForm data={data} handleClose={handleClose} />
                    ) : (
                        <p>Loading...</p>
                    )}
                </Modal.Body>
            </Modal>
        </Fragment>
    );
}

export default EditAddress