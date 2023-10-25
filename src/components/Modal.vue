<!-- Lesson 7 Task 5: Create a slot for a modal window 
  that can be used to set header, footer, and body content. -->
<template>
  <div class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <slot name="header"></slot>
      </div>
      <div class="modal-body">
        <slot name="body"></slot>
      </div>
      <div class="modal-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
