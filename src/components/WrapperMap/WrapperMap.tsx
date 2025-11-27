import { Map } from '@pbe/react-yandex-maps';
import './WrapperMap.css';

export function WrapperMap() {
  return (
    <>
      My awesome application with maps!
      <Map
        className='WrapperMap_1'
        defaultState={{
          center: [57.15002415070722, 65.53881665334842],
          zoom: 12
        }}
      />
    </>
  );
}

export default WrapperMap;
