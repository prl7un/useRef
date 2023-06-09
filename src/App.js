import { useRef} from "react";


function App() {

  const R = useRef(3);

  const mult= () => {
    R.current = R.current*10;
    console.log(R.current)
  }

  let t_Ref = useRef(0);

  const cha = () => {
    t_Ref = t_Ref + 1;
    console.log(t_Ref)
  }
  

  return (
    <div> 
      <hr></hr>
      <p>{R.current}</p>
      <button onClick={mult}>Ref변화</button>
      <hr></hr>
      <input type="number" name="box" ref={t_Ref} onChange={cha}/>
    </div>
  );
}

export default App;
