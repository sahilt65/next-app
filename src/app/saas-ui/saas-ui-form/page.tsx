"use client";
import { Box, Heading } from "@chakra-ui/react";
import { Form, } from "@saas-ui/forms/zod";
import { FormLayout, SubmitButton } from "@saas-ui/react";
import * as z from "zod";

const schema = z.object({
  name: z.string().nonempty("Name is required"),
  description: z.string().optional(),
  email: z.string().email().nonempty("Email is required"),
});

export default function SaaSUIForm() {
  const saveHandler = (params: any) => {
    console.log(params);
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  };

  return (
    <Box padding="12px">
      <Form onSubmit={saveHandler}>
        {({ Field }) => (
          <FormLayout>
            <Heading size="md">Personal information</Heading>
            <FormLayout columns={2}>
              <Field name="firstname" label="Name" />
              <Field name="lastname" label="Last name" />
            </FormLayout>

            <Field name="email" label="Email address" />

            <Heading size="md" mt="4">
              Address
            </Heading>
            <FormLayout>
              <Field name="address" label="Address" />
              <Field name="city" label="City" />
            </FormLayout>

            <Heading size="md" mt="4">
              Billing information
            </Heading>
            <FormLayout columns={1}>
              <Field name="card" label="Card number" />
              <FormLayout columns={3}>
                <Field name="exp" label="Expiration date" />
                <Field name="cvc" label="CVC" />
                <Field name="pin" label="PIN" />
              </FormLayout>
            </FormLayout>

            <SubmitButton>Complete order</SubmitButton>
          </FormLayout>
        )}
      </Form>
    </Box>
  );
}
