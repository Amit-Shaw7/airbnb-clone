"Use client";
import React from "react";

interface HeadingProps {
    title: string,
    subTitle?: string,
    center?: boolean,

}

const Heading: React.FC<HeadingProps> = ({
    title,
    subTitle,
    center
}) => {
    return (
        <div
            className={`${center ? "text-center" : "text-start"}`}
        >
            <h1
                className="text-2xl font-bold"
            >
                {title}
            </h1>

            <h3
                className="font-light text-neutral-500 mt-2"
            >
                {subTitle}
            </h3>
        </div>
    )
}

export default Heading;