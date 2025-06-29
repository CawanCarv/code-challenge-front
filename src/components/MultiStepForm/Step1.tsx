import type { User } from "@/types/User";
import { Form } from "../Form/Form";
import { Input } from "../Form/Input";
import { firstStepSchema } from "@/schemas/UserSchema";
import { useMultiFormStore } from "@/stores/useMultiFormStore";

export const Step1 = () => {
  const user = useMultiFormStore(({ user }) => user);
  const nextStep = useMultiFormStore(({ nextStep }) => nextStep);
  const updateUser = useMultiFormStore(({ updateUser }) => updateUser);

  const onSubmit = (data: Partial<User>) => {
    updateUser(data);
    nextStep();
  };

  return (
    <Form submitFunction={onSubmit} formSchema={firstStepSchema}>
      <Input
        name="fullName"
        id="fullName"
        defaultValue={user.fullName}
        type="text"
        label="Full Name"
        placeholder="Full Name"
      />

      <Input
        name="email"
        defaultValue={user.email}
        id="email"
        type="email"
        label="Email"
        placeholder="Email"
      />

      <Input
        name="phone"
        defaultValue={user.phone}
        id="phone"
        type="text"
        label="Phone"
        placeholder="Phone"
        mask={["(99) 9999-9999", "(99) 99999-9999"]}
      />
    </Form>
  );
};
