import GalleryCrop from './components/GalleryCrop/GalleryCrop';
import { useImages } from './mock/useImages';

 const App = () => {

  const { data } = useImages();

  return (
    <GalleryCrop listOfImages={data} aspectRatio={2/2} />
  )
}

export default App