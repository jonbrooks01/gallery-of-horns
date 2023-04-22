import React from 'react';
import { Button, Card } from 'react-bootstrap';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favoriteCounter: 0
    }
  }

  incrementFavorites = () => {
    this.setState({
      favoriteCounter: this.state.favoriteCounter + 1
    })
  }
  
  handleModalEvent = () => {
    this.props.selectedBeast(this.props.beast);
    this.props.showHornedModal();
  }


  render() {

    return (
      <>
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.imgUrl} onClick={this.handleModalEvent}/>
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
          {this.props.description}
        </Card.Text>
        ❤️{this.state.favoriteCounter}
        <Button variant="primary" onClick={this.incrementFavorites}>Favorite</Button>
      </Card.Body>
    </Card>
      </>
    )
  }
}


// class HornedBeast extends React.Component{}

export default HornedBeast;