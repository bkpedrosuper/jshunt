import React, { Component } from 'react'
import api from '../../services/api'
import './styles.css'
import {Link} from 'react-router-dom'

export default class Product extends Component{
    state={
        product: {}

    }

    async componentDidMount(){
        const {id} = this.props.match.params
        const response = await api.get(`/products/${id}`)

        this.setState({product: response.data})
    }

    mainPage = () => {
        
    }

    render(){
        const {product} = this.state;

        return(
            <table className="table">
                <div className="product-info">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>
                        URL: <a href={product.url}>{product.url}</a>
                    </p>
                </div>
                <div className="buttons">
                        <Link to={`/`}>Voltar à Página Inicial</Link>
                        
                </div>
            </table>

        )
    }
}