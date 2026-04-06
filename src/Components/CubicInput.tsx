type InputProps = {
    a: number;
    b: number;
    c: number;
    d: number;
    setA: (value: number) => void;
    setB: (value: number) => void;
    setC: (value: number) => void;
    setD: (value: number) => void;
}

export const CubicInput = ({ a, b, c, d, setA, setB, setC, setD }: InputProps) => {
    console.log(a, b, c, d, setA, setB, setC, setD);
    return (
        <div>
            <label> a-value:</label>
            <input
                type="number"
                value={a}
                onChange={(e) => setA(Number(e.target.value))}
                required
            />

            <label> b-value:</label>
            <input
                type="number"
                value={b}
                onChange={(e) => setB(Number(e.target.value))}
                required
            />

            <label> c-value:</label>
            <input
                type="number"
                value={c}
                onChange={(e) => setC(Number(e.target.value))}
                required
            />
            
            <label> d-value:</label>
            <input
                type="number"
                value={d}
                onChange={(e) => setD(Number(e.target.value))}
                required
            />

        </div>
    )
}