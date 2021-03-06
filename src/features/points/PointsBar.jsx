import React from 'react';
import { useSelector } from 'react-redux';

const PointsBar = () => {
	const points = useSelector(state => state.points);

	return (
		<div className="sticky top-0 z-10 flex items-center justify-between px-2 py-1 mb-4 text-green-200 bg-green-900 lg:px-8 lg:py-2">
			<span>
				<span className="text-xs font-semibold tracking-tighter ">
					{points.attribute.name.substring(0, 4)}
				</span>{' '}
				<span className="text-sm tracking-wider text-green-300">
					{points.attribute.value}/{points.attribute.max}
				</span>
			</span>
			<span>
				<span className="text-xs font-semibold tracking-tighter">{points.skill.name}</span>{' '}
				<span className="text-sm tracking-wider text-green-300">
					{points.skill.value}/{points.skill.max}
				</span>
			</span>
			<span>
				<span className="text-xs font-semibold tracking-tighter">{points.edge.name}</span>{' '}
				<span className="text-sm tracking-wider text-green-300">
					{points.edge.value}/{points.edge.max}
				</span>
			</span>
			<span>
				<span className="text-xs font-semibold tracking-tighter">{points.perks.name}</span>{' '}
				<span className="text-sm tracking-wider text-green-300">
					{points.perks.value}/{points.perks.max}
				</span>
			</span>
			<span>
				<span className="text-xs font-semibold tracking-tighter">$</span>{' '}
				<span className="text-sm tracking-wider text-green-300">
					{points.wealth.value}/{points.wealth.max}
				</span>
			</span>
		</div>
	);
};

export default PointsBar;
