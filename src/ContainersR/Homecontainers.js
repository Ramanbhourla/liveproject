import Home from "../ComponentsR/Home";
import { connect } from "react-redux";
import {AddTocart,RemoveTocart} from '../ServiceR/Actions/Action';

 const mapDispatchToprops = dispatch =>({
     AddtocardHandler: data =>dispatch(AddTocart(data)),
     RemoveCartHandler :data => dispatch(RemoveTocart(data))
})
 const mapStateToProps = state =>({
    kuchbhi : state
 })


export default connect(mapStateToProps,mapDispatchToprops)(Home)