import React, { Component } from 'react'
import axios from 'axios'

// TODO:
// 1. Select Roll from dropdown
// 2. Auto fill registration number from DB
export default class AddNewResult extends Component {
    constructor(props) {
        super(props)

        this.onChangeRoll = this.onChangeRoll.bind(this)
        this.onChangeReg = this.onChangeReg.bind(this)
        this.onChangeBen = this.onChangeBen.bind(this)
        this.onChangeEng = this.onChangeEng.bind(this)
        this.onChangeMath = this.onChangeMath.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            roll: 0,
            reg: 0,
            bengali: 0,
            english: 0,
            math: 0,
            students: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/student/list')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        students: response.data.map(student => student.roll),
                        roll: response.data[0].roll
                    })
                }
            })
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

    onChangeBen(e) {
        this.setState({
            bengali: e.target.value
        })
    }

    onChangeEng(e) {
        this.setState({
            english: e.target.value
        })
    }

    onChangeMath(e) {
        this.setState({
            math: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()

        const result = {
            roll: Number(this.state.roll),
            reg: Number(this.state.reg),
            bengali: Number(this.state.bengali),
            english: Number(this.state.english),
            math: Number(this.state.math)
        }

        console.log(result)

        axios.post('http://localhost:5000/result/add', result)
            .then(res => console.log(res.data))
    }

    render() {
        return (
            <div>
				<form onSubmit={this.onSubmit} >
					<div className="form-group">
						<select 
						required 
						className="form-control" 
						value={this.state.roll}
						onChange={this.onChangeRoll}
						>
						{
							this.state.students.map(function(roll) {
								return <option value={roll} key={roll} > {roll} </option>
							})
						}

						</select>
					</div>
					<div className="form-group">
						<input type="text" name="reg" className="form-control" placeholder="Registration" value={this.state.reg} onChange={this.onChangeReg} />
					</div>
					<div className="form-group">
						<input type="text" name="bengali" className="form-control" placeholder="Bengali" value={this.state.bengali} onChange={this.onChangeBen} />
					</div>
					<div className="form-group">
						<input type="text" name="english" className="form-control" placeholder="English" value={this.state.english} onChange={this.onChangeEng}  />
					</div>
					<div className="form-group">
						<input type="text" name="math" className="form-control" placeholder="Math" value={this.state.math} onChange={this.onChangeMath}  />
					</div>
					<div className="form-group">
						<input type="submit" value="Add Result" className="form-control btn btn-primary" />
					</div>
				</form>
			</div>
        )
    }
}