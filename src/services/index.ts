const API_URL = "http://ec2-18-117-221-135.us-east-2.compute.amazonaws.com";

type Config = { endpoint: string; data: any };

export const uploadImageProperties = async ({ endpoint, data }: Config) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  let url = `${API_URL}${endpoint}`;

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  });

  const json = await response.json();

  return {
    url: json.url,
  };
};

export const saveImage = async ({ endpoint, data }: Config) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const url = `${API_URL}${endpoint}`;

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  });

  return await response.json();
};

export const uploadImageToS3 = async ({ endpoint, data }: Config) => {
  let url = `${endpoint}`;

  const response = await fetch(url, {
    method: "PUT",
    body: data,
  });

  return { status: response.status };
};

export const fetchImages = async ({ endpoint, data }: Config) => {
  const url = `${API_URL}${endpoint}`;
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  });

  return await response.json();
}

export const deleteImage = async ({ endpoint, data }: Config) => {
  const url = `${API_URL}${endpoint}`;
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  });

  return await response.json();
}