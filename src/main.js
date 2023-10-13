
import { createApp } from 'vue'
import App from './App.vue'
import GlobalComponent from '../components/GlobalComponent.vue'

const app = createApp(App);
/**
 * Lesson 3 Task 3: Create new components and register them locally and globally (at least one component).
 */
/**
 * Global component
 */
app.component(
    'GlobalComponent', GlobalComponent
)
app.mount('#app')
