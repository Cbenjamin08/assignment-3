type CubicHistoryProps = {
    history: { a: number, b: number, c: number, d: number }[];
    setA: (value: number) => void;
    setB: (value: number) => void;
    setC: (value: number) => void;
    setD: (value: number) => void;
};

export const CubicHistory = ({ history, setA, setB, setC, setD }: CubicHistoryProps) => {
    return (
        <div className="flex justify-center py-6">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-gray-100 px-4 py-3 border-b">
                    <h2 className="text-lg font-semibold text-gray-700">
                        History
                    </h2>
                </div>
                <table className="w-full text-center border-collapse">
                    <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
                        <tr>
                            <th className="py-2">a</th>
                            <th className="py-2">b</th>
                            <th className="py-2">c</th>
                            <th className="py-2">d</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((coeff, i) => (
                            <tr
                                key={i}
                                className="cursor-pointer hover:bg-blue-50 transition border-t"
                                onClick={() => {
                                    setA(coeff.a);
                                    setB(coeff.b);
                                    setC(coeff.c);
                                    setD(coeff.d);
                                }}
                            >
                                <td className="py-2">{coeff.a}</td>
                                <td className="py-2">{coeff.b}</td>
                                <td className="py-2">{coeff.c}</td>
                                <td className="py-2">{coeff.d}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {history.length === 0 && (
                    <div className="text-center text-gray-400 py-4 text-sm">
                        No history yet
                    </div>
                )}
            </div>
        </div>
    );
};