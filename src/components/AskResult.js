import React, { Component } from 'react'

export default class AskResult extends Component {
    render() {
        return (
            <div>
            <br/>
				<form action="">
					<div className="form-group">
						<input type="text" name="roll" placeholder="Roll" className="form-control"/>
					</div>
					<div className="form-group">
						<input type="text" name="reg" placeholder="Registration" className="form-control"/>
					</div>
					<div className="form-group">
						<input type="submit" name="submit" value="Submit" className="btn btn-primary form-control"/>
					</div>
				</form>
			</div>
        )
    }
}