import React from 'react';
import HornedBeast from './HornedBeast'
import HornedBeastData from './data.json'
import "./Main.css"

class Main extends React.Component{
  render(){
    return(
      <div className="horned"> 
          {HornedBeastData.map(beast => 
                < HornedBeast 
                title={beast.title}
                imgUrl={beast.image_url} height={250}
                description={beast.description}
                />
                )}

      </div>

)
}
}

export default Main
