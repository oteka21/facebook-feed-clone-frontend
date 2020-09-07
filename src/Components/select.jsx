import * as React from 'react'
import { useSelect } from 'downshift'
import { Container, Selected, List } from './select.styles'
import PropTypes from 'prop-types'

const items = [
  {
    value: 'public',
    text: 'Público'
  },
  {
    value: 'friends',
    text: 'Amigos'
  }
]

const initialSelectedItem = {
  value: 'public',
  text: 'Público'
}

export function DropdownSelect ({ onChange }) {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps
  } = useSelect({ items, initialSelectedItem, onSelectedItemChange: onChange })

  return (
    <Container>
      <Selected type="button" {...getToggleButtonProps()} open={isOpen}>
        {selectedItem ? selectedItem.text : 'Element'}
      </Selected>
      <List {...getMenuProps()} open={isOpen}>
        {isOpen &&
          items.map((item, index) => (
            <li
              style={
                highlightedIndex === index ? { backgroundColor: '#242526' } : {}
              }
              key={`${item.value}${index}`}
              {...getItemProps({ item, index })}
            >
              {item.text}
            </li>
          ))}
      </List>
    </Container>
  )
}

DropdownSelect.propTypes = {
  onChange: PropTypes.func.isRequired
}
