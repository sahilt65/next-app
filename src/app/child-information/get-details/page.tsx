'use client'
import React from "react";
import { 
  Box, Text, Spinner, Center, Card, CardHeader, CardBody, CardFooter 
} from "@chakra-ui/react";
import { useGetChildCareRequestQuery } from "@/generated";

const ChildCareRequestFormDetails = () => {
  const { data, error } = useGetChildCareRequestQuery({
      id: "664" , // Hardcoded ID
  });


  if (error) {
    return (
      <Center minH="100vh">
        <Text color="red.500">Error: {error}</Text>
      </Center>
    );
  }

  const childData = data?.childCareRequestForm;

  return (
    <Center minH="100vh">
      <Card width="400px" shadow="md" borderRadius="md" p={4}>
        <CardHeader>
          <Text fontSize="xl" fontWeight="bold">
            Child Care Request Details
          </Text>
        </CardHeader>
        <CardBody>
          <Box mb={3}>
            <Text fontWeight="bold">Child Name:</Text>
            <Text>{childData?.childName}</Text>
          </Box>
          <Box mb={3}>
            <Text fontWeight="bold">Child Email:</Text>
            <Text>{childData?.childEmailAddress}</Text>
          </Box>
          <Box mb={3}>
            <Text fontWeight="bold">Parent Email:</Text>
            <Text>{childData?.parentGaurdianEmailAddress}</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Request ID:</Text>
            <Text>{childData?.id}</Text>
          </Box>
        </CardBody>
        <CardFooter>
          <Text fontSize="sm" color="gray.500">
            Last updated just now
          </Text>
        </CardFooter>
      </Card>
    </Center>
  );
};

export default ChildCareRequestFormDetails;
