export default function RenderItem({ array }) {
    return (
        <div className="menu-item">
            {array.map(item => (
                <li key={item.id}>
                    {item.name}
                    <img src={item.avata} alt="" />
                </li>
            ))}
        </div>
    );
}
