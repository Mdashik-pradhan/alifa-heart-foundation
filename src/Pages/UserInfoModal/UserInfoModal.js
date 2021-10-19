import React from 'react';
import Modal from 'react-modal';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const customStyles = {
    content: {
        top: '38%',
        left: '71%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'yellow'
    },
};


const UserInfoModal = (props) => {
    const {setIsOpen, modalIsOpen} = props;
    const { user, logout } = useAuth()
    const history = useHistory();


    const closeModal = () => {
        setIsOpen(false);
    }

    const redirectToLogin = () => {
        closeModal()
        history.push('/login')
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className="w-60 p-3 rounded-md bg-green-100 mx-auto">
                    <div className="text-right">
                        <button className="bg-red-500 w-8 h-8 rounded text-white" onClick={closeModal}>X</button>
                    </div>
                    <div className="flex justify-center text-center">
                        <div>
                            <img className="rounded-full mb-2" src={user.photoURL} alt="" />
                            <h3>{user.displayName}</h3>
                            <Link onClick={closeModal} to="/user" className="bg-yellow-600 text-white px-3 py-1 rounded">View Profile</Link>
                            <button className="block mx-auto text-bold" onClick={logout}>Log Out</button>
                            {!user.email && redirectToLogin()}
                        </div>
                    </div>
                </div>
            </Modal>

        </div>
    );
};

export default UserInfoModal;