import {useRef, useLayoutEffect, useState} from "react";

const PREVIEW_SIZES = [
    {key: "lg", width: 300},
    {key: "sm", width: 220},
    {key: "xs", width: 160},
];


const PreviewItem = ({width, children}) => {

    const measureRef = useRef(null);

    const [measured, setMeasured] = useState({
        width: 0,
        height: 0,
    });

    useLayoutEffect(() => {
        if (!measureRef.current) return;

        const ro = new ResizeObserver(([entry]) => {
            setMeasured({
                width: entry.contentRect.width,
                height: entry.contentRect.height,
            });
        });

        ro.observe(measureRef.current);
        return () => ro.disconnect();
    }, []);

    const hasMeasurement = measured.width > 0 && measured.height > 0;

    const isSection = hasMeasurement ? measured.width > width : false;
    const scale = hasMeasurement ? width / measured.width : 1;

    return (
        <div
            className={`border border-gray-200 rounded-md overflow-hidden ${
                !isSection && hasMeasurement ? "flex justify-center items-center p-3" : ""
            }`}
            style={{
                width,
                height:
                    hasMeasurement && isSection
                        ? measured.height * scale
                        : "auto",
            }}
        >
            {/* Hidden measurer (ALWAYS rendered) */}
            <div
                ref={measureRef}
                style={{
                    width: "max-content",
                    position: "fixed",
                    top: -10000,
                    left: -10000,
                    visibility: "hidden",
                    pointerEvents: "none",
                }}
            >
                {children}
            </div>

            {/*  Visible preview (only after measurement) */}
            {hasMeasurement && (
                <div
                    style={{
                        width: measured.width,
                        transform: `scale(${scale})`,
                        transformOrigin: isSection ? "top left" : "center",
                        pointerEvents: "none",
                    }}
                >
                    {children}
                </div>
            )}
        </div>
    );
};

const SectionPreview = ({children}) => {
    return (
        <div className="space-y-2">
            {PREVIEW_SIZES.map(({key, width}) => (
                <PreviewItem key={key} width={width}>
                    {children}
                </PreviewItem>
            ))}
        </div>
    );
};

export default SectionPreview;
