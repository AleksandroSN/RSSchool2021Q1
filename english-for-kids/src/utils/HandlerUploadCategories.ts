import { useState } from "react";
import { BASE, updateData } from "../api/apiFetch";
import { CreateNewFile } from "./createNewFile";

interface PropsHandlerUploadCategories {
  file: string | Blob;
  fileName: string;
  SetTarget: (files: FileList) => void;
  UpdateCategoryName: (id: string, inputValue: string) => Promise<void>;
  FullUpdateCategory: (id: string, inputValue: string) => Promise<void>;
}

export const HandlerUploadCategories = (): PropsHandlerUploadCategories => {
  const [file, setFile] = useState<string | Blob>("");
  const [fileName, setFileName] = useState<string>("");

  const SetTarget = (files: FileList) => {
    setFile(files[0]);
    setFileName(files[0].name);
  };

  const UpdateCategoryName = async (id: string, inputValue: string) => {
    const reqBody = {
      categoryName: inputValue,
    };

    await updateData(reqBody, id);
  };

  const FullUpdateCategory = async (id: string, inputValue: string) => {
    await CreateNewFile(file, fileName);

    const bodyWithImage = {
      categoryName: inputValue,
      imageSrc: `${BASE}/${fileName}`,
    };
    await updateData(bodyWithImage, id);
  };

  return { file, fileName, SetTarget, UpdateCategoryName, FullUpdateCategory };
};
