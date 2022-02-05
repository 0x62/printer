import { Block } from '../../../core/index.js'

export default class BlockHeadlines extends Block {
  constructor() {
    super()
  }

  // Render the current block to the canvas with
  // this.canvas, this.ctx, this.startPosY
  render() {
    return { endPosY: this.startPosY }
  }
}