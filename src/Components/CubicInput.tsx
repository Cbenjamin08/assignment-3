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

export const Intro = ({ a, b, c, d, setA, setB, setC, setD }: InputProps) => {
    console.log(a, b, c, d, setA, setB, setC, setD);
}