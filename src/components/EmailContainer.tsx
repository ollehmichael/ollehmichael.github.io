import React from "react";
import { Form, Input, TextArea, Button } from "semantic-ui-react";

const EmailContainer = () => {
  return (
    <div>
      <Form>
        <Form.Field
          id="form-input-control-first-name"
          control={Input}
          placeholder="Name"
        />
        <Form.Field
          id="form-input-control-error-email"
          control={Input}
          placeholder="hire@mike.now"
          // error={{
          //   content: "Please enter a valid email address",
          //   pointing: "below",
          // }}
        />
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          placeholder="Message"
        />
        <Form.Field
          id="form-button-control-public"
          control={Button}
          content="Confirm"
          // disabled={}
        />
      </Form>
    </div>
  );
};

export default EmailContainer;
