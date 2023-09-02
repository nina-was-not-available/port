import theme from "./Theme"

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    fmin?: number
    fmax?: number
}

export const font = ({family, weight, color, lineHeight, fmin, fmax}: FontPropsType) => `
    font-family: ${family || 'Dancing Script'};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.text2};
    lineHeight: ${lineHeight || 1.2};
    Fmin: ${fmin || 36};
    Fmax: ${fmax || 50};
    font-size: calc( (100vw - 360px)/(1440 - 360) * (${fmax} - ${fmin}) + ${fmin}px); 
`