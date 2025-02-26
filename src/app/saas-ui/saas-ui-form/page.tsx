"use client";
import { Box } from "@chakra-ui/react";
import { Form, Field, FormLayout, SubmitButton } from "@saas-ui/react";

export default function SaaSUIForm() {
  const onSubmit = (params: any) => {
    console.log(params);
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  };

  return (
    <Box width="50%" padding="12px">
      <Form
        defaultValues={{
          name: "Saas UI",
          description: "",
        }}
        onSubmit={onSubmit}
      >
        {({ Field }) => (
          <FormLayout>
            <Field
              name="name"
              label="Name"
              type="text"
              help="Choose a name for this project"
              rules={{ required: true }}
            />

            <Field
              name="description"
              type="textarea"
              label="Description"
              placeholder="Optional description"
            />

            <SubmitButton>Create Project</SubmitButton>
          </FormLayout>
        )}
      </Form>
    </Box>
  );
}
