import Head from 'next/head'
import React, { useRef, useState, useEffect, useReducer } from 'react'
import * as _ from 'lodash'

let sp = 16
// let cols = 40
// let rows = 30
// let cells = cols * rows

function spx(array) {
  return array.map(v => v * sp)
}

let Line = () => <div style={{ height: sp, width: '100%' }} />

let Space = () => <div style={{ width: sp / 2 }} />

let Button = ({
  label,
  clearer,
  trigger,
  text_label,
  press_gates,
  custom_style,
}) => {
  let button_style = {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    border: 'none',
    padding: 0,
    margin: 0,
    width: sp,
    background: 'black',
    color: 'white',
    display: 'block',
  }
  if (custom_style !== undefined) {
    button_style = Object.assign(button_style, custom_style)
  }
  return (
    <div style={{ display: 'flex' }}>
      <button
        style={button_style}
        onMouseDown={e => {
          trigger()
        }}
      >
        {label}
      </button>
      {text_label !== undefined ? (
        <div
          style={{ display: 'flex', cursor: 'default' }}
          onMouseDown={e => {
            trigger()
          }}
        >
          <Space />
          <div>{text_label}</div>
        </div>
      ) : null}
    </div>
  )
}

let RepeatButton = ({
  label,
  clearer,
  trigger,
  text_label,
  press_gates,
  custom_style,
}) => {
  let repeat_ref = useRef(null)
  let start_gate = useRef(false)

  let touch_mode = useRef(false)

  let button_style = {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    border: 'none',
    padding: 0,
    margin: 0,
    width: sp,
    background: 'black',
    color: 'white',
    display: 'block',
  }
  if (custom_style !== undefined) {
    button_style = Object.assign(button_style, custom_style)
  }
  return (
    <div style={{ display: 'flex' }}>
      <button
        style={button_style}
        onTouchStart={e => {
          touch_mode.current = true
          press_gates.current = true
          trigger()
          setTimeout(() => {
            if (press_gates.current) {
              repeat_ref.current = setInterval(() => {
                trigger()
              }, 100)
              clearer(repeat_ref.current)
            }
          }, 400)
        }}
        onTouchEnd={e => {
          setTimeout(() => {
            touch_mode.current = false
          }, 400)
          e.preventDefault()
        }}
        onMouseDown={e => {
          if (!touch_mode.current) {
            press_gates.current = true
            trigger()
            setTimeout(() => {
              if (press_gates.current) {
                repeat_ref.current = setInterval(() => {
                  trigger()
                }, 100)
                clearer(repeat_ref.current)
              }
            }, 400)
          }
        }}
        onMouseUp={e => {
          if (!touch_mode.current) {
            clearInterval(repeat_ref.current)
          }
        }}
      >
        {label}
      </button>
      {text_label !== undefined ? (
        <div
          style={{ display: 'flex', cursor: 'default' }}
          onMouseDown={e => {
            repeat_ref.current = setInterval(() => {
              trigger()
            }, 200)
            clearer(repeat_ref.current)
            trigger()
          }}
          onMouseUp={e => {
            clearInterval(repeat_ref.current)
          }}
        >
          <Space />
          <div>{text_label}</div>
        </div>
      ) : null}
    </div>
  )
}

