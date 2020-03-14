import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { State, Item } from './store.interface';

Vue.use(Vuex);

const store: StoreOptions<State> = {
  state: {
    todoList: [
      {id:0, title: 'test0', status: 'active'},
      {id:1, title: 'test1', status: 'active'},
      {id:2, title: 'test2', status: 'clear'},
    ],
  },
  mutations: {
    // todoList가 변경되는 경우 3가지
    // 1. 새로운 할 일을 입력해서 배열에 아이템이 추가됐을 경우
    addItem(state, item: Item) {
      state.todoList.push(item)
    },
    // 2. 체크박스를 클릭해서 status가 바뀔 경우
    changeStatus(state, {id, status}: {id: number, status: 'active' | 'clear'}) {
      state.todoList[id].status = status;
    },
    // 3. 아이템을 삭제했을 경우(id가 필요)
    removeItem(state, id: number) {
      state.todoList.splice(id, 1);
    },
  },
  actions: {
    // 비즈니스 로직, 비동기에 주로 사용
  },

  getters: {
    // state에 계산된 값이 필요할 때 사용
    allTodoList: (state) => state.todoList,
    activeTodoList: (state) => {
      return state.todoList.filter((item: Item) => item.status === 'active');
    },
    clearTodoList: (state) => {
      return state.todoList.filter((item: Item) => item.status === 'clear');
    },
  },

};


export default new Vuex.Store(store);
