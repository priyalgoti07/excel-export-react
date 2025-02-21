import './App.css'
import DataBinding from './DataBinding';
import DaynamicSum from './DaynamicSum';
import ExcelExport from './ExcelExport';
import withBorder from './hoc';
import Message from './mess';
import UpdateParent from './UpdateParent';
// import PracticesAPI from './PracticesAPI';

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
      {/* What is HOC Finaction in react */}
      <EnhancedMessage darshan="Hello, HOC!" />;
      {/* Fetch data from an API */}
      {/* <PracticesAPI /> */}
      {/* Sum of Two Numbers */}
      <DaynamicSum />
      {/* Update the parent state */}
      <UpdateParent/>
      {/* way data binding in ReactJS */}
      <DataBinding/>
    </div>
  );
}

export default App
