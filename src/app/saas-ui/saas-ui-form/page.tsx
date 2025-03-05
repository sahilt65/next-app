"use client";
import { Box, Heading } from "@chakra-ui/react";
import { Form, FormLayout, SubmitButton } from "@saas-ui/react";

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
        {({ Field, DisplayIf }) => (
          <FormLayout>
            <Heading size="md">Personal information</Heading>
            <FormLayout columns={2}>
              <Field name="firstname" label="Name" />
              <Field name="lastname" label="Last name" />
            </FormLayout>

            <Field name="email" label="Email address" />

            <Field
              name="ship"
              type="checkbox"
              label="Ship to my home address"
            />

            <DisplayIf
              name="ship"
              condition={(ship) => !!ship}
              onToggle={(matches) => console.log(matches)}
            >
              <FormLayout>
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
                <FormLayout columns={2}>
                  <Field name="card" label="Card number" />
                  <FormLayout columns={2}>
                    <Field name="exp" label="Expiration date" />
                    <Field name="cvc" label="CVC" />
                  </FormLayout>
                </FormLayout>
              </FormLayout>
            </DisplayIf>

            <SubmitButton>Complete order</SubmitButton>
          </FormLayout>
        )}
      </Form>
    </Box>
  );
}
