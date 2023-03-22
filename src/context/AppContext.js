import React from 'react'

const AppContext = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
  savedVideosList: [],
  toggleSavedVideo: () => {},
  likedVideosList: [],
  toggleLikedVideos: () => {},
  unLikedVideosList: [],
  toggleUnLikedVideos: () => {},
})

export default AppContext
