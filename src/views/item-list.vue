<template>
  <div>
    <item v-for="item in renderList" :key="item.id" :id="item.id" :title="item.title" :status="item.status"></item>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Watch} from 'vue-property-decorator';
import item from '@/components/item.vue';
import { mapGetters } from 'vuex';

@Component({
  components: {
    item,
  },
  computed: {
    ...mapGetters([
      'allTodoList',
      'activeTodoList',
      'clearTodoList',
    ]),
  },
})
export default class ItemList extends Vue {
  // data: any[] = [];
  renderList: any[] = [];

  allTodoList!: any[];
  activeTodoList!: any[];
  clearTodoList!: any[];

  initRenderList(status: string) {
    if (!status) {
      this.renderList = this.allTodoList;
    } else if (status === 'active' ) {
      this.renderList = this.activeTodoList;
    } else if (status === 'clear') {
      this.renderList = this.clearTodoList;
    }
  }

  created() {
    // getters는 비동기로 실행이 된다.!
    this.$store.dispatch('initData');
  }

  @Watch('$route.params.status')
  routeUpdate(newValue: 'active' | 'clear') { // 첫 번째 인자로 바뀐 새 값이 들어옴
    this.initRenderList(newValue);
  }

  @Watch('$store.state.todoList', {deep: true})
  stateUpdate() {
    const status: string = this.$route.params.status;
    this.initRenderList(status);
  }

}
</script>

<style scoped>

</style>