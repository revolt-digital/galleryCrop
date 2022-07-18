import styles from "./UploadButton.module.css";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const UploadButton = () => {
  const onChange = (e: any) => {
    console.log(e.target.files[0]);
  };

  return (
    <div className={styles.container}>
      <input
        onChange={onChange}
        type="file"
        id="file"
        style={{ display: "none" }}
      />
      <label htmlFor="file">
        <span>
          <AddPhotoAlternateIcon />
          UPLOAD IMAGE
        </span>
      </label>
    </div>
  );
};

export default UploadButton;
