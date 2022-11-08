import AuthLayout from "@components/layouts/AuthLayout";
import { useFeatureFlag } from "@components/layouts/Flag";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { protectRoutes } from "./routes";

function App() {
	const { getActive } = useFeatureFlag();

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AuthLayout />}>
					{protectRoutes.map((r, index) => {
						if (!r.flagName || getActive(r.flagName))
							return (
								<Route
									key={index}
									index={r.index}
									path={r.path}
									element={r.element}
								/>
							);

						return <></>;
					})}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
