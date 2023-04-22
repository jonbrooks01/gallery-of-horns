import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import HornedBeastData from './data.json';
import HornedModal from './HornedBeastModal';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hornedBeast: {},
      showModal: false,
    }
  }

    showHornedModal = () => {
      this.setState({showModal: true})
    }

    hideHornedModal = () => {
      this.setState({showModal: false})
    }

    selectedBeast = (beastObj) =>(
      this.setState({hornedBeast: beastObj})
    )

  render() {
    console.log(this.state.hornedBeast);
    return (
      <>
      <Header />
      <Main 
      showHornedModal={this.showHornedModal}
      HornedData={HornedBeastData}
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
