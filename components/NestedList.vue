<!-- Lesson 4 Task 8: Implement a component that outputs a list of objects, where each object 
    has a nested list. Use nested v-for to output the elements of a nested list. -->
<template>
  <div>
    <p>Cuisine</p>
    <ul>
    <li v-for="parentItem in items">
      {{ parentItem.name }}

      <ul>
        <li v-for="childItem in parentItem.children">
          {{ childItem.name }}
        </li>
      </ul>
      
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "Ukrainian cuisine",
          children: [
            { name: "Borsch" }, 
            { name: "Vareniki with lard" }, 
            { name: "Pancakes" }
        ],
        },
        {
          name: "Italian cuisine",
          children: [
            { name: "Pizza" },
            { name: "Risotto" },
            { name: "Pasta" },
          ],
        },
        {
          name: "Greek cuisine",
          children: [
            { name: "Moussaka" },
            { name: "Souvlaki" },
          ],
        },
      ],
    };
  },
};
</script>
