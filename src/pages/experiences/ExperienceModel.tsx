export interface ExperienceModelProps {
  title: string;
  media: string;
  mediaCaption: string;
  cardTitle: string;
  cardIcon: JSX.Element;
  subtitle: string;
  link: string;
  cardDetailedText: JSX.Element | string;
}
export default function ExperienceModel({
  title,
  media,
  mediaCaption,
  cardTitle,
  cardIcon,
  subtitle,
  link,
  cardDetailedText,
}: ExperienceModelProps) {
  return {
    title: title,
    media: {
      name: mediaCaption,
      source: {
        url: media,
      },
      type: 'IMAGE',
    },
    cardTitle: (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {cardIcon}
          &nbsp;
          <a href={link} target="_blank" rel="noopener noreferrer">
            {cardTitle}
          </a>
        </div>
        <div style={{ color: 'black', fontSize: 13 }}>{subtitle}</div>
      </div>
    ),
    cardDetailedText: cardDetailedText,
  };
}
