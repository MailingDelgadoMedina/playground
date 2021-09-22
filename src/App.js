// eslint-disable-next-line

import "./App.css";

function App() {
  function compile() {
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var js = document.getElementById("js");
    var code = document.getElementById("code").contentWindow.document;

    document.body.onkeyup = function () {
      code.open();
      code.writeln(
        html.value +
          "<style>" +
          css.value +
          "</style>" +
          "<script>" +
          js.value +
          "</script>"
      );
      code.close();
    };
  }

  compile();
  return (
    <div className="App">
      <header className="App-header">
        <textarea id="html" placeholder="HTML"></textarea>
        <textarea id="css" placeholder="CSS"></textarea>
        <textarea id="js" placeholder="JavaScript"></textarea>
        <iframe title="Ventana de codigo" id="code" placeholder="code">
          {" "}
        </iframe>
      </header>
    </div>
  );
}

export default App;
