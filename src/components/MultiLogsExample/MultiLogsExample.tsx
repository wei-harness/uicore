import React, { useState } from 'react'

import { MultiLogsViewer } from '../MultiLogsViewer/MultiLogsViewer'
import { Text } from '../Text/Text'
import { Color } from '../../core/Color'
import { ExpandingSearchInput } from '../ExpandingSearchInput/ExpandingSearchInput'
import css from './MultiLogExample.css'

export const MultiLogsExample: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchDir, setDir] = useState('')
  const [highlightInd, sethighlightInd] = useState(0)
  const [openedIndex, setOpenedIndex] = useState(0)
  const arr = Array.from({ length: 4 }, () => false)
  arr[0] = true

  const [panelArr, setPanelArr] = useState(arr)

  const [logsArr, setLogsArr] = useState<string[]>([
    'I log line one line one line one line one line one line one line one line one line one line one line one line one line one line one line one line one line one line one line one line one line one line one line one line one line one line one line one line one line one line one line one line one line one line one line one line one line one line one line one line one line one line one line one\nI log line two',
    'II log',
    'III log',
    'IV log\nIV log line two'
  ])
  const [loadingIndex, setLoadingIndex] = useState<number>(-1)

  // util for testing
  const [containerHeight, setContainerHeight] = useState(300)

  const toggleSection = (sectionNo: number) => {
    panelArr[sectionNo] = !panelArr[sectionNo]
    setPanelArr([...panelArr])
  }

  const openAll = () => {
    setPanelArr(panelArr.map(() => true))
  }

  const closeAll = () => {
    setPanelArr(panelArr.map(() => false))
  }

  const logContentForSection = (sectionIdx: number) => {
    return logsArr[sectionIdx]
  }

  const addLogsToSection = (sectionIdx: number, rows = 1, clear = false) => {
    if (clear) logsArr[sectionIdx] = ''
    for (let i = 0; i < rows; i++) {
      const line = Math.random().toString()
      logsArr[sectionIdx] += `\n${line}`
    }
    setLogsArr([...logsArr])
  }

  const clearSection = (sectionIdx: number) => {
    logsArr[sectionIdx] = 'First line'
    setLogsArr([...logsArr])
  }

  const cloneLogsArr = () => {
    setLogsArr([...logsArr])
  }

  // test if nes logs with same number of logs are updateing in terminal
  const replaceText = (sectionIdx: number) => {
    logsArr[sectionIdx] = logsArr[sectionIdx].replace('log', 'LOG')
    setLogsArr([...logsArr])
  }
  return (
    <>
      <div>
        Set loading:
        <button onClick={() => setLoadingIndex(0)}> 0 </button>
        <button onClick={() => setLoadingIndex(1)}> 1 </button>
        <button onClick={() => setLoadingIndex(2)}> 2 </button>
        <button onClick={() => setLoadingIndex(3)}> 3 </button>
      </div>
      <div>
        Clear section:
        <button onClick={() => clearSection(0)}> 0 </button>
        <button onClick={() => clearSection(1)}> 1 </button>
        <button onClick={() => clearSection(2)}> 2 </button>
        <button onClick={() => clearSection(3)}> 3 </button>
      </div>
      <div>
        Populate section x 10000:
        <button onClick={() => addLogsToSection(0, 5000, true)}> 0 </button>
        <button onClick={() => addLogsToSection(1, 5000, true)}> 1 </button>
        <button onClick={() => addLogsToSection(2, 5000, true)}> 2 </button>
        <button onClick={() => addLogsToSection(3, 5000, true)}> 3 </button>
      </div>
      <div>
        Add to section x 5000:
        <button onClick={() => addLogsToSection(0, 5000)}> 0 </button>
        <button onClick={() => addLogsToSection(1, 5000)}> 1 </button>
        <button onClick={() => addLogsToSection(2, 5000)}> 2 </button>
        <button onClick={() => addLogsToSection(3, 5000)}> 3 </button>
      </div>
      <div>
        Add to section:
        <button onClick={() => addLogsToSection(0)}> 0 </button>
        <button onClick={() => addLogsToSection(1)}> 1 </button>
        <button onClick={() => addLogsToSection(2)}> 2 </button>
        <button onClick={() => addLogsToSection(3)}> 3 </button>
      </div>
      <div>
        Toggle section:
        <button onClick={() => toggleSection(0)}> 0 </button>
        <button onClick={() => toggleSection(1)}> 1 </button>
        <button onClick={() => toggleSection(2)}> 2 </button>
        <button onClick={() => toggleSection(3)}> 3 </button>
      </div>
      <div>
        <button onClick={() => openAll()}>Open all</button>
        <button onClick={() => closeAll()}>Close all</button>
      </div>
      <div>
        <button onClick={() => cloneLogsArr()}>Clone content</button>
        <button onClick={() => replaceText(0)}>Replace content section 0</button>
      </div>
      <div>
        Set container Height
        <button onClick={() => setContainerHeight(containerHeight + 50)}>+50px</button>
        <button onClick={() => setContainerHeight(containerHeight - 50)}>-50px</button>
      </div>
      <ExpandingSearchInput
        onChange={ev => {
          setSearchTerm(ev)
        }}
      />
      <button
        onClick={() => {
          setDir(`next`)
          sethighlightInd(highlightInd + 1)
        }}>
        Next
      </button>
      <button
        onClick={() => {
          setDir(`prev`)
          sethighlightInd(highlightInd - 1)
        }}>
        Prev
      </button>
      <div>
        <MultiLogsViewer
          minRows={5}
          style={{ height: `${containerHeight}px`, overflowY: 'scroll' }}
          className={css.multiLogsViewer}
          loadingIndex={loadingIndex}
          numberOfLogSections={4}
          titleForSection={sectionIndex => {
            switch (sectionIndex) {
              case 0:
                return 'Set up job'
              case 1:
                return 'Run actions/checkout@v2'
              case 2:
                return 'Run make'
              case 3:
                return 'Complete job'
            }
          }}
          scrollbackLines={1000000}
          sectionArr={panelArr}
          activePanel={openedIndex}
          isSectionOpen={(sectionIndex: number) => panelArr[sectionIndex]}
          rightElementForSection={() => {
            return <Text color={Color.GREY_100}>2m 38s</Text>
          }}
          logContentForSection={logContentForSection}
          searchDir={searchDir}
          highlightedIndex={highlightInd}
          searchText={searchTerm}
          toggleSection={(index: number) => {
            panelArr[index] = !panelArr[index]
            setPanelArr([...panelArr])
          }}
          updateSection={(currentIndex: number, nextIndex = -1) => {
            if (nextIndex > -1) {
              panelArr[currentIndex] = false
              panelArr[nextIndex] = true
              setOpenedIndex(nextIndex)
            } else {
              panelArr[currentIndex] = !panelArr[currentIndex]
              if (!panelArr[currentIndex] && currentIndex === 0) {
                setOpenedIndex(-1)
              } else {
                setOpenedIndex(currentIndex)
              }
            }

            setPanelArr([...panelArr])
          }}
        />
      </div>
    </>
  )
}