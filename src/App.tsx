
// import { Button } from './components/ui/button'
import Headers from './components/ui/Headers'
// import { decrement, increment } from './redux/features/counter/counterSlice'
// import { useAppDispatch, useAppSelector } from './redux/hook'


function App() {

// const dispatch = useAppDispatch()

// const {count} = useAppSelector((state)=> state.counter)


// const handleIncrement = ()=>{
//   dispatch(increment())
// }
// const handleDecrement = ()=>{
//   dispatch(decrement())
// }

  return (
    <>
    {/* <div>

      <h1>Counter with ridux</h1>
      <Button onClick={handleIncrement}>Increment</Button>
      <div>{count}</div>
      <Button onClick={handleDecrement}>Decrement</Button>
      
    </div> */}
    <Headers></Headers>
    </>
  )
}

export default App
