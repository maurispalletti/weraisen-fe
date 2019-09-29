import React from 'react'
import './header.css';


// import PropTypes from 'prop-types'
import Logo from 'C:/Users/Irina/Desktop/FE - WR/weraisen-fe/src/icons/logo.png'
// import { Link } from 'react-router-dom'
// import CloseableModal from './commons/ClosableModal'
// import Menu from './commons/menu'
// import LoginForm from './forms/LoginForm'

// import { routes as ROUTES, users as USERS } from '../helpers/constants'

class Header extends React.Component {
    

    render() {
      return (
          
                
        <div href={"/home"} className="HeaderImagen">
        <img src={Logo} width="130" height="80" align="Left" />
        </div> 
              
       
      );
    }
}
  

//  const Header1 = () => <div>
//       { <a href={"/home"} className="HomeIcon">
// //          <img src={home} alt={"Home"} />
//          </a> }
//      {<div className="HeaderImage">        <a href={"/profile"}>
//         <img src={avatar_1} alt={"User"} />
//          </a> 
//       </div>}
       
//      </div>




// class Header extends React.Component {
//   componentDidMount () {
//     this.removeLoginMenu()
//   }

//   removeLoginMenu = () => {
//     const user = this.props.user

//     if (user && !_isEmpty(user.userData)) {
//       const userData = user.userData
//       const userMenu = {
//         number: 3,
//         path: '#',
//         children: (
//           <button className="btn-menu" onClick={this.handleLogout}>
//             {userData.name.split(' ')[0]}
//           </button>
//         )
//       }

//       let newMenu = [...this.state.menu, userMenu].filter(item => item.number !== 2)

//       this.setState(prevState => ({
//         ...prevState,
//         menu: newMenu
//       }))
//     }
//   }

//   addLoginMenu = () => {
//     const loginMenu = {
//       number: 2,
//       path: '#',
//       children: (
//         <button className="btn-menu" onClick={this.handleOpenLogin}>
//           LOGIN
//         </button>
//       )
//     }

//     let newMenu = [...this.state.menu, loginMenu].filter(item => item.number !== 3)

//     this.setState(prevState => ({
//       ...prevState,
//       menu: newMenu
//     }))
//   }

//   state = {
//     loginOpen: false,
//     loginError: null,
//     menu: [
//       {
//         number: 2,
//         path: '#',
//         // without the call back, the onClick event wont fire
//         children: (
//           <button className="btn-menu" onClick={() => this.handleOpenLogin()}>
//             LOGIN
//           </button>
//         )
//       }
//     ]
//   }

//   handleOpenLogin = () => {
//     this.setState({ loginOpen: !this.state.loginOpen })
//   }

//   handleLogin = async values => {
//     const success = await this.props.login(values)

//     if (success) {
//       if (success.error) {
//         return this.setState({ loginError: success.error })
//       } else {
//         this.handleOpenLogin()
//         this.removeLoginMenu()
//       }
//     }
//   }

//   handleLogout = () => {
//     const role = this.props.user.role
//     this.props.logout()
//     this.addLoginMenu()

//     switch (role) {
//       case USERS.role.CANDIDATE:
//         window.location.reload()
//         break

//       case USERS.role.TALENT_PARTNER:
//         this.props.history.push(ROUTES.TalentPartnerSignUp)
//         break

//       default:
//         this.props.history.push(ROUTES.TalentPartnerSignUp)
//         break
//     }
//   }

//   render () {
//     const { loginOpen, loginError, menu } = this.state
//     const { showLogin } = this.props

//     return (
//       <>
//         <header className="header">
//           <div className="logo">
//             <Link to="/">
//               <JNLogo />
//             </Link>
//           </div>
//           {showLogin && (
//             <div className="menu">
//               <Menu options={menu} />
//             </div>
//           )}
//         </header>
//         <CloseableModal
//           title="Login"
//           subTitle=""
//           isOpen={loginOpen}
//           onRequestClose={this.handleOpenLogin}
//           showCloseButton>
//           <LoginForm loginUser={this.handleLogin} loginFailed={loginError} />
//         </CloseableModal>
//       </>
//     )
//   }
// }

// Header.propTypes = {
//   showLogin: PropTypes.bool
// }

// Header.defaultProps = {
//   showLogin: true
// }

export default Header