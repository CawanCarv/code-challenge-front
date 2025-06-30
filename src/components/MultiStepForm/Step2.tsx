import { Input } from "../Form/Input";
import { estados, secondStepSchema } from "@/schemas/UserSchema";
import { useMultiFormStore } from "@/stores/useMultiFormStore";
import type { User } from "@/types/User";
import { Form } from "../Form/Form";
import { Select } from "../Form/Select";

export const Step2 = () => {
  const user = useMultiFormStore(({ user }) => user);
  const nextStep = useMultiFormStore(({ nextStep }) => nextStep);
  const updateUser = useMultiFormStore(({ updateUser }) => updateUser);

  const onSubmit = (data: Partial<User>) => {
    updateUser(data);
    nextStep();
  };

  return (
    <Form
      submitFunction={onSubmit}
      formSchema={secondStepSchema}
      buttonText="Next"
    >
      <Input
        name="zipCode"
        defaultValue={user.zipCode}
        id="zipCode"
        type="text"
        label="Zip Code"
        placeholder="Zip Code"
        mask={"99999-999"}
      />

      <Input
        name="address"
        defaultValue={user.address}
        id="address"
        type="text"
        label="Address"
        placeholder="Address"
      />

      <Input
        name="number"
        defaultValue={user.number}
        id="number"
        type="text"
        label="Address Number"
        placeholder="Address Number"
      />

      <Input
        name="city"
        defaultValue={user.city}
        id="city"
        type="text"
        label="City"
        placeholder="City"
      />

      <Select
        name="state"
        defaultValue={user.state}
        id="state"
        label="State"
        options={["Select a State", ...estados]}
      />
    </Form>
  );
};
