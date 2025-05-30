export default function exportToCSV(data, filename = "grocery_data.csv") {
    if (!data || !data.length) {
      console.error("No data to export");
      return;
    }
  
    const headers = Object.keys(data[0]).join(","); // Extract headers
    const csvRows = data.map(row =>
      Object.values(row).map(value => `"${value}"`).join(",")
    );
  
    const csvContent = [headers, ...csvRows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
  
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  