import { useRef } from "react";
import { useAtom } from "jotai";
import state from "../state";

import users from "../data/users.json";

const Modal = () => {
    const [index, setIndex] = useAtom(state.index);
    const modalRef = useRef(null);

    if (index === null) return null;

    const { name, email, photo } = users[index];

    const handleClose = (e) => {
        e.preventDefault();
        modalRef.current.classList.add("close");

        modalRef.current.addEventListener("animationend", () => {
            setIndex(null);
        });
    };

    return (
        <div className="modal" ref={modalRef}>
            <a onClick={handleClose}>&times;</a>
            <img src={photo} alt={name} />
            <h1>{name}</h1>
            <small>{email}</small>
        </div>
    );
};

export default Modal;
