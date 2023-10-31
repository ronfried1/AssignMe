interface SoldierProps {
  name: string;
}
const Soldier = ({ name }: SoldierProps) => {
  return <li key={name}>{name}</li>;
};

export default Soldier;
