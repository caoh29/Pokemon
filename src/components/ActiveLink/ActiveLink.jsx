'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const style = {
    color: '#0070f3',
    textDecoration: 'underline',
    margin: '1rem'
}

export default function ActiveLink (props) {

    const pathName = usePathname();

    return (
        <Link style={pathName === props.directTo ? null : style} href={props.directTo} className={props.className}>{props.text}</Link>
    );
}