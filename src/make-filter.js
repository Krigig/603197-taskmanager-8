export default (caption, amount, isChecked, isDisabled) => `<input
      type="radio"
      id="filter__${caption.toLowerCase()}"
      class="filter__input visually-hidden"
      name="filter"
      ${isChecked ? `checked` : ``}
      ${isDisabled ? `disabled` : ``}
    />
    <label for="filter__${caption.toLowerCase()}" class="filter__label">${caption.toUpperCase()} <span class="filter__${caption}-count">${amount}</span></label>
  `;
