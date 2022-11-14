import styled from "styled-components"

const StyledMenu = styled.header`
	display: flex;
	flex-direction: row;
	height: 56px;
	justify-content: space-between;
	background-color: ${({theme}) => theme.backgroundLevel1 || "#FFFFFF"};
	border: 1px solid ${({theme}) => theme.borderBase || "#e5e5e5"};
	align-items: center;
	padding: 0 16px;
	gap: 16px;
	position: fixed;
	width: 100%;
	.logo {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.logo img {
		width: 50px;
		margin-right: 10px;
	}
`

export default function Menu() {
	return (
		<StyledMenu>
			<div>
				<Logo />
			</div>
		</StyledMenu>
	)
}

function Logo() {
	return (
		<div className="logo">
			<img src="/images/youtube-icon.png" alt="Youtube" />
			<h2>MyTube</h2>
		</div>
	)
}
