const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';


     class App extends React.Component {
		  state = {
		  todos: []
		  }
		   componentDidMount() {
			fetch('http://5d3aabf4fa091c0014470ca0.mockapi.io/users')
			.then(res => res.json())
			.then((data) => {
			  this.setState({ todos: data })
			  console.log(this.state.todos)
			})
			.catch(console.log)
		  }
		  
	
        render() {
		
		
          return  (
		  
		  <div className="container">
		 
        <div className="col-xs-12">
        <h1>My Todos</h1>
		<h5 className="card-title">title</h5>
        {this.state.todos.map((todo) => (
          <div className="card">
            <div className="card-body">
			
              <h5 className="card-title">{todo.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
              { todo.completed &&
                <span>
                Completed
                </span>
              }
              { !todo.completed &&
                <span>
                  Pending
                </span>
              }              
              </h6>
			  <h5 className="card-title">{todo.id}</h5>
            </div>
          </div>
        ))}
        </div>
       </div>
    );
        }
      }

      ReactDOM.render(<App />, document.getElementById('root')) 

