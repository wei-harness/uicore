/*
 * Copyright 2021 Harness Inc. All rights reserved.
 * Use of this source code is governed by the PolyForm Shield 1.0.0 license
 * that can be found in the licenses directory at the root of this repository, also available at
 * https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 */

import React from 'react'
import cx from 'classnames'
import css from './PillToggle.css'

export interface PillToggleOption<T> {
  label: string
  value: T
}

export interface PillToggleProps<T> {
  selectedView: T
  options: [PillToggleOption<T>, PillToggleOption<T>]
  onChange: (val: T) => void
  disableToggle?: boolean
  className?: string
}

export const PillToggle = <T,>(props: PillToggleProps<T>): React.ReactElement => {
  const { selectedView, onChange, disableToggle = false, className = '', options } = props
  return (
    <div className={cx(css.optionBtns, className)}>
      <div
        data-name="toggle-option-one"
        className={cx(css.item, {
          [css.selected]: selectedView === options[0].value,
          [css.disabledMode]: disableToggle
        })}
        onClick={() => {
          if (selectedView === options[0].value) {
            return
          }
          onChange(options[0].value)
        }}
        tabIndex={0}
        role="button">
        {options[0].label}
      </div>
      <div
        data-name="toggle-option-two"
        className={cx(css.item, {
          [css.selected]: selectedView === options[1].value,
          [css.disabledMode]: disableToggle
        })}
        onClick={() => {
          if (selectedView === options[1].value) {
            return
          }
          onChange(options[1].value)
        }}
        tabIndex={0}
        role="button">
        {options[1].label}
      </div>
    </div>
  )
}
