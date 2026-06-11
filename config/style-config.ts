const buttonStyle = {
    "height": "50px",
    "display": "flex",
    "line-height": "1",
    "font-size": "18px",
    "border-radius": "10px",
    "align-items": "center",
    "justify-content": "center",
    "border-color": "transparent"
}

const smallButtonStyle = {
    "height": "45px",
    "font-size": "16px",
    "border-radius": "6px"
}

const normalButtonStyle = {
    ...buttonStyle,
    "color": "#A8ABB2!important",
    "background-color": "rgb(233, 233, 235)"
}

const primaryButtonStyle = {
    ...buttonStyle,
    "color": "#ffffff!important",
    "background-color": "var(--dominColor)"
}

const primaryPlainButtonStyle = {
    "background-color": "transparent",
    "color": "var(--dominColor)!important",
    "border": "1px solid var(--dominColor)"
}

const successButtonStyle = {
    ...buttonStyle,
    "color": "#ffffff!important",
    "background-color": "#4cd964"
}

const dangerButtonStyle = {
    ...buttonStyle,
    "color": "#ffffff!important",
    "background-color": "#ff3b30"
}

export const styleConfig = {
    normalButtonStyle,
    primaryButtonStyle,
    primaryPlainButtonStyle,
    successButtonStyle,
    dangerButtonStyle,

    smallNormalButtonStyle: {
        ...normalButtonStyle,
        ...smallButtonStyle
    },

    smallPrimaryButtonStyle: {
        ...primaryButtonStyle,
        ...smallButtonStyle
    }
}