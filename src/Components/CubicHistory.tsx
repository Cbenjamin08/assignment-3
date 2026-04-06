type CubicHistoryProps = {
    history: { a: number, b: number, c: number, d: number }[];
    setA: (value: number) => void;
    setB: (value: number) => void;
    setC: (value: number) => void;
    setD: (value: number) => void;
};

export const CubicHistory = ({ history, setA, setB, setC, setD }: CubicHistoryProps) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>History</th>
                </tr>
                <tr>
                    <th>a</th>
                    <th>b</th>
                    <th>c</th>
                    <th>d</th>
                </tr>
            </thead>
            <tbody>
                {history.map((coeff, i) => (
                    <tr
                        className="border border-[#ccc] cursor-pointer hover:bg-[#f0f0f0]"
                        key={i}
                        onClick={() => {
                            setA(coeff.a);
                            setB(coeff.b);
                            setC(coeff.c);
                            setD(coeff.d);
                        }}
                    >
                        <td>{coeff.a}</td>
                        <td>{coeff.b}</td>
                        <td>{coeff.c}</td>
                        <td>{coeff.d}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};