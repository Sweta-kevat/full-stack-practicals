
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./store";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Practical 14: Redux and Dispatch</h1>
      <h2>Counter: {count}</h2>

      <button onClick={() => dispatch(increment())}>Increment</button>{" "}
      <button onClick={() => dispatch(decrement())}>Decrement</button>{" "}
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default App;
