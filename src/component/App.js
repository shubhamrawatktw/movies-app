import React from 'react'
import {data} from "../data"
import Navbar from './Navbar'
import MovieCard from './MovieCard'


class App extends React.Component {
 componentDidMount(){
   const {store} = this.props
   store.subscribe(()=>{
     console.log("updated");
     this.forceUpdate()
   })
   store.dispatch({
     type:"ADD_MOVIES",
     movies:data
   })

   console.log("state",store.getState());
 }
  render(){
console.log("render");
    const movies = this.props.store.getState();
    return (
    <div>
      <Navbar/>
    <div className='main'>
   <div className="tabs">
   <div className="tab">movies</div>
   <div className="tab">favourites</div>
   </div>
 
 <div className="list">
 
{movies.map(movie=><MovieCard 
movie={movie}
key={movie.Title}
/>)}
 
 </div>


      </div>
    </div>
  )
}
}

export default App;

