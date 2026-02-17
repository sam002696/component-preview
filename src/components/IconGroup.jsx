import React from "react";
import {
    HomeIcon,
    BellIcon,
    UserIcon,
} from "@heroicons/react/24/outline";

const IconGroup = () => {
    return (
        <div className=" py-3 px-2 bg-white">
            <div className="flex items-center gap-4">
                <HomeIcon className="h-6 w-6 text-indigo-600"/>
                <BellIcon className="h-6 w-6 text-sky-600"/>
                <UserIcon className="h-6 w-6 text-pink-600"/>
            </div>
        </div>
    );
};

export default IconGroup;
