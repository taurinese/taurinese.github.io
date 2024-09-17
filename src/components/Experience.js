import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Experience({
  date_start,
  date_end,
  title,
  company,
  tags,
  description,
  link,
}) {
  return (
    <div className="flex p-4 mb-4 rounded-lg hover:bg-slate-800 hover:text-teal-500">
      <div className="w-2/5">
        {
          <div className="text-sm font-bold text-slate-500">
            {date_start} - {date_end}
          </div>
        }
      </div>
      <div className="flex flex-col w-3/5">
        <span className="flex items-center font-semibold">
          {title} • {company}{" "}
          {link && <FaExternalLinkAlt size={14} className="ml-2" />}
        </span>
        <p className="text-slate-500">{description}</p>
        <div className="mt-2">
          {tags.map((tag) => (
            <span
              style={{ backgroundColor: "#112A39", color: "#4EC6B7" }}
              className="px-2 py-1 mr-2 text-xs font-semibold rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
