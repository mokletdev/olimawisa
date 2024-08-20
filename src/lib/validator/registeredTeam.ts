import { z } from "zod";
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from ".";

export const createRegisteredTeamFormSchema = z.object({
  teamName: z
    .string()
    .min(1, { message: "Nama Tim harus diisi!" })
    .max(120, { message: "Nama Tim maximal 120 karakter!" }),
  paymentProof: z
    .any()
    .refine((files: FileList) => {
      const file = files[0];
      return file?.size <= MAX_FILE_SIZE;
    }, `Ukuran maksimal file adalah 5MB`)
    .refine((files: FileList) => {
      const file = files[0];
      return ACCEPTED_IMAGE_TYPES.includes(file?.type);
    }, "File harus menggunakan ekstensi .jpg, .jpeg, .png."),
  schoolName: z
    .string()
    .min(1, { message: "Nama sekolah harus diisi!" })
    .max(300, { message: "Nama sekolah maximal 300 karakter!" }),
});