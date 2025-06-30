import { thirdStepSchema } from "@/schemas/UserSchema";
import { Form } from "../Form/Form";
import { useMultiFormStore } from "@/stores/useMultiFormStore";
import type { User } from "@/types/User";
import { Checkbox } from "../Form/Checkbox";
import Swal from "sweetalert2";

export const Step3 = () => {
  const user = useMultiFormStore(({ user }) => user);
  const submitUser = useMultiFormStore(({ submitUser }) => submitUser);
  const resetUser = useMultiFormStore(({ resetUser }) => resetUser);

  const onSubmit = async (data: Partial<User>) => {
    const res = await submitUser(data);
    if (res.ok) {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "User registered successfully",
      }).then(() => {
        resetUser();
      });
      return;
    }

    const error = await res.json();
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error?.message || "An unexpected error occurred",
    });
  };
  return (
    <div>
      <div>
        <ul>
          {Object.entries(user).map(([attr, value]) => {
            if (attr != "termsAccepted") {
              const label = attr
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (c) => c.toUpperCase()); // fullName -> Full Name
              return (
                <li key={attr} className="flex flex-col">
                  <span className="text-primary-300">{label}</span>
                  <span className="text-primary-50">{value as string}</span>
                </li>
              );
            }
          })}
        </ul>
      </div>
      <Form submitFunction={onSubmit} formSchema={thirdStepSchema}>
        <Checkbox
          name="termsAccepted"
          id="termsAccepted"
          label="I have read and agree to the Terms and Conditions."
        />
      </Form>
    </div>
  );
};
