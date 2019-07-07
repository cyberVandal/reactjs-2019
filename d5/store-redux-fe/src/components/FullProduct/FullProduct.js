import React from 'react';
import {connect} from 'react-redux';
import classes from './FullProduct.module.css';
import * as actions from '../../store/actions';

class FullProduct extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
            product: {}
        }
      }

    componentDidMount() {
        console.log("Hello From FullProduct")
        console.log(this.props.match.params.id);
        console.log(this.props.products.length);
        console.log(this.props.products[5].price);
        const paramsId = this.props.match.params.id;
        for(let i = 0; i < this.props.products.length; i++){
          if(this.props.products[i].id == paramsId){
            this.setState({product: this.props.products[i]});
            console.log(this.props.products[i])
          }  

         }

        
        
        //const result = this.props.products.filter(product => product.id === this.props.match.params.id);
    // console.log(result)
      //  this.setState({ currentProduct: result })
        // fetch(`http://localhost:8080/products/${this.props.match.params.id}`)
        //     .then(response => response.json())
        //     .then(data => this.setState({ currentProduct: data }));
    }
    const proverka = () => {
        console.log(this.state.product);
    }
    proverka();

    //   "availableSizes": [
    //     "S",
    //     "XS"
    //   ],
    //   "currencyFormat": "$",
    //   "currencyId": "USD",
    //   "description": "4 MSL",
    //   "id": 12,
    //   "pieces": 9,
    //   "isFreeShipping": true,
    //   "price": 10.9,
    //   "style": "Black with custom print",
    //   "imgUrl": "https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg",
    //   "title": "Cat Tee Black T-Shirt"
    // }
    
     
    render() {
        // const {
        //     title, imgUrl, style, price,
        //     isFreeShipping, pieces, description,
        //     currencyId, currencyFormat, availableSizes
        // } = this.state.currentProduct;
        return (
            <div className={classes.wrapper}>

                { this.state.product}                
                
                
                {
                    
                   
                    /* <h1>
                    {title}
                </h1>
                <img src={imgUrl} alt={description} />
                <h4>
                    {isFreeShipping ? 'free shipping' : null}
                </h4>
                <p>{style}</p>
                <p>{currencyFormat}{price} {currencyId}</p>
                <p>Available pieces :  {pieces}</p>
                <p>
                    Available sizes:
                    {
                        availableSizes.map(size => <span key={size} style={{ margin: '5px' }}>{size}</span>)
                    }
                </p> */}
            </div>

        )
    }

}
const mapStateToProps = state => {
	return {
    products: state.products
	};
};

const mapDispatchToProps = dispatch => {
	return {
    clicked: (val) => dispatch({ type: actions.CLICKED, clicked: val }),
    
	}
}
export default connect(mapStateToProps)(FullProduct);