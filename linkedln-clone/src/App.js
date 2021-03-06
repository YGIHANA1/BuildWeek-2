import React from 'react';
import Content from './Component/Content/Content';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Dropdown, Image} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Component/NavBar/NavBar';
import Footer from './Component/Footer/Footer'
import PostsProfile from './Component/Content/Profile/PostsProfile';
import Profile from '../src/Component/Content/Profile/Profiles'
import SignIn from './Component/SignIn'
import register from './Component/Register'


class App extends React.Component {
  state = {

    users: '',
    search: '',
    status: false
  }

  fetchUser = async () => {
    await fetch("https://linkedln-backend.herokuapp.com/api/profile/", {
      headers: new Headers({
       
        "Content-Type": "application/json",
      }),
    })
      .then(resp => resp.json())
      .then(respObj => this.setState({
        users: respObj.profiles
      }))
  }

  componentDidMount = () => {
    this.fetchUser()
  }

  searchedValue = (search) => {
    if (search) {
      this.setState({
        search,
        status: true
      });
    } else {
      this.setState({
        search: '',
        status: false
      });
    }
  }

  changeStatus = () => {
    this.setState({
      status: !this.state.status,
      search: ''
    });
  }
  



  render(){
    
    return(
     
        <> 
       
          <Router>
          <Route path='/' exact component={SignIn}/>
          <Route path='/register' exact component={register}/>
          <NavBar
              search={this.searchedValue}
              searchedValue={this.state.searchedValue}
              status={this.state.status}
              changeStatus={this.changeStatus}
              users=
              {this.state.users && this.state.search &&

                this.state.users
                  .filter(user => user.name
                    .toLowerCase()
                    .startsWith(this.state.search.toLowerCase())).length > 0 ?

                this.state.users
                  .filter(user => user.name.toLowerCase().startsWith(this.state.search.toLowerCase()))
                  .map((user, i) =>
                  <Dropdown.Item key={i} href={"/profile/" + user.username}><img src={user.image} style={{width: "40px", borderRadius: "50px", marginRight: "10px"}}/> {user.name} {user.surname} &#9900; {user.title}</Dropdown.Item>
                  )

                :
                <Dropdown.Item>No user with that name</Dropdown.Item>


              } 
            {...this.props}/>
            <Route path="/profile/:username" component={Content}/>
            
            <Route path='/postsprofile/:username' component={PostsProfile} {...this.props}/>
            
            <Footer />
          
      </Router>
     </>
    
    );
    

    }
  }
export default App;
