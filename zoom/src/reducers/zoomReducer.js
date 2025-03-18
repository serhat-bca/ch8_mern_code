const initialZoom = 100;

const zoomReducer = (state = initialZoom, action) => {
  switch (action.type) {
    case "ZOOM_IN":
      return state + 5;
    case "ZOOM_OUT":
      return state - 5;
    case "RESET":
      return initialZoom;
    default:
      return state;
  }
};

export default zoomReducer;