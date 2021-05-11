function App() {
  console.log(process.env);

  return (
    <div className="App">
      <h1>
        Local: <br></br>
        {process.env.REACT_APP_local}
      </h1>
    </div>
  );
}

export default App;
