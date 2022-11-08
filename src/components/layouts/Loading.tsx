import { Container, Grow } from "@mui/material";
import { ScaleLoader } from "react-spinners";
import color from "src/theme/color";

export const Loading = () => {
	return (
		<Container
			sx={{
				height: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Grow in={true}>
				<div>
					<ScaleLoader color={color.success} />
				</div>
			</Grow>
		</Container>
	);
};
