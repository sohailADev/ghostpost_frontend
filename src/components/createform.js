import React from 'react';
import { Container, Button, TextField, FormControl } from '@material-ui/core';



class createform extends React.Component {
    constructor(props) {
        super(props);
        this.state = { post_body: '', isboast: true, s_key: '' }
    }

    handleChange = (event) => {
        console.log(this.state)
        this.setState({ post_body: event.target.value });
    }
    handleChangeBoastOrRoast = (event) => {
        console.log(this.state)
        this.setState({ isboast: event.target.value })
    }

    randomString = (len, charSet) => {
        charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var randomString = '';
        for (var i = 0; i < len; i++) {
            var randomPoz = Math.floor(Math.random() * charSet.length);
            randomString += charSet.substring(randomPoz, randomPoz + 1);
        }
        return randomString;
    }
    handleSubmit = (event) => {
        event.preventDefault();

        console.log(this.state)
        fetch('http://localhost:8000/api/posts/', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then(res => res.json())
            .then(res => console.log(res))


        this.setState({ post_body: '', isboast: true, s_key: '' })
    }
    componentDidMount() {

        var sk = this.randomString(6)
        this.setState({ s_key: sk })

    }
    render() {
        return (
            <Container className="create_form">
                <form onSubmit={this.handleSubmit}>
                    <FormControl >
                        <TextField
                            id="outlined-select-currency-native"
                            select
                            label="select"
                            // value={this.state.isboast}
                            onChange={this.handleChangeBoastOrRoast}
                            SelectProps={{
                                native: true,
                            }}

                            helperText="Please select is it boast or roast"
                            variant="outlined"
                        >
                            <option value="false">Roast</option>
                            <option value="true">Boast</option>

                        </TextField>
                    </FormControl>


                    <FormControl variant="outlined">
                        <TextField
                            required
                            id="outlined-required"
                            label="Post"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            value={this.state.post_body}
                            onChange={this.handleChange}
                        />
                    </FormControl>
                    <FormControl >
                        <Button id='form_field' type="submit" value="Submit" variant="outlined" color="primary"> Submit</Button>
                    </FormControl>
                </form>

            </Container>
        );
    }
}

export default createform;