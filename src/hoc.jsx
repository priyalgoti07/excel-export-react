
// function withBorder(PMessage) {
//   return function ABC(props) {
//     return (
//       <div style={{ border: "2px solid blue", padding: "10px" }}>
//         <PMessage {...props} />
//       </div>
//     );
//   };
// }

// export default withBorder;


// eslint-disable-next-line react/display-name
const withBorder = (PMessage) => (props) => (
    
    <div style={{ border: "2px solid blue", padding: "10px" }}>
      <PMessage {...props} />
    </div>
  );
  
  export default withBorder;
