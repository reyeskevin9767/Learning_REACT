class Hello extends React.Component{
	render(){
		return (
		<div>
		<h1>Learning REACT</h1>
		<h1>Something New</h1>
		<h1>Class Vs JS Function</h1>
		</div>
		);
	}
}

// function Hello() {
// 	return (
// 		<div>
// 		<h1>Learning REACT</h1>
// 		<h1>Something New</h1>
// 		<h1>Class Vs JS Function</h1>
// 		</div>
// 		);
// }

ReactDOM.render(<Hello />, document.getElementById('root'));

