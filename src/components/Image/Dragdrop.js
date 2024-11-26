"use client";
import { useState } from "react";

export default function DragDropImage({imageFromUser}) {
  const [image, setImage] = useState({
    id: 1,
    src: "/empty.png",
    location: "block1",
  }); // Single image state

  const handleDragStart = (e) => {
    e.dataTransfer.setData("draggedImage", JSON.stringify(image)); // Store image data in drag event
  };

  const handleDrop = (e, target) => {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData("draggedImage"));

    // Update image location to the target block
    setImage({ ...data, location: target });
  };

  const allowDrop = (e) => e.preventDefault();

  return (
    <div className="flex gap-4 p-4">
      {/* Block 1 */}
      <div
        className="w-1/2 h-64 border-2 border-dashed flex flex-col items-center justify-center bg-gray-100"
        onDrop={(e) => handleDrop(e, "block1")}
        onDragOver={allowDrop}
      >
        <h2 className="text-lg mb-4">Block 1</h2>
        {image.location === "block1" && (
          <img
            src={image.src}
            alt={`Image ${image.id}`}
            draggable
            onDragStart={handleDragStart}
            className="w-24 h-24 object-cover cursor-move"
          />
        )}
      </div>

      {/* Block 2 */}
      <div
        className="w-1/2 h-64 border-2 border-dashed flex flex-col items-center justify-center bg-gray-100"
        onDrop={(e) => handleDrop(e, "block2")}
        onDragOver={allowDrop}
      >
        <h2 className="text-lg mb-4">Block 2</h2>
        {image.location === "block2" && (
          <img
            src={image.src}
            alt={`Image ${image.id}`}
            draggable
            onDragStart={handleDragStart}
            className="w-24 h-24 object-cover cursor-move"
          />
        )}
      </div>
    </div>
  );
}
