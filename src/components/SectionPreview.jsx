import React from 'react';

const SectionPreview = ({children, width = 1400, previewWidth = 300}) => {
    const scale = previewWidth / width;

    return (
        <div
            className="overflow-hidden border border-gray-200 rounded-lg bg-gray-100"
            style={{width: previewWidth}}
        >
            <div
                style={{
                    width,
                    transform: `scale(${scale})`,
                    transformOrigin: "top left",
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default SectionPreview;
