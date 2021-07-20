import fileUpload from 'express-fileupload';
import path from 'path';

const audioExt = ['wav', 'mp3'];
const staticImages = path.resolve(__dirname, '../../public/img');
const staticAudios = path.resolve(__dirname, '../../public/audio');

export const HandlerUploadFiles = (file: fileUpload.UploadedFile) => {
  const filename = file.name;
  const fileExt = filename.substr(filename.lastIndexOf('.') + 1);
  const path = audioExt.indexOf(fileExt) === -1 ? staticImages : staticAudios;
  file.mv(`${path}/${filename}`);
  // file.mv(`${path}/${filename}`, (err) => {
  //   if (err) {
  //     res.status(500).send({ message: 'File upload failed', code: 500 });
  //   }
  //   res.status(200).send({ message: 'File Uploaded', code: 200 });
  // });
};
