import './App.css'
import { YMaps } from '@pbe/react-yandex-maps';
import { WrapperMap } from './components/WrapperMap/WrapperMap';
import { PanoramaWrapper } from './components/Panorama/Panorama';

function App() {
  return (
    <YMaps query={{ apikey: "578372c8-5c9a-4088-8251-8743fa8a563b" }}>
      <WrapperMap />
      <PanoramaWrapper />
    </YMaps>
  )
};

export default App;
