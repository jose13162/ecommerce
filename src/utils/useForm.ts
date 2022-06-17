import { Dispatch, FormEvent, SetStateAction, useState } from "react";

type Response<Type> = [
  Type,
  Dispatch<SetStateAction<Type>>,
  (event: FormEvent<HTMLInputElement>) => void
];

export function useForm<IForm>(initialForm: IForm): Response<IForm> {
  const [form, setForm] = useState<IForm>(initialForm);

  function handleChange({ currentTarget }: FormEvent<HTMLInputElement>) {
    const value =
      currentTarget.type === "checkbox"
        ? currentTarget.checked
        : currentTarget.value;

    setForm({
      ...form,
      [currentTarget.name]: value,
    });
  }

  return [form, setForm, handleChange];
}
