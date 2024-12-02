import { useState } from "react";
import AddText from "./AddText";

const TextEditor = () => {
  const widthInCM = 18;
  const maxWidthInPX = widthInCM * 37.795275; // 1 cm = 37.795275 px
  const [text, setText] = useState<string>("");

  return (
    <div className="grid grid-cols-5 gap-5">
      <div className="col-span-2 border rounded-lg p-6 h-full bg-gray-50 flex justify-center items-center">
        {text}
      </div>
      <div className="col-span-2">
        <AddText setText={setText} />
      </div>
      <div className="col-span-1"></div>
    </div>
  );
};

export default TextEditor;
