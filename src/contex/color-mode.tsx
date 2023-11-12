import React from "react";

const ColorModeContext = React.createContext(
    {
        toggleColorMode: () => {
        }
    }
);

interface Props extends React.PropsWithChildren {
    render: (mode: 'light' | 'dark') => any
}

export const ColorModeProvider: React.FC<Props> = ({render}) => {
    // TODO: Check system preferences
    // TODO: Add state to localStorage
    const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            {render(mode)}
        </ColorModeContext.Provider>
    );
}

export default ColorModeContext;