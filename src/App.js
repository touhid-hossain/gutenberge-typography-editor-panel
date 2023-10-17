import "./App.css";
import { TbWorld } from "react-icons/tb";
import { BiSolidEditAlt } from "react-icons/bi";
import { HiMiniPlus } from "react-icons/hi2";
import { VscDebugRestart } from "react-icons/vsc";
import EditorPanel from "./EditorPanel";
import { useState } from "react";

function App() {
  const [Open, setOpen] = useState(false);

  // Toggle Typography Panel Function
  const openEditor = (e) => {
    const targetClassName = e.target;
    const addActiveClass = targetClassName.parentNode;
    addActiveClass.classList.toggle("active");
    setOpen(!Open);
  };

  return (
    <div className="App">
      <div className="container">
        {/* Editor__Title */}
        <header className="app-header">
          <h1 className="title">Gutenberg Typography Editor</h1>
        </header>
        {/* Editor__Body_part */}
        <section className="typography_section">
          {/* Select Typography Editor */}
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
          {Open ? (
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
              <EditorPanel />
            </div>
          ) : (
            ""
          )}
        </section>
      </div>
    </div>
  );
}

export default App;
