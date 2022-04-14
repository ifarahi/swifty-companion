import React, { createContext, useContext } from 'react';
import type { ParsedTabs } from './Tabs';

export interface TabsContextProps {
  activeIndex: number;
  onInternalTabClick: (key: string) => void;
  tabs: ParsedTabs[];
}

export const TabsContext = createContext<TabsContextProps | null>(null);

export const useTabsContext = () => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error(
      'useTabsContext should be called with a TabsContext provider',
    );
  }
  return context;
};
