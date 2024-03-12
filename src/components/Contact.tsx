import React from 'react';

const Contact: React.FC = () => {
	return (
		<section id="contact">
			<div className="flex justify-center items-center">
				<div className="bg-gray-600 shadow-md rounded-xl px-8 pt-6 pb-8 flex flex-col w-full md:w-1/3 max-w-lg">
					<h2 className="text-center text-2xl mb-4 text-black">Get in Touch</h2>
					<div className="mb-4">
						<label className="sr-only" htmlFor="name">
							Name
						</label>
						<input
							className="shadow appearance-none border-b rounded w-full py-2 px-3 text-black"
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
							className="shadow appearance-none border-b rounded w-full py-2 px-3 text-black"
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
							className="shadow appearance-none border-b rounded w-full py-2 px-3 text-black"
							id="message"
							placeholder="Your message"
							rows={4}
						></textarea>
					</div>
					<div className="flex items-center justify-center">
						<button className="bg-purple-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-xl">
							Send
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
