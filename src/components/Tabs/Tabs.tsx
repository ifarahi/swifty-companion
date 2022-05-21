import React, {
  useState,
  Children,
  isValidElement,
  ReactNode,
  useEffect,
} from 'react';
import { View, ViewProps } from 'react-native';
import { TabsContext } from './context';
import TabNavList from './TabNavList';
import TabPanelList from './TabPanelList';
import { TabPaneProps } from './TabPanelList/TabPane';
export interface ParsedTabs {
  node: React.ReactElement;
  props: TabPaneProps;
  key?: string;
}

export interface TabsProps extends ViewProps {
  defaultActiveKey?: string;
  onTabClick?: (activeKey: string) => void;
}

const parseTabs = (children: ReactNode): ParsedTabs[] => {
  const childsArray = Children.toArray(children);

  return Children.map(childsArray, (node) => {
    if (isValidElement(node)) {
      const key =
        node.key !== undefined ? String(node.key).slice(2) : undefined;
      return {
        key,
        props: node.props,
        node,
      };
    } else {
      return null;
    }
  }).filter((tab) => tab);
};

const findDefaultIndex = (tabs: ParsedTabs[], defaultKey?: string): number => {
  const defaultIndex = tabs.findIndex((tab) => tab.key === defaultKey);

  if (defaultIndex > -1) return defaultIndex;
  return 0;
};

const Tabs: React.FC<TabsProps> = ({
  children,
  onTabClick,
  defaultActiveKey,
  style,
  ...restProps
}) => {
  const tabs = parseTabs(children);
  const [activeKey, setActiveKey] = useState<string | undefined>(
    defaultActiveKey,
  );
  const [activeIndex, setActiveIndex] = useState<number>(
    findDefaultIndex(tabs, defaultActiveKey),
  );

  const onInternalTabClick = (key: string) => {
    onTabClick?.(key);
    setActiveKey(key);
  };

  useEffect(() => {
    setActiveIndex(tabs.findIndex((tab) => tab.key === activeKey));
  }, [activeKey]);

  const contextValue = {
    activeIndex,
    onInternalTabClick,
    tabs,
  };

  const TabPanelListProps = {
    tabs,
    activeKey,
  };

  return (
    <TabsContext.Provider value={contextValue}>
      <View style={style} {...restProps}>
        <TabNavList />
        <TabPanelList {...TabPanelListProps} />
      </View>
    </TabsContext.Provider>
  );
};

export default Tabs;
