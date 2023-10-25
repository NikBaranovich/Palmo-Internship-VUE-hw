<!-- Lesson 7 Task 1: Create a component with a single slot 
    and use it by passing different content to the slot from different components. -->
<template>
    <div>
       <slot :message="message"></slot> 
    </div>
</template>
<script>
export default {
    data() {
        return {
            message: "Test message from slot component!"
        }
    },
}
</script>