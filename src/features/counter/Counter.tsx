import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { increment, decrement } from './counterSlice';

function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <section>
      <div className="flex items-center gap-2">
        <button className="btn-primary" onClick={() => dispatch(decrement())}>
          -
        </button>

        <p>{count}</p>

        <button className="btn-primary" onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
    </section>
  );
}

export default Counter;
