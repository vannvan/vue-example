<script>
import { ref, h } from 'vue'
export default {
  name: 'App',
  components: {},
  setup(props) {
    console.log('app')
    const title = ref('vue3')
    return () => h('div', 'ahhaha')
  },
}
</script>
