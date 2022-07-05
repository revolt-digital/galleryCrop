import GalleryCrop from './components/GalleryCrop/GalleryCrop';
import { useImages } from './mock/useImages';

 const App = () => {

  const { data } = useImages();

  return (
    <GalleryCrop listOfImages={data} aspectRatio={16/9} /* maxWidth  maxWeight */ />
  )
}

export default App