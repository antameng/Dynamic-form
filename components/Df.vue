<script setup lang="ts">
import type { FormItem } from '~/hooks/creatForm'

const props = defineProps<{
  formstate: FormItem | null
}>()

function getNext(): FormItem | null {
  const current: FormItem | null = props.formstate
  if (!current)
    return null
  const acients = []
  acients.unshift(current)
  while ((current === current.parent))
    acients.unshift(current)
  return props.formstate!.next(props.formstate!, acients)
}
</script>

<template>
  <h1>通用动态表单组件</h1>
  <template v-if="formstate">
    <el-formItem :label="formstate.payload.label">
      123
    </el-formItem>

    <Df :form-state="getNext()" />
  </template>
</template>
