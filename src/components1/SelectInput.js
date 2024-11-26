"use client";

export default function SelectInput({
  label,
  dropdown,
  iconColor,
  borderStyle,
  width,
}) {
  return (
    <div
      className={`flex flex-col justify-start ${
        width || "w-auto"
      } ${borderStyle}`}
    >
      <label className="text-xs font-medium text-gray-700 items-center justify-start flex">
        {label}
        {dropdown && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000000"
          >
            <path d="M480-360 280-560h400L480-360Z" />
          </svg>
        )}
      </label>
      <div className="flex items-center justify-center">
        <select className="block w-full px-2 py-2 text-sm  font-medium capitalize  focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
          <option value=""></option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    </div>
  );
}
