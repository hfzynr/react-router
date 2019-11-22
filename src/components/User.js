import React, { Component } from 'react'
import Axios from 'axios'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import { Link }  from 'react-router-dom'

const API_PLACEHOLDER = process.env.REACT_APP_API_PLACEHOLDER
export default class User extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            data:[]
        }
    }
    
    componentDidMount = () => {
        Axios
        .get(`${API_PLACEHOLDER}/users`)
        .then(response => {
            this.setState({data: response.data })
        })
        
    } 

    render() {
        return (
            <div
            style={{ display: 'flex', flexWrap:'wrap'}}>
                {this.state.data.map(({name, username,email,phone,id}, key) => {
                    return (
                        <div key={key}>
                            <Card 
                            style={{ padding:'10px', margin: "10px"}}>
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        {name}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {username}
                                    </Typography>
                                    <Typography variant="body2" component="p" color="textSecondary">
                                        Email : {email}
                                    </Typography>
                                    <Typography variant="body2" component="p" color="textSecondary">
                                        Phone : {phone}
                                    </Typography>
                                </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary"> 
                                                <Link to={`/user/${id}`}>
                                                    Post Something..
                                                </Link>
                                        </Button>
                                    </CardActions>
                            </Card>
                        </div>
                    )
                })}
            </div>
        )
    }
}