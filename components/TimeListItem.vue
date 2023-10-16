<template>
  <li class="timestamp-item">{{timestamp}}</li>
</template>

<script>
export default {
  props: {
    timestamp: {
      type: String,
      required: true,
    },
  },
};
</script>
