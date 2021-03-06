import { ExcelComponent } from '@core/ExcelComponent'
import {createTable} from '@/components/table/table.tamplate'
import {resizeHandler} from '@/components/table/table.resize'
import {shouldResize} from '@/components/table/table.functions'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown']
    })
    this.$root = $root;
  }

  toHTML() {
    return createTable(20)
  }

  onMousedown(event) {
    if(shouldResize(event)) {
      resizeHandler(this.$root, event)
    }
  }
}