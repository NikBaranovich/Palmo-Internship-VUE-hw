<template>
  <div class="component home">
    <slot-component>
      <!-- Lesson 7 Task 4: Implement a component that passes data back to the parent component via a scoped slot. -->
      <template v-slot:default="componentMessage">
        <h1 v-draggable v-custom-color:#ff0000>Welcome to My Website</h1>
        <p v-custom-directive:bold v-custom-color>
          This is the home page of the website.
        </p>
        <p v-custom-directive:blue v-toolTip="'This is test message'">
          {{ componentMessage.message }}
        </p>
      </template>
    </slot-component>
  </div>
</template>
<script>
import SlotComponent from "@/components/SlotComponent.vue";
import {hooksLogMixin} from "@/mixins/lifecycleHooks";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    SlotComponent,
  },
  mixins: [hooksLogMixin],
  directives: {
    /**
     * Lesson 7 Task 11: Develop your own directive that accepts a parameter and
     * performs different actions depending on its value.
     */
    "custom-directive": {
      mounted(el, binding) {
        const value = binding.arg;
        if (value === "red") {
          el.style.color = "red";
          return;
        }
        if (value === "blue") {
          el.style.color = "blue";
          return;
        }
        if (value === "bold") {
          el.style.fontWeight = "bold";
          return;
        }
      },
    },
    /**
     * Lesson 7 Task 12: Create your own directive to display the tooltip on mouseover.
     */
    toolTip: {
      mounted(el, binding) {
        const tooltipText = binding.value;
        const tooltipElement = document.createElement("div");

        tooltipElement.className = "custom-tooltip";
        tooltipElement.textContent = tooltipText;
        tooltipElement.style.display = "none";

        el.appendChild(tooltipElement);

        el.addEventListener("mouseover", () => {
          tooltipElement.style.display = "block";
        });

        el.addEventListener("mouseout", () => {
          tooltipElement.style.display = "none";
        });
      },
    },
    /**
     * Lesson 7 Task 13: Develop a directive that allows you to make the element draggable.
     */
    draggable: {
      mounted(el, binding) {
        el.onmousedown = function (e) {
          el.style.position = "absolute";
          const coords = getCoords(el);

          document.body.appendChild(el);
          moveAt(e);

          el.style.zIndex = 1000;

          function moveAt(e) {
            el.style.left = e.pageX - el.offsetWidth / 2 + 'px';
            el.style.top = e.pageY - el.offsetHeight + 'px';
          }

          document.onmousemove = function (e) {
            moveAt(e);
          };

          el.onmouseup = function () {
            document.onmousemove = null;
            el.onmouseup = null;
          };
        };

        el.ondragstart = function () {
          return false;
        };

        function getCoords(elem) {
          var box = elem.getBoundingClientRect();
          return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset,
          };
        }
      },
    },
  },
  methods: {},
};
</script>
