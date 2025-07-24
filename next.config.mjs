/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'image.thum.io',
				port: '',
				pathname: '/get/**',
			},
		],
	},
};

export default nextConfig;
