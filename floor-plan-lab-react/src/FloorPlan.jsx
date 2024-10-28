import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';
import Bedroom from './Bedroom';
import Bath from './Bath';

export default function FloorPlan() {
    return (
      <div>
        <h1>Floor Plan</h1>

        <Kitchen />
        <LivingRoom />
        <Bedroom Member="Main" />
        <Bedroom Member="Guest" />
        <Bedroom Member="Family" />
        <Bath Size="Guest" />
        <Bath Size="Large" />

      </div>
    );
}
