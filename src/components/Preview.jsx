import {useRef, useLayoutEffect, useState} from "react";

const PreviewItem = ({children}) => {
    const measureRef = useRef(null);
    const previewRef = useRef(null);

    const [measured, setMeasured] = useState({
        contentWidth: 0,
        contentHeight: 0,
        previewWidth: 0,
    });

    useLayoutEffect(() => {
        if (!measureRef.current || !previewRef.current) return;

        const update = () => {
            setMeasured({
                contentWidth: measureRef.current.offsetWidth,
                contentHeight: measureRef.current.offsetHeight,
                previewWidth: previewRef.current.offsetWidth,
            });
        };

        update();

        const ro = new ResizeObserver(update);
        ro.observe(measureRef.current);
        ro.observe(previewRef.current);

        return () => ro.disconnect();
    }, []);

    const hasMeasurement =
        measured.contentWidth > 0 &&
        measured.contentHeight > 0 &&
        measured.previewWidth > 0;

    const isSection =
        hasMeasurement && measured.contentWidth > measured.previewWidth;

    let scale = 1;

    if (hasMeasurement) {
        if (isSection) {
            scale = measured.previewWidth / measured.contentWidth;
        } else {
            scale = Math.sqrt(
                measured.previewWidth / measured.contentWidth
            );
        }
    }

    return (
        <div
            ref={previewRef}
            className={`border border-gray-200 rounded-md overflow-hidden ${
                !isSection && hasMeasurement
                    ? "flex justify-center items-center p-3"
                    : ""
            }`}
            style={{
                height:
                    hasMeasurement && isSection
                        ? measured.contentHeight * scale
                        : "auto",
            }}
        >
            {/* Hidden measurer */}
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

            {/* Visible preview */}
            {hasMeasurement && (
                <div
                    style={{
                        width: measured.contentWidth,
                        transform: `scale(${scale})`,
                        transformOrigin: isSection
                            ? "top left"
                            : "center",
                        pointerEvents: "none",
                    }}
                >
                    {children}
                </div>
            )}
        </div>
    );
};

const Preview = ({children}) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="w-full">
                <PreviewItem>{children}</PreviewItem>
            </div>

            <div className="w-2/4">
                <PreviewItem>{children}</PreviewItem>
            </div>

            <div className="w-1/3">
                <PreviewItem>{children}</PreviewItem>
            </div>
        </div>
    );
};


export default Preview;
