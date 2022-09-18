import { createContext, useState } from 'react';

export const ViewContext = createContext();

export const SelectedViewProvider = ({ children }) => {
    const [selectedView, setSelectedView] = useState('magazineView');

    return (
        <ViewContext.Provider value={{ selectedView, setSelectedView }}>
            {children}
        </ViewContext.Provider>
    );
}