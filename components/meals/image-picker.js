'use client';

import { useRef, useState } from 'react';
import styles from './image-picker.module.css';
import Image from 'next/image';

function ImagePicker({ label, name }) {
  const input = useRef();
  const [preview, setPreview] = useState();
  function handlePickImage() {
    input.current.click();
  }

  function handlePreview() {
    const file = input.current.files[0];
    if (!file) {
      setPreview(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        {preview ? (
          <div className={styles.preview}>
            <Image fill src={preview} alt="Preview" />
          </div>
        ) : (
          <div className={styles.placeholder}>No image picked</div>
        )}
        <input
          ref={input}
          className={styles.input}
          type="file"
          accept="image/jpg,image/png,image/jpeg"
          id={name}
          name={name}
          onChange={handlePreview}
        />
        <button
          className={styles.button}
          type="button"
          onClick={handlePickImage}
        >
          Pick Image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
