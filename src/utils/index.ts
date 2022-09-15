
const createImage = (url: any) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.setAttribute("crossOrigin", "anonymous"); // needed to avoid cross-origin issues on CodeSandbox
    image.src = url;
  });

  /*
  const createImage = (dataURL: string) => new Promise(resolve => {
    const img = new Image()
    img.crossOrigin="anonymous"
    img.onload = () => {
      resolve(img)
    }
    img.src = dataURL
  })
  */

/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 * @param {File} image - Image File url
 * @param {Object} pixelCrop - pixelCrop Object provided by react-easy-crop
 */
export async function getCroppedImg(imageSrc: any, name: string, pixelCrop: any) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;
  const ctx: any = canvas.getContext("2d");

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    image!,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );

  // As Base64 string
  // return canvas.toDataURL('image/jpeg');
  // As a blob
  return new Promise((resolve, reject) => {
    canvas.toBlob((file) => {
      const myFile = new File([file!], name);

      resolve(myFile);
    });
  });

  // return new Promise((resolve, reject) => {
  //   canvas.toBlob((file) => {
  //     const myFile = new File([file!], "name");
  //     console.log(myFile);
  //     resolve(URL.createObjectURL(file!));
  //   }, "image/jpeg");
  // });
}

export function getAspectRatio(wi: number, he: number) {
  let w = wi;
  let h = he;
  let d: any; //gcd

  if (w < 0) w = -w;
  if (h < 0) h = -h;

  if (h > w) {
    let temp = w;
    w = h;
    h = temp;
  }

  let t = true;

  while (t) {
    w %= h;
    if (w === 0) {
      d = h;
      t = false;
    }
    h %= w;
    if (h === 0) {
      d = w;
      t = false;
    }
  }
  return wi / d + "/" + he / d;
}

const getHeightAndWidthFromDataUrl = (dataURL: string) => new Promise(resolve => {
  const img = new Image()
  img.onload = () => {
    resolve({
      height: img.height,
      width: img.width
    })
  }
  img.src = dataURL
})

export async function getImageProperties(file: File) {
  const url = URL.createObjectURL(file);
  const imgProps: any = await getHeightAndWidthFromDataUrl(url);

  imgProps.aspectRatio = getAspectRatio(imgProps.width, imgProps.height);
  imgProps.fileName = removeExtension(file.name);
  imgProps.extension = file.name.split('.').pop();


  return imgProps

}

export function getUrlByExtension(url: string, extension: string) {
  const index = url.lastIndexOf(`.${extension}`)
  const shortenedUrl = url.split("").splice(0, index + extension.length + 1).join("");

  return shortenedUrl;
}

// remove extension from url
export function removeExtension(value: string) {
  const index = value.lastIndexOf(".");
  const shortString = value.split("").splice(0, index).join("");

  return shortString;
}