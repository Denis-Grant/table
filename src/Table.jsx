import React from "react";

export default function Table({ headers, data }) {
  return (
    <div>
      <table className="border-collapse">
        <thead>
          <tr className="border-b-2">
            {headers.map((header, i) => (
              <th key={i} className="px-10 capitalize">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((td, i) => (
            <tr key={i}>
              <td className="px-10 py-2 border-r-2">{td.fruit}</td>
              <td className="px-10 border-r-2">{td.color}</td>
              <td className="px-10 ">{td.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
