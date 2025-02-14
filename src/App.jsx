import './App.css'
import ExcelExport from './ExcelExport';

function App() {
  const data = [
    { id: 1, name: 'John Doe', age: 30, profession: 'Developer' },
    { id: 2, name: 'Jane Smith', age: 25, profession: 'Designer' }
  ];
  
  return (
    <div>
      <h1>Export Data to Excel</h1>
      <ExcelExport data={data} fileName="employees" />
    </div>
  );
}

export default App
