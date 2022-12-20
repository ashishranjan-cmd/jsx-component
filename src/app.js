function Func1(myvar){

  console.log(myvar)


  return (
  <div className="mypost">
    <h1 className='myheader'>Welcome to Portfolio Webpage</h1>
    <div>First Post :- </div>
    <img className="img" src="https://i.pinimg.com/736x/24/fb/a8/24fba8681acf5793630c1bca9dd65f2e.jpg" />
    <p>Name : Tom & Jerry</p>
    <p>Email Address : tom.jerry@email.com</p>
    <p>No. of likes : {myvar.x}</p>
  </div>); 
}

function Mypost(){
  return <div><div>Division</div><p>this is paragraph</p></div>
}

export { Func1 }