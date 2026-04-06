type CubicInputProps = {
    a: number;
    b: number;
    c: number;
    d: number;
    setA: (value: number) => void;
    setB: (value: number) => void;
    setC: (value: number) => void;
    setD: (value: number) => void;
    onSave: () => void;
};

export const CubicInput = ({ a, b, c, d, setA, setB, setC, setD, onSave }: CubicInputProps) => {
    return (
        <div className="flex justify-center py-6">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-200 p-6">


                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Cubic Solver
                </h1>


                <form
                    onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        onSave();
                    }}
                    className="space-y-4"
                >
                    {[
                        { label: "a", value: a, setter: setA },
                        { label: "b", value: b, setter: setB },
                        { label: "c", value: c, setter: setC },
                        { label: "d", value: d, setter: setD },
                    ].map(({ label, value, setter }) => (
                        <div key={label} className="flex flex-col">
                            <label className="text-sm text-gray-600 mb-1">
                                {label}-value
                            </label>
                            <input
                                type="number"
                                step="any"
                                required
                                value={value}
                                onChange={(e) => setter(Number(e.target.value))}
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                        </div>
                    ))}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition shadow"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};