const Home = () => {
  let cref = useRef(null)
  let clear_render_ref = useRef(false)
  let clear_ref = useRef(false)
  let state = useRef({})
  let km_ref = useRef({})
  let slider_click_ref = useRef(null)
  let slider_touch_mode = useRef(false)
  let press_gates = useRef(false)
  let [width, setWidth] = useState(null)
  let file_input = useRef(null)
  let ti_ref = useRef(null)
  let thresh_ref = useRef(null)
  let [favicon, setFavicon] = useState('favicon.png')

  function loadImage(src) {
    let c = cref.current
    let cx = c.getContext('2d')
    let img = document.createElement('img')
    img.onload = () => {
      let aspect = img.width / img.height
      let window_aspect =
        (window.innerWidth - sp) / (window.innerHeight - sp * 8)

      let snapw, snaph
      if (aspect < window_aspect) {
        // worry about height
        let adj_height = Math.min(
          img.height,
          Math.floor(window.innerHeight - sp * 8)
        )
        snaph = Math.round(adj_height / sp) * sp
        let snapr = snaph / img.height
        snapw = Math.round((img.width * snapr) / sp) * sp
      } else {
        // worry about width
        let adj_width = Math.min(
          img.width,
          Math.floor(window.innerWidth - sp) - sp / 2
        )
        snapw = Math.round(adj_width / sp) * sp
        let snapr = snapw / img.width
        snaph = Math.round((img.height * snapr) / sp) * sp
      }

      img.width = snapw
      img.height = snaph

      setWidth(img.width)

      c.width = img.width
      c.height = img.height

      let cols = img.width / sp
      let rows = img.height / sp
      let cells = cols * rows

      // size slider
      let ti = ti_ref.current
      ti.width = img.width - sp * 4
      ti.height = sp * 2

      // preserve dimensions
      let t_img = document.createElement('canvas')
      t_img.width = c.width
      t_img.height = c.height
      let t_imgx = t_img.getContext('2d')
      t_imgx.drawImage(img, 0, 0, c.width, c.height)
      img = t_img

      // draw original image
      // cx.drawImage(img, 0, 0, c.width, c.height)

      // store original image
      let imc = document.createElement('canvas')
      imc.width = c.width
      imc.height = c.height
      let imx = imc.getContext('2d')
      imx.drawImage(img, 0, 0, c.width, c.height)

      // cut up original image
      let tiles = []
      for (let i = 0; i < cells; i++) {
        let t = document.createElement('canvas')
        t.width = sp
        t.height = sp
        let tx = t.getContext('2d')

        let x = i % cols
        let y = Math.floor(i / cols)

        tx.drawImage(imc, x * sp, y * sp, sp, sp, 0, 0, sp, sp)

        let complexity = t.toDataURL().length / (sp * sp)

        tiles.push({ t, c: complexity, x, y, i })
      }
      tiles = _.sortBy(tiles, 'c')

      // grid with coordinates
      let grid = [...Array(rows)].map((n, y) =>
        [...Array(cols)].map((n, x) => {
          let d = Math.sqrt(
            Math.pow(x - cols / 2, 2) + Math.pow(y - rows / 2, 2)
          ).toFixed(8)
          return [x, y, d]
        })
      )

      // spiral order for iteration
      let ordered = _.flatten(grid)
      ordered.sort(function(a, b) {
        return a[2] - b[2]
      })

      // spiral test
      // for (let i = 0; i < 800; i++) {
      //   let [x, y] = ordered[i]
      //   cx.fillRect(...spx([x, y, 1, 1]))
      // }

      let threshold = cells - Math.round(cells / 2)
      state.current.threshold = threshold
      state.current.cells = cells
      state.current.ordered = ordered
      state.current.grid = grid
      state.current.cols = cols
      state.current.rows = rows
      state.current.imc = imc
      state.current.tiles = tiles

      // favicon
      let t = document.createElement('canvas')
      t.width = 16
      t.height = 16
      let tx = t.getContext('2d')
      tx.imageSmoothingEnabled = false
      tx.drawImage(img, 0, 0, img.width, img.height, 0, 0, 16, 16)
      setFavicon(t.toDataURL())

      render()

      // cx.fillStyle = 'red'
      // cx.fillRect((cols / 2) * sp - 1, 0, 2, c.height)
      // cx.fillRect(0, (rows / 2) * sp - 1, c.width, 2)
      // cx.fillStyle = 'black'
    }
    img.src = src
  }

  function render() {
    clear_render_ref.current = false
    let c = cref.current
    let cx = c.getContext('2d')
    let {
      cells,
      threshold,
      ordered,
      grid,
      cols,
      rows,
      imc,
      tiles,
    } = state.current

    // active
    let active = [...Array(rows)].map((n, y) =>
      [...Array(cols)].map((n, x) => [x, y, false])
    )
    for (let i = threshold; i < cells; i++) {
      let tile = tiles[i]
      let x = tile.x
      let y = tile.y
      active[y][x][2] = true
    }

    // slider
    let ti = ti_ref.current
    let tix = ti.getContext('2d')
    tix.fillStyle = '#ddd'
    tix.fillRect(0, 0, ti.width, sp * 2)
    tix.fillStyle = '#999'
    let tmark = Math.min(
      Math.max(1, Math.round(ti.width * ((cells - threshold) / cells))),
      ti.width - 2
    )
    tix.fillRect(tmark - 1, 0, 3, sp * 2)

    thresh_ref.current.innerHTML = cells - threshold + '/' + cells

    function getFree(x, y) {
      // it it off map it is undefined
      if (active[y] === undefined) return null
      if (active[y][x] === undefined) return null
      let check = active[y][x]
      // false means empty
      if (check[2] === false) {
        return grid[y][x]
      } else {
        return null
      }
      // return if false
      // if (coords) {
      //   let [gx, gy] = coords
      // }
    }

    function getMove(x, y) {
      let raw = [
        [0, -1],
        [1, -1],
        [1, 1],
        [1, 0],
        [1, 1],
        [0, 1],
        [-1, 1],
        [-1, 0],
        [-1, -1],
      ].map(v => getFree(x + v[0], y + v[1]))
      let self = grid[y][x]
      let filtered = raw.filter(v => v !== null)
      let distances = filtered.map(v => parseFloat(v[2]))
      let min_distance = _.min(distances)
      if (min_distance < self[2]) {
        let min_i = distances.indexOf(min_distance)
        return filtered[min_i]
      } else {
        return null
      }
    }

    function _render() {
      let least_active = true
      let moved = false

      for (let i = 0; i < cells; i++) {
        let [x, y] = ordered[i]
        let check = active[y][x]
        if (check[2] === true) {
          least_active = false
          let move_to = getMove(x, y)
          if (move_to !== null) {
            moved = true
            let [mx, my] = move_to
            // let old = active[my][mx].slice()
            let old = [null, null, false]
            active[my][mx] = check
            active[y][x] = old
          }
        }
      }

      if (least_active) {
        cx.clearRect(0, 0, c.width, c.height)
      }
      if (!moved) {
        // only draw when done
        for (let i = 0; i < cells; i++) {
          let x = i % cols
          let y = Math.floor(i / cols)
          let check = active[y][x]
          if (check[2]) {
            cx.drawImage(
              imc,
              ...spx([...check.slice(0, 2), 1, 1]),
              ...spx([x, y, 1, 1])
            )
          }
        }
      } else if (moved && !clear_render_ref.current) {
        cx.clearRect(0, 0, c.width, c.height)

        // for (let i = 0; i < cells; i++) {
        //   let x = i % cols
        //   let y = Math.floor(i / cols)
        //   let check = active[y][x]
        //   // if (check) {
        //   cx.drawImage(
        //     imc,
        //     ...spx([...check.slice(0, 2), 1, 1]),
        //     ...spx([x, y, 1, 1])
        //   )
        //   // }
        // }

        _render()
      }
    }

    _render()
  }

  function clickSetThreshold(x) {
    let rect = ti_ref.current.getBoundingClientRect()
    x = x - rect.left
    let percent = x / ti_ref.current.width
    let { cells, threshold } = state.current
    let new_thresh =
      cells - Math.min(cells, Math.max(0, Math.round(percent * cells)))
    state.current.threshold = new_thresh
    render()
  }

  useEffect(() => {
    loadImage('veilance-field-photo.jpg')
  }, [])

  function trigger(key) {
    keyAction(key, null)
  }

  function keyAction(key, event) {
    let km = km_ref.current
    if (event === null) {
      event = { shiftKey: false }
    }

    let shift = event.shiftKey
    key = key.toLowerCase()

    if (key === 'o') {
      let input = file_input.current
      function handleChange(e) {
        let files = ''
        for (let item of this.files) {
          console.log(item)
          files += item.name + '.' + item.type
          if (item.type.indexOf('image') < 0) {
            continue
          }
          let src = URL.createObjectURL(item)
          loadImage(src)
        }
        this.removeEventListener('change', handleChange)
      }
      input.addEventListener('change', handleChange)

      input.dispatchEvent(
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window,
        })
      )
    } else if (key === 'p') {
      let link = document.createElement('a')

      cref.current.toBlob(function(blob) {
        link.setAttribute(
          'download',
          'collapse-' +
            new Date()
              .toISOString()
              .slice(0, -4)
              .replace(/-/g, '')
              .replace(/:/g, '')
              .replace(/_/g, '')
              .replace(/\./g, '') +
            'Z' +
            '.png'
        )

        link.setAttribute('href', URL.createObjectURL(blob))
        link.dispatchEvent(
          new MouseEvent(`click`, {
            bubbles: true,
            cancelable: true,
            view: window,
          })
        )
      })
    }

    if (key === 'l' || key === 'arrowright') {
      let move = 10
      if (shift) move = 1
      state.current.threshold = Math.max(0, state.current.threshold - move)
      clear_render_ref.current = true
      render()
    } else if (key === 'h' || key === 'arrowleft') {
      let move = 10
      if (shift) move = 1
      state.current.threshold = Math.min(
        state.current.cells,
        state.current.threshold + move
      )
      clear_render_ref.current = true
      render()
    }
  }

  function downHandler(e) {
    km_ref.current[e.key] = true
    keyAction(e.key, e)
  }

  function upHandler(e) {
    km_ref.current[e.key] = false
  }

  function handleMouseMove(e) {
    if (!slider_touch_mode.current) {
      if (slider_click_ref.current) {
        clickSetThreshold(e.clientX)
      }
    }
  }

  function clearer(id) {
    clear_ref.current.push(id)
  }

  function clearRepeatIntervals() {
    for (let i = 0; i < clear_ref.current.length; i++) {
      let item = clear_ref.current[i]
      clearInterval(item)
    }
    clear_ref.current = []
  }

  function clearPressGates() {
    press_gates.current = false
  }

  function handleMouseUp(e) {
    if (!slider_touch_mode.current) {
      if (slider_click_ref.current) {
        slider_click_ref.current = false
        clickSetThreshold(e.clientX)
      }
    }
    clearPressGates()
    clearRepeatIntervals()
  }

  function onDrop(e) {
    e.preventDefault()
    e.stopPropagation()
    let file = e.dataTransfer.files[0]
    let filename = file.path ? file.path : file.name ? file.name : ''
    let src = URL.createObjectURL(file)
    loadImage(src)
  }

  function onDrag(e) {
    e.stopPropagation()
    e.preventDefault()
    e.dataTransfer.dropEffect = 'copy'
  }

  function onPaste(e) {
    e.preventDefault()
    e.stopPropagation()
    for (const item of e.clipboardData.items) {
      if (item.type.indexOf('image') < 0) {
        continue
      }
      let file = item.getAsFile()
      let src = URL.createObjectURL(file)
      loadImage(src)
    }
  }

  function handleTouchMove(e) {
    if (slider_touch_mode.current) {
      if (slider_click_ref.current) {
        clickSetThreshold(e.changedTouches[0].clientX)
        e.preventDefault()
      }
    }
  }

  function handleTouchEnd(e) {
    // touch end doesn't seem to have client x
    clearPressGates()
    clearRepeatIntervals()
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('paste', onPaste)
    window.addEventListener('dragover', onDrag)
    window.addEventListener('drop', onDrop)
    window.addEventListener('touchend', handleTouchEnd)
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('paste', onPaste)
      window.removeEventListener('dragover', onDrag)
      window.removeEventListener('drop', onDrop)
      window.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  let title = 'Collapse'
  // TODO
  let description = 'Collapse an image into itself using ranked pixels.'
  let share_img_url = 'https://collapse.constraint.systems/collapse.png'
  let og_url = 'https://collapse.constraint.systems'

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <title>{title}</title>
        <link rel="shortcut icon" href={favicon} />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={share_img_url} />
        <meta property="og:url" content={og_url} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div
        style={{
          display: width !== null ? 'block' : 'none',
          width: width !== null ? width + sp : 'auto',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <input type="file" ref={file_input} style={{ display: 'none' }} />
        <div
          className="no-select"
          style={{ paddingLeft: sp / 2, paddingRight: sp / 2 }}
        >
          <Line />
          <div style={{ display: 'flex' }}>
            <Button
              label="o"
              press_gates={press_gates}
              text_label="Load image (or paste or drop)"
              clearer={clearer}
              trigger={() => {
                trigger('o')
              }}
            />
            <Space />
            <Button
              label="p"
              press_gates={press_gates}
              text_label="Save result as png"
              clearer={clearer}
              trigger={() => {
                trigger('p')
              }}
            />
          </div>

          <Line />

          <canvas ref={cref} />
          <Line />
          <div
            style={{
              display: 'flex',
              textAlign: 'center',
              width: '100%',
              position: 'relative',
            }}
          >
            <canvas
              height={sp * 23}
              ref={ti_ref}
              style={{
                position: 'absolute',
                height: sp * 2,
                left: sp * 2,
                top: 0,
                cursor: 'crosshair',
              }}
              onTouchStart={e => {
                slider_click_ref.current = true
                slider_touch_mode.current = true
                clickSetThreshold(e.changedTouches[0].clientX)
              }}
              onTouchEnd={e => {
                setTimeout(() => {
                  slider_click_ref.current = false
                  slider_touch_mode.current = false
                }, 400)
              }}
              onMouseDown={e => {
                if (!slider_touch_mode.current) {
                  slider_click_ref.current = true
                  clickSetThreshold(e.clientX)
                }
              }}
            />
            <RepeatButton
              label="h"
              press_gates={press_gates}
              custom_style={{ height: sp * 2, width: sp * 2 }}
              clearer={clearer}
              trigger={() => {
                trigger('h')
              }}
            />
            <div
              ref={thresh_ref}
              style={{
                flexGrow: 1,
                position: 'relative',
                pointerEvents: 'none',
                lineHeight: sp * 2 + 'px',
              }}
            ></div>
            <RepeatButton
              label="l"
              press_gates={press_gates}
              custom_style={{ height: sp * 2, width: sp * 2 }}
              clearer={clearer}
              trigger={() => {
                trigger('l')
              }}
            />
          </div>
          <Line />
          <div>
            Superpixels are ranked and selected based on their size when
            compressed (compression size is used as a proxy for complexity).
            Learn more about how selection works in{' '}
            <a target="_blank" href="https://res.constraint.systems">
              Res
            </a>
            . Superpixels are iteratively collapsed towards the center using a
            distance field.
          </div>
          <Line />
          <div>
            Original model photo from{' '}
            <a
              target="_blank"
              href="https://www.ssense.com/en-us/men/product/veilance/black-field-lt-jacket/4784081"
            >
              Ssense
            </a>
            .
          </div>
          <Line />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <a target="_blank" href="https://constraint.systems">
                constraint.systems
              </a>
            </div>
            <div>
              <a
                target="_blank"
                href="https://github.com/constraint-systems/collapse"
              >
                View source
              </a>
            </div>
          </div>
          <Line />
        </div>
      </div>

      <style jsx global>{`
        @font-face {
          font-family: 'custom';
          src: url('/fonts/IBMPlexMono-Regular.woff2') format('woff2'),
            url('/fonts/IBMPlexMono-Regular.woff') format('woff');
        }
        @font-face {
          font-family: 'custom';
          src: url('/fonts/IBMPlexMono-Italic.woff2') format('woff2'),
            url('/fonts/IBMPlexMono-Italic.woff') format('woff');
          font-style: italic;
        }
        html {
          background: #efefef;
        }
        canvas {
          background: #fff;
        }
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'custom', monospace;
          font-size: 12px;
          line-height: 16px;
        }
        * {
          box-sizing: border-box;
        }
        a {
          color: inherit;
        }
        button {
          user-select: none;
        }
        .no-select {
          user-select: none;
        }
      `}</style>
    </div>
  )
}

export default Home
