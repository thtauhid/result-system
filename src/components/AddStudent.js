import React, { Component } from 'react'

export default class AddStudent extends Component {
    render() {
        return (
            <div>
				<form action="">
					<div className="form-group">
						<input type="text" name="roll" className="form-control" placeholder="Roll" />
					</div>
					<div className="form-group">
						<input type="text" name="reg" className="form-control" placeholder="Registration" />
					</div>
					<div className="form-group">
						<input type="text" name="year" className="form-control" placeholder="Year" />
					</div>
					<div className="form-group">
						<input type="submit" value="Add New Student" className="form-control btn btn-primary" />
					</div>
				</form>
			</div>
        )
    }
}