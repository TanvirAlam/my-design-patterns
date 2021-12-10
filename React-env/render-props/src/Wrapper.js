import {Component} from 'react';
import axios from "axios";

class Wrapper extends Component {
	state = {
		data: null,
		error: null,
		isLoading: true
	};

	getData() {
		axios.get(this.props.link)
			.then((res) => {
				this.setState({
					data: res.data,
					isLoading: false
				});

				console.log(this.state)
			}).catch((error) => {
				this.setState({
					error,
					isLoading: false
				});
			});
	}

	componentDidMount() {
		this.setState({ isLoading: true }, this.getData());
	}

	render() {
		return this.props.render(this.state);
	}
}

export default Wrapper;