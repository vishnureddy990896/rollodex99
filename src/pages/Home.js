import React from 'react'
import Cardlist from '../components/Cardlist/Cardlist.Component';
import Search from '../components/Search/Search.Component';

import './Home.Styles.css'

class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            monsters: [],
            searchField : ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }));
    }

    handleSearch = (event)=>{
       this.setState({searchField: event.target.value})
    }
   
    render(){
        
        const {monsters,searchField
        } = this.state
       
        const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()))
        return(
            <>
            <div className='App'>
                <h1>Monsters Rolodex</h1>
               
                <Search handleSearch={this.handleSearch} />
                <Cardlist monsters={filteredMonsters} />
                
            </div>
            </>
        )
    }
}




export default  Home


