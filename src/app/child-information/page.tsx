"use client";

import { useAddChildCareRequestMutation } from "@/generated";
import { Box, Divider, Heading } from "@chakra-ui/react";
import { Form, FormLayout, SubmitButton } from "@saas-ui/forms";
import { yupResolver } from "@saas-ui/forms/yup";

import * as yup from "yup";

export default function ChildCareForm() {
  const mutation = useAddChildCareRequestMutation({
    onSuccess: (data) => {
      console.log("Mutation Success:", data);
    },
    onError: (error) => {
      console.error("Mutation Error:", error);
    },
  });
  const saveHandler = (data: any) => {
    mutation.mutateAsync({"form" : data});
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validationSchema = yup.object({
    childName: yup.string().required("Child name is required"),
    childEmailAddress: yup
      .string()
      .email("Invalid email format")
      .required("Child email is required"),
    childDateOfBirth: yup.date().required("Date of birth is required"),
    childSchoolSiteAssociated: yup.string().required("School/site is required"),
    childGrade: yup.string().required("Child grade is required"),
    childPreferredName: yup.string().required("Preferred name is required"),
    preferredLanguageForTherapy: yup.string().required("Language is required"),
    parentGaurdianRelationshipToChild: yup
      .string()
      .required("Relationship is required"),
    parentGaurdianFirstName: yup.string().required("First name is required"),
    parentGaurdianLastName: yup.string().required("Last name is required"),
    parentGaurdianEmailAddress: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    parentGaurdianPhoneNumber: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid"),
    parentGaurdianLanguage: yup.string().required("Language is required"),
    canContactParent: yup.string().required("Selection is required"),
    whyDayBreak: yup.string().required("Please provide a reason"),
  });

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
        <Form
          onSubmit={saveHandler}
          schema={validationSchema}
          resolver={yupResolver(validationSchema)}
        >
          {({ Field }) => (
            <FormLayout>
              <FormLayout>
                <Heading size="md">Information</Heading>
                <FormLayout columns={2}>
                  <Field name="childName" label="Child Name" isRequired />
                  <Field
                    name="childEmailAddress"
                    label="Child email address"
                    isRequired
                  />
                </FormLayout>

                <FormLayout columns={2}>
                  <Field
                    name="childDateOfBirth"
                    label="Child date of birth"
                    type="date"
                    isRequired
                  />
                  <Field
                    name="childSchoolSiteAssociated"
                    label="Child school/site associated"
                    isRequired
                  />
                </FormLayout>

                <FormLayout columns={2}>
                  <Field name="childGrade" label="Child grade" isRequired />
                </FormLayout>
              </FormLayout>
              <Divider my={4} height="1.8px" bg="gray.300" />

              <FormLayout>
                <Heading size="md">Child information</Heading>
                <FormLayout columns={3}>
                  <Field
                    name="childPreferredName"
                    label="Child preferred name"
                    isRequired
                  />
                  <Field
                    name="preferredLanguageForTherapy"
                    label="Preferred language for therapy"
                    isRequired
                  />
                </FormLayout>
              </FormLayout>
              <Divider my={4} height="1.8px" bg="gray.300" />

              <FormLayout>
                <Heading size="md">Parent/Guardian information</Heading>
                <FormLayout columns={3}>
                  <Field
                    name="parentGaurdianRelationshipToChild"
                    label="Parent/Guardian relationship to child"
                    type="select"
                    isRequired
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
                    label="Parent/Guardian first name"
                    isRequired
                  />
                  <Field
                    name="parentGaurdianLastName"
                    label="Parent/Guardian last name"
                    isRequired
                  />
                  <Field
                    name="parentGaurdianEmailAddress"
                    label="Parent/Guardian email address"
                    isRequired
                  />
                </FormLayout>

                <FormLayout columns={3}>
                  <Field
                    name="parentGaurdianPhoneNumber"
                    label="Parent/Guardian phone number"
                    isRequired
                  />
                  <Field
                    name="parentGaurdianLanguage"
                    label="Parent/Guardian language"
                    isRequired
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
                  isRequired
                  options={[
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" },
                  ]}
                />
                <Field
                  name="whyDayBreak"
                  label="Why are you requesting Daybreak Health service?"
                  type="textarea"
                  isRequired
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
                <SubmitButton width="25%" disableIfInvalid>
                  Submit
                </SubmitButton>
              </Box>
            </FormLayout>
          )}
        </Form>
      </Box>
    </Box>
  );
}
