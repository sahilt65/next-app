"use client";
import { Box } from "@chakra-ui/react";
import { Form, zodResolver } from "@saas-ui/forms/zod";
import { FormLayout, SubmitButton } from "@saas-ui/react";
import * as z from "zod";

const schema = z.object({
  name: z.string().nonempty("Name is required"),
  description: z.string().optional(),
  email: z.string().email().nonempty("Email is required"),
});

export default function SaaSUIForm() {
  const onSubmit = (params: any) => {
    console.log(params);
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  };

  return (
    <Box padding="12px">
      <Form
        schema={schema}
        resolver={zodResolver(schema)}
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
              //   rules={{ required: true }}
            />

            <Field
              name="description"
              type="textarea"
              label="Description"
              placeholder="Optional description"
            />

            <Field name="email" type="text" label="Email" placeholder="Email" />

            <SubmitButton>Create Project</SubmitButton>
          </FormLayout>
        )}
      </Form>
    </Box>
  );
}
