const createImage = (url: any) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.setAttribute("crossOrigin", "anonymous");
    image.src = url;
  });

export async function getCroppedImg(
  imageSrc: any,
  name: string,
  pixelCrop: any
) {
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

  return new Promise((resolve, reject) => {
    canvas.toBlob((file) => {
      console.log(name);
      const myFile = new File([file!], `${name}`);

      resolve(myFile);
    });
  });
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

const getHeightAndWidthFromDataUrl = (dataURL: string) =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve({
        height: img.height,
        width: img.width,
      });
    };

    img.src = dataURL;
  });

export async function getImageProperties(file: File) {
  const url = URL.createObjectURL(file);
  const imgProps: any = await getHeightAndWidthFromDataUrl(url);

  imgProps.aspectRatio = getAspectRatio(imgProps.width, imgProps.height);
  imgProps.fileName = removeExtension(file.name);
  imgProps.extension = file.name.split(".").pop();

  return imgProps;
}

export function getUrlByExtension(url: string, extension: string) {
  const index = url.lastIndexOf(`.${extension}`);
  const shortenedUrl = url
    .split("")
    .splice(0, index + extension.length + 1)
    .join("");

  return shortenedUrl;
}

export function getFileExtension(fileName: string) {
  const extension = fileName.split(".").pop();

  return extension;
}

export function removeExtension(value: string) {
  const index = value.lastIndexOf(".");
  const shortString = value.split("").splice(0, index).join("");

  return shortString;
}

export function normalizeFilename(id: string, filename: string) {
  const before = `decks/${id}/`;
  const shortString = filename.split("").slice(before.length).join("");

  return shortString;
}

export function aspectRatioFromString(aspectRatio: string) {
  const [width, height] = aspectRatio.split("/");
  
  return +width / +height;

}
