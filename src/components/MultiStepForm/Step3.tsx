import { thirdStepSchema } from "@/schemas/UserSchema";
import { Form } from "../Form/Form";
import { useMultiFormStore } from "@/stores/useMultiFormStore";
import type { User } from "@/types/User";
import { Checkbox } from "../Form/Checkbox";

export const Step3 = () => {
  const user = useMultiFormStore(({ user }) => user);
  const updateUser = useMultiFormStore(({ updateUser }) => updateUser);

  const onSubmit = async (data: Partial<User>) => {
    updateUser(data);
    console.log(user);
    return;
  };
  return (
    <div>
      <div>
        <ul>
          {Object.entries(user).map(([attr, value]) => {
            if (attr != "termsAccepted")
              return (
                <li key={attr}>
                  {attr} : {value}
                </li>
              );
          })}
        </ul>
      </div>
      <Form submitFunction={onSubmit} formSchema={thirdStepSchema}>
        <Checkbox
          name="termsAccepted"
          id="termsAccepted"
          label="Agree with terms"
          placeholder="Agree with terms"
        />
      </Form>
    </div>
  );
};
