import React, { useState } from 'react'
// interface LayoutState = {

// }
export default function layoutState() {
    const [flexDirection, setFlexDirection] = useState<string>("column")
    const selectedValue = (value: string): void => setFlexDirection(value);
    return {
        flexDirection, selectedValue
    }
}
