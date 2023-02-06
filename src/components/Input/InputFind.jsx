import { Input } from './inputName.styled';
import { Label } from './inputName.styled';
import { Wrap } from 'components/DefaultStylse.styled';
import { useSelector, useDispatch } from 'react-redux';
import { cangeArreyByFind } from 'redux/filterNameSlice';

export const InputFind = () => {
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const handelChange = ({ target: { value } }) => {
    dispatch(cangeArreyByFind(value));
  };

  return (
    <Wrap>
      <Label>
        Find contact by name
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={handelChange}
        />
      </Label>
    </Wrap>
  );
};

