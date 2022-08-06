import { object, array, string, number, date } from "yup";

const isNumberRegex = new RegExp(/^[0-9]+$/);

const arrayOfStringsSchema = array().of(
  string()
    .test(
      "is_number",
      () => "not a number",
      (val) => isNumberRegex.test(val)
    )
    .required()
);

export const addOrderSchema = object({
  skill_id: arrayOfStringsSchema.min(1).required(),
  speciality_id: arrayOfStringsSchema.min(1).required(),
  delivery_time_to: date().required(),
  type: string().required(),
  title: string().required(),
  description: string().required(),
  budget: number().required(),
  total_value: number().required(),
  delivery_time_form: number().positive().integer().required(),
  country_id: number().positive().integer().required(),
  countrylaw_id: number().positive().integer().required().required(),
});
