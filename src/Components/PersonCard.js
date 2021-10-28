import React, {Component} from 'react'


class PersonCard extends Component {
    render () {
        const {firstName, lastName, age, hairColor} = this.props
            return <div>
            <p>{lastName}, {firstName}</p>
            <p>Age: {age} Hair Color: {hairColor}</p>
            </div>
    }
}

export default PersonCard