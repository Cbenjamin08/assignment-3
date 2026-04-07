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

export const CubicInput = ({
    a, b, c, d,
    setA, setB, setC, setD,
    onSave
}: CubicInputProps) => {
    return (
        <div className="flex flex-col items-center py-8 space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">
                Cubic Solver
            </h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    onSave();
                }}
                className="flex items-end gap-6 flex-wrap justify-center bg-white px-6 py-4 rounded-2xl shadow-md border border-gray-200"
            >
                {[
                    { label: "a-value", value: a, setter: setA },
                    { label: "b-value", value: b, setter: setB },
                    { label: "c-value", value: c, setter: setC },
                    { label: "d-value", value: d, setter: setD },
                ].map(({ label, value, setter }) => (
                    <div key={label} className="flex flex-col">
                        <label className="text-sm text-gray-500 mb-1">
                            {label}:
                        </label>
                        <input
                            type="number"
                            step="any"
                            required
                            value={value}
                            onChange={(e) => setter(Number(e.target.value))}
                            className="w-24 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                        />
                    </div>
                ))}
                <button
                    type="submit"
                    className="h-[42px] px-5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow-sm"
                >
                    Save
                </button>
            </form>
        </div>
    );
};