import { useSelector, useDispatch } from "react-redux";
import { zoomIn, zoomOut, reset } from "./actions/zoomActions";

const App = () => {
  const zoomLevel = useSelector((state) => state.zoomLevel);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Zoom Setup</h2>
      <button onClick={() => dispatch(zoomIn())}>Zoom In</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(zoomOut())}>Zoom out</button>
      <p>Zoom Level: {zoomLevel}</p>
    </div>
  );
};

export default App;
