import React from 'react';
import HornedBeast from './HornedBeast'
import "./Main.css"

class Main extends React.Component{
  render(){
    return(
      <div className="horned"> 
          {this.props.HornedData.map((beast, idx) => 
                < HornedBeast 
                title={beast.title}
                imgUrl={beast.image_url}
                description={beast.description}
                showHornedModal={this.props.showHornedModal}
                selectedBeast={this.props.selectedBeast}
                key={idx}
                hornedBeast={this.props.hornedBeast}
                beast={beast}
                />
                )}

      </div>

)
}
}

export default Main
