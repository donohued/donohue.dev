import React, { ReactNode, createContext, useContext, useState } from 'react';
import AboutMeWindow from './windows/AboutMeWindow';

interface WindowContextType {
    windowList: JSX.Element[];
    openWindow: (window: JSX.Element) => void;
    closeWindow: (window: JSX.Element) => void;
  }

const WindowContext = createContext<WindowContextType | null>(null);

export const WindowProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [windowList, setWindowList] = useState<JSX.Element[]>([<AboutMeWindow title="About Me" />]);
    

  function openWindow(window: JSX.Element) {
    console.log(window);
    if (windowList.some(win => win.type === window.type)) {
        //console.log('Window already open');
    } else {
        setWindowList([...windowList, window]);
    }
}

function closeWindow(window: JSX.Element) {
    //console.log(windowList);
    setWindowList(windowList.filter((win) => win.type !== window.type))
}

  return (
    <WindowContext.Provider value={{ windowList, openWindow, closeWindow }}>
      {children}
    </WindowContext.Provider>
  );
};

export const useWindowContext = () => useContext(WindowContext);