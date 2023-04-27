import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import HornedBeastData from './data.json';
import HornedModal from './HornedBeastModal';
import { Form } from "react-bootstrap";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hornedBeast: {},
      showModal: false,
      HornedBeastData: HornedBeastData
    }
  }

  showHornedModal = () => {
    this.setState({ showModal: true })
  }

  hideHornedModal = () => {
    this.setState({ showModal: false })
  }

  selectedBeast = (beastObj) => {
    this.setState({ hornedBeast: beastObj })
  }

  changeBeast = (e) => {
    e.preventDefault();
 
    let filterHorns = {}
    if (e.target.value === '1') {
      filterHorns = HornedBeastData.filter(beast => beast.horns === 1)
    }
    else if (e.target.value === '2') {
      filterHorns = HornedBeastData.filter(beast => beast.horns === 2)
    }
    else if (e.target.value === '3') {
      filterHorns = HornedBeastData.filter(beast => beast.horns === 3)
    }
    else if (e.target.value === '100') {
      filterHorns = HornedBeastData.filter(beast => beast.horns === 100)
    }
    else {
      filterHorns = HornedBeastData
    }
    console.log(filterHorns)
    this.setState({ HornedBeastData: filterHorns })
 
  };

  render() {
    return (
      <>
        <Header />

        <Form>
          <Form.Group>
            <Form.Label>Choose Horned Beast</Form.Label>
            <Form.Select onChange={this.changeBeast}>
              <option value=''>Select a Horned Beast</option>
              <option value="1">One Horned Beast</option>
              <option value="2">Two Horned Beast</option>
              <option value="3">Three Horned Beast</option>
              <option value="100">One Hundred Horned Beast</option>

            </Form.Select>
          </Form.Group>
        </Form>


        <Main
          showHornedModal={this.showHornedModal}
          HornedData={this.state.HornedBeastData}
          selectedBeast={this.selectedBeast}
          hornedBeast={this.state.hornedBeast}
        />
        <HornedModal
          hideModal={this.hideHornedModal}
          hornedBeast={this.state.hornedBeast}
          showModal={this.state.showModal}
        />
        <Footer />
      </>
    )
  }
}
export default App;
