import React, { FC, useRef, useState } from "react";

const EventsExapmle: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(value);
    console.log(inputRef.current?.value);
  };

  const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
    console.log("Drag");
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDrag(false);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDrag(false);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDrag(true);
  };

  return (
    <div>
      <input
        value={value}
        onChange={handleChange}
        type="text"
        placeholder="Control"
      />
      <input ref={inputRef} type="text" placeholder="NonControl" />
      <button onClick={handleClick}>Example</button>
      <div
        draggable
        onDrag={handleDrag}
        style={{ width: 200, height: 200, background: "red" }}
      ></div>
      <div
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        style={{
          width: 200,
          height: 200,
          background: isDrag ? "blue" : "red",
          marginTop: 20,
        }}
      ></div>
    </div>
  );
};

export default EventsExapmle;
