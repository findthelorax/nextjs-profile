import React from 'react';

const ContactCard: React.FC = () => {
	return (
		<section id="contact">
			<div className="div-bg flex justify-center items-center">
				<div className="contact px-8 pt-6 pb-8 m-10 mb-4 flex flex-col w-full max-w-lg">
					<h2 className="text-center text-3xl mb-4">CONTACT FORM</h2>
					<div className="mb-4">
						<label className="sr-only" htmlFor="name">
							Name
						</label>
						<input
							className="contact-input  appearance-none border-b border-white w-full py-2 px-3"
							id="name"
							type="text"
							placeholder="Name"
						/>
					</div>
					<div className="mb-4">
						<label className="sr-only" htmlFor="email">
							Email
						</label>
						<input
							className="contact-input appearance-none border-b border-white w-full py-2 px-3"
							id="email"
							type="email"
							placeholder="Email"
						/>
					</div>
					<div className="mb-4">
						<label className="sr-only" htmlFor="message">
							Message
						</label>
						<textarea
							className="contact-input appearance-none border-b border-white w-full py-2 px-3"
							id="message"
							placeholder="Your message"
							rows={4}
						></textarea>
					</div>
					<div className="flex items-center justify-center">
						<button className="contact-btn hover:bg-blue-dark text-white font-bold py-2 px-4">
							SEND MESSAGE
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="arrow ml-2"
								width="24"
								height="24"
								style={{ display: 'inline-block' }}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M14 5l7 7m0 0l-7 7m7-7H3"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactCard;
