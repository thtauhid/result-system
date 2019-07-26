import React, { Component } from 'react'
import axios from 'axios'

export default class AddStudent extends Component {
    constructor(props) {
        super(props)

        this.onChangeRoll = this.onChangeRoll.bind(this)
        this.onChangeReg = this.onChangeReg.bind(this)
        this.onChangeYear = this.onChangeYear.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            roll: 0,
            reg: 0,
            year: 0
        }

    }

    onChangeRoll(e) {
        this.setState({
            roll: e.target.value
        })
    }

    onChangeReg(e) {
        this.setState({
            reg: e.target.value
        })
    }

    onChangeYear(e) {
        this.setState({
            year: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()

        const student = {
            roll: Number(this.state.roll),
            reg: Number(this.state.reg),
        }

        console.log(student)

        axios.post('http://localhost:5000/student/add', student)
            .then(res => console.log(res.data))
    }

    render() {
        return (
            <div>
				<form onSubmit={this.onSubmit} >
					<div className="form-group">
						<input type="text" onChange={this.onChangeRoll} value={this.state.roll} name="roll" className="form-control" placeholder="Roll" />
					</div>
					<div className="form-group">
						<input type="text" name="reg" onChange={this.onChangeReg} value={this.state.reg} className="form-control" placeholder="Registration" />
					</div>
					<div className="form-group">
						<input type="submit" value="Add New Student" className="form-control btn btn-primary" />
					</div>
				</form>
			</div>
        )
    }
}