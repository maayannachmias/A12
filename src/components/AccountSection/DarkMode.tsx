import React, { useEffect, useState } from "react";

// Add a prop type for className
interface DarkModeProps {
  className?: string;
}

const DarkMode: React.FC<DarkModeProps> = ({ className }) => {
  const [isCurrentDarkmode, setIsCurrentDarkmode] = useState<boolean>(() => {
    const darkModeWasSet = localStorage.getItem("darkmode");
    return darkModeWasSet !== null;
  });

  const toggleDarkMode = () => {
    setIsCurrentDarkmode((prevState) => !prevState);
  };

  useEffect(() => {
    const html = document.querySelector<HTMLHtmlElement>("html")!;
    if (isCurrentDarkmode) {
      html.classList.add("dark");
      localStorage.setItem("darkmode", "true");
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", "#0f172a");
    } else {
      html.classList.remove("dark");
      localStorage.removeItem("darkmode");
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", "#e2e8f0");
    }
  }, [isCurrentDarkmode]);

  // Apply the className prop to the root element of the component
  return (
    <button
      className={`mt-8 text-left flex items-center justify-between ${className}`}
      onClick={toggleDarkMode}
    >
      <span className="dark:text-slate-200 pr-2">Darkmode</span>
      <div className="w-10 h-5 bg-slate-300 rounded-full px-0.5 dark:bg-slate-700/[.3] relative flex items-center dark:justify-end">
        <div className="w-4 h-4 rounded-full bg-violet-600 absolute"></div>
      </div>
    </button>
  );
};

export default React.memo(DarkMode);
