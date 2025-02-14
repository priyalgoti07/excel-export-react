import React from "react";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

interface ExcelExportProps {
  data: Record<string, any>[]; // Array of objects
  fileName: string;
}

const ExcelExport: React.FC<ExcelExportProps> = ({ data, fileName }) => {
  const exportToExcel = (): void => {
    if (!data || data.length === 0) {
      console.warn("No data available to export.");
      return;
    }

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    saveAs(blob, `${fileName}.xlsx`);
  };

  return <button onClick={exportToExcel}>Export to Excel</button>;
};

export default ExcelExport;
