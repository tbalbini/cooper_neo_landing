import React from 'react';

const BackedByComponent: React.FC = () => {
    return (
        <div className="mt-8 flex flex-row items-center justify-center lg:justify-start">
        <div className="flex items-center text-gray-50 transform font-medium uppercase text-xs sm:px-0 text-center sm:text-xs rounded-xl leading-tight">
            <span>Backed BY</span>
        </div>
        <div className="ml-2 flex items-center justify-start">
            <img src="./images/buildspace.svg" className="h-6" alt="Y Combinator Logo" />
            <span className="ml-2 bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent sm:inline-block text-sm font-semibold">
            Buildspace
            </span>
        </div>
        </div>
    );
};

export default BackedByComponent;
