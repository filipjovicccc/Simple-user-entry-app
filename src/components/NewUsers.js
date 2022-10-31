import { Fragment } from "react";
import AddedUsers from "./AddedUsers";

function NewUsers(props) {
  // const [showComponent, setShowComponent] = useState(false);
  // const showEditComponent = () => {
  //   setShowComponent(true);
  // };
 
  return (
    <ul>
      {props.items.map((item) => {
        <AddedUsers key={item.id} name={item.username} age={item.userage} />;
      })}

    </ul>
  );
}

export default NewUsers;

// for (const expense of props.expenses) {
//   const expenseMonth = expense.date.getMonth();
//   chartDataPoints[expenseMonth].value += expense.amount; 
// }

// return <Chart dataPoints={chartDataPoints} />;
// }
