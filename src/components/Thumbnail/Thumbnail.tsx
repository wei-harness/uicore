import React from 'react'
import cx from 'classnames'

import css from '../Thumbnail/Thumbnail.css'
import { Card } from '../Card/Card'
import { Icon, IconName } from '../../icons/Icon'
import { Text } from '../Text/Text'
import { Color } from '../../core/Color'

export interface ThumbnailProps {
  name?: string
  label?: string
  value?: string
  icon?: IconName
  disabled?: boolean
  selected?: boolean
  className?: string
  onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Thumbnail: React.FC<ThumbnailProps> = props => {
  const { label, value, icon, disabled, selected, onClick, className, name } = props

  return (
    <label className={cx(css.squareCardContainer, { [css.bigger]: !icon }, className)}>
      <Card
        disabled={disabled}
        interactive={!disabled && !selected}
        selected={selected}
        cornerSelected={selected}
        className={cx(css.squareCard)}>
        {icon ? (
          <Icon name={icon} size={26} />
        ) : label ? (
          <Text className={css.label} color={disabled ? Color.GREY_350 : Color.GREY_900}>
            {label}
          </Text>
        ) : null}
      </Card>
      {icon && label && (
        <Text
          className={css.label}
          font={{ weight: 'semi-bold' }}
          color={disabled ? Color.GREY_350 : Color.GREY_500}
          margin={{ top: 'small' }}>
          {label}
        </Text>
      )}
      <input type="checkbox" name={name} value={value} onChange={onClick} checked={selected} disabled={disabled} />
    </label>
  )
}