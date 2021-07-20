import { uploadData } from "../api/apiFetch";

export const CreateNewFile = async (
  file: string | Blob,
  fileName: string
): Promise<void> => {
  const fileUpload = new FormData();
  fileUpload.append("file", file);
  fileUpload.append("fileName", fileName);
  await uploadData(fileUpload);
};

export const CreateNewFiles = async (
  file: string | Blob,
  fileName: string,
  audioFile: string | Blob,
  audioFileName: string
): Promise<void> => {
  const fileUpload = new FormData();
  fileUpload.append("file", file);
  fileUpload.append("fileName", fileName);
  fileUpload.append("audioFile", audioFile);
  fileUpload.append("audioFileName", audioFileName);
  await uploadData(fileUpload);
};
