import React, { Component } from 'react'

// class ContactList extends Component {
// 	render() {

// 		return  <ol className="contact-list">
// 					{this.props.contacts.map(contact => (
// 						<li key={contact.name} className="contact-list-item">
// 							<div className='contact-avatar' style={{ backgroundImage: `url(${contact.avatarURL})` }} />
// 							<div className='contact-details'>
// 								<p>{contact.name}</p>
// 								<p>{contact.email}</p>
// 							</div>
// 							<button className='contact-remove'>Remove</button>
// 						</li>
// 					))}
// 				</ol>
// 	}
// }

function ContactList (props)
{
	return 	(
			  	<ol className="contact-list" >
					{props.contacts.map(contact => (
						<li key={contact.name} className="contact-list-item">
							<div className='contact-avatar' style={{ backgroundImage: `url(${contact.avatarURL})` }} />
							<div className='contact-details'>
								<p>{contact.name}</p>
								<p>{contact.email}</p>
							</div>
							<button className='contact-remove'>Remove</button>
						</li>
					))}
				</ol>
			)
}

export default ContactList

