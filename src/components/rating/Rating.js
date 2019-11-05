import React from 'react'
import Rating from 'react-rating'
import star from './star.png'
import starEmpty from './star-empty.png'

export default class ResetRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ value: undefined });
  }

  render() {
    return (

      <div>
        <Rating {...this.props} initialRating={this.state.value} emptySymbol={<img alt={"Activity"} src={starEmpty} />}
          fullSymbol={<img alt={"Activity"} src={star} />} onClick={(value) => console.log(value)} />

      </div>
    );

  }
}