const Hello = ()=>{
  return <h2> welcome to react 19</h2>;
};

// function hello() {
//   return <h2> welcome to react 19</h2>;
// }
const Book = () =>{
  return <>
  <h3> Name- Knowledge is power</h3>
  <h4> Price-300</h4>
  <h5>rating:4.5</h5>
  </>
};
// function Book() {
// return(
//   <>
//   <h3> Name- Knowledge is power</h3>
//   <h4> Price-300</h4>
//   <h5>rating:4.5</h5></>
// )  ;
// };

export default function App(){
  return (<>
  <h1 className="text-4xl text-center bg-gray-600 text-white my-2 p-2">Hello React</h1>
    <Hello />
    <Book />
    <Hello />
    <Book />
    <Hello />
    <Book />
    <Hello />
    <Book />
    <Hello />
    <Book />
    </>);
};