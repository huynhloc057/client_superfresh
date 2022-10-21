import TypeShip from "./TypeShip";

function TypeShips({ datas }) {
    return (<ul>
        {datas.map((item, index) => (
            <TypeShip
                key={index}
                data={item}
            />
        ))}
    </ul>);
};

export default TypeShips;