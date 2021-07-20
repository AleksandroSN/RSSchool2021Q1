import { FetchData } from "../../api/interfaces";
import { HandlerUploadAndCreateWords } from "../../utils/HandlerUploadAndCreateWords";
import { FormValues } from "../inputs/inputs-props-interface";
import { WordsForm } from "./words-cu-form";

interface PropsUpdateWord {
  setEditMode: (value: React.SetStateAction<boolean>) => void;
  isNew: boolean;
  setIsNew: React.Dispatch<React.SetStateAction<boolean>>;
  arrData: FetchData;
  id: string;
  reRenderPage: () => Promise<void>;
  word: string;
}

export const UpdateAndCreateWord = ({
  setEditMode,
  isNew,
  setIsNew,
  arrData,
  id,
  reRenderPage,
  word,
}: PropsUpdateWord): JSX.Element => {
  const {
    file,
    fileName,
    audioFile,
    audioFileName,
    saveAudio,
    saveImg,
    updateWord,
    createWord,
  } = HandlerUploadAndCreateWords(arrData, word, id);

  const onSubmitUpdateWord = async (data: FormValues) => {
    if (file && fileName && audioFile && audioFileName) {
      await updateWord(data["Word Name"], data["Translation Name"], true);
    } else {
      await updateWord(data["Word Name"], data["Translation Name"], false);
    }
    await reRenderPage();
    setEditMode(false);
  };

  const onSubmitCreateWord = async (data: FormValues) => {
    await createWord(data["Word Name"], data["Translation Name"]);
    await reRenderPage();
    setEditMode(false);
    setIsNew(false);
  };

  const onSubmit = isNew ? onSubmitCreateWord : onSubmitUpdateWord;

  return (
    <WordsForm
      onSubmit={onSubmit}
      setEditMode={setEditMode}
      saveAudio={saveAudio}
      saveImg={saveImg}
    />
  );
};
