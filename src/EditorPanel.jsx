import React, { useState } from "react";
import { FiMonitor } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";

const EditorPanel = () => {
  //Initial value || Handling Multiple values with single state!!  
  const [value, setValue] = useState({
    family: "",
    fontSizeRanger: 0,
    weight: "",
    transform: "",
    style: "",
    decoration: "",
    lineHeight: 0,
    letterSpacing: 0,
    wordSpacing: 0,
  });
  console.log(value);

// Value Change Detecting Function  
  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <div className="panel_body_wrapper">
      {/* Item - 01 || Font-Family*/}
      <div className="item__one item">
        <p>Family</p>
        <form action="" className="dropdown_font_family">
          <select
            id="family"
            list="family"
            name="family"
            className="font_family dropdown"
            onChange={onChange}
          >
            <option value="Roboto">Roboto</option>
            <option value="Open Sans">Open Sans</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Poppins">Poppins</option>
            <option value="Kanit">Kanit</option>
          </select>
        </form>
      </div>
      {/* Item - 02 || Font-Size*/}
      <div className="font_size_increase_wrapper ranger">
        <div className="font_size_selector_heading ranger_flex">
          <div className="font_size_block_wrapper">
            <p className="font_size_text">
              Size <FiMonitor className="desktop__size" />
            </p>
          </div>
          <div className="pixel__dropdown_wrapper">
            <p className="pixel__dropdown_block">
              px <RiArrowDropDownLine className="dropdown__icon" />
            </p>
          </div>
        </div>
        {/* Font-size Increase Ranger */}
        <div className="value_increase_block ranger_flex">
          <input
            type="range"
            id="vol"
            value={value.fontSizeRanger}
            onChange={onChange}
            name="fontSizeRanger"
            min="0"
            max="100"
          />
          <div className="value_block">{value.fontSizeRanger}</div>
        </div>
      </div>
      {/* Item - 03 || Font-Weight*/}
      <div className="item__three item">
        <p>Weight</p>
        <form action="" className="dropdown_font_weight">
          <select
            id="font_weight"
            name="weight"
            onChange={onChange}
            className="font_weight dropdown"
          >
            <option value="">Default</option>
            <option value="400 (Light)">400 (Light)</option>
            <option value="500 (Normal)">500 (Normal)</option>
            <option value="600 (Semi Bold)">600 (Semi Bold)</option>
            <option value="800 (Bold)">800 (Bold)</option>
          </select>
        </form>
      </div>
      {/* Item - 04 || Font-Transform*/}
      <div className="item__four item">
        <p>Transform</p>
        <form action="" className="dropdown_font_transform">
          <select
            id="font_transform"
            className="font_transform dropdown"
            name="transform"
            onChange={onChange}
          >
            <option value="">Default</option>
            <option value="Move">Move</option>
            <option value="Rotate">Rotate</option>
            <option value="Scale">Scale</option>
            <option value="Skew">Skew</option>
          </select>
        </form>
      </div>
      {/* Item - 05 || Font-Style*/}
      <div className="item__five item">
        <p>Style</p>
        <form action="" className="dropdown_font_Style">
          <select
            id="font_Style"
            className="font_Style dropdown"
            name="style"
            onChange={onChange}
          >
            <option value="">Default</option>
            <option value="Normal">Normal</option>
            <option value="Italic">Italic</option>
            <option value="oblique">Oblique</option>
          </select>
        </form>
      </div>
      {/* Item - 06 || Font-Decoration*/}
      <div className="item__six item">
        <p>Decoration</p>
        <form action="" className="dropdown_font_Decoration">
          <select
            id="font_Decoration"
            className="font_Decoration dropdown"
            name="decoration"
            onChange={onChange}
          >
            <option value="">Default</option>
            <option value="Overline">Overline</option>
            <option value="Line-Through">Line-Through</option>
            <option value="Underline">Underline</option>
            <option value="Dotted">Dotted</option>
          </select>
        </form>
      </div>
      {/* Item - 07 || Line-Height*/}
      <div className="line_height_increase_wrapper ranger">
        <div className="line_height_selector_heading ranger_flex">
          <div className="line_height_block_wrapper">
            <p className="line_height_text">
              Line height <FiMonitor className="desktop__size" />
            </p>
          </div>
          <div className="pixel__dropdown_wrapper">
            <p className="pixel__dropdown_block">
              px <RiArrowDropDownLine className="dropdown__icon" />
            </p>
          </div>
        </div>
        {/* Line-height Increase Ranger */}
        <div className="value_increase_block ranger_flex">
          <input
            type="range"
            id="vol"
            value={value.lineHeight}
            onChange={onChange}
            name="lineHeight"
            min="0"
            max="100"
          />
          <div className="value_block">{value.lineHeight}</div>
        </div>
      </div>
      {/* Item - 08 || Letter-Spacing*/}
      <div className="letter_spacing_increase_wrapper ranger">
        <div className="letter_spacing_selector_heading ranger_flex">
          <div className="letter_spacing_block_wrapper">
            <p className="letter_spacing_text">
              Letter Spacing <FiMonitor className="desktop__size" />
            </p>
          </div>
          <div className="pixel__dropdown_wrapper">
            <p className="pixel__dropdown_block">
              px <RiArrowDropDownLine className="dropdown__icon" />
            </p>
          </div>
        </div>
        {/* Letter-Spacing Increase Ranger */}
        <div className="value_increase_block ranger_flex">
          <input
            type="range"
            id="vol"
            value={value.letterSpacing}
            onChange={onChange}
            name="letterSpacing"
            min="0"
            max="100"
          />
          <div className="value_block">{value.letterSpacing}</div>
        </div>
      </div>
      {/* Item - 09 || Word-Spacing*/}
      <div className="word_spacing_increase_wrapper ranger">
        <div className="word_spacing_selector_heading ranger_flex">
          <div className="word_spacing_block_wrapper">
            <p className="word_spacing_text">
              Word Spacing <FiMonitor className="desktop__size" />
            </p>
          </div>
          <div className="pixel__dropdown_wrapper">
            <p className="pixel__dropdown_block">
              px <RiArrowDropDownLine className="dropdown__icon" />
            </p>
          </div>
        </div>
        {/* Word-Spacing Increase Ranger */}
        <div className="value_increase_block ranger_flex">
          <input
            type="range"
            id="vol"
            value={value.wordSpacing}
            onChange={onChange}
            name="wordSpacing"
            min="0"
            max="100"
          />
          <div className="value_block">{value.wordSpacing}</div>
        </div>
      </div>
    </div>
  );
};

export default EditorPanel;
