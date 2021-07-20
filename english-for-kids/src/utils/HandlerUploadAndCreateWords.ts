import { useState } from "react";
import { BASE, updateData } from "../api/apiFetch";
import { baseDataCard, FetchData } from "../api/interfaces";
import { CreateNewFiles } from "./createNewFile";

interface PropsHandlerUploadAndCreateWords {
  file: string | Blob;
  fileName: string;
  audioFile: string | Blob;
  audioFileName: string;
  saveImg: (files: FileList) => void;
  saveAudio: (files: FileList) => void;
  updateWord: (
    inputName: string,
    inputTranslation: string,
    full: boolean
  ) => Promise<void>;
  createWord: (inputName: string, inputTranslation: string) => Promise<void>;
}

export const HandlerUploadAndCreateWords = (
  arrData: FetchData,
  word: string,
  id: string
): PropsHandlerUploadAndCreateWords => {
  const [file, setFile] = useState<string | Blob>("");
  const [fileName, setFileName] = useState<string>("");
  const [audioFile, setAudioFile] = useState<string | Blob>("");
  const [audioFileName, setAudioFileName] = useState<string>("");
  const { categoryName, imageSrc, uniqueKey, cards } = arrData;

  const saveImg = (files: FileList) => {
    setFile(files[0]);
    setFileName(files[0].name);
  };

  const saveAudio = (files: FileList) => {
    setAudioFile(files[0]);
    setAudioFileName(files[0].name);
  };

  const updateWord = async (
    inputName: string,
    inputTranslation: string,
    full: boolean
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const wordIndex = cards!.findIndex((el) => el.word === word);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const currentWord = cards!.find((el) => el.word === word);
    let updateDatas: baseDataCard = {} as baseDataCard;

    if (full) {
      await CreateNewFiles(file, fileName, audioFile, audioFileName);
      updateDatas = {
        word: inputName,
        translation: inputTranslation,
        imageSrc: `${BASE}/${fileName}`,
        audioSrc: `${BASE}/${audioFileName}`,
      };
    } else {
      updateDatas = {
        word: inputName,
        translation: inputTranslation,
        imageSrc: currentWord?.imageSrc as string,
        audioSrc: currentWord?.audioSrc as string,
      };
    }

    const final: FetchData = {
      categoryName,
      imageSrc,
      uniqueKey,
      cards: [
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        ...cards!.slice(0, wordIndex),
        updateDatas,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        ...cards!.slice(wordIndex + 1),
      ],
    };

    await updateData(final, id);
  };

  const createWord = async (inputName: string, inputTranslation: string) => {
    await CreateNewFiles(file, fileName, audioFile, audioFileName);
    const updateDatas = {
      word: inputName,
      translation: inputTranslation,
      imageSrc: `${BASE}/${fileName}`,
      audioSrc: `${BASE}/${audioFileName}`,
    };
    const final = {
      categoryName,
      imageSrc,
      uniqueKey,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      cards: [...cards!, updateDatas],
    };

    await updateData(final, id);
  };

  return {
    file,
    fileName,
    audioFile,
    audioFileName,
    saveImg,
    saveAudio,
    updateWord,
    createWord,
  };
};
