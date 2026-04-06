type CubicTableProps = {
    p: number;
    q: number;
    discriminant: number;
    roots: number[];
};

export const CubicTable = ({ p, q, discriminant, roots}: CubicTableProps) => {
    return (
        <table>
            <tr>
                <td>p</td>
                <td>{p}</td>
            </tr>
            <tr>
                <td>q</td>
                <td>{q}</td>
            </tr>
            <tr>
                <td>Discriminant</td>
                <td>{discriminant}</td>
            </tr>
            <tr>
                <td>Root 1</td>
                <td>{roots[0]}</td>
            </tr>
            <tr>
                <td>Root 2</td>
                <td>{roots.length === 3 ? roots[1] : discriminant > 0 ? "complex" : roots[0]}</td>
            </tr>
            <tr>
                <td>Root 3</td>
                <td>{roots.length === 3 ? roots[2] : discriminant > 0 ? "complex" : roots[0]}</td>
            </tr>
        </table>
    )
}