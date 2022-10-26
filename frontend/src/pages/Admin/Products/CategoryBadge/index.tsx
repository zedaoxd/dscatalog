import './styles.css';

type Props = {
  name: string;
};

export const CategoryBadge = ({ name }: Props) => {
  return <div className="category-badge-container">{name}</div>;
};
