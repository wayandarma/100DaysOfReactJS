import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { increment, decrement } from "../redux/counter/counterSlice";
import { useSelector, useDispatch } from "react-redux";
function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  return (
    <div className="flex items-center flex-col gap-4">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-3xl text-purple-500 uppercase font-bold">
          simple counter with redux
        </h1>
        <h1 className="text-6xl font-extrabold text-orange-500">{count}</h1>
      </div>
      <div className="flex gap-5">
        <button onClick={() => dispatch(increment())}>
          <FaCirclePlus className="text-purple-800 text-4xl" />
        </button>
        <button onClick={() => dispatch(decrement())}>
          <FaCircleMinus className="text-purple-800 text-4xl" />
        </button>
      </div>
    </div>
  );
}

export default Counter;
