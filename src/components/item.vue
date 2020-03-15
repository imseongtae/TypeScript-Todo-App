<template>
  <div class="input-group">
    <span class="input-group-addon">
      <input type="checkbox" :checked="status === 'clear'" @change="changeStatus" aria-label="...">
    </span>
    <input  type="text" :value="title" class="form-control" aria-label="...">
    
    <span class="input-group-btn">
      <button class="btn btn-default" @click="removeItem" type="button">X</button>
    </span>
  </div><!-- /input-group -->
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

@Component
export default class Item extends Vue {

  @Prop() readonly id!: string;
  @Prop() readonly title!: string;
  @Prop() readonly status!: 'active' | 'clear';

  changeStatus($event: Event) {
    const checked: boolean = ($event.target as HTMLInputElement).checked;

    if (checked) {
      this.$store.commit('changeStatus', {id: this.id, status: 'clear'});
    } else {
      this.$store.commit('changeStatus', {id: this.id, status: 'active'});
    }

  }

  removeItem() {
    this.$store.commit('removeItem', this.id);
  }
}
</script>