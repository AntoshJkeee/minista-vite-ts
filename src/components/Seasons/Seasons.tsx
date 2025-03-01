import "./Seasons.scss"
import { AccordionGroup, Accordion, EpisodeCard } from "@/components"
import seasonItems from "@/components/Seasons/seasonItems"

export const Seasons = () => {
  return (
    <AccordionGroup
      className="seasons"
      mode="dark"
      isOrderedList={false}
    >
      {seasonItems.map(({ title, subtitle, episodes }, idx) => (
        <Accordion
          title={title}
          titleLevelClassName="h4"
          subtitle={subtitle}
          id={`season-${idx}`}
          name="seasons"
          isOpen={idx === 0}
          key={idx}
          isArrowButton
        >
          <ul className="seasons__list">
            {episodes.map((episode, idx) => (
              <li className='seasons__item' key={idx}>
                <EpisodeCard {...episode} />
              </li>
            ))}
          </ul>
        </Accordion>
      ))}
    </AccordionGroup>
  )
}
