import React from 'react'

export default function Alert(props) {
    const capitalize = (name) => {
        const n = name.toLowerCase();
        return n.charAt(0).toUpperCase() + n.slice(1);
    }
    return (
        props.alert && <div class={`alert alert-${props.alert.type}`} role="alert">
            <strong>{capitalize(props.alert.type)} !! </strong> {props.alert.msg}
        </div>
    )
}
