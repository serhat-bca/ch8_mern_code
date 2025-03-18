const App = () => {
  const zoomLevel = 100;
  return (
    <div>
      <h2>Zoom Setup</h2>
      <button>Zoom In</button>
      <button>Reset</button>
      <button>Zoom out</button>
      <p>Zoom Level: {zoomLevel}</p>
    </div>
  );
};

export default App;
