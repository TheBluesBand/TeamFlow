import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

interface FormProps<T> {
  onFinish?: (values: T) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFinishFailed?: (errorInfo: any) => void;
}

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const SignInForm: React.FC = () => {
  const [isFormValid, setIsFormValid] = useState(false);

  const onValuesChange = (_: unknown, allValues: FieldType) => {
    const { username, password } = allValues;
    setIsFormValid(!!username && !!password);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600, backgroundColor: "white", padding: 20 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onValuesChange={onValuesChange}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
        label={null}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit" disabled={!isFormValid}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignInForm;
