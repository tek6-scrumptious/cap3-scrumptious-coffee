import {useContext} from "react";
import AuthApi from "../../AuthApi";
 const useAuth = () => {
     return useContext(AuthApi)
 }
 export default useAuth;















// import { Route } from "react-router"
// import AuthApi from "./AuthApi"
// import {useState} from "react"





// const ProtectedRoute = ({component:Component,...rest}) =>{
// return(
//     <Route
//     {...rest}
//     render={()=>(
//     <Component/>)}
//     />
// )
// }
// export default ProtectedRoute

