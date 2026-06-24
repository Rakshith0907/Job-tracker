import { useState, useRef, useEffect } from "react";
import { Palette } from "lucide-react";
import { THEMES } from "../constants.js";

export default function ThemeSwitcher({ theme, onThemeChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="theme-switcher" ref={ref}>
      <button className="btn-ghost" onClick={() => setOpen((o) => !o)}>
        <Palette size={15} />
        {THEMES[theme].name}
      </button>
      {open && (
        <div className="theme-menu">
          {Object.entries(THEMES).map(([key, t]) => (
            <button
              key={key}
              className={"theme-option" + (key === theme ? " active" : "")}
              onClick={() => {
                onThemeChange(key);
                setOpen(false);
              }}
            >
              <span className="swatch" style={{ background: t.swatch }} />
              {t.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
