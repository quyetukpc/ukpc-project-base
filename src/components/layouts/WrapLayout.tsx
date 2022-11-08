import { ReactNode } from "react";
import AppBar from "./AppBar";

interface Props {
	children: ReactNode;
}

export default function WrapLayout(props: Props) {
	return (
		<div>
			<AppBar />

			{props.children}
		</div>
	);
}
