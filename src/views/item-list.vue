<template>
  <div>
    <item v-for="item in renderList" :key="item.id" :id="item.id" :title="item.title" :status="item.status"></item>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Watch} from 'vue-property-decorator';
import item from '@/components/item.vue';

@Component({
  components: {
    item,
  }
})
export default class ItemList extends Vue {
  data: any[] = [
    {id:0,title: 'test0',status: 'active',},
    {id:1,title: 'test1',status: 'active',},
    {id:2,title: 'test2',status: 'clear',},
    {id:3,title: 'test3',status: 'active',},
  ]

  renderList: any[] = this.data;

  @Watch('$route.params.status')
  routeUpdate(newValue: string) { // 첫 번째 인자로 바뀐 새 값이 들어옴
    if (!newValue) {
      this.renderList = this.data;
    } else if (newValue === 'active' || newValue === 'clear') {
      this.renderList = this.data.filter((item: any) => {
        return item.status === newValue;
      })
    }

  }

}



</script>

<style scoped>

</style>