/* eslint-disable no-unused-vars */
import editIcon from 'assets/pictures/Icon material-edit.svg';
import { Fragment, useState } from "react";
import AddressQuery from './AddressQuery';
import EditAddress from './EditAddress';

const AddressList = ({ idState }) => {
    const { data } = AddressQuery()
    const [show, setShow] = useState(false);
    const [id, setId] = idState

    const handleEdit = (id) => {
        setId(id)
        setShow(true)
    }

    return (
        <Fragment>
            <div className="address-section">
                <span><h3>Saved Address</h3></span>
                <span> <img src="/pictures/Icon ionic-ios-add.svg" alt="" /> Add new address</span>
            </div>

            <div className="address-edit-section row">
                {data.length > 0 ? (
                    <Fragment>
                        {data.map((address, idx) => {
                            const item = JSON.parse(address?.address)
                            return (
                                <Fragment key={idx}>
                                    <div className='col-sm-4'>
                                        <div className="card-address mt-4 mb-5">
                                            <div className="card-address-edit">
                                                <h5>{address?.title}</h5>
                                                <button className='btn' onClick={() => handleEdit(address?.id)}>
                                                    <img src={editIcon} alt="" />
                                                </button>
                                            </div>
                                            <div className="mt-3">
                                                <span>
                                                    <h5>
                                                        {item?.address}, <br />
                                                        {item?.city}, {item?.state}, <br />
                                                        {item?.country}, {item?.zip}
                                                    </h5>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Fragment>
                            )
                        })}
                    </Fragment>
                ) : (
                    <p className="text-center my-3">No Address Found</p>
                )}
            </div>

            <EditAddress modelState={[show, setShow]} id={id} />
        </Fragment>
    )
}

export default AddressList