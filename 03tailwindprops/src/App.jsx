import './App.css';
import Crd from './component/Crd';
function App() {
  return (
    <>
      <h1 className='bg-green-400 text-4xl p-1 rounded-lg'>
        Hello from react app
      </h1>
      <Crd name={'raja'} />
    </>
  );
}

export default App;
