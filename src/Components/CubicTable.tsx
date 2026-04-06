type CubicTableProps = {
    p: number;
    q: number;
    discriminant: number;
    roots: number[];
};

export const CubicTable = ({ p, q, discriminant, roots }: CubicTableProps) => {
    return (
        <div className="flex justify-center py-6">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-gray-100 px-4 py-3 border-b">
                    <h2 className="text-lg font-semibold text-gray-700">
                        Cubic Details
                    </h2>
                </div>
                <table className="w-full text-left border-collapse">
                    <tbody>
                        <tr className="border-t">
                            <td className="px-4 py-2 font-medium text-gray-600">p</td>
                            <td className="px-4 py-2 text-gray-800">{p}</td>
                        </tr>
                        <tr className="border-t">
                            <td className="px-4 py-2 font-medium text-gray-600">q</td>
                            <td className="px-4 py-2 text-gray-800">{q}</td>
                        </tr>
                        <tr className="border-t">
                            <td className="px-4 py-2 font-medium text-gray-600">Discriminant</td>
                            <td className="px-4 py-2 text-gray-800">{discriminant}</td>
                        </tr>

                        <tr className="border-t">
                            <td className="px-4 py-2 font-medium text-gray-600">Root 1</td>
                            <td className="px-4 py-2 text-gray-800">{roots[0]}</td>
                        </tr>

                        <tr className="border-t">
                            <td className="px-4 py-2 font-medium text-gray-600">Root 2</td>
                            <td className="px-4 py-2 text-gray-800">
                                {roots.length === 3
                                    ? roots[1]
                                    : discriminant > 0
                                        ? "complex"
                                        : roots[0]}
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="px-4 py-2 font-medium text-gray-600">Root 3</td>
                            <td className="px-4 py-2 text-gray-800">
                                {roots.length === 3
                                    ? roots[2]
                                    : discriminant > 0
                                        ? "complex"
                                        : roots[0]}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};