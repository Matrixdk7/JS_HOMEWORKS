import React from 'react';

const OptionPills = ({ options = [], selected, onChange, }) => {
    return (
        <div className="flex flex-wrap gap-3">
            {options.map((option) => (
                <button
                    key={option}
                    type="button"
                    onClick={() => onChange?.(option)}
                    className={`inline-flex items-center justify-center rounded-full !px-6 !py-3 text-sm font-medium leading-none transition-colors ${
                        selected === option ? 'bg-black text-white' : 'bg-[#F0F0F0] text-gray-500 hover:bg-gray-200'
                    }`}
                >
                    {option}
                </button>
            ))}
        </div>
    );
};

export default OptionPills;