import Sink from "./Sink";
import Oven from "./Oven";

export default function Kitchen() {
    return (
      <div>
        <h2>Kitchen</h2>
        <Oven></Oven>
        <Sink></Sink>
      </div>
    );
  }