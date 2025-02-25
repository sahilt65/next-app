import {
    CommandBar,
    CommandBarContent,
    CommandBarInput,
    CommandBarList,
    CommandBarGroup,
    CommandBarItem,
    CommandBarSeparator,
    CommandBarLoading,
    CommandBarEmpty,
  } from '@saas-ui/command-bar'
  
  export default function SaasUI() {
    return (
      <CommandBar>
        <CommandBarContent>
          <CommandBarInput placeholder="Type a command or search..." />
  
          <CommandBarList>
            <CommandBarEmpty>No results found.</CommandBarEmpty>
  
            <CommandBarGroup heading="Fruits">
              <CommandBarItem>Apple</CommandBarItem>
              <CommandBarItem>Orange</CommandBarItem>
              <CommandBarSeparator />
              <CommandBarItem>Pear</CommandBarItem>
              <CommandBarItem>Blueberry</CommandBarItem>
            </CommandBarGroup>
  
            <CommandBarItem>Fish</CommandBarItem>
          </CommandBarList>
        </CommandBarContent>
      </CommandBar>
    )
  }