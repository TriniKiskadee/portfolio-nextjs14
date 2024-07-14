"use client";
import React from "react";
import Spline from "@splinetool/react-spline";

const Background = ({className}: {className?: string}) => {
    return (
        <Spline
            scene={'https://prod.spline.design/TUFzW6NrUlVBSDUk/scene.splinecode'}
            className={`top-0, w-[100%] h-[100%] z-[-1] ${className}`}
        />
    );
};

export default Background;