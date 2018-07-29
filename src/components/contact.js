import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent, Textfield } from 'react-mdl';

class Contact extends Component {
	render() {
		return(
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={6} hidePhone hideTablet>
						<h2>Tristen Neu</h2>
						<img
						src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
						alt="avatar"
						style={{height: '250px'}}
						/>
						<p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>My experience includes graphic design, mobile and web applications, front end website development, and back end server and database management. I'm open to a variety of projects and I have a flexible working schedule. I look forward to hearing from you!</p>
					</Cell>
					<Cell col={6} phone={4} tablet={8} style={{overflow: 'auto', height: '90vh'}}>
						<h2>Contact Me</h2>
						<hr/>
						<div className="contact-list">
							<List>
							  
							  <ListItem>
							    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
							    	<i className="fa fa-at" aria-hidden="true"/>
							    	<Textfield
							    	    onChange={() => {}}
							    	    label="Full Name"
							    	    floatingLabel
							    	    style={{width: '100px'}}
							    	/>
							    </ListItemContent>
							  </ListItem>

							  <ListItem>
							    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
							    	<i className="fa fa-envelope" aria-hidden="true"/>
							    	<Textfield
							    	    onChange={() => {}}
							    	    label="Email..."
							    	    floatingLabel
							    	    style={{width: '100px'}}
							    	/>
							    </ListItemContent>
							  </ListItem>

							  <ListItem>
							    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', marginLeft: '25px'}}>
							    	<i className="fa fa-angle-right" aria-hidden="true"/>
							    	<Textfield
							    	    onChange={() => {}}
							    	    label="Message..."
							    	    rows={1}
							    	    style={{width: '100px'}}
							    	/>
							    </ListItemContent>
							  </ListItem>
							 
							</List>
						</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Contact;