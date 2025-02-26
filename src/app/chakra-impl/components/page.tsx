// 'use client'
import {
  CircularProgress,
  CircularProgressLabel,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

const Components = () => {
  return (
    <>
      <Heading size="16">Tabs</Heading>
      <Tabs isManual isFitted variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
           one!
          </TabPanel>
          <TabPanel>
           two!
          </TabPanel>
          <TabPanel>
            four!
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* <Heading size="16">Circular Progress</Heading> */}
      <CircularProgress value={40} >
        <CircularProgressLabel>40%</CircularProgressLabel>
      </CircularProgress>
      

    </>
  );
};

export default Components;
