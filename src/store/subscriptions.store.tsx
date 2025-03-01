import { Badge } from "@/components";

export const SubscriptionsStore = {
	PlansComparison: {
		headCells: [
			{
				children: 'Features',
				width: '25%',
			},
			{
				children: 'Basic',
				width: '25%',
				tabsTitle: 'Basic',
			},
			{
				children: <>Standard <Badge mode="accent">Popular</Badge></>,
				width: '25%',
				tabsTitle: 'Standart',
			},
			{
				children: 'Premium',
				width: '25%',
				tabsTitle: 'Premium',
			},
		],
		rows: [
			{
				cells: [
					'Price',
					'$9.99/Month',
					'$12.99/Month',
					'$14.99/Month',
				],
			},
			{
				cells: [
					'Content',
					'Access to a wide selection of movies and shows, including some new releases.',
					'Access to a wider selection of movies and shows, including most new releases and exclusive content',
					'Access to a widest selection of movies and shows, including all new releases and Offline Viewing',
				],
				isWide: true,
			},
			{
				cells: [
					'Devices',
					'Watch on one device simultaneously',
					'Watch on Two device simultaneously',
					'Watch on Four device simultaneously',
				],
				isWide: true,
			},
			{
				cells: [
					'Free Trail',
					'7 Days',
					'7 Days',
					'7 Days,'
				],
			},
			{
				cells: [
					'Cancel Anytime',
					'Yes',
					'Yes',
					'Yes',
				],
			},
			{
				cells: [
					'HDR',
					'No',
					'Yes',
					'Yes'
				],
			},
			{
				cells: [
					'Dolby Atmos',
					'No',
					'Yes',
					'Yes'
				],
			},
			{
				cells: [
					'Ad - Free',
					'No',
					'Yes',
					'Yes'
				],
			},
			{
				cells: [
					'Offline Viewing',
					'No',
					'Yes, for select titles.',
					'Yes, for all titles.'
				],
			},
			{
				cells: [
					'Family Sharing',
					'No',
					'Yes, up to 5 family members.',
					'Yes, up to 6 family members.'
				],
			},
		]
	}
}