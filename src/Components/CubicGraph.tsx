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
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const xCenter = canvas.width / 2;
        const yCenter = canvas.height / 2;
        const scale = 25;

        // Grid
        ctx.beginPath();
        ctx.strokeStyle = "#e5e7eb"; // Tailwind gray-200
        ctx.lineWidth = 1;

        for (let x = 0; x <= canvas.width; x += scale) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
        }

        for (let y = 0; y <= canvas.height; y += scale) {
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
        }

        ctx.stroke();

        // Axes
        ctx.beginPath();
        ctx.strokeStyle = "#111827"; // gray-900
        ctx.lineWidth = 2;

        ctx.moveTo(xCenter, 0);
        ctx.lineTo(xCenter, canvas.height);

        ctx.moveTo(0, yCenter);
        ctx.lineTo(canvas.width, yCenter);

        ctx.stroke();

        // Curve
        ctx.beginPath();
        ctx.strokeStyle = "#ef4444"; // red-500
        ctx.lineWidth = 2;

        const xStart = -canvas.width / 2 / scale;
        const xEnd = canvas.width / 2 / scale;
        const yStart = a * xStart ** 3 + b * xStart ** 2 + c * xStart + d;

        ctx.moveTo(xCenter + xStart * scale, yCenter - yStart * scale);

        for (let x = xStart; x <= xEnd; x += 0.05) {
            const y = a * x ** 3 + b * x ** 2 + c * x + d;
            ctx.lineTo(xCenter + x * scale, yCenter - y * scale);
        }

        ctx.stroke();

        // Roots
        ctx.fillStyle = "#2563eb"; // blue-600

        roots.forEach((root) => {
            const x = xCenter + root * scale;
            const y = yCenter;

            ctx.beginPath();
            ctx.arc(x, y, 5, 0, 2 * Math.PI);
            ctx.fill();
        });

    }, [a, b, c, d, roots]);

    return (
        <div className="flex justify-center items-center py-6">
            <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-200">
                <canvas
                    ref={canvasRef}
                    width={700}
                    height={700}
                    className="rounded-lg"
                />
            </div>
        </div>
    );
};