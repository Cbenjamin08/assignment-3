type CubicEquationProps = {
    a: number;
    b: number;
    c: number;
    d: number;
};

export const CubicEquation = ({ a, b, c, d }: CubicEquationProps) => {
    let equation: string = "";

    equation += (a > 0 ? (a === 1 ? '' : a) : (Math.abs(a) === 1 ? '-' : a)) + 'x³';
    equation += (b === 0 ? "" : (b > 0 ? " + " + (b === 1 ? "" : b) : " - " + (Math.abs(b) === 1 ? "" : Math.abs(b))) + "x²");
    equation += (c === 0 ? "" : (c > 0 ? " + " + (c === 1 ? "" : c) : " - " + (Math.abs(c) === 1 ? "" : Math.abs(c))) + "x");
    equation += (d === 0 ? "" : (d > 0 ? " + " + d : " - " + Math.abs(d))) + " = 0";

    return (
        <div className="flex items-center justify-center min-h-[150px]">
            <h3 className="text-2xl font-semibold text-gray-800 bg-gray-100 px-6 py-3 rounded-2xl shadow-md">
                {equation}
            </h3>
        </div>
    );
};  