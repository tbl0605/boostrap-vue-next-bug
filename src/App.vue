<template>
  <div>
    <BModal
      centered
      ref="modal"
    >
      <input />
    </BModal>
    <button @click="$refs.modal.show()">Open Modal</button>
  </div>
</template>
<script setup></script>
