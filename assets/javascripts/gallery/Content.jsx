import React from 'react'
import { Flipper, Flipped, spring } from 'react-flip-toolkit'

import Sidebar  from './Sidebar'
import Photos   from './Photos'

const Content = props =>
  <div>
    <Sidebar {...props} />

    <div
      className="flex-fill pt-5 pt-sm-0"
      style={{ WebkitTransform: 'translate3d(0,0,0)' }}
    >
      <Flipper flipKey={props.filteredProjects.map(p => p.slug).join()}>
        { props.filteredProjects.map((project, index) =>
          <Flipped
            key={project.slug}
            flipId={project.slug}
            stagger
            onAppear={(el, index) =>
              spring({
                onUpdate: val => {
                  el.style.opacity = val
                  el.style.transform = `scale(${val})`
                },
                delay: index * 50,
              })
            }
            onExit={(el, index, removeElement) => {
              spring({
                config: { overshootClamping: true },
                onUpdate: val => {
                  el.style.opacity = 1 - val
                  el.style.transform = `scale(${1 - val})`
                },
                delay: index * 50,
                onComplete: removeElement,
              })

              return () => {
                el.style.opacity = ""
                removeElement()
              }
            }}
          >
            <div className="mb-5 overflow-hidden">
              <div className="container-fluid">
                <h2 className="mb-4">
                  {[ project.name, project.title ].filter(Boolean).join(' — ')}
                </h2>
              </div>

              <Photos {...props} key={project.slug} project={project} />
            </div>
          </Flipped>
        )}
      </Flipper>
    </div>
  </div>

export default Content
