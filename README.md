## Install

```bash
yarn add @revolt-digital/gallery-crop
```
## How to use it?
```bash
import GalleryCrop from "@revolt-digital/gallery-crop";
```

## Example
```bash
import GalleryCrop from "@revolt-digital/gallery-crop";
function App() {

  const data = [
    {
      id: 1,
      name: "imagen4.jpg",
      url:
        "https://img.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg?w=2000",
      size: "24kb",
      extension: ".jpg",
      aspect_ratio: "16 / 9",
    },
    {
      id: 2,
      name: "imagen4.jpg",
      url:
        "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800",
      size: "24kb",
      extension: ".jpg",
      aspect_ratio: "16 / 9",
    },
    {
      id: 4,
      name: "imagen4.jpg",
      url:
        "https://img.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg?w=2000",
      size: "24kb",
      extension: ".jpg",
      aspect_ratio: "16 / 9",
    },
    {
      id: 5,
      name: "imagen4.jpg",
      url:
        "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/landscape-photography-tips-4.jpg?fit=1500%2C908&ssl=1",
      size: "24kb",
      extension: ".jpg",
      aspect_ratio: "16 / 9",
    },
    {
      id: 6,
      name: "imagen4.jpg",
      url:
        "https://img.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg?w=2000",
      size: "24kb",
      extension: ".jpg",
      aspect_ratio: "16 / 9",
    },
    {
      id: 7,
      name: "imagen4.jpg",
      url:
        "https://images.pexels.com/photos/34107/milky-way-stars-night-sky.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      size: "24kb",
      extension: ".jpg",
      aspect_ratio: "16 / 9",
    },
    {
      id: 8,
      name: "imagen4.jpg",
      url:
        "https://img.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg?w=2000",
      size: "24kb",
      extension: ".jpg",
      aspect_ratio: "16 / 9",
    },
    {
      id: 9,
      name: "imagen4.jpg",
      url:
        "https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      size: "24kb",
      extension: ".jpg",
      aspect_ratio: "16 / 9",
    },
  ]
  return (
      <GalleryCrop listOfImages={data}/>
  );
}

export default App;
```

