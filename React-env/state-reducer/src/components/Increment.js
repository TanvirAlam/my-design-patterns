import React from 'react';
import { StyledButton } from "./styles";

const Increment = ({ icon = "plus", onClick }) => {
	return (
		<StyledButton onClick={onClick}>
			+
		</StyledButton>
	)
}

export { Increment }
