const { useEffect, useState } = React;
const rootElement = document.getElementById('app');


function App() {
    const [count, setCount]  = useState(0);
    const [Dislike, counter]  = useState(0);
    
    function Increment(){
        setCount(count + 1)

    }

    function Decrement(){
        counter(Dislike + 1)
    }

    return( 
        <>
        <header></header>
            <div className = 'appka'>
                <h1>Counter likes</h1>
                <h1><span>❤</span> {count}</h1>
                <h1>💔{Dislike}</h1>
    <button onClick={Increment}>Like 👍</button> 
    <button onClick={Decrement}>Dislike 👎🏿</button>
     </div>
      
      </>);
};


  
ReactDOM.createRoot(rootElement).render(<App />);
