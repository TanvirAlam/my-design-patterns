import React from "react";
import { StyledButton } from "./styles.js";

const Decrement = ({ icon = "minus", onClick }) => {
	return (
		<StyledButton onClick={onClick}>
			-
		</StyledButton>
	)
}

export { Decrement };
