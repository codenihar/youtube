import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'
import SavedVideos from './components/SavedVideos'
import AppContext from './context/AppContext'
import VideoDetails from './components/VideoDetails'
import Trending from './components/Trending'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDarkTheme: false,
    savedVideosList: [],
    likedVideosList: [],
    unLikedVideosList: [],
  }

  changeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  toggleSavedVideo = videoDetails => {
    const {savedVideosList} = this.state
    const IsVideoSaved = savedVideosList.some(
      eachElement => eachElement.id === videoDetails.id,
    )
    if (IsVideoSaved) {
      const updatedSavedVideosList = savedVideosList.filter(
        eachElement => eachElement.id !== videoDetails.id,
      )
      this.setState({savedVideosList: updatedSavedVideosList})
    } else {
      this.setState({savedVideosList: [...savedVideosList, videoDetails]})
    }
  }

  toggleLikedVideos = id => {
    const {likedVideosList, unLikedVideosList} = this.state
    const IsVideoLiked = likedVideosList.some(eachElement => eachElement === id)

    if (IsVideoLiked) {
      const updatedLikedVideosList = likedVideosList.filter(
        eachElement => eachElement !== id,
      )
      this.setState({likedVideosList: updatedLikedVideosList})
    } else {
      const updatedUnLikedVideosList = unLikedVideosList.filter(
        eachElement => eachElement !== id,
      )
      this.setState({
        likedVideosList: [...likedVideosList, id],
        unLikedVideosList: updatedUnLikedVideosList,
      })
    }
  }

  toggleUnLikedVideos = id => {
    const {likedVideosList, unLikedVideosList} = this.state
    const IsVideoUnLiked = unLikedVideosList.some(
      eachElement => eachElement === id,
    )
    if (IsVideoUnLiked) {
      const updatedUnLikedVideosList = unLikedVideosList.filter(
        eachElement => eachElement !== id,
      )
      this.setState({unLikedVideosList: updatedUnLikedVideosList})
    } else {
      const updatedLikedVideosList = likedVideosList.filter(
        eachElement => eachElement !== id,
      )
      this.setState({
        unLikedVideosList: [...unLikedVideosList, id],
        likedVideosList: updatedLikedVideosList,
      })
    }
  }

  render() {
    const {
      isDarkTheme,
      savedVideosList,
      likedVideosList,
      unLikedVideosList,
    } = this.state
    return (
      <AppContext.Provider
        value={{
          isDarkTheme,
          changeTheme: this.changeTheme,
          savedVideosList,
          toggleSavedVideo: this.toggleSavedVideo,
          likedVideosList,
          toggleLikedVideos: this.toggleLikedVideos,
          unLikedVideosList,
          toggleUnLikedVideos: this.toggleUnLikedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
          <Route component={NotFound} />
        </Switch>
      </AppContext.Provider>
    )
  }
}
export default App
