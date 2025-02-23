/*
 * Copyright 2021 Harness Inc. All rights reserved.
 * Use of this source code is governed by the PolyForm Shield 1.0.0 license
 * that can be found in the licenses directory at the root of this repository, also available at
 * https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 */

import type { ReactNode } from 'react'
import { Toaster, Position, IToaster, Intent } from '@blueprintjs/core'
import css from './useToaster.css'

const toaster = Toaster.create({
  className: css.toaster,
  position: Position.TOP
})

export interface ToasterProps extends IToaster {
  showSuccess: (message: string | ReactNode, timeout?: number, key?: string) => void
  showError: (message: string | ReactNode, timeout?: number, key?: string) => void
  showWarning: (message: string | ReactNode, timeout?: number, key?: string) => void
  showPrimary: (message: string | ReactNode, timeout?: number, key?: string) => void
}

const showSuccess = (message: string | ReactNode, timeout?: number, key?: string): void => {
  toaster.show({ message, intent: Intent.SUCCESS, icon: 'tick', timeout }, key)
}

const showError = (message: string | ReactNode, timeout?: number, key?: string): void => {
  toaster.show({ message, intent: Intent.DANGER, icon: 'error', timeout }, key)
}

const showWarning = (message: string | ReactNode, timeout?: number, key?: string): void => {
  toaster.show({ message, intent: Intent.WARNING, icon: 'warning-sign', timeout }, key)
}

const showPrimary = (message: string | ReactNode, timeout?: number, key?: string): void => {
  toaster.show({ message, intent: Intent.PRIMARY, timeout }, key)
}

export function useToaster(): ToasterProps {
  return {
    ...toaster,
    showSuccess,
    showError,
    showWarning,
    showPrimary,
    clear: () => {
      toaster.clear()
    }
  }
}
