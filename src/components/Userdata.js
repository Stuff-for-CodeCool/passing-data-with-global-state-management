import { useAtom } from "jotai";
import state from "../state";

const Userdata = ({ user: { name, email, photo }, id }) => {
    const [_, setIndex] = useAtom(state.index);

    const handleClick = e => {
        e.preventDefault();
        setIndex(id);
    }

    return (
        <div className="user" onClick={handleClick}>
            <img src={photo} alt={"Picture of " + name} />
            <h1>{name}</h1>
        </div>
    );
};

export default Userdata;
