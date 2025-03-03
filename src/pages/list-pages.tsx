import { Metadata } from 'minista'

export const metadata: Metadata = {
	title: 'List Pages',
	draft: true,
	listPages: true,
}

const PAGE_NAMES: { url: string; name: string }[] = [
	{ url: '', name: 'Главная' },
	{ url: 'movie', name: 'Фильм' },
	{ url: 'movies', name: 'Фильмы' },
	{ url: 'show', name: 'Сериалы' },
	{ url: 'subscriptions', name: 'Подписки' },
	{ url: 'support', name: 'Поддержка' },
]

export default () => {
	return (
		<>
			<ul>
				{PAGE_NAMES.map(({ url, name }, idx) => (
					<li key={idx}>
						<a href={`/${url}`}>{name}</a>
					</li>
				))}
			</ul>
		</>
	)
}
