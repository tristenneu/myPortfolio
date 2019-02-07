import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Routes from '../components/routes';
import { Link } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div style={{width: '100%', margin: 'auto'}}>
			    <Layout style={{background: 'url(https://images.unsplash.com/photo-1506971456216-7b494f54d588?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=802308f2ab4504df4ca8dee210c76701&auto=format&fit=crop&w=1266&q=80) center / cover'}}>
			        <Header transparent title={<Link to="/" style={{color: 'white', textDecoration: 'none'}}>Home</Link>}>
			            <Navigation>
			                {/* <Link to="/resume">Resume</Link>
			                <Link to="/projects">Projects</Link>
							<Link to="/contact">Contact</Link> */}
							{/* <a target="_blank" href="http://localhost:3000/BlackAndPastelModernCreativeResume.pdf">Resume</a> */}
							{/* <i class="fas fa-arrow-down"></i> */}
							<a target="_blank" href="https://drive.google.com/open?id=1J9zX0qfEBiLJaQmUfSKiapmYDe5pZya8">Resume</a>
			                <a target="_blank" href="https://tristenneu.thehackhive.com/">Projects</a>
			                <a target="_blank" href="https://medium.com/@tristenneu">Blog</a>
							<a target="_blank" href="https://form.jotform.com/90358010402140">Contact</a>
			            </Navigation>
			        </Header>
			        <Drawer title={<Link to="/" style={{color: 'black', textDecoration: 'none'}}>Home</Link>}>
			            <Navigation>
							{/* <a target="_blank" href="http://localhost:3000/BlackAndPastelModernCreativeResume.pdf">Resume</a> */}
							<a target="_blank" href="https://drive.google.com/open?id=1J9zX0qfEBiLJaQmUfSKiapmYDe5pZya8">Resume</a>
			            	<a target="_blank" href="https://tristenneu.thehackhive.com/">Projects</a>
			                <a target="_blank" href="https://medium.com/@tristenneu">Blog</a>
							<a target="_blank" href="https://form.jotform.com/90358010402140">Contact</a>
			            </Navigation>
			        </Drawer>
			        <Content>
				        <div className="page-content" />
				        <Routes />
			        </Content>
			    </Layout>
			</div>
		)
	}
}

export default App;