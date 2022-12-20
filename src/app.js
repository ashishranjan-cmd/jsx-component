function Func1(props){

  // console.log(myvar)


  return (
  <div className="mypost">
    <h1 className='myheader'>Welcome to Portfolio Webpage</h1>
    <div>First Post :- </div>
    <img className="img" src="https://i.pinimg.com/736x/24/fb/a8/24fba8681acf5793630c1bca9dd65f2e.jpg" />
    <p>Name : {props.fname}</p>
    <p>Email Address : {props.email}</p>
    <p>No. of likes : {props.pagelikes}</p>
  </div>); 
}

function Mypost(){
  return <div><div>Division</div><p>this is paragraph</p></div>
}

export { Func1 }