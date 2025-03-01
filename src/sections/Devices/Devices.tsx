import { Section } from "@/layouts"
import { type DevicesProps } from "./DevicesProps";
import { DeviceCard, Grid } from "@/components";

export const Devices = (props: DevicesProps) => {
	const {
		deviceItems
	} = props;

	return (
		<Section
			title='We Provide you streaming experience across various devices.'
			titleId='devices-title'
			description="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
		>
			<Grid
				columns={3}
			>
				{deviceItems.map((item, idx) => (
					<DeviceCard {...item} key={idx}/>
				))}
			</Grid>
		</Section>
	);
};