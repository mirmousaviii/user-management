'use client'

import React from "react";
import ReactDOM from 'react-dom'

export default React.memo(
    function PreloadImages() {
        // TODO: Use blur avatar per user in a dynamic API
        ReactDOM.preload("/blur-avatar.jpg", {as: 'image'});
        ReactDOM.preload("/default-avatar.jpg", {as: 'image'});

        return null;
    }
)