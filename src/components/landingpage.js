import React, { Component } from 'react';
import { Grid, Cell, Footer, FooterSection, FooterLinkList } from 'react-mdl';
import { Link } from 'react-router-dom';

class Landing extends Component {
	render() {
		return(
			<div style={{width: '100%', margin: 'auto'}}>
				<Grid className="landing-grid">
					<Cell col={12} style={{overflow: 'auto'}}>
						<img
						src="https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-boy-man-32442f8a928dac67-512x512.png"
						alt="avatar"
						className="avatar-img"
						/>

						<div className="banner-text">
							<h1>&lt; h1 &gt;</h1>
							<hr/>
							{/* <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p> */}
							<p> </p>
							<div className="social-links">
								{/* LinkedIn */}
								<a href="https://www.linkedin.com/in/tristenneu/" rel="noopener noreferrer" target="_blank">
									<i class="fab fa-linkedin" aria-hidden="true" />
								</a>
								{/* GitHub */}
								<a href="https://github.com/tristenneu" rel="noopener noreferrer" target="_blank">
									<i class="fab fa-github-square" aria-hidden="true" />
								</a>
								{/* FreeCodeCamp */}
								<a href="https://www.freecodecamp.org/tristenneu" rel="noopener noreferrer" target="_blank">
									<i class="fab fa-free-code-camp" aria-hidden="true" />
								</a>
								{/* YouTube */}
								<a href="https://www.youtube.com/channel/UCWw5X_4Ag5qSEMQY65DS-GA?view_as=subscriber" rel="noopener noreferrer" target="_blank">
									<i class="fab fa-youtube-square" aria-hidden="true" />
								</a>
							</div>
						</div>
						{/* <Footer size="mini" className="footer">
						    <FooterSection type="left" logo="h1gh">
						        <FooterLinkList>
						            <Link to="/contact">Help</Link>
						            <Link to="/contact">Privacy & Terms</Link>
						            <Link to="/contact">User Agreement</Link>
						        </FooterLinkList>
						    </FooterSection>
						</Footer> */}
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Landing;