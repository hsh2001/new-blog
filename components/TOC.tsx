interface TOCProps {
  titles: string[];
}

const TOC: React.FC<TOCProps> = ({ titles }) => (
  <>
    목차
    <ul>
      {titles.map((title) => (
        <li key={`TOC-item-${title}`}>
          <a href={`#${title.replace(/\s/g, '_').toLowerCase()}`}>{title}</a>
        </li>
      ))}
    </ul>
  </>
);

export default TOC;
