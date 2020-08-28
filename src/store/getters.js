const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  imgurl: state => state.user.imgurl,
  name: state => state.user.name,
  uid: state => state.user.uid,
  mobile: state => state.user.mobile,
  roles: state => state.user.roles
}
export default getters

