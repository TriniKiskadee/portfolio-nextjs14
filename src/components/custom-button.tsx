import {ArrowRight} from "lucide-react";

import {cn} from "@/lib/utils";

interface CustomButtonProps {
    label: string;
    className?: string;
    type?: 'submit' | 'reset';
}

const CustomButton = ({label, className, type}: CustomButtonProps) => {
    const backgroundColor = 'bg-[#EF476F] hover:bg-gray-800'
    const labelColor = 'text-gray-800 group-hover:text-[#EF476F]'
    const arrowBgColor = 'bg-gray-800 group-hover:bg-[#EF476F]'
    const arrowFontColor = 'text-[#EF476F]'
    const arrowFontHoverColor = 'text-gray-800'

    return (
        <div className="min-h-12 w-48">
            <button
                type={type}
                className={cn(
                    "group flex h-12 w-40 items-center justify-center gap-3 rounded-lg p-2 font-bold transition-colors duration-100 ease-in-out",
                    backgroundColor, className,
                )}
            >
                <span
                    className={cn(
                        "transition-colors duration-100 ease-in-out", labelColor,
                    )}
                >
                  {label}
                </span>
                <div
                    className={cn(
                        "relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-full transition-transform duration-100",
                        arrowBgColor,
                    )}
                >
                    <div
                        className="absolute left-0 flex h-7 w-14 -translate-x-1/2 items-center justify-center transition-all duration-200 ease-in-out group-hover:translate-x-0">
                        <ArrowRight
                            size={16}
                            className={cn(
                                "size-7 transform p-1 opacity-0 group-hover:opacity-100",
                                arrowFontHoverColor
                            )}
                        />
                        <ArrowRight
                            size={16}
                            className={cn(
                                "size-7 transform p-1 opacity-100 transition-transform duration-300 ease-in-out group-hover:opacity-0",
                                arrowFontColor
                            )}
                        />
                    </div>
                </div>
            </button>
        </div>
    );
}

export default CustomButton;