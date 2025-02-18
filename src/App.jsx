import './App.css'
import ExcelExport from './ExcelExport';
import withBorder from './hoc';
import Message from './mess';

function App() {
  const data = [
    { id: 1, name: 'John Doe', age: 30, profession: 'Developer' },
    { id: 2, name: 'Jane Smith', age: 25, profession: 'Designer' }
  ];

  const EnhancedMessage = withBorder(Message);

  return (
    <div>
      <h1>Export Data to Excel</h1>
      <ExcelExport data={data} fileName="employees" />

      <EnhancedMessage darshan="Hello, HOC!" />; 
      <EnhancedMessage darshan="second Hoc!" />;
    </div>
  );
}

export default App
