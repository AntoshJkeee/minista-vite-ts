import React from "react";

export interface MovieCardProps {
	title: MovieItem['title'];
	imgSrc: MovieItem['imgSrc'];
	duration?: MovieItem['duration']
	views?: MovieItem['views']
	released?: MovieItem['released'],
	rating?: MovieItem['rating'],
	season?: React.ReactNode,
	href?: '/movie' | string,
}