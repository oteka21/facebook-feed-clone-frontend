import React, { Fragment } from 'react'
import { useSelect } from 'downshift'
import { Container, Selected, List, Overlay } from './select.styles'
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

export function DropdownSelect ({ onChange, defaultValue = 'public' }) {
  const initialSelectedItem = defaultValue.toLocaleLowerCase() === 'public' ? items[0] : items[1]
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps
  } = useSelect({ items, initialSelectedItem, onSelectedItemChange: onChange })

  return (
    <Fragment>
      <Container open={isOpen}>
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
      {
        isOpen && <Overlay />
      }
    </Fragment>
  )
}

DropdownSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string
}
