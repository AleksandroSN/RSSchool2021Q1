import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../inputs/inputs";
import { FormValues } from "../inputs/inputs-props-interface";

interface PropsWordsForm {
  onSubmit: (data: FormValues) => Promise<void>;
  setEditMode: (value: React.SetStateAction<boolean>) => void;
  saveImg: (files: FileList) => void;
  saveAudio: (files: FileList) => void;
}

export const WordsForm = ({
  onSubmit,
  setEditMode,
  saveImg,
  saveAudio,
}: PropsWordsForm): JSX.Element => {
  const { register, handleSubmit, watch } = useForm<FormValues>();
  const watchImage = watch("Image") as FileList;
  const watchSound = watch("Sound") as FileList;

  useEffect(() => {
    if (watchImage && watchImage.length > 0) {
      saveImg(watchImage);
    }

    if (watchSound && watchSound.length > 0) {
      saveAudio(watchSound);
    }
  }, [watchImage, saveImg, watchSound, saveAudio]);

  return (
    <form className="word" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Word Name"
        type="text"
        labelFor="wordUpdate"
        inputClass="category__input"
        register={register}
        required
      />
      <Input
        label="Translation Name"
        type="text"
        labelFor="wordUpdate"
        inputClass="category__input"
        register={register}
        required
      />
      <Input
        label="Sound"
        type="file"
        labelFor="wordUpdate"
        inputClass="category__input"
        register={register}
        required={false}
      />
      <Input
        label="Image"
        type="file"
        labelFor="wordUpdate"
        inputClass="category__input"
        register={register}
        required={false}
      />
      <div className="category-container-btns">
        <button type="button" onClick={() => setEditMode(false)}>
          Cancel
        </button>
        <button type="submit">Update</button>
      </div>
    </form>
  );
};
