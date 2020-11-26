import React from 'react';

interface HeadingProps {
    tag: number
}

const Heading: React.FC<HeadingProps> = ({children, tag, ...props}) =>{
    return React.createElement(`h${tag}`, props,children);
}

export default Heading;