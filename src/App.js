import "./App.css";
import { TbWorld } from "react-icons/tb";
import { BiSolidEditAlt } from "react-icons/bi";
import { HiMiniPlus } from "react-icons/hi2";
import { VscDebugRestart } from "react-icons/vsc";
import EditorPanel from "./EditorPanel";
import { useState } from "react";

function App() {
  //Initial value || Handling Multiple values with single state!!
  const [value, setValue] = useState({
    family: "",
    fontSizeRanger: 60,
    weight: "",
    transform: "",
    style: "",
    decoration: "",
    lineHeight: 0,
    letterSpacing: 0,
    wordSpacing: 0,
    open: false,
  });
  console.log(value);

  // Value Change Detecting Function
  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  // Toggle Typography Panel Function
  const openEditor = (e) => {
    const targetClassName = e.target;
    const addActiveClass = targetClassName.parentNode;
    addActiveClass.classList.toggle("active");

    setValue({ ...value, open: !value.open });
  };

  return (
    <div className="App">
      <div className="container">
        {/* Editor__Title */}
        <header className="app-header">
          <h1 className="Editor_panel_title">Gutenberg Typography Editor</h1>
        </header>
        {/* Editor__Body_part */}
        <div className="editor__panel_wrapper">
          <section className="typography_section">
            {/* Select Typography Editor  */}
            <div className="select__editor">
              <p className="text_color">Typography</p>
              <div className="editor__icon_block">
                <div className="world__icon_wrapper">
                  <TbWorld className="world__icon" />
                </div>
                <div className="edit__icon_wrapper">
                  <BiSolidEditAlt onClick={openEditor} className="edit__icon" />
                </div>
              </div>
            </div>
            {/* Editor Panel */}
            {value.open ? (
              <div className="editor__panel">
                {/* Panel__title */}
                <div className="panel__title">
                  <p>Typography</p>
                  <div className="reset_add_btn">
                    <VscDebugRestart />
                    <HiMiniPlus />
                  </div>
                </div>
                {/* Panel_body */}
                <EditorPanel value={value} onChange={onChange} />
              </div>
            ) : (
              ""
            )}
          </section>
          <div className="middle_border"></div>
          <div className="test_section">
            <h1
              style={{
                ...value,
                fontSize: `${value.fontSizeRanger}px`,
                lineHeight: `${value.lineHeight}px`,
                letterSpacing: `${value.letterSpacing}px`,
                wordSpacing: `${value.wordSpacing}px`,
              }}
            >
              Test Me <br />
              <span>Test Me</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
