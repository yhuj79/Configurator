import { useState } from "react";
import { Link } from "react-router-dom";
import { ModelDiv } from "./Model.style";
import SettingsIcon from "@mui/icons-material/Settings";

function Model({ image, name, animationDelay, route }) {
  const [delay, setDelay] = useState("delay-loaded");
  setTimeout(() => setDelay("model-configure-button"), 2000);

  return (
    <ModelDiv style={{ animationDelay: `${animationDelay}s` }}>
      <img className="model-img" alt="" src={image} />
      <Link to={`/${route}`} className={delay}>
        <SettingsIcon /> Configure
      </Link>
      <div className="model-text-section">
        <p className="model-text-title">{name}</p>
      </div>
    </ModelDiv>
  );
}
export default Model;
