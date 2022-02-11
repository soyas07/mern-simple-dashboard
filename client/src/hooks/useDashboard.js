import React, { useState } from 'react'

function useDashboard() {

    const [isEnabled, setEnabled] = useState(false)
    const [isEnabledLogout, setEnabledLogout] = useState(false)

    const checkLike = e => {
        setEnabled(!isEnabled)
    }

    return { isEnabled, checkLike, isEnabledLogout, setEnabledLogout }
}

export default useDashboard