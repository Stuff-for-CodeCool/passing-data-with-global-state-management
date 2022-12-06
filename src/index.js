import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "the-new-css-reset/css/reset.css";
import "./index.css";

import UserList from "./components/Userlist";
import Modal from "./components/Modal";

createRoot(document.querySelector("#root")).render(
    <StrictMode>
        <UserList />
        <Modal />
    </StrictMode>
);
