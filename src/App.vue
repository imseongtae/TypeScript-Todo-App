<template>
  <div id="app">
    <app-header></app-header>

    <item-input></item-input>

    <!-- <item></item> -->
    <router-view></router-view> 
    <!-- router에 따라 매칭된 화면이 렌더링됨 -->
    
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import appHeader from '@/components/Header.vue';
import itemInput from '@/components/item-input.vue';
// import item from './components/item.vue';

@Component({
  components: {
    appHeader,
    itemInput,
    // item,
  },
})
export default class App extends Vue {

}
</script>

<style>
#app {
  padding: 100px;
}

</style>
