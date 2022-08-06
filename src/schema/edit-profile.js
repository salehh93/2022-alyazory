import { object, array, string, number, date } from "yup";

export const personalInfoSchema = object({
  username: string().required(),
  name: string().required(),
  mobile: string()
    .required("يجب أن يكون الهاتف 9 أرقام")
    .matches(/^[0-9]+$/, "يجب أن يكون الهاتف 9 أرقام")
    .min(9, "يجب أن يكون الهاتف 9 أرقام")
    .max(9, "يجب أن يكون الهاتف 9 أرقام"),
  birth_date: date().required(),
  gender: string().oneOf(["M", "F"]).required(),
  country_id: number().positive().integer().required(),
  city_id: number().positive().integer().required(),
  street: string().required(),
});

export const lawyerPersonalInfoSchema = object({
  name: string().required(),
  Mobile: string()
    .required("يجب أن يكون الهاتف 9 أرقام")
    .matches(/^[0-9]+$/, "يجب أن يكون الهاتف 9 أرقام")
    .min(9, "يجب أن يكون الهاتف 9 أرقام")
    .max(9, "يجب أن يكون الهاتف 9 أرقام"),
  dateOfBirth: date().required(),
  gender: string().oneOf(["M", "F"]).required(),
  country_id: number().positive().integer().required(),
  city_id: number().positive().integer().required(),
  street: string().required(),
});

export const lawyerSkillsSchema = object({
  speciality_id: number().positive().integer().required(),
  work_nature_id: array()
    .of(object({ id: number().positive().integer() }))
    .min(1)
    .required(),
  skill_id: array()
    .of(object({ skill_id: number().positive().integer() }))
    .min(1)
    .required(),
});

export const lawyerJobInfoSchema = object({
  job_title: string().required(),
  bio: string().required(),
});

export const lawyerLangAndEdSchema = object({
  language: object({
    language: array().of(
      object({
        degree: string().required(),
      })
    ),
  }),
  college: object({
    university: string().required(),
    speciality: string().required(),
    from: date().required(),
    to: date().required(),
  }),
});

export const lawyerWorkAndExperienceSchema = object({
  employment: object({
    workplace: string().required(),
    description: string().required(),
    from: date().required(),
    to: date().required(),
  }),
});

export const lawyerLicenseSchema = object({
  license: object({
    license_issuer: string().required(),
    license_number: number().required(),
    license_year: date().required(),
  }),
});

export const jobTitelAndDescSchema = object({
  job_title: object({
    job_title: array().of(
      object({
        job_title: string().required(),
        desc: string().required(),
      })
    ),
  }).required(),
  language: object({
    language: array().of(
      object({
        degree: string().required(),
      })
    ),
  }),
});
