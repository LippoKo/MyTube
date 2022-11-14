import styled from "styled-components"
import config from "../config.json"
import {CSSReset} from "../src/components/CSSReset"
import Menu from "../src/components/Menu"
import {StyledTimeline} from "../src/components/Timeline"

function HomePage() {
	const styleHome = {
		// backgroundColor: "red"
	}

	// console.log(config.playlists)

	return (
		<>
			<CSSReset />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					flex: 1,
					// backgroundColor: "red",
				}}>
				<Menu />
				<Header />
				<Timeline playlists={config.playlists} />
			</div>
		</>
	)
}

export default HomePage

// function Menu() {
// 	return <div>Menu</div>
// }

const StyledHeader = styled.div`
	img {
		width: 80px;
		height: 80px;
		border-radius: 50%;
	}

	.user-info {
		margin-top: 50px;
		display: flex;
		align-items: center;
		width: 100%;
		padding: 16px 32px;
		gap: 16px;
	}
`

function Header() {
	return (
		<StyledHeader>
			{/* <img src=""/> */}
			<section className="user-info">
				<img src={`http://github.com/${config.github}.png`} />
				<div>
					<h2>{config.name}</h2>
					<p>{config.job}</p>
				</div>
			</section>
		</StyledHeader>
	)
}

function Timeline(props) {
	// console.log("dentro do componente:", props)

	const playlistNames = Object.keys(props.playlists)

	return (
		<StyledTimeline>
			{playlistNames.map((playlistNames) => {
				const videos = props.playlists[playlistNames]
				console.log(playlistNames)
				console.log(videos)
				return (
					<section>
						<h2>{playlistNames}</h2>
						<div>
							{videos.map((video) => {
								return (
									<a href={video.url}>
										<img src={video.thumb} />
										<span>{video.title}</span>
									</a>
								)
							})}
						</div>
					</section>
				)
			})}
		</StyledTimeline>
	)
}
