import { useState } from 'react';
import { requestBackend } from 'utils/requests';
import { ReactComponent as UploadPlaceholder } from './../../../../assets/images/upload-placeholder.svg';
import './styles.css';

type Props = {
  onUploadSuccess: (imgUrl: string) => void;
  productImgUrl: string;
};

export const ImageUpload = ({ onUploadSuccess, productImgUrl }: Props) => {
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string>('');

  const imgUrl = uploadedImageUrl || productImgUrl;

  const onUploadProgress = (progressEvenet: ProgressEvent) => {
    const progress = Math.round(
      (progressEvenet.loaded * 100) / progressEvenet.total
    );

    setUploadProgress(progress);
  };

  const uploadImage = (selectImage: File) => {
    const paylod = new FormData();
    paylod.append('file', selectImage);

    requestBackend({
      url: 'products/image',
      method: 'POST',
      data: paylod,
      onUploadProgress: onUploadProgress,
      withCredentials: true,
    })
      .then((response) => {
        setUploadedImageUrl(response.data.uri);
        onUploadSuccess(response.data.uri);
      })
      .catch(() => console.log('Erro ao enviar aquivo'))
      .finally(() => setUploadProgress(0));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectImage = event.target.files?.[0];

    if (selectImage) {
      uploadImage(selectImage);
    }
  };

  return (
    <div className="row">
      <div className="col-6">
        <div className="upload-button-container">
          <input
            type="file"
            id="upload"
            hidden
            accept="image/png, image/jpeg"
            onChange={handleChange}
          />
          <label htmlFor="upload">ADICIONAR IMAGEM</label>
        </div>
        <small className="upload-text-helper text-primary">
          As imagens devem ser JPEG ou PNG e não devem ultrapassar
          <strong> 10 mb.</strong>
        </small>
      </div>
      <div className="col-6 upload-placeholder">
        {uploadProgress > 0 && (
          <>
            <UploadPlaceholder />
            <div className="upload-progress-container">
              <div
                className="upload-progress"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          </>
        )}
        {imgUrl && uploadProgress === 0 && (
          <img className="uploaded-image" src={imgUrl} alt={imgUrl} />
        )}
      </div>
    </div>
  );
};
