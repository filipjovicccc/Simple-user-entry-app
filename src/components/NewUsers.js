import React from "react";
import "./NewUsers.css";

function NewUsers(props) {
  // const [showComponent, setShowComponent] = useStateasdasdasd(false);
  // const showEditComponent = () => {
  //   setShowComponent(true);
  // };
  // console.log(props.users((user) => user.name));
  console.log(props);
  return (
    <ul>
      {props.users.map((user) => (
        <li className="wrapper">
          {user.name} ({user.age} years old)
        </li>
      ))}
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
