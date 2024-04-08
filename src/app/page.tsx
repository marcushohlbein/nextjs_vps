import moment from 'moment';

import Capacity from '@/components/tests/capacity';
import DbTest from '@/components/tests/db';
import Images from '@/components/tests/images';

const buildTime = moment().fromNow();

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col p-10 space-y-6">
			<h1 className="font-bold text-xl">
				VPS vs Vercel - Ashley Rudland's VPS Playground
			</h1>

			<p>
				Source code:{' '}
				<a
					href="https://github.com/ashleyrudland/nextjs_vps"
					target="_blank"
					rel="noreferrer noopener"
					className="underline"
				>
					GitHub
				</a>
			</p>
			<p>
				Do we need Vercel? Can we just run our NextJS apps on a VM?
				Maybe all our apps on one machine?
			</p>

			<p>
				I love NextJS, but I don't like Vercels pricing. It seems nuts
				to me and it seems many other people do too. So I spent a few
				hours playing with this and Digital Ocean to see what was
				possible.
			</p>

			<p>Built last at: {buildTime}</p>

			<div className="flex flex-col gap-6 sm:flex-row sm:gap-10">
				<DbTest />
				<Capacity />
				<Images />
			</div>
		</main>
	);
}
