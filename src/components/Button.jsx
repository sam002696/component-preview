import React from "react";

const Button = ({
                    label = "Button",
                    onClick,
                    disabled = false,
                }) => {

    return (
        <div className="px-2 py-3 bg-white">
            <button
                onClick={onClick}
                disabled={disabled}
                className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold
            text-white shadow-xs hover:bg-green-500 focus-visible:outline-2
            focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
                {label}
            </button>
        </div>

    );
};

export default Button;
