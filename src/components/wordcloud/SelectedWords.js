import {Item as FormItem} from 'antd/lib/form';
import Select, {Option} from 'antd/lib/select';
import React from 'react';

const options = [];
for (let i = 10; i < 36; i++) {
  options.push(
    <Option key={i.toString(36) + i}>{i.toString(36) + i + ' (10)'}</Option>,
  );
}

const SelectedWords = () => (
  <FormItem
    help="Selected words are highlighted in the text panel!"
    label="Selected Words">
    <Select
      style={style}
      mode="multiple"
      placeholder="add selected words"
      defaultValue={['a10', 'c12']}
      onChange={value => alert(value)}>
      {options}
    </Select>
  </FormItem>
);

const style = {
  width: '100%',
};

export default SelectedWords;