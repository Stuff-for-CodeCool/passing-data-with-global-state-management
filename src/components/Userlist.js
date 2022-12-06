import users from "../data/users.json";
import Userdata from "./Userdata";

const UserList = () => {
    return (
        <div className="row">
            {users.map((u, i) => (
                <Userdata key={i} user={u} id={i} />
            ))}
        </div>
    );
};

export default UserList;
