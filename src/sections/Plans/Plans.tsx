import { Section } from '@/layouts'
import { type PlansProps } from "./PlansProps";
import { Grid, PlanCard, Tabs, TabsNavigation } from "@/components";

export const Plans = (props: PlansProps) => {
	const {
		plansItems
	} = props;

	return (
		<Section
			title="Choose the plan that's right for you"
			titleId="plans-id"
			description="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
			actions={(
				<TabsNavigation
					id="plans-tabs-navigation"
					title="plans-tabs"
					items={plansItems}
				/>
			)}
		>
			<Tabs
				title="plans-tabs"
				navigationTargetElementId="plans-tabs-navigation"
				items={plansItems.map((planItem) => ({
					title: planItem.title,
					isActive: planItem.isActive,
					children: (
						<Grid columns={3}>
							{planItem.items.map((item, idx) => (
								<PlanCard {...item} key={idx} />
							))}
						</Grid>
					)
				}))}
			/>
		</Section>
	);
}