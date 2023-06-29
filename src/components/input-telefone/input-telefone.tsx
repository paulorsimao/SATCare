import PropTypes from 'prop-types';
import { Input, Select } from 'antd';
import FormItem from 'antd/es/form/FormItem';

type Props = {
    onChange: Function,
    value: string,
    placeholder: string
}
/*
foi usado boa parte desse código
https://github.com/victorjean9/react-telefone-brasileiro
*/
const InputTelefone = ({ onChange, value, ...props }: Props) => {
    const prefixSelector = (
        <FormItem name="prefix" noStyle>
            <Select style={{ width: 80 }} defaultValue={'55'}>
                <Select.Option value="55">+55 </Select.Option>
                <Select.Option value="11">+11 </Select.Option>
            </Select>
        </FormItem>
    );

    const TYPES = {
        OITO: '(99) 9999-9999',
        NOVE: '(99) 9 9999-9999',
    };

    const MAX_LENGTH = clear(TYPES.NOVE).length;

    value = clear(value);
    if (value) {
        value = applyMask(value, getMask(value));
    }

    function onLocalChange(ev: any) {
        let value = clear(ev.target.value);
        if (value.length > MAX_LENGTH) return;

        const mask = getMask(value);
        value = applyMask(value, mask);

        ev.target.value = value;

        onChange(ev);
    }

    function getMask(value: any) {
        return value.length > clear(TYPES.OITO).length
            ? TYPES.NOVE
            : TYPES.OITO;
    }

    function applyMask(value: any, mask: any) {
        let result = '';
        let inc = 0;

        Array.from(value).forEach((letter, index) => {
            while (!mask[index + inc].match(/[0-9]/)) {
                result += mask[index + inc];
                inc++;
            }
            result += letter;
        });

        return result;
    }

    function clear(value: any) {
        return value && value.replace(/[^0-9]/g, '');
    }

    return (
        <Input
           addonBefore={prefixSelector}
            value={value}
            onChange={onLocalChange}
            {...props}
        />
    );
};

InputTelefone.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};

InputTelefone.defaultProps = {
    value: '',
    onChange: () => {},
};

export default InputTelefone;
