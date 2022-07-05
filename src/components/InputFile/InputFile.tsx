import styles from "./InputFile.module.css";

const InputFile = () => {
  const onChange = (e: any) => {
    console.log(e.target.files[0])
  };

  return (
    <div className={styles.container}>
      <input onChange={onChange} type="file" id="file" style={{display: 'none'}} />
      <label htmlFor="file">
        <span>Select file(s)</span>
      </label>
    </div>
  );
};

export default InputFile;
