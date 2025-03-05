"use client";

import { Box, Divider, Heading } from "@chakra-ui/react";
import { Form, FormLayout, SubmitButton, useForm } from "@saas-ui/react";

export default function ChildCareForm() {
  const saveHandler = (data: any) => {
    console.log(data);
  };

  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      minHeight="100vh"
      backgroundColor="gray.100" 
    >
      <Box 
        padding="20px" 
        width="50%" 
        border="1.8px solid gray.300" 
        borderRadius="8px"
        backgroundColor="white" 
        boxShadow="lg" 
        margin="10px"
      >
        <Form onSubmit={saveHandler}>
          {({ Field, DisplayIf }) => (
            <FormLayout>
              <FormLayout>
                <Heading size="md">Information</Heading>
                <FormLayout columns={2}>
                  <Field name="childName" label="Child Name" isRequired={true} />
                  <Field name="childEmailAddress" label="Child email address" isRequired={true} />
                </FormLayout>

                <FormLayout columns={2}>
                  <Field
                    name="childDateOfBirth"
                    label="Child date of birth"
                    type="date"
                    isRequired={true}
                  />
                  <Field
                    name="childSchoolSiteAssociated"
                    label="Child school/site associated"
                    isRequired={true}
                  />
                </FormLayout>

                <FormLayout columns={2}>
                  <Field name="childGrade" label="Child grade" isRequired={true} />
                </FormLayout>
              </FormLayout>
              <Divider my={4} height="1.8px" bg="gray.300" />

              <FormLayout>
                <Heading size="md">Child information</Heading>
                <FormLayout columns={3}>
                  <Field name="childPreferredName" label="Child preferred name" isRequired={true} />
                  <Field
                    name="preferredLanguageForTherapy"
                    label="Preferred language for therapy"
                    isRequired={true}
                  />
                </FormLayout>
              </FormLayout>
              <Divider my={4} height="1.8px" bg="gray.300" />

              <FormLayout>
                <Heading size="md">Parent/Guardian information</Heading>
                <FormLayout columns={3}>
                  <Field
                    name="parentGaurdianRelationshipToChild"
                    label="Parent/Gaurdian relationship to child"
                    type="select"
                    isRequired={true}
                    options={[
                      { value: "Mother", label: "Mother" },
                      { value: "Father", label: "Father" },
                      { value: "Brother", label: "Brother" },
                    ]}
                  />
                </FormLayout>

                <FormLayout columns={3}>
                  <Field
                    name="parentGaurdianFirstName"
                    label="Parent/Gaurdian first name"
                    isRequired={true}
                  />
                  <Field
                    name="parentGaurdianLastName"
                    label="Parent/Gaurdian last name"
                    isRequired={true}
                  />
                  <Field
                    name="parentGaurdianEmailAddress"
                    label="Parent/Gaurdian email address"
                    isRequired={true}
                  />
                </FormLayout>

                <FormLayout columns={3}>
                  <Field
                    name="parentGaurdianPhoneNumber"
                    label="Parent/Gaurdian phone number"
                    isRequired={true}
                  />
                  <Field
                    name="parentGaurdianLanguage"
                    label="Parent/Gaurdian language"
                    isRequired={true}
                  />
                </FormLayout>
              </FormLayout>
              <Divider my={4} height="1.8px" bg="gray.300" />

              <FormLayout>
                <Heading size="md">Additional care request information</Heading>
                <Field
                  name="canContactParent"
                  label="Can the parent/guardian listed above be contacted by Daybreak Health?"
                  type="radio"
                  columns={2}
                  isRequired={true}
                  options={[
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" },
                  ]}
                />
                <Field
                  name="whyDayBreak"
                  label="Why are you requesting Daybreak Health service for John Doe"
                  type="textarea"
                  isRequired={true}
                />
              </FormLayout>

              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
              >
                <Box color="red.500" fontSize="sm">
                  * Required Fields
                </Box>
                <SubmitButton width={"25%"} disableIfInvalid>Submit</SubmitButton>
              </Box>
            </FormLayout>
          )}
        </Form>
      </Box>
    </Box>
  );
}
