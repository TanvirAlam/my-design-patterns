import React, {Component} from 'react';
import Wrapper from './Wrapper';
import './App.css';

class App extends Component {
	render() {
		return (
				<Wrapper
					link="https://jsonplaceholder.typicode.com/posts"
					render={({data, error, isLoading}) => (
						<div className="container">
							<h2>Posts:</h2>
							<div className="card">
                { error && <p>{error.message}</p>}
                {
                  isLoading ? (<h5>Loading ...</h5>) : (
                    <ul>
                      {data.map(post => (
                        <div key={post.id}>
                          <li>{post.title}</li>
                        </div>
                      ))}
                    </ul>
                  )
                }
              </div>
						</div>
					)}
				/>
		);
	}
}

export default App;