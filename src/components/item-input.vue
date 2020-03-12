<template>
  <div class="form-group">
    <input  type="text" 
            class="form-control" 
            placeholder="input your To Do!"
            @keyup.enter="addItem"
            >
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component
export default class ItemInput extends Vue {
  addItem() {
    
  }
}

</script>