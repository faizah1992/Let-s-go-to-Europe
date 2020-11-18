import React, { Component } from 'react'
import CountryCard from './Components/countryCard'
import { Row, Input, Navbar, Grid } from 'rsuite'
import 'rsuite/dist/styles/rsuite-default.css';
import "./App.css";

class App extends Component {
  
    state = {
      countries: [],
      isLoaded: false,
      countriesToShow: [],
      languages: 0,
    }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/region/europe')
    .then(res => res.json())
    .then(countries => {
      console.log(countries)
      this.setState({
        isLoaded: true,
        countries: countries,
        countriesToShow: countries,
      })
    })
  }

  handleSubregion = (e) => {
    // debugger
    // console.log(countriesToShow)
    const countriesToShow = this.state.countries.filter(country => country.subregion.toLowerCase().includes(e.toLowerCase()))
    this.setState({ countriesToShow: countriesToShow})
    console.log(countriesToShow)
  }

  handleLanguage = (e) => {

    let num = e.target.selectedIndex
    const countriesToShow = this.state.countries.filter(country => {
      if (num === 0) {
        return true
      }
      else if ( num === 1 || num === 2){
        return country.languages.length === num
      }
      else {
        return country.languages.length >= num
      }
    })
    this.setState({ countriesToShow: countriesToShow})
  }

  sortCountries = (e) => {
    let index = e.target.selectedIndex
    if (index === 0) {
      return true
    }
    else if (index === 1) {
      this.setState({
        countriesToShow: this.state.countriesToShow.sort((a, b) => (a.name.localeCompare(b.name))) 
      })
    }
    else if (index === 2) {
      this.setState({
        countriesToShow: this.state.countriesToShow.sort((a, b) => (b.name.localeCompare(a.name)))
      })
    }
    else if (index === 3) {
      this.setState({
        countriesToShow: this.state.countriesToShow.sort((a, b) => (a.population - b.population))
      })
    }
    else if (index === 4){
      this.setState({
        countriesToShow: this.state.countriesToShow.sort((a, b) => (b.population - a.population))
      })
    }

  }





  render() {
    var{ isLoaded, countries, countriesToShow } = this.state
    if (!isLoaded) {
      return <div>Loading...</div>
    }
    else {
    return (
      <div className="App">
        <Navbar className="navbar">
         <Navbar.Header style={{ fontSize: "1.5rem"}}>
          Let's go to Europe!
         </Navbar.Header>
        </Navbar>
      <Input placeholder="Search Subregion" onChange={(e)=>this.handleSubregion(e)}/>
      <select name="choice" onChange={ this.handleLanguage}>
          <option value="0" ># of languages</option>
          <option value="1" >1</option>
          <option value="2" >2</option>
          <option value="3+" >3+</option>
      </select>

      <select name="choice" onChange={this.sortCountries}>
          <option value="0" >Sort</option>
          <option value="1" >A-Z</option>
          <option value="2" >Z-A</option>
          <option value="3" >Population Low-high</option>
          <option value="4" >Population High-low</option>
      </select>
      <Grid fluid>
      <Row>
        {countriesToShow.map(country => (
          <CountryCard country={country} key={country.id}/>  
        ))}
      </Row>
      </Grid>
    </div>  
    )
    }
  }
}

export default App;
