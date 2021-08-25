import { useState } from "react"

const useField = (type, initialValue = '') => {
    const [value, setValue] = useState(initialValue)

    const onChange = ({target}) => {
        setValue(target.value)
    }

    const clearValue = () => {
        setValue('')
    }

    return {
        type,
        value,
        onChange,
        clearValue
    }
}

export { useField }
