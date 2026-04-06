import { useRef, useEffect } from "react";

type CubicGraphProps = {
    a: number;
    b: number;
    c: number;
    d: number;
    roots: number[];
};

export const CubicGraph = ({ a, b, c, d, roots }: CubicGraphProps) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) {
            return;
        };

        const ctx = canvas.getContext("2d");

        if (!ctx) {
            return;
        };

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const xCenter: number = canvas.width / 2;
        const yCenter: number = canvas.height / 2;
        const scale: number = 25;

        ctx.beginPath();
        ctx.strokeStyle = "#e0e0e0"
        ctx.lineWidth = 1;

        for (let x: number = 0; x <= canvas.width; x += scale) { 
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
        };

        for (let y: number = 0; y <= canvas.height; y += scale) {
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
        };

        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = "#000000";

        ctx.moveTo(xCenter, 0);
        ctx.lineTo(xCenter, canvas.height);

        ctx.moveTo(0, yCenter);
        ctx.lineTo(canvas.width, yCenter);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = "#ff0000";

        const xStart: number = -canvas.width / 2 / scale;
        const xEnd: number = canvas.width / 2 / scale;
        const yStart: number = a * xStart * xStart * xStart + b * xStart * xStart + c * xStart + d;

        ctx.moveTo(xCenter + xStart * scale, yCenter - yStart * scale);

        for (let x: number = xStart; x <= xEnd; x += 0.05) {
            const y: number = a * x * x * x + b * x * x + c * x + d;
            const canvasX: number = xCenter + x * scale;
            const canvasY: number = yCenter - y * scale;
            ctx.lineTo(canvasX, canvasY);
        };

        ctx.stroke();

        ctx.strokeStyle = "#002aff";
        ctx.fillStyle = "#002aff";

        for (let i: number = 0; i < roots.length; i++) {
            const root: number = roots[i];
            const x: number = xCenter + root * scale;
            const y: number = yCenter;

            ctx.beginPath();
            ctx.arc(x, y, 4, 0, 2 * Math.PI);
            ctx.fill();
        };
    }, [a, b, c, d]);

    return (
        <div>
            <canvas ref={canvasRef} width={700} height={700}></canvas>
        </div> 
    )
};