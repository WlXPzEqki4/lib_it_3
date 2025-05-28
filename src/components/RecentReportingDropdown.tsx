import React, { useEffect, useState } from 'react';

interface RecentReport {
  name: string;
  url: string;
}

const RecentReportingDropdown: React.FC = () => {
  const [reports, setReports] = useState<RecentReport[]>([]);
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    // Fetch the static manifest of available PDF reports
    fetch('/reports/reports.json')
      .then(async (res) => {
        if (res.ok) {
          const data = await res.json();
          setReports(Array.isArray(data) ? data : []);
        } else {
          setReports([]);
        }
      })
      .catch(() => setReports([]));
  }, []);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const url = e.target.value;
    setSelected(url);
    if (url) {
      window.open(url, '_blank');
    }
  };

  if (reports.length === 0) return null;

  return (
    <div className="mt-4">
      <label htmlFor="recent-reporting" className="block text-primary-200 text-sm mb-1">Recent Reporting</label>
      <select
        id="recent-reporting"
        className="bg-primary-900 text-white border border-primary-700 rounded px-3 py-2 w-full"
        onChange={handleSelect}
        value={selected}
      >
        <option value="">Select a PDF report...</option>
        {reports.map((report) => (
          <option key={report.url} value={report.url}>{report.name}</option>
        ))}
      </select>
    </div>
  );
};

export default RecentReportingDropdown;
