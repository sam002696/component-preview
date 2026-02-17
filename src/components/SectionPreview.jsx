import {useRef, useLayoutEffect, useState} from "react";

const PREVIEW_SIZES = [
    {key: "lg", width: 300},
    {key: "sm", width: 220},
    {key: "xs", width: 160},
];

const SectionPreview = ({
                            children,
                            baseWidth = 1400,
                            previewBaseWidth = 1400,
                        }) => {
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);

    useLayoutEffect(() => {
        if (!contentRef.current) return;

        const observer = new ResizeObserver(([entry]) => {
            setContentHeight(entry.contentRect.height);
        });

        observer.observe(contentRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="space-y-2">
            {PREVIEW_SIZES.map(({key, width}) => {
                const scale = width / previewBaseWidth;
                const scaledHeight = contentHeight * scale;

                return (
                    <div
                        key={key}
                        className="border border-gray-200 rounded-md bg-gray-100 overflow-hidden"
                        style={{
                            width,
                            height: scaledHeight || "auto",
                        }}
                    >
                        <div
                            style={{
                                width: baseWidth,
                                transform: `scale(${scale})`,
                                transformOrigin: "top left",
                                pointerEvents: "none",
                            }}
                        >
                            <div ref={contentRef}>{children}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default SectionPreview;
