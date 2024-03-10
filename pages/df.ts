import { createFormItem } from '~/hooks/creatForm'

const item1 = createFormItem(
  'input',
  { label: '姓名', value: '' },
  current => (
    current.payload.value === '姓名' ? item2 : item3
  ),
)

const item2 = createFormItem(
  'select',
  { label: '姓名', options: [
    { label: '选项1', value: 'test2-1' },
    { label: '选项2', value: 'test2-2' },
    { label: '选项3', value: 'test2-3' },
  ], value: 'test2-2' },

  (current) => {
    if (current.payload.value === 'test2-2')
      return item3

    else if (current.payload.value === 'test2-3')
      return item4

    else
      return null
  },

)

const item3 = createFormItem('checkbox', { label: '年龄', options: [
  { label: '选项1', value: 'test3-1' },
  { label: '选项2', value: 'test3-2' },
  { label: '选项3', value: 'test3-3' },
], value: ['test3-1', 'test3-2'] }, (current) => {
  return current.payload.value.includes('test3-1') ? item4 : null
})

const item4 = createFormItem('radio', {
  label: 'test4',
  options: [
    { label: '选项1', value: 'test4-1' },
    { label: '选项2', value: 'test4-2' },
    { label: '选项3', value: 'test4-3' },
    { label: '选项4', value: 'test4-4' },
  ],
  value: 'test4-1',
})
