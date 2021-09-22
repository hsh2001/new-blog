interface SecondTitleProps {
  text: string;
}

const SecondTitle: React.FC<SecondTitleProps> = ({ text }) => (
  <h2 id={text.replace(/\s/g, '_').toLowerCase()}>{text}</h2>
);
export default SecondTitle;
