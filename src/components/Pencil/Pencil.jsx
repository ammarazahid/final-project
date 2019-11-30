import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import './Pencil.css';



class Pencil extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentWillReceiveProps(nextProps) {
        // This will erase any local state updates!
        // Do not do this.
        this.setState({ data: nextProps.data });
        console.log(nextProps)
    }

    renderData = (data) => {
        return (
            <div className="pencil-cards">
                {
                    data.map(element => (
                        <Card className="card" style={{width:'300px', height: '400px' }}>
                            <Card.img className="image" variant="top" src={element.image_link} />
                            <Card.Body>
                                <Card.Title>{element.name}</Card.Title>
                                <Card.Text>
                                    {element.price_sign}{element.price}
                                </Card.Text>
                                <Card.Text>
                                    {element.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                }
            
                <Card className="card" style={{width:'300px', height: '400px' }}>
                    <Card.img className="image" variant="top" src={this.state.data[0].image_link} />
                    <Card.Body>
                        <Card.Title>{this.state.data[0].name}</Card.Title>
                        <Card.Text>
                            {this.state.data[0].price_sign}{this.state.data[0].price}
                        </Card.Text>
                        <Card.Text>
                            {this.state.data[0].description}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="card" style={{ width: '300px', height: '400px' }}>
                    <Card.img className="image" variant="top" src={this.state.data[1].image_link} />
                    <Card.Body>
                        <Card.Title>{this.state.data[1].name}</Card.Title>
                        <Card.Text>
                            {this.state.data[1].price_sign}{this.state.data[1].price}
                        </Card.Text>
                        <Card.Text>
                            {this.state.data[1].description}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="card" style={{ width: '300px', height: '400px' }}>
                    <Card.img className="image" variant="top" src={this.state.data[2].image_link} />
                    <Card.Body>
                        <Card.Title>{this.state.data[2].name}</Card.Title>
                        <Card.Text>
                            {this.state.data[2].price_sign}{this.state.data[2].price}
                        </Card.Text>
                        <Card.Text>
                            {this.state.data[2].description}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="card" style={{ width: '300px', height: '400px' }}>
                    <Card.img className="image" variant="top" src={this.state.data[3].image_link} />
                    <Card.Body>
                        <Card.Title>{this.state.data[3].name}</Card.Title>
                        <Card.Text>
                            {this.state.data[3].price_sign}{this.state.data[3].price}
                        </Card.Text>
                        <Card.Text>
                            {this.state.data[3].description}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="card" style={{ width: '300px', height: '400px' }}>
                    <Card.img className="image" variant="top" src={this.state.data[4].image_link} />
                    <Card.Body>
                        <Card.Title>{this.state.data[4].name}</Card.Title>
                        <Card.Text>
                            {this.state.data[4].price_sign}{this.state.data[4].price}
                        </Card.Text>
                        <Card.Text>
                            {this.state.data[4].description}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="card" style={{ width: '300px', height: '400px' }}>
                    <Card.img className="image" variant="top" src={this.state.data[5].image_link} />
                    <Card.Body>
                        <Card.Title>{this.state.data[5].name}</Card.Title>
                        <Card.Text>
                            {this.state.data[5].price_sign}{this.state.data[5].price}
                        </Card.Text>
                        <Card.Text>
                            {this.state.data[5].description}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="card" style={{ width: '300px', height: '400px' }}>
                    <Card.img className="image" variant="top" src={this.state.data[6].image_link} />
                    <Card.Body>
                        <Card.Title>{this.state.data[6].name}</Card.Title>
                        <Card.Text>
                            {this.state.data[6].price_sign}{this.state.data[6].price}
                        </Card.Text>
                        <Card.Text>
                            {this.state.data[6].description}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="card" style={{ width: '300px', height: '400px' }}>
                    <Card.img className="image" variant="top" src={this.state.data[7].image_link} />
                    <Card.Body>
                        <Card.Title>{this.state.data[7].name}</Card.Title>
                        <Card.Text>
                            {this.state.data[7].price_sign}{this.state.data[7].price}
                        </Card.Text>
                        {/* <Card.Text>
                            {this.state.data[7].description}
                        </Card.Text> */}
                    </Card.Body>
                </Card>
            </div>
        )
    }
    
    render() {
        const data = this.state.data;
        
        return data.length ? (
            <div className="pencil-cards">
            {
                data.map(element => (
                    <Card className="card" style={{width:'300px', height: '400px' }}>
                        <Card.img className="image" variant="top" src={element.image_link} />
                        <Card.Body>
                            <Card.Title>{element.name}</Card.Title>
                            <Card.Text>
                                {element.price_sign}{element.price}
                            </Card.Text>
                            <Card.Text>
                                {element.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))
            } </div>
        ) : (<div>Data is loading...</div>)
    }
}


export default Pencil;


