// specTable.tsx
import React from 'react';

interface TableDataItem {
  specs: Record<string, Record<string, string>>;
}

interface SpecTableProps {
  tableData: TableDataItem[];
}

const SpecTable: React.FC<SpecTableProps> = ({tableData}) => {
  const renderTables = () => {
    if (tableData.length === 0) {
      return null;
    }

    return tableData.map((rowData, rowIndex) => (
      <div key={rowIndex} className="mb-4">
        {Object.entries(rowData.specs).map(([category, categorySpecs], columnIndex) => (
          <table key={`${rowIndex}-${columnIndex}`} className="table mb-4">
            <thead>
              <tr>
                <th colSpan={2}>{category}</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(categorySpecs).map(([key, value], entryIndex) => (
                <tr key={entryIndex}>
                  <td className="font-semibold">{key}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>
    ));
  };

  return <div>{renderTables()}</div>;
};

export default SpecTable;
