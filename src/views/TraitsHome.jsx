import React from 'react';
import Agility from '../features/traits/Agility';
import Smarts from '../features/traits/Smarts';
import Spirit from '../features/traits/Spirit';
import Strength from '../features/traits/Strength';
import Vigor from '../features/traits/Vigor';

const Home = () => {
	return (
		<>
			<div className="mb-2 text-xs font-semibold text-center">
				<span className="p-1 text-red-900 bg-orange-200">Refunding an Attribute Resets Linked Skills</span>
			</div>
			<div className="lg:flex lg:flex-wrap lg:justify-center">
				<section className="lg:w-1/2 lg:p-2 xl:w-1/3">
					<Agility />
				</section>
				<section className="lg:w-1/2 lg:p-2 xl:w-1/3">
					<Smarts />
				</section>
				<section className="lg:w-1/2 lg:p-2 xl:w-1/3">
					<Spirit />
				</section>
				<section className="lg:w-1/2 lg:p-2 xl:w-1/3">
					<Strength />
				</section>
				<section className="lg:w-1/2 lg:p-2 xl:w-1/3">
					<Vigor />
				</section>
			</div>
		</>
	);
};

export default Home;
