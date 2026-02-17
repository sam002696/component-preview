import {useRef, useLayoutEffect, useState} from "react";

const PREVIEW_SIZES = [
    {key: "lg", width: 300},
    {key: "sm", width: 220},
    {key: "xs", width: 160},
];

const PreviewItem = ({
                         width,
                         children,
                         previewType,
                         baseWidth,
                         previewBaseWidth,
                         elementBaseWidth,
                     }) => {
    const measureRef = useRef(null);
    const [measuredHeight, setMeasuredHeight] = useState(0);

    //  Measuring untransformed content
    useLayoutEffect(() => {
        if (!measureRef.current) return;

        const ro = new ResizeObserver(([entry]) => {
            setMeasuredHeight(entry.contentRect.height);
        });

        ro.observe(measureRef.current);
        return () => ro.disconnect();
    }, []);

    const scale =
        previewType === "section"
            ? width / previewBaseWidth
            : width / elementBaseWidth;

    return (
        <div
            className={`border border-gray-200 rounded-md overflow-hidden ${
                previewType === "element"
                    ? "flex justify-center items-center"
                    : ""
            }`}
            style={{
                width,
                height:
                    previewType === "section" && measuredHeight > 0
                        ? measuredHeight * scale
                        : "auto",
                padding: previewType === "element" ? 12 : 0,
            }}
        >

            {/*  Hidden measurer (real layout, no scale) */}
            {previewType === "section" && (
                <div
                    ref={measureRef}
                    style={{
                        width: baseWidth,
                        position: "fixed",
                        top: -10000,
                        left: -10000,
                        visibility: "hidden",
                        pointerEvents: "none",
                    }}
                >
                    {children}
                </div>
            )}

            {/* Visible preview */}
            {previewType === "section" && (
                <div
                    style={{
                        width: baseWidth,
                        transform: `scale(${scale})`,
                        transformOrigin: "top left",
                        pointerEvents: "none",
                    }}
                >
                    {children}
                </div>
            )}

            {/*  Element preview */}
            {previewType === "element" && (
                <div
                    style={{
                        transform: `scale(${scale})`,
                        transformOrigin: "center",
                        pointerEvents: "none",
                    }}
                >
                    {children}
                </div>
            )}
        </div>
    );
};

const SectionPreview = ({
                            children,
                            baseWidth = 1400,
                            previewBaseWidth = 1400,
                            previewType = "section",
                            elementBaseWidth = 300,
                        }) => {
    return (
        <div className="space-y-2">
            {PREVIEW_SIZES.map(({key, width}) => (
                <PreviewItem
                    key={key}
                    width={width}
                    previewType={previewType}
                    baseWidth={baseWidth}
                    previewBaseWidth={previewBaseWidth}
                    elementBaseWidth={elementBaseWidth}
                >
                    {children}
                </PreviewItem>
            ))}
        </div>
    );
};

export default SectionPreview;
