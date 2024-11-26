import PropTypes from 'prop-types';
import { memo } from 'react';

const InputBox = memo(function InputBox({
  label,
  amount,
  onChangeAmount,
  onChangeCurrency,
  currencyOptions = [],
  amountDisabled = false,
  currencyDisabled = false,
  selectedCurrency = 'usd',
  className = '',
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={amount}
          disabled={amountDisabled}
          onChange={e =>
            onChangeAmount && onChangeAmount(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency}
          disabled={currencyDisabled}
          onChange={e => onChangeCurrency && onChangeCurrency(e.target.value)}
        >
          {currencyOptions.map(currency => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
});

InputBox.propTypes = {
  label: PropTypes.string,
  amount: PropTypes.number,
  onChangeAmount: PropTypes.func,
  onChangeCurrency: PropTypes.func,
  currencyOptions: PropTypes.arrayOf(PropTypes.string),
  amountDisabled: PropTypes.bool,
  currencyDisabled: PropTypes.bool,
  selectedCurrency: PropTypes.string,
  className: PropTypes.string,
};

export default InputBox;
