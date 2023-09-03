import { Input } from './Filter.styled';

export const Filter = props => {
  const { onChange } = props;
  return (
    <>
      <h2>Find your contacts by name</h2>
      <Input type="tel" onChange={onChange} />
    </>
  );
};
