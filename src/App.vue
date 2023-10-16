<template>
  <div>
    <button @click="toggleTheme">Change theme</button>

    <time-tracker />

    <button @click="toggleClickHandler">Toggle method</button>
    <p class="alert">{{ toggleMessage }}</p>

    <person-form />

    <button @click="animateElement">Change style</button>
    <div class="animated-element" :style="elementStyle">
      <span>Animated Element</span>
    </div>

    <dynamic-table />
    <nested-list />
    <pagination-list />

    <!-- Lesson 4 Task 10: Display a list of items using v-for and add a v-if condition to filter the items -->
    <div>
      <ul>
        <template v-for="item in items">
          <li v-if="item.isDisplayed" :key="item.id">
            {{ item.name }}
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import TimeTracker from "../components/TimeTracker.vue";
import PersonForm from "../components/PersonForm.vue";
import DynamicTable from "../components/DynamicTable.vue";
import NestedList from "../components/NestedList.vue";
import PaginationList from "../components/PaginationList.vue";

export default {
  data() {
    return {
      toggled: false,
      toggleMessage: "",
      isElementAnimated: false,
      isDarkTheme: false,
      root: null,
      items: [
        { id: 1, name: "Element 1", isDisplayed: true },
        { id: 2, name: "Element 2", isDisplayed: false },
        { id: 3, name: "Element 3", isDisplayed: true },
        { id: 4, name: "Element 4", isDisplayed: false },
      ],
    };
  },
  components: {
    TimeTracker,
    PersonForm,
    DynamicTable,
    NestedList,
    PaginationList,
  },
  methods: {
    firstMethod() {
      this.toggleMessage = "This is the first method";
      this.toggled = !this.toggled;
    },
    secondMethod() {
      this.toggleMessage = "This is the second method";
      this.toggled = !this.toggled;
    },
    /**
     * Lesson 4 Task 3: Create two methods and dynamically change the click event handler
     * between those methods based on some condition (for example, the value of a variable).
     */
    toggleClickHandler() {
      !this.toggled ? this.firstMethod() : this.secondMethod();
    },
    animateElement() {
      this.isElementAnimated = !this.isElementAnimated;
    },
    /**
     * Lesson 4 Task 6: Create a theme switcher that dynamically changes
     * the styles of entire app between dark and light themes.
     */
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      if (!this.isDarkTheme) {
        this.root.style.setProperty("--color-primary", "#ffffff");
        this.root.style.setProperty("--color-secondary", "#3f97d9");
        this.root.style.setProperty("--color-accent", "#4c4ce8");
        this.root.style.setProperty("--color-text", "#000000");
        this.root.style.setProperty("--color-border", "#6495ed");
      } else {
        this.root.style.setProperty("--color-primary", "#232D3F");
        this.root.style.setProperty("--color-secondary", "#d9d13f");
        this.root.style.setProperty("--color-accent", "#92e84c");
        this.root.style.setProperty("--color-text", "#ffffff");
        this.root.style.setProperty("--color-border", "#edb464");
      }
    },
  },
  computed: {
    /**
     * Lesson 4 Task 5: Implement dynamic element style changes (such as changing position, color, size)
     * using CSS Transitions or Animations when a button is clicked.
     */
    elementStyle() {
      return {
        backgroundColor: this.isElementAnimated ? "red" : "blue",
        transform: this.isElementAnimated ? "translateX(100px)" : "translateX(0)",
        width: this.isElementAnimated ? "200px" : "100px",
        height: this.isElementAnimated ? "200px" : "100px",
      };
    },
  },
  mounted() {
    this.root = document.documentElement;
  },
};
</script>
