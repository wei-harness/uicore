import React from 'react'
import { Button } from '../../Button/Button'
import { Layout } from '../../../layouts/Layout'
import { GotoStepArgs, StepWizard } from '../StepWizard'
import { ModalProvider } from '../../Modal/ModalProvider'

import './StepWizardExample.css'
import { Dialog, IDialogProps } from '@blueprintjs/core'
import { useModalHook } from '../../Modal/useModalHook'
// For Example only defining this props , reason is the module loader over here has some type issue

interface StepData {
  name: string | JSX.Element
}

interface StepProps<PrevStepData> {
  name?: string | JSX.Element
  // These props will be passed by wizard
  prevStepData?: PrevStepData
  currentStep?: () => number
  totalSteps?: () => number
  nextStep?: (data?: PrevStepData) => void
  previousStep?: (data?: PrevStepData) => void
  gotoStep?: (args: GotoStepArgs<PrevStepData>) => boolean
  firstStep?: (data?: PrevStepData) => void
  lastStep?: (data?: PrevStepData) => void
}

export const ExampleStep: React.FC<StepProps<StepData>> = props => {
  const totalSteps = props.totalSteps?.()
  const currentStep = props.currentStep?.()
  return (
    <React.Fragment>
      <Layout.Vertical>
        <div style={{ height: '180px' }}>
          {props.name}: {currentStep}
          <div>Previous Step: {props.prevStepData && props.prevStepData.name}</div>
        </div>
        <div style={{ height: '40px' }}>
          <Button
            disabled={currentStep === 1}
            onClick={() => props.previousStep?.({ name: props.name || '' })}
            text="Previous"
          />
          <Button
            intent="primary"
            style={{ float: 'right' }}
            onClick={() => props.nextStep?.({ name: props.name || '' })}
            text={currentStep === totalSteps ? 'Submit' : 'Next'}
          />
        </div>
      </Layout.Vertical>
    </React.Fragment>
  )
}

export const ExampleWizard = (): JSX.Element => {
  const [counter, setCounter] = React.useState(1)
  return (
    <div>
      <StepWizard
        icon="app-kubernetes"
        iconProps={{ size: 50 }}
        title="Kubernetes Cluster"
        onStepChange={() => {
          setCounter(counter + 1)
        }}
        // eslint-disable-next-line no-alert
        onCompleteWizard={(arg: { name?: string } | undefined) => window.alert(`Wizard Complete with ${arg?.name}`)}>
        <ExampleStep name="Create a New Project" />
        <ExampleStep name={`New Project - ${counter}`} />
        <ExampleStep name="Collaborator" />
      </StepWizard>
    </div>
  )
}

const ExampleModal = () => {
  const modalPropsDark: IDialogProps = {
    isOpen: true,
    style: {
      width: 1000,
      minHeight: 600,
      borderLeft: 0,
      paddingBottom: 0,
      position: 'relative',
      overflow: 'hidden'
    }
  }

  const [openDarkModal, hideDarkModal] = useModalHook(() => (
    <Dialog onClose={hideDarkModal} {...modalPropsDark}>
      <ExampleWizard />
    </Dialog>
  ))

  return (
    <React.Fragment>
      <Button text="Open Step Wizard" onClick={openDarkModal} />
    </React.Fragment>
  )
}

export const ModalExample = (): JSX.Element => {
  return (
    <ModalProvider>
      <ExampleModal />
    </ModalProvider>
  )
}